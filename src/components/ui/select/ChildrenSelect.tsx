import React from 'react';
import { Form, Select } from 'antd';
import styles from './css/select.module.css';

const { Option } = Select;

interface ChildrenSelectProps {
    onChildrenChange: (value: string) => void;
}

const ChildrenSelect: React.FC<ChildrenSelectProps> = ({ onChildrenChange }) => {
    return (
        <Form.Item label="ילדים">
            <Select placeholder="ילדים" onChange={onChildrenChange}>
                <Option value="yes">כן</Option>
                <Option value="no">לא</Option>
            </Select>
        </Form.Item>
    );
};

export default ChildrenSelect;
