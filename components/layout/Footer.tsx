import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-playfair font-bold text-starlight">
              <span className="text-amber-500">Vishal</span> Holidays
            </Link>
            <p className="text-starlight/50 text-sm mt-2">
              The Zenith of Corporate Travel.
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="#" className="text-starlight/60 hover:text-glacial transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-starlight/60 hover:text-glacial transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-starlight/60 hover:text-glacial transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-starlight/60 hover:text-glacial transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-starlight/40">
          <p>&copy; {new Date().getFullYear()} Vishal Holidays. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-starlight transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-starlight transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
