"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { FormInput } from "@/components/ui/form-input";
import { AuthActionState, loginUser } from "@/services/auth.service";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState: AuthActionState = {
  success: false,
  message: "",
  errors: {},
  inputs: {},
  timestamp: 0,
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState,
  );
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "Login successful!");
    } else if (state.message && !state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  // Redirect on successful login
  useEffect(() => {
    if (state?.success && state?.data?.redirect) {
      router.push(state.data.redirect);
    }
  }, [state, router]);

  return (
    <div className="w-full bg-white rounded-[20px] p-8 lg:p-10 shadow-blue-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-sm text-gray-500">Enter your details to continue</p>
      </div>

      {/* Form */}
      <form action={formAction} className="space-y-5">
        {/* Email Input */}
        <FormInput
          id="email"
          name="email"
          type="email"
          label="Email"
          icon={Mail}
          defaultValue={state?.inputs?.email ?? undefined}
          placeholder="Enter your email"
          error={state?.errors?.email}
          required
        />

        {/* Password Input */}
        <FormInput
          id="password"
          name="password"
          type="password"
          label="Password"
          icon={Lock}
          defaultValue={state?.inputs?.password ?? undefined}
          placeholder="Enter your password"
          error={state?.errors?.password}
          required
        />

        {/* Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
          <Checkbox id="remember" name="remember" className="mr-1" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </label>
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-orange-500 hover:text-orange-600 font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        >
          {isPending ? "Logging in..." : "Log in"}
        </button>
      </form>

      {/* Sign Up Link */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
