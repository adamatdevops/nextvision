/* ./src/routes/routes.tsx */
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";

/* importing Pages */
// import Root from "./routes/routes.tsx";
// import Home from '../pages/home/Home';
import GettingStarted from "../pages/home/GettingStarted";
import SocialSimulator from "../pages/socialSim/SocialSimulator";
import AccountBalance from "../pages/economicSim/AccountBalance";
import ReviewAndLogout from "../pages/logout/ReviewAndLogout";

/* importing Error Pages */
import ErrorPage from "../pages/errors/ErrorPage";
import Error404 from "../pages/errors/Error404";
import Callback from "../Callback";
import StartOAuth from "../StartOAuth";
// import Error500 from "./pages/errors/Error500.tsx";
// import Error403 from "./pages/errors/Error403.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* Root */}
			{/* GettingStarted */}
			{/* TODO: Make the GettingStarted page the entry point for the app */}
			<Route
				path="/"
				// element={<GettingStarted children={undefined} />}
				element={<GettingStarted />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path="/callback"
				element={<Callback />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path="/login"
				element={<StartOAuth />}
				errorElement={<ErrorPage />}
			/>
			<Route
				path="/social-data"
				element={<SocialSimulator />}
				errorElement={<Error404 />}
			/>
			{/* EconomicSimulator */}
			{/* Phase One: Provides the current/present economic account balance data */}
			{/* <Route index element={<Navigate to="/home/account-balance" replace />} /> */}
			<Route
				path="/account-balance"
				element={
					<AccountBalance
					// initialBalance={0}
					// initialIncome={0}
					// initialExpenses={0}
					/>
				}
				errorElement={<Error404 />}
			/>
			<Route
				path="/review-and-logout"
				element={<ReviewAndLogout />}
				errorElement={<Error404 />}
			/>
		</>,
	),
);

export default router;
