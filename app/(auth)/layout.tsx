"use client";
import dashboardImage from "@/public/asset/images/dashboard.png";
import logo from "@/public/asset/logo/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-[#FFFDFC] p-4 sm:p-6 lg:p-10">
      {/* Left Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-3 sm:px-6 py-8 sm:py-12 lg:px-12">
        {/* Logo - Absolute positioned top-left */}
        <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-12">
          <Image src={logo} alt="Obliq Logo" className="w-20 sm:w-24 lg:w-25 h-8 sm:h-9 lg:h-10" />
        </div>

        {/* Form Card */}
        <div className="w-full bg-gray-400/10 max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl p-2 sm:p-2.5">
          {children}
        </div>
      </div>

      {/* Right Side - Image Background with Dashboard Overlay (Hidden on mobile) */}
      <div className="hidden lg:flex w-full max-w-170 relative overflow-hidden rounded-lg">
        {/* Background Image */}
        <Image
          src="/asset/images/background.png"
          alt="Auth Background"
          fill
          className="object-cover rounded-lg"
          priority
        />

        {/* Dashboard Image with Animation - sliding from right to left */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-[1080px] h-[675px] left-20 sm:left-24 lg:left-25 top-[60px] sm:top-[72px] bottom-[60px] sm:bottom-[72px] bg-black/10 rounded-lg sm:rounded-xl"
        >
          <Image
            src={dashboardImage}
            alt="Dashboard Preview"
            fill
            priority
            className="p-1 sm:p-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
