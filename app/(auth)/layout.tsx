import logo from "@/public/asset/logo/logo.png";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 p-10">
      {/* Left Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-12">
        {/* Logo - Absolute positioned top-left */}
        <div className="absolute top-8 left-8 lg:left-12">
          <Image src={logo} alt="Obliq Logo" className="w-25 h-10" />
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 lg:p-10">
          {children}
        </div>
      </div>

      {/* Right Side - Image Background (Hidden on mobile) */}
      <div className="hidden lg:flex w-full max-w-170 relative overflow-hidden rounded-lg">
        <Image
          src="/asset/images/background.png"
          alt="Auth Background"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default AuthLayout;
