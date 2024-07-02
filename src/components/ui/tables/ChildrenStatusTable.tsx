/* src/components/ui/tables/ChildrenStatusTable.tsx */
import React, { useState, useEffect } from 'react';
import { Form, Input, Select, InputNumber, Card } from 'antd';
// import { setFutureChildrenSafetyNet, useGlobalState } from '../../../GlobalStateProvider';
import { childrenData, useFutureExpensesState } from '../../../context/FutureExpensesGSP'; // Import the hook
// import type { ChildData } from '../../../GlobalStateProvider';
import styles from './css/ChildrenStatusTable.module.css';

const { Option } = Select;

interface ChildrenStatusTableProps {
    numberOfChildren: number;
}

export interface ChildData {
    id: number, // Unique identifier
    key: number;
    name: string;
    age: number | null;
    educationLevel: string | null;
    educationSystem: string | null;
    educationTeenageClasses: number;
    teenageClassFees: number[];
    educationPrivateLessons: number;
    privateLessonFees: number[];
    futureKindergartenExpenses: number; // Added
    futureSchoolExpenses: number; // Added
    futureHighSchoolExpenses: number; // Added
    //educationTuitionFees: number | null;
    class: string | null;
    educationTransportation: string | null;
    educationPersonalCare: string | null;
    educationDayCare: string | null;
    futureEducationPersonalCareExpenses: number;
    futureEducationDayCareExpenses: number;
    customTuition: number;
}

export const educationSystemBudgetsMap: { [key: string]: number } = {
    'מיץ פטל': 794,
    'תות': 878,
    'סביון': 605,
    'פשוש': 605,
    'רימון': 663,
    'פעמון': 894,
    'דובדבן': 921,
    'אורנים': 1072,
    'נעורים': 1146,
    'חינוך מיוחד': 0,
    'אחר': 0,
};

export const educationSystemFeesMap: { [key: string]: number } = {
    'מיץ פטל': 3675,
    'תות': 3333,
    'סביון': 3162,
    'פשוש': 1966,
    'רימון': 1966,
    'פעמון': 1500,
    'דובדבן': 1500,
    'אורנים': 1000,
    'נעורים': 600,
    'חינוך מיוחד': 0, // TODO: Update this to fill by member
    'אחר': 0,  // TODO: Update this to fill by member
};

export const childrenSafetyNetMap: { [key: string]: number } = {
    'מיץ פטל': 1767,
    'תות': 1767,
    'סביון': 1392,
    'פשוש': 1392,
    'רימון': 1392,
    'פעמון': 1392,
    'דובדבן': 1392,
    'אורנים': 1392,
    'נעורים': 1392,
};

export const educationTuitionFeesMap: { [key: string]: number } = {
    'גיל הרך': 0,
    'יסודי': 0,
    'תיכון': 0,
};

