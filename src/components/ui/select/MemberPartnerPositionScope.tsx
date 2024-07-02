/* src/components/ui/select/MemberPositionScope.tsx */
import React from 'react';
import { Select } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const MemberPartnerPositionScope: React.FC = () => {
    const { state, setMemberPartnerPositionScope } = useGlobalState();

    const handlePartnerPositionScopeChange = (value: string) => {
        setMemberPartnerPositionScope(value);
    };

    return (
        <Select
            placeholder="היקף משרה"
            value={state.memberPartnerPositionScope}
            onChange={handlePartnerPositionScopeChange}
        >
            <Option value="full-time">משרה מלאה</Option>
            <Option value="half-time">חצי משרה</Option>
            <Option value="half-time">שליש משרה</Option>
        </Select>
    );
};

export default MemberPartnerPositionScope;