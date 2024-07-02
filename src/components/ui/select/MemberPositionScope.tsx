/* src/components/ui/select/MemberPositionScope.tsx */
import React from 'react';
import { Select } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const MemberPositionScope: React.FC = () => {
    const { state, setMemberPositionScope } = useGlobalState();

    const handleMemberPositionScopeChange = (value: string) => {
        setMemberPositionScope(value);
    };

    return (
        <Select
            placeholder="היקף משרה"
            value={state.memberPositionScope}
            onChange={handleMemberPositionScopeChange}
        >
            <Option value="full-time">משרה מלאה</Option>
            <Option value="half-time">חצי משרה</Option>
            <Option value="half-time">שליש משרה</Option>
        </Select>
    );
};

export default MemberPositionScope;