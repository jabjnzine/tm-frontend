import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="h-dvh w-dvw flex bg-gradient-to-b from-[#142B41] to-[#20202D] justify-center items-center">
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url('/assets/images/bg_login.png')` }}
      ></div>
      <div></div>
      <div className="z-[1] space-y-6">
        <div className="flex justify-center">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={270}
            height={162}
          />
        </div>
        <div className="w-[364px] h-[468px] bg-white rounded-2xl  shadow-white shadow-md pl-8 pr-8 pt-16 space-y-6">
          <div className=" ">
            <div className="text-slate-800 text-[32px] font-semibold leading-10">
              Login
            </div>
            <div className="text-slate-800 text-[18px] font-normal leading-10">
              Welcome to login
            </div>
            <div
              style={{ width: 206, height: 0, border: "2px #2A4B6A solid" }}
              className="rounded"
            ></div>
          </div>
          <div className="space-y-[22px]">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="username" className="text-[18px]">
                Username
              </Label>
              <Input
                className="h-[40px]"
                type="username"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password" className="text-[18px]">
                Password
              </Label>
              <Input
                className="h-[40px]"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <Button className="bg-[#142B41] w-full h-[48px]">LOGIN</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
