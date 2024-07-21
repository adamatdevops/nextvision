/* src/StartOAuth.tsx */

import React from "react";
import { getUnsplashAuthorizationUrl } from "./utils/oauth";

const StartOAuth: React.FC = () => {
	const startOAuthFlow = () => {
		const authUrl = getUnsplashAuthorizationUrl();
		window.location.href = authUrl;
	};

	return (
		<div>
			<button onClick={startOAuthFlow}>Login with Unsplash</button>
		</div>
	);
};

export default StartOAuth;
