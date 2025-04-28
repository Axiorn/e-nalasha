import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function SignUp(): JSX.Element {
  // Product images data (placeholders since we can't use local imports)
  const images = {
    mainImage: "",
    image2: "",
    image3: "",
  };

  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left section with form */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Back to login button */}
        <div className="absolute top-24 left-24 flex items-center gap-3 cursor-pointer">
          <ArrowLeft className="w-8 h-8" />
          <span className="font-medium text-3xl">Back to Login</span>
        </div>

        {/* Sign up form */}
        <div className="w-[404px]">
          <h1 className="text-3xl font-medium mb-14">Daftar Sekarang !</h1>

          <div className="space-y-7">
            {/* Name field */}
            <div className="space-y-2">
              <label className="font-medium text-sm">Name</label>
              <Input
                placeholder="Enter your name"
                className="h-8 text-xs rounded-[10px] placeholder:text-app-muted placeholder:text-[10px] placeholder:font-medium"
              />
            </div>

            {/* Email field */}
            <div className="space-y-2">
              <label className="font-medium text-sm">Email address</label>
              <Input
                placeholder="Enter your email"
                className="h-8 text-xs rounded-[10px] placeholder:text-app-muted placeholder:text-[10px] placeholder:font-medium"
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="font-medium text-sm">Password</label>
              <Input
                type="password"
                placeholder="Name"
                className="h-8 text-xs rounded-[10px] placeholder:text-app-muted placeholder:text-[10px] placeholder:font-medium"
              />
            </div>

            {/* Signup button */}
            <Button className="w-full h-8 mt-8 bg-[#3a5b22] hover:bg-[#2e4a1a] rounded-[10px] text-xs font-bold">
              Signup
            </Button>
          </div>
        </div>
      </div>

      {/* Right section with images */}
      <div className="flex-1 bg-[#f2eeee] relative">
        {/* Main image */}
        <div className="absolute top-[73px] left-[120px] w-[488px] h-[338px]">
          <img
            src={images.mainImage}
            alt="Fashion showcase"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom images */}
        <div className="absolute bottom-[167px] left-9 w-[281px] h-96">
          <img
            src={images.image3}
            alt="Fashion item"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute bottom-[167px] left-[364px] w-[287px] h-96">
          <img
            src={images.image2}
            alt="Fashion item"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
