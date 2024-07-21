// src/pages/home/GettingStarted.tsx
import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { Layout, Input, Flex, Button, Card, Modal } from "antd";
import DynamicLayout from "../../components/ui/layouts/DynamicBackgroundLayout";
import ParticlesBackground from "../../components/ui/layouts/ParticlesBackground";
import BackgroundImages from "../../components/ui/layouts/BackgroundImages";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../GlobalStateProvider";
import styles from "./css/GettingStarted.module.css";

const { Header, Content } = Layout;
// const { Title, Paragraph } = Typography;

const GettingStarted: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { state, setLoginName } = useGlobalState();
	const [localLoginName, setLocalLoginName] = useState(state.loginName);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleLoginNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocalLoginName(e.target.value);
		setLoginName(e.target.value);
	};

	return (
		<DynamicLayout>
			<ParticlesBackground />
			{/* <BackgroundImages />  */}
			<Header className={styles.header}>
				ברוכים הבאים לסימולטור מודל ההתחדשות
			</Header>
			<Content className={styles.content}>
				<Card className={styles.card}>
					<Flex gap="small">
						<Flex wrap gap="small">
							{/* Your content goes here */}
							<div className={styles.buttonContainer}>
								<Input
									placeholder="הכנס שם משתמש"
									value={localLoginName}
									onChange={handleLoginNameChange}
									className={styles.input}
								/>
								<Link to="/social-data">
									<Button
										type="primary"
										size="large"
										className={styles.button}
										disabled={!localLoginName}
									>
										כניסה
									</Button>
								</Link>
								<Button
									type="primary"
									size="large"
									className={styles.button}
									onClick={showModal}
								>
									מהו הסימולטור שלנו
								</Button>
							</div>
						</Flex>
					</Flex>
				</Card>
			</Content>
			<Modal
				title="מהו הסימולטור שלנו"
				open={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				okText="אישור"
				cancelText="ביטול"
			>
				<p>
					הסימולטור שלנו נועד לספק לך כלי ידידותי להבנת מצבך הכלכלי
					ולתכנון פיננסי עתידי. בעזרת הסימולטור תוכל להזין הכנסות
					והוצאות נוכחיות ועתידיות, ולראות את ההשפעה של התרחישים
					השונים על מצבך הכלכלי הכולל.
				</p>
				<p>
					הסימולטור מתוכנן בצורה קלה לשימוש, ומאפשר לך להזין נתונים
					אישיים ולראות תחזיות כלכליות בהתבסס על אותם נתונים. המטרה
					שלנו היא לסייע לך בקבלת החלטות פיננסיות מושכלות ולהתכונן
					לעתיד טוב יותר.
				</p>
			</Modal>
		</DynamicLayout>
	);
};

export default GettingStarted;
