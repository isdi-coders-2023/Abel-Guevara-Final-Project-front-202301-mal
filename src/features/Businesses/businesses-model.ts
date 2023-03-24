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
};

export interface Businesses {
  businesses: Business[];
}

export default Business;
