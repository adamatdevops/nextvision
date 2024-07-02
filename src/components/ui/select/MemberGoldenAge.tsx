/* src/components/ui/select/MemberGoldenAge.tsx */
import React from 'react';
import { Select } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const MemberGoldenAge: React.FC = () => {
    const { state, setMemberGoldenAge } = useGlobalState();

    const handleGoldenAgeChange = (value: string) => {
        setMemberGoldenAge(value);
    };

    return (
        <Select
            placeholder="האם זכאי לקרן גיל הזהב?"
            value={state.memberGoldenAge}
            onChange={handleGoldenAgeChange}
        >
            <Option value="yes">כן</Option>
            <Option value="no">לא</Option>
        </Select>
    );
};

export default MemberGoldenAge;
