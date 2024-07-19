/* src/components/ui/avatars/FamilyAvatar.tsx */
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import FamilyIcon from '../icons/familyIcon.tsx';
import FamilyIcon from '../../../assets/family-avatar.svg';
import styles from './css/FamilyAvatar.module.css';

const FamilyAvatar: React.FC = () => (
    <Avatar
        shape="circle"
        src={FamilyIcon}
        // size={32}
        className={styles.avatar}
        icon={<UserOutlined />}>
    </Avatar>
);

export default FamilyAvatar;
