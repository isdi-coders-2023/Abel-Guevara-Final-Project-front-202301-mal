import { Businesses } from './businesses-model';

const getAllBusinesses = async (): Promise<Businesses> => {
  const response = await fetch(
    'https://abel-guevara-final-project-back-202301.onrender.com/api/v1/business',
  );

  const business = await response.json();

  if (!response.ok) {
    throw new Error(business.msg);
  }
  return { businesses: business };
};

export default getAllBusinesses;
