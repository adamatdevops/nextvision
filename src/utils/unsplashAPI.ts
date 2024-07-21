/* src/utils/unsplashAPI.ts */
import axios from "axios";

const VITE_UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const VITE_UNSPLASH_API_URL = "https://api.unsplash.com";

export const fetchPhotos = async (
	query: string,
	page: number = 1,
	perPage: number = 10,
) => {
	try {
		const response = await axios.get(
			`${VITE_UNSPLASH_API_URL}/search/photos`,
			{
				params: {
					query,
					page,
					per_page: perPage,
				},
				headers: {
					Authorization: `Client-ID ${VITE_UNSPLASH_ACCESS_KEY}`,
				},
			},
		);
		console.log("Unsplash API response:", response.data.results);
		return response.data.results;
	} catch (error) {
		console.error("Error fetching photos from Unsplash:", error);
		throw error;
	}
};
