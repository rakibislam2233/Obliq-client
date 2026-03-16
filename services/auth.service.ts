/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { ActionState } from "@/interface/action-state.interface";
import { api } from "@/services/api";
import { deleteCookie, getCookie, setCookie } from "@/utils/tokenHandlers";
import {
  forgotPasswordValidationSchema,
  loginValidationSchema,
  resetPasswordFormValidationSchema,
} from "@/validation/auth.validation";
import { cookies } from "next/headers";

export type AuthActionState = ActionState;

export async function loginUser(
  prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());

  const parsed = loginValidationSchema.safeParse(values);
  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid fields",
      errors: parsed.error.flatten().fieldErrors,
      inputs: values,
      timestamp: Date.now(),
    };
  }

  try {
    const res = await api.post("/auth/login", parsed.data);
    if (!res.success) {
      return {
        success: false,
        message: res.message || "Failed to login",
        inputs: values,
        timestamp: Date.now(),
      };
    }

    const loginData = res.data;
    // 1. Save tokens if they exist
    if (loginData?.tokens) {
      const isProduction = process.env.NODE_ENV === "production";
      await setCookie("accessToken", loginData.tokens.accessToken, {
        secure: isProduction,
        httpOnly: true,
        maxAge: 3600,
        path: "/",
      });

      await setCookie("refreshToken", loginData.tokens.refreshToken, {
        secure: isProduction,
        httpOnly: true,
        maxAge: 3600 * 24 * 90,
        path: "/",
      });
    }
    return {
      success: true,
      message: res.message || "Logged in successfully",
      data: loginData,
      timestamp: Date.now(),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to login",
      inputs: values,
      timestamp: Date.now(),
    };
  }
}
export async function forgotPassword(
  prevState: AuthActionState,
  payload: any,
): Promise<AuthActionState> {
  const values = Object.fromEntries(payload.entries());
  const parsed = forgotPasswordValidationSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid email",
      errors: parsed.error.flatten().fieldErrors,
      inputs: values,
    };
  }

  try {
    const res = await api.post("/auth/forgot-password", parsed.data);
    return {
      success: true,
      message: res.message || "Reset link sent!",
      data: res.data,
      timestamp: Date.now(),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to send link",
      inputs: values,
      timestamp: Date.now(),
    };
  }
}
export async function resetPassword(
  prevState: AuthActionState,
  payload: any,
): Promise<AuthActionState> {
  const values = Object.fromEntries(payload.entries());
  const cookieStore = await cookies();
  const resetPasswordToken = cookieStore.get("resetPasswordToken")?.value;
  const parsed = resetPasswordFormValidationSchema.safeParse({
    password: values.password,
    confirmPassword: values.confirmPassword,
  });
  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid password",
      errors: parsed.error.flatten().fieldErrors,
      inputs: values,
      timestamp: Date.now(),
    };
  }

  try {
    if (!resetPasswordToken) {
      return {
        success: false,
        message: "Reset token expired or missing. Please try again.",
        timestamp: Date.now(),
      };
    }
    const res = await api.post("/auth/reset-password", {
      resetPasswordToken: resetPasswordToken,
      password: parsed.data.password,
    });
    if (!res.success) {
      return {
        success: false,
        message: res.message || "Password reset failed",
        timestamp: Date.now(),
      };
    }
    // Success - clear the token
    await deleteCookie("resetPasswordToken");
    return {
      success: true,
      message: "Password reset successful!",
      data: res.data,
      timestamp: Date.now(),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to reset password",
      inputs: values,
      timestamp: Date.now(),
    };
  }
}

export async function getNewAccessToken() {
  try {
    const accessToken = await getCookie("accessToken");
    const refreshToken = await getCookie("refreshToken");

    //Case 1: Both tokens are missing - user is logged out
    if (!accessToken && !refreshToken) {
      return {
        success: false,
        message: "User is logged out",
      };
    }
    const res = await api.post("/auth/refresh", {
      refreshToken: refreshToken,
    });
    const isProduction = process.env.NODE_ENV === "production";
    if (res.success) {
      //set new tokens
      await setCookie("accessToken", res.data.accessToken, {
        secure: isProduction,
        httpOnly: true,
        maxAge: 3600,
        path: "/",
      });
      await setCookie("refreshToken", res.data.refreshToken, {
        secure: isProduction,
        httpOnly: true,
        maxAge: 3600 * 24 * 90,
        path: "/",
      });
    }
    return {
      success: true,
      message: "Token refreshed successfully!",
      data: res,
    };
  } catch (error: any) {
    console.error("Failed to refresh token", error);
    throw error;
  }
}

export async function resendOtp(
  prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());

  if (!values.email) {
    return {
      success: false,
      message: "Email is required",
      timestamp: Date.now(),
    };
  }

  try {
    const res = await api.post("/auth/resend-otp", { email: values.email });
    if (!res.success) {
      return {
        success: false,
        message: res.message || "Failed to resend OTP",
        timestamp: Date.now(),
      };
    }

    return {
      success: true,
      message: res.message || "OTP sent successfully!",
      data: res.data,
      timestamp: Date.now(),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to resend OTP",
      timestamp: Date.now(),
    };
  }
}

export async function changePassword(
  prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());

  if (!values.currentPassword || !values.newPassword) {
    return {
      success: false,
      message: "Current password and new password are required",
      timestamp: Date.now(),
    };
  }

  try {
    const res = await api.post("/auth/change-password", {
      currentPassword: values.currentPassword,
      newPassword: values.newPassword,
    });
    if (!res.success) {
      return {
        success: false,
        message: res.message || "Failed to change password",
        timestamp: Date.now(),
      };
    }

    return {
      success: true,
      message: res.message || "Password changed successfully!",
      timestamp: Date.now(),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Failed to change password",
      timestamp: Date.now(),
    };
  }
}

// Logout
export async function logoutUser() {
  try {
    const refreshToken = await getCookie("refreshToken");
    if (refreshToken) {
      await api.post("/auth/logout", { refreshToken });
    }
  } catch (error) {
    console.error("Backend logout failed", error);
  } finally {
    await deleteCookie("accessToken");
    await deleteCookie("refreshToken");
    await deleteCookie("userRole");
  }
  return { success: true };
}
