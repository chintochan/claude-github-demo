import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingDown, Users } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <TrendingDown className="mr-2 h-4 w-4" />
              Say No to Dealer Markups
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Car Dealer Markup
            <br />
            <span className="text-primary">Transparency Platform</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Report dealer markups, find honest dealers, and make informed car
            buying decisions. Join thousands of car buyers fighting for fair
            prices.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/search">
                Search Dealers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/report">Report Markup</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">15,000+</h3>
              <p className="text-sm text-muted-foreground">User Reports</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">500+</h3>
              <p className="text-sm text-muted-foreground">Verified Dealers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <TrendingDown className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">$2M+</h3>
              <p className="text-sm text-muted-foreground">Saved by Users</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
