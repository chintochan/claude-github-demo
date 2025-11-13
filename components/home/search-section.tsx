"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search, MapPin } from "lucide-react";
import { CAR_MAKES, US_STATES } from "@/types";
import { useRouter } from "next/navigation";

export function SearchSection() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    make: "",
    model: "",
    location: "",
    state: "",
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchParams.make) params.append("make", searchParams.make);
    if (searchParams.model) params.append("model", searchParams.model);
    if (searchParams.location) params.append("location", searchParams.location);
    if (searchParams.state) params.append("state", searchParams.state);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">Find Dealer Markups</h2>
            <p className="text-muted-foreground">
              Search by make, model, or location to see reported markups
            </p>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Make</label>
                  <Select
                    value={searchParams.make}
                    onValueChange={(value) =>
                      setSearchParams({ ...searchParams, make: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select make" />
                    </SelectTrigger>
                    <SelectContent>
                      {CAR_MAKES.map((make) => (
                        <SelectItem key={make} value={make}>
                          {make}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Model</label>
                  <Input
                    placeholder="e.g., Civic, Accord"
                    value={searchParams.model}
                    onChange={(e) =>
                      setSearchParams({ ...searchParams, model: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">City or Zip Code</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter city or zip"
                      className="pl-9"
                      value={searchParams.location}
                      onChange={(e) =>
                        setSearchParams({
                          ...searchParams,
                          location: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">State</label>
                  <Select
                    value={searchParams.state}
                    onValueChange={(value) =>
                      setSearchParams({ ...searchParams, state: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {US_STATES.map((state) => (
                        <SelectItem key={state.value} value={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Search Dealers
              </Button>
            </form>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Can't find what you're looking for?{" "}
              <Button variant="link" className="p-0 h-auto" asChild>
                <a href="/report">Report a new dealer markup</a>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
