"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FormInput } from "@/components/ui/form-input";
import { AuthActionState, loginUser } from "@/services/auth.service";
import { ArrowRight, Lock, Mail } from "lucide-react";
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
    <div className="w-full bg-white rounded-[20px] p-6 sm:p-8 lg:p-10 shadow-blue-50">
      <div className="mb-6 sm:mb-8 text-center">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Login
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Enter your details to continue
        </p>
      </div>

      {/* Form */}
      <form action={formAction} className="space-y-4 sm:space-y-5">
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <div className="flex gap-2 items-center">
            <Checkbox
              id="remember"
              name="remember"
              className="cursor-pointer"
            />
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
        <Button
          type="submit"
          className="w-full mt-2"
          disabled={isPending}
          className="w-full h-10 bg-primary border-2 border-primary text-white hover:bg-transparent hover:text-primary cursor-pointer rounded-[12px] shadow-primary transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6  group gap-0"
        >
          <span className="group-hover:-translate-x-3 transition-transform duration-200 flex items-center gap-2">
            {" "}
            {isPending ? "Logging in..." : "Log in"}
          </span>
          <ArrowRight
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            size={18}
          />
        </Button>
      </form>
    </div>
  );
}
