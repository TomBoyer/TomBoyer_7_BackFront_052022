import axios from 'axios';

export const axiosDrupalClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export const axiosDrupalClientWithAuthJson = async (req: NextApiRequest) => {
  const token = await getToken({ req });
  const csrfToken = await getCsrfToken({ req });
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      Authorization: Bearer ${token.user.access_token},
      'X-CSRF-Token': csrfToken,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
  });
};

export const axiosDrupalClientWithAuthImage = async (req: NextApiRequest, filename:string) => {
  const token = await getToken({ req });
  const csrfToken = await getCsrfToken({ req });
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
      Authorization: Bearer ${token.user.access_token},
      'X-CSRF-Token': csrfToken,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': file; filename="${filename}"
    },
  });
};