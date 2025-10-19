export interface Volunteer {
  id: number;
  ngo: string;
  location: string;
  field: string;
  description: string;
  applyUrl: string;
  imageUrl?: string;
  saved?: boolean;
}
