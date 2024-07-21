/* src/components/ui/layout/BackgroundImages.tsx */
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { fetchPhotos } from "../../../utils/unsplashAPI";
import styles from "./css/BackgroundImages.module.css";

// const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;
const photos = [
	"photo-1509316975850-ff9c5deb0cd9",
	"photo-1513836279014-a89f7a76ae86",
	"photo-1473448912268-2022ce9509d8",
	"photo-1497250681960-ef046c08a56e",
	"photo-1542273917363-3b1817f69a2d",
	"photo-1550100136-e092101726f4",
	"photo-1487111023822-2e903e12f6f0",
	"photo-1441974231531-c6227db76b6e",
	"photo-1503435980610-a51f3ddfee50",
	"photo-1473773508845-188df298d2d1",
	"photo-1509316975850-ff9c5deb0cd9",
	"photo-1513836279014-a89f7a76ae86",
	"photo-1473448912268-2022ce9509d8",
	"photo-1497250681960-ef046c08a56e",
	"photo-1542273917363-3b1817f69a2d",
	"photo-1550100136-e092101726",
	"photo-1487111023822-2e903e12f6f0",
	"photo-1441974231531-c6227db76b6e",
	"photo-1503435980610-a51f3ddfee50",
	"photo-1473773508845-188df298d2d1",
];

const BackgroundImages: React.FC = () => {
	// const [photos, setPhotos] = useState<string[]>([]);
	const [index, setIndex] = useState(0);

	// useEffect(() => {
	//     const photos = async () => {
	//         try {
	//             const results = await fetchPhotos('vision nature forrest', 1, 10);
	//             const photoUrls = results.map((photo: any) => photo.urls.full);
	//             setPhotos(photoUrls);
	//             console.log('Photos loaded:', photoUrls);
	//         } catch (error) {
	//             console.error('Error loading photos:', error);
	//         }
	//     };
	//     photos();
	// }, []);

	const transitions = useTransition(index, {
		key: index,
		from: { opacity: 0 },
		enter: { opacity: 0.5 },
		leave: { opacity: 0 },
		config: { duration: 5000 },
		onRest: (_a, _b, item) => {
			if (index === item) {
				setIndex((state) => (state + 1) % photos.length);
			}
		},
		exitBeforeEnter: true,
	});

	useEffect(() => {
		console.log("Current index:", index);
		console.log("Photos array:", photos);
	}, [index, photos]);

	return (
		<div className="flex fill center">
			{transitions((style, i) => (
				<animated.div
					key={i}
					className={styles.bg}
					style={{
						...style,
						// backgroundImage: `url(${photos[i]})`,
						backgroundImage: `url(https://images.unsplash.com/${photos[i]}?w=1920&q=80&auto=format&fit=crop)`,
					}}
				/>
			))}
		</div>
	);
};

export default BackgroundImages;
