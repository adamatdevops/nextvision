/* src/Callback.tsx */
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
// import { CLIENT_ID, REDIRECT_URI } from './utils/oauth';
import { exchangeCodeForToken } from "./utils/oauth";

const Callback: React.FC = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		const code = searchParams.get("code");
		if (code) {
			const fetchAccessToken = async () => {
				try {
					const token = await exchangeCodeForToken(code);
					localStorage.setItem("unsplash_access_token", token);
					navigate("/");
				} catch (error) {
					console.error("Error fetching access token:", error);
				}
			};
			fetchAccessToken();
		}
	}, [navigate, searchParams]);

	return (
		<div>
			<h1>Loading...</h1>
		</div>
	);
};

export default Callback;
