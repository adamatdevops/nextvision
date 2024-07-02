import React from 'react';
import { Form, Select } from 'antd';
import { useGlobalState } from "../../../GlobalStateProvider";
import styles from './css/select.module.css';

const { Option } = Select;

interface NumberOfChildrenSelectProps {
    onNumberChange: (value: number) => void;
}

const NumberOfChildrenSelect: React.FC<NumberOfChildrenSelectProps> = () => {
    const {
        state: { numberOfChildren },
        setNumberOfChildren,
    } = useGlobalState();

    const options = Array.from({ length: 7 }, (_, i) => i + 1);

    const handleNumberChange = (value: number) => {
        setNumberOfChildren(value); // Pass the number value directly
    };

    return (
        <Form.Item label="מספר ילדים">
            <Select
                placeholder="בחר מספר ילדים"
                onChange={handleNumberChange}
                value={numberOfChildren}
                >
                {options.map((option) => (
                    <Option key={option} value={option}>
                        {option}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export default NumberOfChildrenSelect;