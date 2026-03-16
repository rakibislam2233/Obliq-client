"use client";
import { AuthActionState, forgotPassword } from "@/services/auth.service";
import { Mail } from "lucide-react";
import Image from "next/image";
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
  const [state, action, isPending] = useActionState(forgotPassword, initialState);
  const router = useRouter();

  // Show toast messages based on form state
  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message || "Password reset link sent to your email!");
    } else if (state?.message && !state?.success) {
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
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8">
            <Link href="/" className="text-2xl font-bold text-orange-500 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <span>Obliq</span>
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
            <p className="text-sm text-gray-500">Enter your email and we'll send you a reset link</p>
          </div>

          {/* Form */}
          <form action={action} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  defaultValue={state?.inputs?.email ?? ""}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  required
                />
              </div>
              {state?.errors?.email && (
                <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Sending Link..." : "Send Reset Link"}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
              <Link href="/login" className="text-orange-500 hover:text-orange-600 font-semibold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image Background (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-orange-400 via-yellow-300 to-red-500">
        <Image
          src="/asset/images/background.png"
          alt="Forgot Password Background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
