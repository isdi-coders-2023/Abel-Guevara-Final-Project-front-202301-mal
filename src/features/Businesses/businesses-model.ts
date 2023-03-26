type Business = {
  _id: string;
  categories: string;
  nameBusiness: string;
  address: string;
  phone: string;
  profileUrl: string;
  description: string;
  reviews: string[];
  score: number[];
  creator: string;
};

export interface Businesses {
  businesses: Business[];
}

export type BusinessInfo = Omit<
  Business,
  '_id' | 'creator' | 'reviews' | 'score'
>;

export default Business;
