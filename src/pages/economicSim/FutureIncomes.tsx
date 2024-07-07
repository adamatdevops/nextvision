/* ./src/pages/economicSim/FutureIncomes.tsx */
import React, { useEffect, useState } from 'react';
import { Card, Typography, Form, InputNumber, Tooltip, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import InfoDrawer from '../../components/ui/drawer/InfoDrawer';
import { drawerContent } from '../../components/ui/drawer/drawerContent';
// import { useFutureIncomes } from '../../context/FutureIncomesGSP'; // Import the hook
import { useGlobalState } from '../../GlobalStateProvider'; // Import the hook
import type { ChildData } from '../../GlobalStateProvider'; // Import the hook
import styles from './css/AccountBalance.module.css';
// import educationSystemBudgetsMap from '../../components/ui/tables/ChildrenStatusTable';

// immport
const educationSystemBudgetsMap: { [key: string]: number } = {
    'מיץ פטל': 794,
    'תות': 878,
    'סביון': 605,
    'פשוש': 605,
    'רימון': 663,
    'פעמון': 894,
    'דובדבן': 921,
    'אורנים': 1072,
    'נעורים': 1146,
    'חינוך מיוחד': 0, // TODO: Update this to fill by member
    'אחר': 0, // TODO: Update this to fill by member
};

const { Title } = Typography;

interface FutureIncomesProps {
    setIncomes: (incomes: number[]) => void;
}


const calculateFamilyMemberCount = (familyStatus, partnerCommunityStatus, numberOfChildren): number => {
    let familyMemberCount = 1 + numberOfChildren; // Single parent + children

    if (familyStatus === 'married') {
        if (partnerCommunityStatus === 'community-member') {
            familyMemberCount = 2 + numberOfChildren; // 2 for the parents + children
        } else if (partnerCommunityStatus === 'not-community-member') {
            familyMemberCount = 1 + numberOfChildren; // 1 parent + children
        }
    } else if (familyStatus === 'single') {
        familyMemberCount = 1 + numberOfChildren; // Single parent + children
    } else if (familyStatus === 'widowed' || familyStatus === 'divorced') {
        familyMemberCount = 1 + numberOfChildren; // Single parent + children
    }

    return familyMemberCount;
};

const calculateNationalInsuranceChildrenCount = (numberOfChildren): number => {
    let nationalInsuranceChildrenCount = 0;

    if (numberOfChildren === 1) {
        nationalInsuranceChildrenCount = 164;
    } else if (numberOfChildren === 2) {
        nationalInsuranceChildrenCount = 371;
    } else if (numberOfChildren === 3) {
        nationalInsuranceChildrenCount = 578;
    } else if (numberOfChildren === 4) {
        nationalInsuranceChildrenCount = 785;
    } else if (numberOfChildren === 5) {
        nationalInsuranceChildrenCount = 992;
    } else if (numberOfChildren === 6) {
        nationalInsuranceChildrenCount = 1156;
    } else if (numberOfChildren === 7) {
        nationalInsuranceChildrenCount = 1320;
    }

    return nationalInsuranceChildrenCount;
};

// Function to calculate safety net for adults
const calculateAdultSafetyNet = (
    familyStatus: string | null,
    partnerCommunityStatus: string | null
): number => {
    if (familyStatus === 'single' || familyStatus === 'widowed' || familyStatus === 'divorced') {
        return 5571; // Safety net for a single adult
    } else if (familyStatus === 'married') {
        if (partnerCommunityStatus === 'community-member') {
            return 5571 * 2; // Safety net for two adults
        } else {
            return 5571; // Safety net for one adult
        }
    }
    return 0; // Default to 0 if family status is not recognized
};

// Function to calculate safety net for children
const calculateChildrenSafetyNet = (childrenData: ChildData[]): number => {
    return childrenData.reduce((total, child) => {
        if (child.educationSystem && educationSystemBudgetsMap[child.educationSystem]) {
            return total + educationSystemBudgetsMap[child.educationSystem];
        }
        return total;
    }, 0);
};

// Function to calculate total family safety net
const calculateFamilySafetyNet = (
    adultSafetyNet: number,
    //childrenSafetyNet: number
): number => {
    // return adultSafetyNet + childrenSafetyNet;
    return adultSafetyNet;
};

const FutureIncomes: React.FC<FutureIncomesProps> = ({ setIncomes }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    // const [drawerContent, setDrawerContent] = useState('');
    const [drawerContentKey, setDrawerContentKey] = useState<keyof typeof drawerContent | null>(null);

    //const showDrawer = (content: string) => {
    const showDrawer = (key: keyof typeof drawerContent) => {
        //setDrawerContent(content);
        setDrawerContentKey(key);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setDrawerContentKey(null);
    };

    const {
        state,
        // setFuturePersonalBudget,
        setFutureNetIncome,
        setFutureGrossIncome,
        setFuturePartnerNetIncome,
        setFuturePartnerGrossIncome,
        setFuturePensionAllowance,
        setFuturePartnerPensionAllowance,
        setFutureNationalInsuranceAllowance,
        setFutureNationalInsuranceAllowanceCommunity,
        setFutureElderlyPension,
        setFuturePartnerElderlyPension,
        setFutureRecoveryFee,
        setFuturePartnerRecoveryFee,
        setFutureEducationFund,
        setFuturePartnerEducationFund,
        setFutureWelfareIncomes,
        setFutureDentistIncomes,
        setFuturePartnerDentistIncomes,
        setFutureChildrenDentistIncomes,
        setFutureChildrenAddition,
        setFutureFamilySafetyNet,
        setFutureChildrenSafetyNet,
        setFutureProvisions,
        // setFutureLaundry,
        // setFutureGas,
        // setFutureHygiene,
        // setFutureMaintenance,
        // setFutureVehicle,
        // setFutureEnergy,
        // setFutureBenefitForWork,
        // setFutureOutsourcedFood,
        // setFutureChronicleTreatment,
        setMemberRetired,
        setMemberPartnerRetired,
        setFutureAdaptationGrant,
        setFutureOtherIncome,
        /* Added due to SafetyNet calculation */
        // setPartnerCommunityStatus,
        // setNumberOfChildren,
        // setFutureEducationSystemExpenses,
        // setFutureSchoolExpenses,
        // setfutureHighSchoolExpenses,
        setFutureWelfareExpenses,
        setFutureDentistExpenses,
        setFuturePartnerDentistExpenses,
        setFutureChildrenDentistExpenses,
        setFamilyStatus,
        setChildrenData,
    } = useGlobalState();

    const {
        // futurePersonalBudget,
        futureNetIncome,
        futureGrossIncome,
        futurePartnerNetIncome,
        futurePartnerGrossIncome,
        futurePensionAllowance,
        futurePartnerPensionAllowance,
        futureNationalInsuranceAllowance,
        futureNationalInsuranceAllowanceCommunity,
        futureElderlyPension,
        futurePartnerElderlyPension,
        futureRecoveryFee,
        futurePartnerRecoveryFee,
        futureEducationFund,
        futurePartnerEducationFund,
        futureWelfareIncomes,
        futureDentistIncomes,
        futurePartnerDentistIncomes,
        futureChildrenDentistIncomes,
        futureChildrenAddition,
        futureFamilySafetyNet,
        futureChildrenSafetyNet,
        futureProvisions,
        // futureLaundry,
        // futureGas,
        // futureHygiene,
        // futureMaintenance,
        // futureVehicle,
        // futureEnergy,
        // futureBenefitForWork,
        // futureOutsourcedFood,
        // futureChronicleTreatment,
        memberRetired,
        memberPartnerRetired,
        futureAdaptationGrant,
        futureOtherIncome,
        /* Added due to SafetyNet calculation */
        partnerCommunityStatus,
        numberOfChildren,
        futureEducationSystemExpenses,
        futureKindergartenExpenses,
        futureSchoolExpenses,
        futureHighSchoolExpenses,
        futurePrivateLessonExpenses,
        futureTeenageClassExpenses,
        futureEducationTransportationExpenses,
        futureWelfareExpenses,
        futureDentistExpenses,
        futurePartnerDentistExpenses,
        futureChildrenDentistExpenses,
        familyStatus,
        childrenData,
    } = state;

    const handleFutureNationalInsuranceChange = (index: number, value: number) => {
        const updatedAllowances = [...futureNationalInsuranceAllowance];
        updatedAllowances[index] = value;
        setFutureNationalInsuranceAllowance(updatedAllowances);
    };

    useEffect(() => {
        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, state.numberOfChildren);
        let nationalInsuranceChildrenCount = calculateNationalInsuranceChildrenCount(childrenCount);

        const adultSafetyNet = calculateAdultSafetyNet(state.familyStatus, state.partnerCommunityStatus);
        // const childrenSafetyNet = calculateChildrenSafetyNet(state.childrenData);

        const futureEducationFundAmount = state.futureGrossIncome * 0.075
        const futurePartnerEducationFundAmount = state.futurePartnerGrossIncome * 0.075
        setFutureEducationFund(futureEducationFundAmount)
        setFuturePartnerEducationFund(futurePartnerEducationFundAmount)

        const calculateFutureChildrenSafetyNet = () => {
            // const toArray = (value: number | number[]): number[] => {
            //     return Array.isArray(value) ? value : [value];
            // };

            // const logAndConvertToArray = (label: string, value: number | number[]): number[] => {
            //     const result = toArray(value);
            //     console.log(`${label}:`, result);
            //     return result;
            // };

            // Helper function to extract fees from arrays of objects
            const extractLessonFees = (arr: { lessonIndex: number; fee: number }[]): number[] => {
                return arr.map(item => item.fee);
            };
            const extractClassFees = (arr: { classIndex: number; fee: number }[]): number[] => {
                return arr.map(item => item.fee);
            };
            // Version 1
            const sumArray = (arr: number[]): number => {
                return arr.reduce((sum, value) => sum + value, 0);
            };
            // Version 2
            // Handling arrays of numbers directly
            const sumNumberArray = (arr: number | number[]): number => {
                return Array.isArray(arr) ? sumArray(arr) : arr;
            };

            // Works
            //const totalFuturePrivateLessonExpenses = sumNumberArray(extractLessonFees(state.futurePrivateLessonExpenses));
            //const totalFutureTeenageClassExpenses = sumNumberArray(extractClassFees(state.futureTeenageClassExpenses));
            // Works
            // Calculate total teenage class expenses
            const totalFutureTeenageClassExpenses = state.futureTeenageClassExpenses
                ? Object.values(state.futureTeenageClassExpenses).reduce((acc, childExpenses) => acc + (Array.isArray(childExpenses) ? childExpenses.reduce((sum, expense) => sum + expense, 0) : 0), 0)
                : 0;

            // Calculate total private lesson expenses
            const totalFuturePrivateLessonExpenses = state.futurePrivateLessonExpenses
                ? Object.values(state.futurePrivateLessonExpenses).reduce((acc, childExpenses) => acc + (Array.isArray(childExpenses) ? childExpenses.reduce((sum, expense) => sum + expense, 0) : 0), 0)
                : 0;

            const totalFutureKindergartenExpenses = sumArray(state.futureKindergartenExpenses);
            const totalFutureSchoolExpenses = sumArray(state.futureSchoolExpenses);
            const totalFutureHighSchoolExpenses = sumArray(state.futureHighSchoolExpenses);

            console.log('Future Private Lesson Expenses:', totalFuturePrivateLessonExpenses);
            console.log('Future Teenage Class Expenses:', totalFutureTeenageClassExpenses);
            console.log('Future Education System Expenses:', state.futureEducationSystemExpenses);
            console.log('Future Kindergarten Expenses:', totalFutureKindergartenExpenses);
            console.log('Future School Expenses:', totalFutureSchoolExpenses);
            console.log('Future High School Expenses:', totalFutureHighSchoolExpenses);
            console.log('Future Education Transportation Expenses:', state.futureEducationTransportationExpenses);

            const totalFutureExpenses =
                totalFuturePrivateLessonExpenses +
                totalFutureTeenageClassExpenses +
                state.futureEducationSystemExpenses +
                totalFutureKindergartenExpenses +
                totalFutureSchoolExpenses +
                totalFutureHighSchoolExpenses +
                state.futureEducationTransportationExpenses;

            console.log('Total Future Expenses:', totalFutureExpenses);

            const childrenSafetyNet = totalFutureExpenses * 0.25;
            console.log('Children Safety Net (Calculated):', childrenSafetyNet);

            setFutureChildrenSafetyNet(childrenSafetyNet);
        };

        calculateFutureChildrenSafetyNet();

        const totalSafetyNet = calculateFamilySafetyNet(adultSafetyNet);

        // Calculate final safety net coverage
        const futureSafetyNet = Math.max(0, totalSafetyNet - state.futureNetIncome);

        // Update global state
        setFutureFamilySafetyNet(futureSafetyNet);
        // setFutureChildrenSafetyNet(childrenSafetyNet);


        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') {
            setFutureNetIncome(futureNetIncome || 0);
            setFutureGrossIncome(futureGrossIncome || 0);
            setFuturePartnerNetIncome(futurePartnerNetIncome || 0),
            setFuturePartnerGrossIncome(futurePartnerGrossIncome || 0),
            setFutureNationalInsuranceAllowance(futureNationalInsuranceAllowance);
            setFutureNationalInsuranceAllowanceCommunity(nationalInsuranceChildrenCount || 0);
            setFutureRecoveryFee(futureRecoveryFee || 0);
            setFuturePartnerRecoveryFee(futurePartnerRecoveryFee || 0);
            setFutureEducationFund(futureEducationFundAmount || 0);
            setFuturePartnerEducationFund(futurePartnerEducationFundAmount || 0);
            setFutureWelfareIncomes(state.futureWelfareExpenses * 0.30);
            setFutureDentistIncomes(state.futureDentistExpenses * 0.50);
            setFuturePartnerDentistIncomes(state.futurePartnerDentistExpenses * 0.50);
            setFutureChildrenDentistIncomes(state.futureChildrenDentistExpenses * 0.50);
            setFutureChildrenAddition(futureChildrenAddition || 0);
            setFutureProvisions(futureProvisions || 0);
            setFutureAdaptationGrant(2000);
            setFutureOtherIncome(futureOtherIncome || 0);
        }

        if (state.memberRetired === 'yes' && state.memberPartnerRetired === 'yes' && state.familyStatus !== 'widower') {
            setFuturePensionAllowance(6738);
            setFuturePartnerPensionAllowance(6738);
            setFutureElderlyPension(2234);
            setFuturePartnerElderlyPension(2234);
            setFutureFamilySafetyNet(0);
            setFutureWelfareIncomes(state.futureWelfareExpenses * 0.30);
            setFutureDentistIncomes(state.futureDentistExpenses * 0.50);
            setFuturePartnerDentistIncomes(futurePartnerDentistIncomes || 0);
        }

        if (state.memberRetired === 'yes' && state.memberPartnerRetired === 'no' && state.familyStatus !== 'widower') {
            setFuturePensionAllowance(6738);
            setFuturePartnerPensionAllowance(0);
            setFutureElderlyPension(2234);
            setFutureFamilySafetyNet(0);
            setFutureWelfareIncomes(state.futureWelfareExpenses * 0.30);
        }

        if (state.memberRetired === 'no' && state.memberPartnerRetired === 'yes' && state.familyStatus !== 'widower') {
            setFuturePensionAllowance(0);
            setFuturePartnerPensionAllowance(6738);
            setFuturePartnerElderlyPension(2234);
            setFutureFamilySafetyNet(0);
            setFutureWelfareIncomes(state.futureWelfareExpenses * 0.30);
            setFutureDentistIncomes(state.futureDentistExpenses * 0.50);
            setFuturePartnerDentistIncomes(futurePartnerDentistIncomes || 0);
        }

        if (state.familyStatus === 'widower' && state.memberRetired === 'yes' && state.memberPartnerRetired === 'no') {
            // setFuturePensionAllowance(2234 + 1748 || 0);
            setFuturePensionAllowance(6738);
            setFuturePartnerPensionAllowance(futurePartnerPensionAllowance || 0);
            setFutureElderlyPension(2234 + 1748)
            setFutureFamilySafetyNet(0);
            setFutureWelfareIncomes(state.futureWelfareExpenses * 0.30);
            setFutureDentistIncomes(state.futureDentistExpenses * 0.50);
            setFuturePartnerDentistIncomes(futurePartnerDentistIncomes || 0);
        }

        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            setFutureNetIncome(futureNetIncome || 0);
            setFutureGrossIncome(futureGrossIncome || 0);
            setFuturePartnerNetIncome(futurePartnerNetIncome || 0),
                setFuturePartnerGrossIncome(futurePartnerGrossIncome || 0),
                setFutureNationalInsuranceAllowance(futureNationalInsuranceAllowance);
            setFutureNationalInsuranceAllowanceCommunity(nationalInsuranceChildrenCount || 0);
            setFutureRecoveryFee(futureRecoveryFee || 0);
            setFuturePartnerRecoveryFee(futurePartnerRecoveryFee || 0);
            setFutureEducationFund(futureEducationFundAmount || 0);
            setFuturePartnerEducationFund(futurePartnerEducationFundAmount || 0);
            setFutureWelfareIncomes(state.futureWelfareExpenses * 0.30);
            setFutureDentistIncomes(state.futureDentistExpenses * 0.50);
            setFuturePartnerDentistIncomes(futurePartnerDentistIncomes || 0);
            setFutureChildrenDentistIncomes(state.futureChildrenDentistExpenses * 0.50);
            setFutureChildrenAddition(futureChildrenAddition || 0);
            setFutureProvisions(futureProvisions || 0);
            setFutureAdaptationGrant(1000);
            setFutureOtherIncome(futureOtherIncome || 0);
        }

        setIncomes([
            // futurePersonalBudget,
            futureNetIncome,
            futureGrossIncome,
            futurePartnerNetIncome,
            futurePartnerGrossIncome,
            futurePensionAllowance,
            futurePartnerPensionAllowance,
            ...futureNationalInsuranceAllowance,
            // futureNationalInsuranceAllowance,
            futureNationalInsuranceAllowanceCommunity,
            futureElderlyPension,
            futurePartnerElderlyPension,
            futureRecoveryFee,
            futurePartnerRecoveryFee,
            futureEducationFund,
            futurePartnerEducationFund,
            futureWelfareIncomes,
            futureDentistIncomes,
            futurePartnerDentistIncomes,
            futureChildrenDentistIncomes,
            futureChildrenAddition,
            futureFamilySafetyNet,
            futureProvisions,
            // futureLaundry,
            // futureGas,
            // futureHygiene,
            // futureMaintenance,
            // futureVehicle,
            // futureEnergy,
            // futureBenefitForWork,
            // futureOutsourcedFood,
            // futureChronicleTreatment,
            futureWelfareExpenses,
            futureDentistExpenses,
            futurePartnerDentistExpenses,
            futureChildrenDentistExpenses,
            futureAdaptationGrant,
            futureOtherIncome,
        ]);
    }, [
        // futurePersonalBudget,
        futureNetIncome,
        futureGrossIncome,
        futurePartnerNetIncome,
        futurePartnerGrossIncome,
        futurePensionAllowance,
        futurePartnerPensionAllowance,
        futureNationalInsuranceAllowance,
        futureNationalInsuranceAllowanceCommunity,
        futureElderlyPension,
        futurePartnerElderlyPension,
        futureRecoveryFee,
        futurePartnerRecoveryFee,
        futureEducationFund,
        futurePartnerEducationFund,
        futureWelfareIncomes,
        futureDentistIncomes,
        futurePartnerDentistIncomes,
        futureChildrenDentistIncomes,
        futureChildrenAddition,
        futureFamilySafetyNet,
        futureFamilySafetyNet,
        futureProvisions,
        // futureLaundry,
        // futureGas,
        // futureHygiene,
        // futureMaintenance,
        // futureVehicle,
        // futureEnergy,
        // futureBenefitForWork,
        // futureOutsourcedFood,
        // futureChronicleTreatment,
        memberRetired,
        memberPartnerRetired,
        futureAdaptationGrant,
        futureOtherIncome,
        /* Added due to SafetyNet calculation */
        partnerCommunityStatus,
        numberOfChildren,
        futureEducationSystemExpenses,
        futureKindergartenExpenses,
        futureSchoolExpenses,
        futureHighSchoolExpenses,
        futurePrivateLessonExpenses,
        futureTeenageClassExpenses,
        futureEducationTransportationExpenses,
        futureWelfareExpenses,
        futureDentistExpenses,
        futurePartnerDentistExpenses,
        futureChildrenDentistExpenses,
        familyStatus,
        childrenData,
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הכנסות</Title>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                <Form.Item
                    label="שכר נטו"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureNetIncome}
                        onChange={(value) => setFutureNetIncome(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על שכר נטו">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureNetIncome')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="שכר ברוטו חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureGrossIncome}
                        onChange={(value) => setFutureGrossIncome(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על שכר ברוטו">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureGrossIncome')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.partnerCommunityStatus !== 'no-partner' && (
                    <Form.Item
                        label="שכר נטו - בן/בת זוג"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futurePartnerNetIncome}
                            onChange={(value) => setFuturePartnerNetIncome(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על שכר נטו">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futurePartnerNetIncome')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.partnerCommunityStatus !== 'no-partner' && (
                    <Form.Item
                        label="שכר ברוטו בן/ת זוג"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futurePartnerGrossIncome}
                            onChange={(value) => setFuturePartnerGrossIncome(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על שכר ברוטו">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futurePartnerGrossIncome')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.memberRetired === "yes" && (
                    <Form.Item
                        label="קצבת פנסיה (קיבוץ) - חבר/ה"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futurePensionAllowance}
                            onChange={(value) => setFuturePensionAllowance(value || 0)}
                            // min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על קצבת פנסיה">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futurePensionAllowance')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {memberPartnerRetired === "yes" && (
                    <Form.Item
                        label="קצבת פנסיה (קיבוץ) - בן/בת זוג"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futurePartnerPensionAllowance}
                            onChange={(value) => setFuturePartnerPensionAllowance(value || 0)}
                            // min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על קצבת פנסיה">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futurePartnerPensionAllowance')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.memberRetired === "yes" && (
                    <Form.Item
                        label="קצבת זקנה - חבר/ה"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futureElderlyPension}
                            onChange={(value) => setFutureElderlyPension(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על קצבת זקנה">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futureElderlyPension')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.memberPartnerRetired === "yes" && (
                    <Form.Item
                        label="קצבת זקנה - בן/בת זוג"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futurePartnerElderlyPension}
                            onChange={(value) => setFuturePartnerElderlyPension(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על קצבת זקנה">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futurePartnerElderlyPension')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.familyNationalInsurance != null && state.familyNationalInsurance > 0 &&
                    futureNationalInsuranceAllowance.map((allowance, index) => (
                        <Form.Item
                            key={index}
                            label={`קצבת נכות ${index + 1}`}
                            labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                            wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}>
                            <InputNumber
                                value={allowance}
                                onChange={(value) => handleFutureNationalInsuranceChange(index, value || 0)}
                                min={0}
                                style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                            />
                            <Tooltip title="מידע על קצבת נכות">
                                <Button
                                    type="link"
                                    icon={<InfoCircleOutlined />}
                                    onClick={() => showDrawer('futureNationalInsuranceAllowance')}
                                />
                            </Tooltip>
                        </Form.Item>
                    ))}
                <Form.Item
                    label="קצבאות ביטוח לאומי (קיבוץ)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureNationalInsuranceAllowanceCommunity}
                        onChange={(value) => setFutureNationalInsuranceAllowanceCommunity(value || 0)}
                        min={0}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על קצבת ביטוח לאומי">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureNationalInsuranceAllowanceCommunity')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="דמי הבראה - חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureRecoveryFee}
                        onChange={(value) => setFutureRecoveryFee(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על דמי הבראה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureRecoveryFee')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="דמי הבראה - בן/בת זוג"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePartnerRecoveryFee}
                        onChange={(value) => setFuturePartnerRecoveryFee(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על דמי הבראה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futurePartnerRecoveryFee')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="קרן השתלמות - חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureEducationFund}
                        onChange={(value) => setFutureEducationFund(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על קרן השתלמות">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureEducationFund')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="קרן השתלמות - בן/בת זוג"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePartnerEducationFund}
                        onChange={(value) => setFuturePartnerEducationFund(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על קרן השתלמות">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futurePartnerEducationFund')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="זיכוי בגין רווחה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureWelfareIncomes}
                        onChange={(value) => setFutureWelfareIncomes(value || 0)}
                        min={0}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על זיכוי בגין רווחה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureWelfareIncomes')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="זיכוי בגין טיפולי שיניים - חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureDentistIncomes}
                        onChange={(value) => setFutureDentistIncomes(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על זיכוי בגין טיפולי שיניים">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureDentistIncomes')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.partnerCommunityStatus !== 'no-partner' && state.partnerCommunityStatus === 'community-member' && (
                    <Form.Item
                        label="בן/ת זוג - זיכוי בגין טיפולי שניים"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futurePartnerDentistIncomes}
                            onChange={(value) => setFuturePartnerDentistIncomes(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על זיכוי בגין טיפולי שיניים">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futurePartnerDentistIncomes')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                <Form.Item
                    label="זיכוי בגין טיפולי שיניים - ילדים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureChildrenDentistIncomes}
                        onChange={(value) => setFutureChildrenDentistIncomes(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על זיכוי בגין טיפולי שיניים">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureChildrenDentistIncomes')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="השלמה/זיכוי בגין ילדים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureChildrenAddition}
                        onChange={(value) => setFutureChildrenAddition(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על זיכוי בגין ילדים">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureChildrenAddition')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="רשת ביטחון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureFamilySafetyNet}
                        onChange={(value) => setFutureFamilySafetyNet(value || 0)}
                        min={0}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על רשת ביטחון">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureFamilySafetyNet')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.futureFamilySafetyNet !== 0 && (
                    <Form.Item
                        label="רשת ביטחון חינוך"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futureChildrenSafetyNet}
                            onChange={(value) => setFutureChildrenSafetyNet(value || 0)}
                            min={0}
                            disabled
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                        />
                        <Tooltip title="מידע על רשת ביטחון חינוך">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('futureFamilySafetyNet')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                <Form.Item
                    label="מענק הסתגלות"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureAdaptationGrant}
                        onChange={(value) => setFutureAdaptationGrant(value || 0)}
                        min={1000}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על מענק הסתגלות">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureAdaptationGrant')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureOtherIncome}
                        onChange={(value) => setFutureOtherIncome(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הכנסות אחרות">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('futureOtherIncome')}
                        />
                    </Tooltip>
                </Form.Item>
                {drawerContentKey && (
                    <InfoDrawer
                        // title="מידע"
                        //content={drawerContent}
                        open={drawerOpen}
                        onClose={closeDrawer}
                        contentKey={drawerContentKey}
                    />
                )}
            </Form>
        </Card>
    );
};

export default FutureIncomes;
