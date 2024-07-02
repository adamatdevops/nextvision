/* src/components/ui/select/FamilyNationalInsurance.tsx */
import React from 'react';
import { Select } from 'antd';
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
        <Select
            placeholder="מספר בני משפחה"
            value={state.familyNationalInsurance}
            onChange={handleNationalInsuranceChange}
            
        >
            {[...Array(6).keys()].map((num) => (
                <Option key={num} value={num}>
                    {num}
                </Option>
            ))}
        </Select>
    );
};

export default FamilyNationalInsurance;
