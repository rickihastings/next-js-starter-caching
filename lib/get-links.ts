// import { cookies } from 'next/headers';

type Link = {
  link: string;
  heading: string;
  content: string;
};

export const getLinks = async () => {
  // uncomment below to see how we can automatically invalidate
  // cookies();
  const response = await fetch('http://localhost:3000/api/links');

  return await response.json() as Link[];
};
