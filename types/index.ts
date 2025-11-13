export interface Dealer {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  phone?: string;
  website?: string;
  isVerified: boolean;
  verifiedAt?: Date;
  averageMarkup: number;
  totalReports: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MarkupReport {
  id: string;
  make: string;
  model: string;
  year: number;
  trim?: string;
  msrp: number;
  dealerPrice: number;
  markupAmount: number;
  markupPercent: number;
  description?: string;
  purchaseDate?: Date;
  photoUrls: string[];
  reporterName?: string;
  reporterEmail?: string;
  isAnonymous: boolean;
  isVerified: boolean;
  verifiedAt?: Date;
  dealerId: string;
  dealer?: Dealer;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  rating: number;
  title: string;
  content: string;
  purchaseDate?: Date;
  vehiclePurchased?: string;
  reviewerName: string;
  reviewerEmail?: string;
  isVerified: boolean;
  dealerId: string;
  dealer?: Dealer;
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchFilters {
  make?: string;
  model?: string;
  year?: number;
  location?: string;
  maxMarkup?: number;
  verifiedOnly?: boolean;
}

export interface DealerWithDetails extends Dealer {
  reports: MarkupReport[];
  reviews: Review[];
}

export const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

export const CAR_MAKES = [
  "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW",
  "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ferrari",
  "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti",
  "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "Lexus",
  "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren", "Mercedes-Benz",
  "Mini", "Mitsubishi", "Nissan", "Porsche", "Ram", "Rivian",
  "Rolls-Royce", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo",
];
