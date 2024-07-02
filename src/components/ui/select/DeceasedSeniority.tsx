import React from 'react';
import { Form, Select } from 'antd';
import styles from './css/select.module.css';

const { Option } = Select;

interface DeceasedSeniorityProps {
    onDeceasedSeniorityChange: (value: number) => void;
    label: string;
    disabled?: boolean; // Add the 'disabled' prop with an optional boolean type
}

const DeceasedSeniority: React.FC<DeceasedSeniorityProps> = ({ onDeceasedSeniorityChange, label, disabled = false }) => { // Provide a default value for the 'disabled' prop
    const options = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <Form.Item label={label}>
            <Select placeholder="בחר ותק" onChange={onDeceasedSeniorityChange} disabled={disabled}>
                {options.map((option) => (
                    <Option key={option} value={option}>
                        {option}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default DeceasedSeniority;
