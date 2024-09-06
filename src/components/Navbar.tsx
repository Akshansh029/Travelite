import Logo from "./Logo";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="landing-page-bg text-white p-4 border-b-2 border-slate-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-2">
          <Logo />
          <p className="text-2xl font-medium">Travelite</p>
        </Link>

        <div className="flex space-x-4">
          <Button variant="ghost" className="text-white hover:bg-[#232727]">
            Suggested trips
          </Button>

          <Button className="bg-black text-white rounded-full px-6 py-2">
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
}
