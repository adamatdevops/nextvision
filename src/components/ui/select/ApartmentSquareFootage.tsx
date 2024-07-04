import React from 'react';
import { Form, Select } from 'antd';
import { useGlobalState } from "../../../GlobalStateProvider";
import styles from './css/select.module.css';

const { Option } = Select;

// interface ApartmentSquareFootageProps {
//     // onSquareFootageChange: (value: number) => void;
//     status: string | null;
//     onSquareFootageChange: (status: string | null) => void;
// }

// const ApartmentSquareFootage: React.FC<ApartmentSquareFootageProps> = ({ status, onSquareFootageChange }) => {
const ApartmentSquareFootage: React.FC = () => {
    const {
        state: { apartmentSquareFootage },
        setApartmentSquareFootage,
    } = useGlobalState();


    const options = [40, 50, 60, 70, 100, 126, 150, 170];

    const handleChange = (value: any) => {
        setApartmentSquareFootage(parseInt(value)); // Parse the string value as a number
    };

    return (
        <Form.Item label="שטח הדירה (מטרים)">
            <Select
                placeholder="בחר שטח דירה"
                onChange={handleChange}
                value={apartmentSquareFootage}
            >
                {options.map((option) => (
                    <Option key={option} value={option}>
                        {option} מ"ר
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );

    // return (
    //     <Form.Item label="שטח הדירה (מטרים)">
    //         <Select
    //             placeholder="בחר שטח דירה"
    //             value={status}
    //             onChange={onSquareFootageChange}
    //         >
    //             <Option value="40">40 מ״ר</Option>
    //             <Option value="50">50 מ״ר</Option>
    //             <Option value="60">60 מ״ר</Option>
    //             <Option value="70">70 מ״ר</Option>
    //             <Option value="100">100 מ״ר</Option>
    //             <Option value="110">126 מ״ר</Option>
    //         </Select>
    //     </Form.Item>
    // );
};

export default ApartmentSquareFootage;
