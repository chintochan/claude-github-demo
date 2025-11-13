import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  TrendingDown,
  MapPin,
  FileText,
  Star,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Report Markups",
    description:
      "Submit detailed reports about dealer markups with photos and documentation. Help other buyers make informed decisions.",
  },
  {
    icon: MapPin,
    title: "Interactive Map",
    description:
      "Visualize dealer markups on an interactive map. Find the best dealers in your area at a glance.",
  },
  {
    icon: Shield,
    title: "Verified Dealers",
    description:
      "Discover dealers with verified no-markup guarantees. These dealers commit to transparent pricing.",
  },
  {
    icon: TrendingDown,
    title: "Track Markup Trends",
    description:
      "See historical markup data and trends. Know when prices are high or low for specific models.",
  },
  {
    icon: Star,
    title: "Dealer Reviews",
    description:
      "Read authentic reviews from real buyers. Share your experience to help the community.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Reports",
    description:
      "Our team verifies reports with documentation. Trust the data you see on our platform.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose NoMarkup?</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We provide the tools and data you need to avoid overpaying for your
            next vehicle. Join our community of informed car buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
