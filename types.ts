export interface Service {
  id: string;
  name: string;
  price?: string;
  duration?: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}
