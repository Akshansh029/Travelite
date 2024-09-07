"use client";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 landing-bg text-black p-4 border-b-2 border-slate-300 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-2">
          <Logo width={60} height={60} />
          <p className="text-2xl font-medium">Travelite</p>
        </Link>

        <div className="flex space-x-4">
          <Button
            onClick={() => router.push("/suggested-trips")}
            variant="ghost"
            className="text-white bg-black hover:bg-[#232727] hover:text-white"
          >
            Suggested trips
          </Button>

          <SignedOut>
            <Button className="bg-black text-white rounded-full px-6 py-2">
              <SignInButton />
            </Button>
          </SignedOut>
          <SignInButton>
            <UserButton />
          </SignInButton>
        </div>
      </div>
    </nav>
  );
}
