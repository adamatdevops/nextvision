import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// import envCompatible from "vite-plugin-env-compatible";
// import html from "vite-plugin-html";
// https://vitejs.dev/config/

export default defineConfig({
	plugins: [
		react(),
		reactRefresh({
			include: [resolve(__dirname, "src/**/*.tsx")],
		}),
		//tsconfigPaths(),
		//checker({
		//      overlay: false,
		//      typescript: true,
		//}),
        svgr(),
        tsconfigPaths(),
	],
	resolve: {
		alias: [
			{
				find: "./runtimeConfig",
				replacement: "./runtimeConfig.browser",
			},
			{
                find: '@',
                replacement: resolve(__dirname, './src'),
        	},
		],
	},
	define: {
		"process.env": process.env,
	},
	server: {
		host: true,
	},
	// envPrefix: [],
	base: "./",
	optimizeDeps: { exclude: ["fsevents"] },
	build: {
		// 	generate .vite/manifest.json in outDir
		manifest: true,
		// 	eslint-disable-next-line no-ternary
		// 	target: process.env.MY_PLATFORM === "windows" ? "chrome105" : "safari13",
		// 	don't minify for debug builds
		// 	eslint-disable-next-line no-negated-condition, no-ternary
		// 	minify: !process.env.MY_DEBUG ? "esbuild" : false,
		// 	produce sourcemaps for debug builds
		// 	sourcemap: !!process.env.MY_DEBUG,
		// IMPORTANT:  if build is not included inside defineConfig({}) of your vite.config.ts the application will only work on Amplify manual deployment. In order for the Git-based (CI/CD pipeline) deployment to work, build output must be present.
		outDir: "dist", // or build
	},
});
