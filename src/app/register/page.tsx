"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LoginCarousel from "@/components/LoginCarousels";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.get("fullname"),
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
      } else {
        router.push(`/verify-email?email=${encodeURIComponent(email)}`);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto flex w-full gap-8">
      
      <div className="w-[46%]">
        <LoginCarousel />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-[30%] mx-auto gap-6 justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-center md:text-4xl font-bold text-2xl">
          Create Account
          </h1>
          <p className="text-center text-zinc-400 md:text-lg text-sm">
          Unlock limitless trading opportunities
          </p>
        </div>

        <div className="flex justify-center">
          <Button className="bg-transparent border border-zinc-600 rounded-full  hover:bg-neutral-900 cursor-pointer py-3 ">
            <Image
              src="/google-icon.png"
              alt="Google Icon"
              height={1000}
              width={1000}
              className="w-4"
            />
            Continue with Google
          </Button>
        </div>

        <div className="box-border w-full flex items-center gap-5 justify-center">
          <div className="w-[20%] h-[1px] bg-neutral-600"></div>
          <span className="text-sm text-zinc-500">or Sign up with Email</span>
          <div className="w-[20%] h-[1px] bg-neutral-600"></div>
        </div>



        <div className="flex flex-col gap-6">

          <div className="">
            <label htmlFor="">Full Name</label>
            <Input
              type="name"
              id="email"
              required
              autoComplete="name"
              className="mt-1 border-none outline-none bg-neutral-800 rounded-[5px] text-neutral-400 focus:ring-zinc-200 focus:ring-1 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div className="">
            <label htmlFor="">Email Address</label>
            <Input
              type="email"
              id="email"
              required
              autoComplete="email"
              className="mt-1 border-none outline-none bg-neutral-800 rounded-[5px] text-neutral-400 focus:ring-zinc-200 focus:ring-1 focus:outline-none"
              placeholder="Enter your email address"
            />
          </div>

          <div className="">
            <label htmlFor="">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 border-none outline-none bg-neutral-800 rounded-[5px] text-neutral-400 focus:ring-zinc-200 focus:ring-1 focus:outline-none"
              placeholder="Enter your Password"
            />
          </div>
        </div>

        

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}


        <Button type="submit" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 cursor-pointer hover:bg-gradient-to-r hover:from-[#E854BC] hover:to-[#B763F5]">
        {isLoading ? ("Processing...") : (
          <div className="flex items-center">
            Sign Up <ChevronRight />
          </div>
        )}  
        </Button>

        <div className="flex gap-1 justify-center">
          <h4 className="font-bold">Already have an account?</h4>
          <Link
            href={"/register"}
            className="text-pink-500 font-bold hover:text-white hover:underline"
          >
            Log in
          </Link>
        </div>
      </form>


    </div>
  );
}
