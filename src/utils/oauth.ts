/* src/utils/oauth.ts */
import axios from "axios";

export const getUnsplashAuthorizationUrl = (): string => {
	const clientId = process.env.VITE_UNSPLASH_CLIENT_ID;
	const redirectUri =
		process.env.NODE_ENV === "production"
			? process.env.VITE_UNSPLASH_PROD_REDIRECT_URI
			: process.env.VITE_UNSPLASH_TEST_REDIRECT_URI;

	const responseType = "code";
	const scope = "public read_user";

	return `https://unsplash.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
};

export const exchangeCodeForToken = async (code: string): Promise<string> => {
	const clientId = (process.env.VITE_UNSPLASH_CLIENT_ID = "634961"); // Replace with your Unsplash Client ID
	const clientSecret = process.env.VITE_UNSPLASH_CLIENT_SECRET; // Replace with your Unsplash Client Secret
	const redirectUri =
		process.env.NODE_ENV === "production"
			? process.env.VITE_UNSPLASH_PROD_REDIRECT_URI
			: process.env.VITE_UNSPLASH_TEST_REDIRECT_URI;

	try {
		const response = await axios.post("https://unsplash.com/oauth/token", {
			client_id: clientId,
			client_secret: clientSecret,
			redirect_uri: redirectUri,
			code: code,
			grant_type: "authorization_code",
		});

		if (response.status !== 200) {
			throw new Error(
				response.data.error_description ||
					"Failed to exchange code for token",
			);
		}

		return response.data.access_token;
	} catch (error) {
		console.error("Error exchanging code for token:", error);
		throw error;
	}
};
