/* src/components/ui/select/FamilyNationalInsurance.tsx */
import React from 'react';
import { Select, Form } from 'antd';
import { useGlobalState } from '../../../GlobalStateProvider';
import styles from './css/select.module.css';

const { Option } = Select;

const FamilyNationalInsurance: React.FC = () => {
    const { state, setFamilyNationalInsurance, setFutureNationalInsuranceAllowance } = useGlobalState();

    // const handleNationalInsuranceChange = (value: number) => {
    //     setFamilyNationalInsurance(value);
    // };
    const handleNationalInsuranceChange = (value: number) => {
        setFamilyNationalInsurance(value);
        setFutureNationalInsuranceAllowance(Array(value).fill(0));
    };

    return (
        <Form.Item label="בני המשפחה המוכרים בביטוח לאומי">
            <Select
                placeholder="מספר בני משפחה"
                value={state.familyNationalInsurance}
                onChange={handleNationalInsuranceChange}
                className={styles.select}
            >
                {[...Array(6).keys()].map((num) => (
                    <Option
                        className={styles.select}
                        key={num}
                        value={num}>
                        {num}
                    </Option>
                ))}
            </Select>
        </Form.Item>

    );
};

export default FamilyNationalInsurance;
