/* ./src/pages/SocaialSim/SocialSimulator.tsx */
import React from 'react';
import { Form, Select } from 'antd';
import styles from './css/select.module.css';

const { Option } = Select;

interface MemberStatusProps {
    status: string | null;
    onStatusChange: (status: string | null) => void;
}

const MemberStatus: React.FC<MemberStatusProps> = ({ status, onStatusChange }) => {

    return (
        <Form.Item label="סטטוס משפחתי" className={styles.formItem}>
            <Select
                placeholder="בחר סטטוס משפחתי"
                value={status}
                onChange={onStatusChange}
                className={styles.select}
            >
                <Option
                    className={styles.option}
                    value="married">נשוי/נשואה</Option>
                <Option
                    className={styles.option}
                    value="divorced">גרוש/גרושה</Option>
                <Option
                    className={styles.option}
                    value="widower">אלמן/אלמנה</Option>
                <Option
                    className={styles.option}
                    value="single">רווק/רווקה</Option>
                <Option
                    className={styles.option}
                    value="single-parent">יחידני/ת</Option>
            </Select>
        </Form.Item>
    );
};

export default MemberStatus;
