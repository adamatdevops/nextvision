/* src/components/ui/select/MemberPositionScope.tsx */
import React from 'react';
import { Select, Form } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const MemberPositionScope: React.FC = () => {
    const { state, setMemberPositionScope } = useGlobalState();

    const handleMemberPositionScopeChange = (value: string) => {
        setMemberPositionScope(value);
    };

    return (
        <Form.Item label="היקף משרה">
            <Select
                placeholder="היקף משרה"
                value={state.memberPositionScope}
                onChange={handleMemberPositionScopeChange}
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

export default MemberPositionScope;