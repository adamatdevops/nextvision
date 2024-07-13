// src/components/ui/drawer/InfoDrawer.tsx
import React from 'react';
import { Drawer, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { drawerContent } from './drawerContent';
import styles from './css/InfoDrawer.module.css';

const { Title, Paragraph } = Typography;

interface InfoDrawerProps {
    // title: string;
    // content: string;
    open: boolean;
    onClose: () => void;
    contentKey: keyof typeof drawerContent;

}

//const InfoDrawer: React.FC<InfoDrawerProps> = ({ title, content, open, onClose }) => {

const InfoDrawer: React.FC<InfoDrawerProps> = ({ open, onClose, contentKey }) => {
    const content = drawerContent[contentKey];

    // Type guard to check if content is of the expected object type
    const isContentObject = (content: any): content is { description: string; budgetingMethod: string } => {
        return typeof content === 'object' && 'description' in content && 'budgetingMethod' in content;
    };

    return (
        <Drawer
            title="מידע"
            placement="bottom"
            onClose={onClose}
            open={open}
            height={400}
            className={styles.drawer}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        >
            {isContentObject(content) && (
                <div className={styles.drawerContent} style={{ backgroundColor: 'rgba(225, 22, 117, 0.165)' }}>
                    <Title level={4} className={styles.title}>תיאור</Title>
                    <Paragraph className={styles.paragraph}>{content.description}</Paragraph>
                    <Title level={4} className={styles.title}>שיטת תקצוב</Title>
                    <Paragraph className={styles.paragraph}>{content.budgetingMethod}</Paragraph>
                </div>
            )}
        </Drawer>
    );
};

export default InfoDrawer;
