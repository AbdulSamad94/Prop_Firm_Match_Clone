"use client";
import { useState, useEffect, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import LoginCarousel from "@/components/LoginCarousels";


// Component that uses useSearchParams
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  // Check for error in URL params (redirected from NextAuth)
  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam === "CredentialsSignin") {
      setError("Invalid email or password");
    } else if (errorParam) {
      setError(errorParam);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get("email") as string;

    // Store email for potential verification redirect
    setEmail(emailValue);

    try {
      const result = await signIn("credentials", {
        email: emailValue,
        password: formData.get("password") as string,
        redirect: false,
      });

      if (result?.error) {
        // Check if the error is related to email verification
        if (result.error.includes("verify your email")) {
          setError("Please verify your email before signing in");
        } else {
          setError(result.error);
        }
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // const handleResendVerification = async () => {
  //   if (!email) return;

  //   // setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch("/api/resend-verification", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       setError(data.error || "Failed to resend verification code");
  //     } else {
  //       // Redirect to verification page
  //       router.push(`/verify-email?email=${encodeURIComponent(email)}`);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setError("An unexpected error occurred. Please try again.");
  //   } finally {
  //     // setIsLoading(false);
  //   }
  // };

  // // Check if error is related to verification
  // const isVerificationError = error?.includes("verify your email");

  return (
    <div className="flex gap-8 w-full">
      <div className="hidden sm:block w-[46%] ">
        <LoginCarousel />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col mx-auto gap-6 justify-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-center md:text-4xl font-bold text-2xl">
            Sign in to Prop Firm Match
          </h1>
          <p className="text-center text-zinc-400 md:text-lg text-sm">
            Welcome back! Please sign in to continue
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

        <div className="box-border w-full flex items-center gap-2 justify-center">
          <div className="w-[30%] h-[1px] bg-neutral-600"></div>
          <span>or</span>
          <div className="w-[30%] h-[1px] bg-neutral-600"></div>
        </div>



        <div className="flex flex-col gap-2">
          <div className="">
            <label htmlFor="">Email Address</label>
            <Input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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

          <Link
            href={"/forgot-password"}
            className="text-pink-500 hover:text-pink-400 text-[14px]"
          >
            Forgot Password?
          </Link>
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
            Continue <ChevronRight />
          </div>
        )}  
        </Button>

        <div className="flex gap-1 justify-center">
          <h4 className="font-bold">Don&acute;t have an account?</h4>
          <Link
            href={"/register"}
            className="text-pink-500 font-bold hover:text-white hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

// Loading fallback
function LoginFormFallback() {
  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

// Main component
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<LoginFormFallback />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