const ChildrenStatusTable: React.FC<ChildrenStatusTableProps> = ({ numberOfChildren }) => {
    const { state, dispatch, setEducationSystemBudgets, setEducationSystem, setEducationSystemFees, setFutureKindergartenExpenses, setFutureSchoolExpenses, setFutureHighSchoolExpenses, setFutureTeenageClassExpenses, setTeenageClassExpenses, setFuturePrivateLessonExpenses, setPrivateLessonExpenses, setFutureEducationPersonalCareExpenses, setFutureEducationDayCareExpenses } = useFutureExpensesState();

    const ageOptions = Array.from({ length: 18 }, (_, i) => i + 0);
    const educationLevelOptions = ['גיל הרך', 'יסודי', 'תיכון'];
    const educationSystemOptions = [
        'מיץ פטל', 'תות', 'סביון', 'פשוש', 'רימון', 'פעמון', 'דובדבן', 'אורנים', 'נעורים', 'חינוך מיוחד', 'אחר'
    ];
    const educationPrivateLessonsOptions = Array.from({ length: 4 }, (_, i) => i + 0);
    const educationTeenageClassesOptions = Array.from({ length: 3 }, (_, i) => i + 0);
    const educationDayCareOptions = ['כן', 'לא'];
    const educationPersonalCareOptions = ['כן', 'לא'];
    const educationTransportationOptions = ['מועצה', 'הסעות פרטיות', 'הורים', 'אחר']; /* TODO: Trigger an opening input option both on current and future columns */

    // Ensure childrenData is of type ChildData[]
    const [childrenData, setChildrenData] = useState<ChildData[]>(
        Array.from({ length: numberOfChildren }, (_, i) => ({
            id: i + 1,
            key: i,
            name: '',
            age: null,
            educationLevel: null,
            educationSystem: null,
            educationTeenageClasses: 0,
            teenageClassFees: [],
            educationPrivateLessons: 0,
            futureKindergartenExpenses: 0,
            futureSchoolExpenses: 0,
            futureHighSchoolExpenses: 0,
            //educationTuitionFees: null,
            privateLessonFees: [],
            class: '',
            educationTransportation: null,
            educationPersonalCare: null,
            educationDayCare: null,
            futureEducationPersonalCareExpenses: 0,
            futureEducationDayCareExpenses: 0,
            customTuition: 0,
        }))
    );


    // Update useEffect to use the correct state data
    useEffect(() => {
        // console.log('Updating children data from global state:', state.childrenData); // Turn for logging
        setChildrenData(
            Array.from({ length: numberOfChildren }, (_, i) => ({
                id: i + 1,
                key: i,
                name: state.childrenData[i]?.name || '',
                age: state.childrenData[i]?.age || null,
                educationLevel: state.childrenData[i]?.educationLevel || null,
                educationSystem: state.childrenData[i]?.educationSystem || null,
                educationTeenageClasses: state.childrenData[i]?.educationTeenageClasses || 0,
                teenageClassFees: state.childrenData[i]?.teenageClassFees || [],
                educationPrivateLessons: state.childrenData[i]?.educationPrivateLessons || 0,
                futureKindergartenExpenses: state.childrenData[i]?.futureKindergartenExpenses || 0,
                futureSchoolExpenses: state.childrenData[i]?.futureSchoolExpenses || 0,
                futureHighSchoolExpenses: state.childrenData[i]?.futureHighSchoolExpenses || 0,
                //educationTuitionFees: state.childrenData[i]?.educationTuitionFees || null,
                privateLessonFees: state.childrenData[i]?.privateLessonFees || [],
                class: '',
                educationTransportation: state.childrenData[i]?.educationTransportation || null,
                educationPersonalCare: state.childrenData[i]?.educationPersonalCare || null,
                educationDayCare: state.childrenData[i]?.educationDayCare || null,
                futureEducationPersonalCareExpenses: state.childrenData[i]?.futureEducationPersonalCareExpenses || 0,
                futureEducationDayCareExpenses: state.childrenData[i]?.futureEducationDayCareExpenses || 0,
                customTuition: state.childrenData[i]?.customTuition || 0,
            }))
        );
    }, [numberOfChildren, state.childrenData]);

    const handleInputChange = (index: number, field: string, value: any) => {
        console.log(`Updating field: ${field}, value: ${value} for index: ${index}`);
        const updatedData = [...childrenData];
        if (field === 'teenageClassFees' || field === 'privateLessonFees') {
            updatedData[index][field][value.lessonIndex] = value.fee;
        } else {
            updatedData[index][field] = value;
        }
        setChildrenData(updatedData);

        // console.log('Updated Data:', updatedData); // Debugging line to verify the state update // Turn for logging

        // Update global state for education system budgets and fees
        if (field === 'educationSystem') {
            const updatedBudgets = [...state.educationSystemBudgets];
            if (value !== null) {
                updatedBudgets[index] = educationSystemBudgetsMap[value];
            }
            setEducationSystemBudgets(updatedBudgets);


            const updatedFees = [...state.educationSystemFees];
            if (value !== null) {
                updatedFees[index] = educationSystemFeesMap[value];
            }
            setEducationSystemFees(updatedFees);

            const updatedSystems = [...state.educationSystem];
            if (value !== null) {
                updatedSystems[index] = value;
            }
            setEducationSystem(updatedSystems);
        }

        if (field === 'teenageClassFees') {
            const updatedTeenageClassExpenses = [...state.teenageClassExpenses];
            const updatedFutureTeenageClassExpenses = [...state.futureTeenageClassExpenses];
            const educationTeenageClasses = childrenData[index].educationTeenageClasses;

            if (educationTeenageClasses) {
                updatedTeenageClassExpenses[index] = value;
                updatedFutureTeenageClassExpenses[index] = value;
                setTeenageClassExpenses(updatedTeenageClassExpenses);
                setFutureTeenageClassExpenses(updatedFutureTeenageClassExpenses);
            }
        }

        if (field === 'privateLessonFees') {
            const updatedPrivateLessonExpenses = [...state.privateLessonExpenses];
            const updatedFuturePrivateLessonExpenses = [...state.futurePrivateLessonExpenses];
            const educationPrivateLessons = childrenData[index].educationPrivateLessons;

            if (educationPrivateLessons) {
                updatedPrivateLessonExpenses[index] = value;
                updatedFuturePrivateLessonExpenses[index] = value;
                setPrivateLessonExpenses(updatedPrivateLessonExpenses);
                setFuturePrivateLessonExpenses(updatedFuturePrivateLessonExpenses);
            }
        }

        if (field === 'educationLevel') {
            // console.log(`Setting future expenses for ${value}`); // Turn for logging

            if (value === 'גיל הרך') {
                // const updatedEducationLevel = childrenData[index].educationLevel;
                // updatedEducationLevel === 'גיל הרך';
                setFutureKindergartenExpenses(index, 0); // Initialize with 0
            } else if (value === 'יסודי') {
                // const updatedEducationLevel = childrenData[index].educationLevel;
                // updatedEducationLevel === 'גיל הרך';
                setFutureSchoolExpenses(index, 0); // Initialize with 0
            } else if (value === 'תיכון') {
                // const updatedEducationLevel = childrenData[index].educationLevel;
                // updatedEducationLevel === 'גיל הרך';
                setFutureHighSchoolExpenses(index, 0); // Initialize with 0
            }

            // Ensure the global state is updated
            // Here we ensure that the global state is updated accordingly
            if (field === 'educationLevel') {
                const updatedChildrenData = state.childrenData.map((child, i) =>
                    i === index ? { ...child, educationLevel: value } : child
                );
                dispatch({ type: 'SET_CHILDREN_DATA', payload: updatedChildrenData });
            }
        }

        if (field === 'educationPersonalCare') {
            if (value === 'כן') {
                setFutureEducationPersonalCareExpenses(index, 0); // Initialize with 0
            }

            // Ensure the global state is updated
            // Here we ensure that the global state is updated accordingly
            if (field === 'educationPersonalCare') {
                const updatedChildrenData = state.childrenData.map((child, i) =>
                    i === index ? { ...child, educationPersonalCare: value } : child
                );
                dispatch({ type: 'SET_CHILDREN_DATA', payload: updatedChildrenData });
            }
        }

        if (field === 'educationDayCare') {
            if (value === 'כן') {
                setFutureEducationDayCareExpenses(index, 0); // Initialize with 0
            }

            // Ensure the global state is updated
            // Here we ensure that the global state is updated accordingly
            if (field === 'educationDayCare') {
                const updatedChildrenData = state.childrenData.map((child, i) =>
                    i === index ? { ...child, educationDayCare: value } : child
                );
                dispatch({ type: 'SET_CHILDREN_DATA', payload: updatedChildrenData });
            }
        }
    };

    // useEffect(() => { // Turn for logging
    //     console.log('Children Data Updated:', childrenData); // Debugging line to verify re-render
    // }, [childrenData]);


    return (
        <Form className={styles.form}>
            {childrenData.map((child, index) => (
                <Card key={child.key} className={styles.childCard}>
                    <Form.Item label="שם" className={styles.childField}>
                        <Input
                            placeholder="הכנס שם"
                            value={child.name}
                            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="גיל" className={styles.childField}>
                        <Select
                            placeholder="בחר גיל"
                            className={styles.select}
                            value={child.age}
                            onChange={(value) => handleInputChange(index, 'age', value)}
                        >
                            {ageOptions.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="השכלה" className={styles.childField}>
                        <Select
                            placeholder="בחר רמת השכלה"
                            className={styles.select}
                            value={child.educationLevel}
                            onChange={(value) => handleInputChange(index, 'educationLevel', value)}
                        >
                            {educationLevelOptions.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="מערכת חינוך" className={styles.childField}>
                        <Select
                            placeholder="בחר מערכת חינוך"
                            className={styles.select}
                            value={child.educationSystem}
                            onChange={(value) => handleInputChange(index, 'educationSystem', value)}
                        >
                            {educationSystemOptions.map((option, index) => (
                                <Option key={index} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* <Form.Item label="שכר לימוד " className={styles.childField}>
                        <InputNumber
                            min={0}
                            placeholder="שכר לימוד"
                            value={child.customTuition}
                            onChange={(value) => handleInputChange(index, 'customTuition', value)}
                            className={styles.select}
                        />
                    </Form.Item> */}
                    <Form.Item label="שיעורים פרטיים" className={styles.childField}>
                        <Select
                            placeholder="בחר מספר"
                            className={styles.select}
                            value={child.educationPrivateLessons}
                            onChange={(value) => handleInputChange(index, 'educationPrivateLessons', value)}
                        >
                            {educationPrivateLessonsOptions.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {Array.from({ length: child.educationPrivateLessons }).map((_, lessonIndex) => (
                        <Form.Item
                            key={`child-${index}-private-lesson-${lessonIndex}-fee`}
                            label={`עלות שיעור ${lessonIndex + 1}`}
                        >
                            <InputNumber
                                min={0}
                                value={child.privateLessonFees[lessonIndex]}
                                onChange={(value) =>
                                    handleInputChange(index, 'privateLessonFees', { lessonIndex, fee: value || 0 })
                                }
                            />
                        </Form.Item>
                    ))}
                    <Form.Item label="חוג העשרה" className={styles.childField}>
                        <Select
                            placeholder="בחר חוגי העשרה"
                            className={styles.select}
                            value={child.educationTeenageClasses}
                            onChange={(value) => handleInputChange(index, 'educationTeenageClasses', value)}
                        >
                            {educationTeenageClassesOptions.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* Dynamically render input fields for fees */}
                    {Array.from({ length: child.educationTeenageClasses }).map((_, lessonIndex) => (
                        <Form.Item
                            key={`child-${index}-teenage-class-${lessonIndex}-fee`}
                            label={`עלות חוג ${lessonIndex + 1}`}
                        >
                            <InputNumber
                                min={0}
                                value={child.teenageClassFees[lessonIndex]}
                                onChange={(value) =>
                                    handleInputChange(index, 'teenageClassFees', { lessonIndex, fee: value || 0 })
                                }
                            />
                        </Form.Item>
                    ))}
                    <Form.Item label="הסעות" className={styles.childField}>
                        <Select
                            placeholder="בחר סוג"
                            className={styles.select}
                            value={child.educationTransportation}
                            onChange={(value) => handleInputChange(index, 'educationTransportation', value)}
                        >
                            {educationTransportationOptions.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="טיפול אישי" className={styles.childField}>
                        <Select
                            placeholder="בחר"
                            className={styles.select}
                            value={child.educationPersonalCare}
                            onChange={(value) => handleInputChange(index, 'educationPersonalCare', value)}
                        >
                        {educationPersonalCareOptions.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item label="צהרון" className={styles.childField}>
                        <Select
                                placeholder="בחר"
                                className={styles.select}
                                value={child.educationDayCare}
                                onChange={(value) => handleInputChange(index, 'educationDayCare', value)}
                            >
                            {educationDayCareOptions.map((option) => (
                                <Option key={option} value={option}>
                                    {option}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </Card>
            ))}
        </Form>
    );
};

export default ChildrenStatusTable;