import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#141616] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex gap-2">
          <Logo />
          <p className="text-2xl font-bold">Travelite</p>
        </Link>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Transparent Button */}
          <Button variant="ghost" className="text-white hover:bg-[#232727]">
            Suggested trips
          </Button>

          {/* Round "Sign in" Button */}
          <Button className="bg-black text-white rounded-full px-6 py-2">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
}
