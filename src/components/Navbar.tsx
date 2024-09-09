"use client";
import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const router = useRouter();
  const user = useUser();

  return (
    <nav className="sticky top-0 landing-bg text-black p-4 border-b-2 border-slate-300 z-[99] ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-2">
          <Logo width={60} height={60} />
          <p className="text-2xl font-medium">Travelite</p>
        </Link>

        <div className="flex space-x-4">
          <Button
            onClick={() => router.push("/suggested-trips")}
            variant="ghost"
            className="hidden md:block text-white bg-black hover:bg-[#232727] hover:text-white"
          >
            Suggested trips
          </Button>
          <Button
            onClick={() => router.push("/guide")}
            variant="ghost"
            className="hidden md:block text-white bg-black hover:bg-[#232727] hover:text-white"
          >
            Virtual Tour
          </Button>

          {user.user && (
            <Button
              className="hidden md:block text-white bg-black hover:bg-[#232727] hover:text-white mr-3"
              variant="ghost"
              onClick={() => router.push("/past-trips")}
            >
              My Trips
            </Button>
          )}

          <SignedOut>
            <Button className="bg-black text-white rounded-full px-6 py-2">
              <SignInButton />
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My trips"
                  labelIcon={<PlaneLanding />}
                  href="/past-trips"
                />
                <UserButton.Link
                  label="Suggested trip"
                  labelIcon={<PlaneTakeoff />}
                  href="/suggested-trips"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
