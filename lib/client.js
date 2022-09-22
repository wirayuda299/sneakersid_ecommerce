import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
	projectId: 'utj2br0i',
	dataset: 'production',
	apiVersion: '2202-09-09',
	useCdn: true,
	token: import.meta.env.REACT_PUBLIC_SANITY_TOKEN,
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
