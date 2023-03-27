import Business, {
  ApiError,
  ApiResponse,
  Businesses,
  BusinessInfo,
} from './businesses-model';

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

export const getByIdBusiness = async (
  id: string,
): Promise<ApiResponse<Business>> => {
  const response = await fetch(
    `https://abel-guevara-final-project-back-202301.onrender.com/api/v1/business/${id}`,
  );

  const businessResponse: ApiResponse<Business> = await response.json();

  if (!response.ok) {
    throw new Error((businessResponse as ApiError).msg);
  }

  return businessResponse as Business;
};

export const createBusiness = async (
  business: FormData,
): Promise<BusinessInfo> => {
  const response = await fetch(
    'https://abel-guevara-final-project-back-202301.onrender.com/api/v1/business',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: business,
    },
  );

  const businessInfo = await response.json();

  if (!response.ok) {
    throw new Error();
  }
  return businessInfo;
};
