import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, MapPin, FileText } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold">NoMarkup</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/search"
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <Search className="h-4 w-4" />
            <span>Search Dealers</span>
          </Link>
          <Link
            href="/report"
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <FileText className="h-4 w-4" />
            <span>Report Markup</span>
          </Link>
          <Link
            href="/map"
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
          >
            <MapPin className="h-4 w-4" />
            <span>Map View</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/dealer/register">I'm a Dealer</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
