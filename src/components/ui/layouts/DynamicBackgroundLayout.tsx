import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import styles from './css/DynamicBackgroundLayout.module.css';

const { Header, Content, Footer } = Layout;

interface LayoutComponentProps {
    children: React.ReactNode;
    className?: string; // Add this line if it's missing
}

const DynamicLayout: React.FC<LayoutComponentProps> = ({ children }) => {

    const [backgroundImage, setBackgroundImage] = useState('./assets/img/vibrant/background-01-2560x1770.jpeg');

    //const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let bgImage = '';

            if (width >= 3840) {
                bgImage = './assets/img/vibrant/background-01-3840x2560.jpeg';
            } else if (width >= 2560) {
                bgImage = './assets/img/vibrant/background-01-2560x1770.jpeg';
            } else if (width >= 1920) {
                bgImage = './assets/img/vibrant/background-01-1920x1280.jpeg';
            } else if (width >= 1440) {
                bgImage = './assets/img/vibrant/background-01-1440x960.jpeg';
            } else if (width >= 1366) {
                bgImage = './assets/img/vibrant/background-01-1366x900.jpeg';
            } else if (width >= 1024) {
                bgImage = './assets/img/vibrant/background-01-1024.jpeg';
            } else if (width >= 768) {
                bgImage = './assets/img/vibrant/background-01-768.jpeg';
            } else if (width >= 576) {
                bgImage = './assets/img/vibrant/background-01-576.jpeg';
            } else if (width >= 414) {
                bgImage = './assets/img/vibrant/background-01-414.jpeg';
            } else if (width >= 390) {
                bgImage = './assets/img/vibrant/background-01-390.jpeg';
            } else {
                bgImage = './assets/img/vibrant/background-01-1440x960.jpeg';
            }

            setBackgroundImage(bgImage);
        };

        handleResize(); // Set initial background image
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Layout className={styles.layout} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Content className={styles.content}>
                {children}
            </Content>
            <Footer className={styles.footer}>
                ©2024 NextVision
            </Footer>
        </Layout>
    );
};

export default DynamicLayout;
