import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo or App Name */}
          <div className="font-[Tactic Sans] text-center font-bold italic text-[32px] leading-[32px] tracking-[0%]  mb-1 sm:0">
            <Link className="hover:text-gray-400 transition" href="/matches">
              Match Tracker
            </Link>
          </div>
          {/* Navigation */}
          <nav className="space-x-8">
            <Link className="hover:text-gray-400 transition" href="/matches">
              Matches
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
