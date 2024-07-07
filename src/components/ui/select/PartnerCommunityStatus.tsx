import React, { useState } from 'react';
import { Form, Select } from 'antd';
import styles from './css/select.module.css';

const { Option } = Select;

// interface PartnerCommunityStatusProps {
//     onStatusChange: (status: string | null) => void;
// }

interface PartnerCommunityStatusProps {
    status: string | null;
    onStatusChange: (status: string | null) => void;
}

const PartnerCommunityStatus: React.FC<PartnerCommunityStatusProps> = ({ status, onStatusChange }) => {

    return (
        <Form.Item label="סטטוס של בן/בת הזוג">
            <Select
                placeholder="בחר סטטוס של בן/בת הזוג"
                value={status}
                onChange={onStatusChange}
                className={styles.select}
            >
                <Option
                    className={styles.option}
                    value="community-member"
                    >חבר/ת קהילה</Option>
                <Option
                    className={styles.option}
                    value="not-community-member"
                    >לא חבר/ת קהילה</Option>
                <Option
                    className={styles.option}
                    value="no-partner"
                    >ללא בן/בת זוג</Option>
            </Select>
        </Form.Item>
    );
};

export default PartnerCommunityStatus;
