"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { AuthActionState, forgotPassword } from "@/services/auth.service";
import { ArrowRight, Mail } from "lucide-react";
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

export default function ForgotPasswordForm() {
  const [state, action, isPending] = useActionState(
    forgotPassword,
    initialState,
  );
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(
        state?.message || "Password reset link sent to your email!",
      );
    } else if (state?.message && !state?.errors) {
      toast.error(state?.message);
    }
  }, [state]);

  // Redirect to verify-otp on successful forgot password
  useEffect(() => {
    if (state?.success) {
      setTimeout(() => {
        router.push("/verify-otp");
      }, 2000);
    }
  }, [state, router]);

  return (
    <div className="w-full bg-white rounded-[20px] p-6 sm:p-8 lg:p-10 shadow-blue-50">
      {/* Heading */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Forgot Password
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Enter your email and we&apos;ll send you a reset link
        </p>
      </div>

      {/* Form */}
      <form action={action} className="space-y-4 sm:space-y-5">
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

        <Button
          type="submit"
          disabled={isPending}
          className="w-full h-10 sm:h-11 bg-primary border-2 border-primary text-white hover:bg-orange-600 rounded-[12px] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4 sm:mt-6 group flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">
            {isPending ? "Sending..." : "Send Reset Link"}
          </span>
          <ArrowRight
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-4 h-4"
            size={18}
          />
        </Button>
      </form>

      {/* Back to Login */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}
