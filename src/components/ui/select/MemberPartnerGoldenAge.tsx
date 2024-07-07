/* src/components/ui/select/MemberPartnerGoldenAge.tsx */
import React from 'react';
import { Select, Form } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const MemberPartnerGoldenAge: React.FC = () => {
    const { state, setMemberPartnerGoldenAge } = useGlobalState();

    const handlePartnerGoldenAgeChange = (value: string) => {
        setMemberPartnerGoldenAge(value);
    };

    return (
        <Form.Item label="קרן גיל הזהב">
            <Select
                placeholder="האם בן/בת זוג זכאי לקרן גיל הזהב?"
                value={state.memberPartnerGoldenAge}
                onChange={handlePartnerGoldenAgeChange}
                className={styles.select}
            >
                <Option
                    className={styles.option}
                    value="yes">כן</Option>
                <Option
                    className={styles.option}
                    value="no">לא</Option>
            </Select>
        </Form.Item>
    );
};

export default MemberPartnerGoldenAge;

