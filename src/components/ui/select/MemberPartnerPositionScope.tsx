/* src/components/ui/select/MemberPositionScope.tsx */
import React from 'react';
import { Select, Form } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const MemberPartnerPositionScope: React.FC = () => {
    const { state, setMemberPartnerPositionScope } = useGlobalState();

    const handlePartnerPositionScopeChange = (value: string) => {
        setMemberPartnerPositionScope(value);
    };

    return (
        <Form.Item label="היקף משרה">
            <Select
                placeholder="היקף משרה"
                value={state.memberPartnerPositionScope}
                onChange={handlePartnerPositionScopeChange}
                className={styles.select}
            >
                <Option
                    className={styles.option}
                    value="full-time">משרה מלאה</Option>
                <Option
                    className={styles.option}
                    value="half-time">חצי משרה</Option>
                <Option
                    className={styles.option}
                    value="half-time">שליש משרה</Option>
            </Select>
        </Form.Item>
    );
};

export default MemberPartnerPositionScope;