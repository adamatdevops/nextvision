/* src/components/ui/select/MemberPartnerGoldenAge.tsx */
import React from 'react';
import { Select } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const MemberPartnerGoldenAge: React.FC = () => {
    const { state, setMemberPartnerGoldenAge } = useGlobalState();

    const handlePartnerGoldenAgeChange = (value: string) => {
        setMemberPartnerGoldenAge(value);
    };

    return (
        <Select
            placeholder="האם בן/בת זוג זכאי לקרן גיל הזהב?"
            value={state.memberPartnerGoldenAge}
            onChange={handlePartnerGoldenAgeChange}
        >
            <Option value="yes">כן</Option>
            <Option value="no">לא</Option>
        </Select>
    );
};

export default MemberPartnerGoldenAge;

