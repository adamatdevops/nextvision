/* ./src/pages/economicSim/FutureExpenses.tsx */
import React, { useEffect, useState } from 'react';
import { Card, Typography, Form, InputNumber, Tooltip, Button } from 'antd';
import { InfoCircleFilled, InfoCircleTwoTone } from '@ant-design/icons';
import InfoDrawer from '../../components/ui/drawer/InfoDrawer';
import { drawerContent } from '../../components/ui/drawer/drawerContent';
// import { childrenData, useFutureExpensesState } from '../../context/FutureExpensesGSP'; // Import the hook
import { childrenData, useGlobalState } from '../../GlobalStateProvider'; // Import the hook
import type { ChildData } from '../../GlobalStateProvider';

import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface FutureExpensesProps {
    setExpenses: (expenses: number[]) => void;
}

export const educationTuitionFeesMap: { [key: string]: number } = {
    'גיל הרך': 0,
    'יסודי': 0,
    'תיכון': 0,
};

const calculateFamilyMemberCount = (familyStatus, partnerCommunityStatus, childrenCount): number => {
    let familyMemberCount = 1 + childrenCount; // Single parent + children

    if (familyStatus === 'married') {
        if (partnerCommunityStatus === 'community-member') {
            familyMemberCount = 2 + childrenCount; // 2 for the parents + children
        } else if (partnerCommunityStatus === 'not-community-member') {
            familyMemberCount = 1 + childrenCount; // 1 parent + children
        }
    } else if (familyStatus === 'single') {
        familyMemberCount = 1 + childrenCount; // Single parent + children
    } else if (familyStatus === 'widowed' || familyStatus === 'divorced') {
        familyMemberCount = 1 + childrenCount; // Single parent + children
    }

    return familyMemberCount;
};

const calculateApartmentSquareFootageTax = (apartmentSquareFootage): number => {
    let apartmentSquareFootageTax = 0;

    if (apartmentSquareFootage !== null) {
        apartmentSquareFootageTax = apartmentSquareFootage * 43;
    } else {
        // Handle the case where apartmentSquareFootage is null
        apartmentSquareFootageTax = 0; // or any default/fallback value
    }

    return apartmentSquareFootageTax
}


const FutureExpenses: React.FC<FutureExpensesProps> = ({ setExpenses }) => {
    /* Use the useCurrentExpenses hook to get context values and setters */
    // const { state } = useGlobalState();
    const { state } = useGlobalState();

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
        // state,
        //setEducationSystemFees,
        setFuturePropertyTaxExpenses,
        setFutureWaterAndSewerExpenses,
        // setFutureGasExpenses,
        // setFutureElectricityExpenses,
        setFutureEnergyExpenses,
        setFutureHouseMaintenanceExpenses,
        setFutureGardeningExpenses,
        setFutureNetworkingExpenses,
        setFutureInternetExpenses,
        setFutureVehicleExpenses,
        setFutureEducationSystemExpenses,
        setFutureEducationExpenses,
        setEducationTuitionFees,
        setFuturePrivateLessonExpenses,
        setFutureTeenageClassExpenses,
        setFutureEducationTransportationExpenses,
        setFutureEducationPersonalCareExpenses,
        setFutureEducationDayCareExpenses,
        //setFutureSafetyNetExpenses,
        setFutureHealthInsuranceExpenses,
        setFutureDentistExpenses,
        setFuturePartnerDentistExpenses,
        setFutureChildrenDentistExpenses,
        setFutureWelfareExpenses,
        setFutureFoodExpenses,
        setFutureDiningRoomExpenses,
        setFutureLaundryExpenses,
        setFutureFlatTaxExpenses,
        setFutureGrossTaxExpenses,
        setFutureAlimonyExpenses,
        setFutureCleaningExpenses,
        // setFutureDecorationsExpenses,
        setFutureOtherExpenses,
        /* Added*/
        setEducationLevel,
    } = useGlobalState();

    const handleFutureTeenageClassExpenseChange = (childIndex: number, classIndex: number, value: number) => {
        const updatedFutureTeenageClassFees = [...state.futureTeenageClassExpenses];
        updatedFutureTeenageClassFees[childIndex][classIndex] = value;
        setFutureTeenageClassExpenses(updatedFutureTeenageClassFees);
    };

    const handleFuturePrivateLessonExpenseChange = (childIndex: number, lessonIndex: number, value: number) => {
        const updatedFuturePrivateLessonFees = [...state.futurePrivateLessonExpenses];
        updatedFuturePrivateLessonFees[childIndex][lessonIndex] = value;
        setFuturePrivateLessonExpenses(updatedFuturePrivateLessonFees);
    };

    // const handleFutureTuitionFeesChange = (childIndex: number, index: number, value: string[]) => {
    //     const updatedTuitionFees = [...state.educationTuitionFees];
    //     const updatedLevels = [...state.educationLevel];

    //     updatedTuitionFees[childIndex][index] = value;
    //     setEducationTuitionFees(updatedTuitionFees);
    //     setEducationLevel(updatedLevels);
    // };

    // const handleFutureEducationPersonalCareExpenseChange = (childIndex: number, value: number | null) => {
    //     setFutureEducationPersonalCareExpenses(childIndex, value ?? 0);
    // };

    // const handleFutureEducationDayCareExpenseChange = (childIndex: number, value: number | null) => {
    //     setFutureEducationDayCareExpenses(childIndex, value ?? 0);
    // };

    // const handleFutureEducationTransportationExpenseChange = (childIndex: number, value: number | null) => {
    //     setFutureEducationTransportationExpenses(childIndex, value ?? 0);
    // };

    const {
        // childrenData, // Added
        futurePropertyTaxExpenses,
        futureWaterAndSewerExpenses,
        // futureGasExpenses,
        // futureElectricityExpenses,
        futureEnergyExpenses,
        futureHouseMaintenanceExpenses,
        futureGardeningExpenses,
        futureNetworkingExpenses,
        futureInternetExpenses,
        futureVehicleExpenses,
        futureEducationSystemExpenses,
        futureEducationExpenses,
        educationTuitionFees,
        futurePrivateLessonExpenses,
        futureTeenageClassExpenses,
        futureEducationTransportationExpenses,
        futureEducationPersonalCareExpenses,
        futureEducationDayCareExpenses,
        // futureTuitionsExpenses,
        //futureSafetyNetExpenses,
        futureHealthInsuranceExpenses,
        futureDentistExpenses,
        futurePartnerDentistExpenses,
        futureChildrenDentistExpenses,
        futureWelfareExpenses,
        futureFoodExpenses,
        futureDiningRoomExpenses,
        futureLaundryExpenses,
        futureFlatTaxExpenses,
        futureGrossTaxExpenses,
        futureAlimonyExpenses,
        futureCleaningExpenses,
        // futureDecorationsExpenses,
        futureOtherExpenses,
    } = state;


    useEffect(() => {
        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, childrenCount);
        // Calculate the total education fees
        const totalEducationSystemFees = state.educationSystemFees.reduce((acc, fee) => acc + fee, 0);
        /* IMPORTANT: For now you can ignore the error*/
        const apartmentSquareFootageTax = calculateApartmentSquareFootageTax(state.apartmentSquareFootage);
        // const apartmentSquareFootageTax = state.apartmentSquareFootage * 43; // Calculate with the number value
        // Calculate healthcare expenses ( member = 226 NIS per month, child = 75 NIS per month)
        const futureChildrenHealthInsuranceExpenses = state.numberOfChildren ? state.numberOfChildren * 75 : 0;


        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') {
            //setEducationSystemFees([]);
            setFuturePropertyTaxExpenses(apartmentSquareFootageTax);
            setFutureWaterAndSewerExpenses(familyMemberCount * 85);
            // setFutureGasExpenses(0);
            // setFutureElectricityExpenses(0);
            /* IMPORTANT: Gas & Electricity needs to be calculated together as "Energy" */
            setFutureEnergyExpenses(familyMemberCount * 177);
            setFutureHouseMaintenanceExpenses(250);
            setFutureGardeningExpenses(futureGardeningExpenses || 0);
            setFutureNetworkingExpenses(100);
            setFutureInternetExpenses(futureInternetExpenses || 0);
            setFutureVehicleExpenses(futureVehicleExpenses || 0);
            setFutureEducationSystemExpenses(totalEducationSystemFees || 0);
            //setFuturePrivateLessonExpenses(futurePrivateLessonExpenses);
            //setFutureTeenageClassExpenses(futureTeenageClassExpenses);
            //setFutureTuitionsExpenses(futureTuitionsExpenses || 0);
            //setFutureSafetyNetExpenses(futureSafetyNetExpenses || 0);
            setFutureHealthInsuranceExpenses(futureChildrenHealthInsuranceExpenses + 452 || 0);
            setFutureDentistExpenses(futureDentistExpenses || 0);
            setFuturePartnerDentistExpenses(futurePartnerDentistExpenses || 0);
            setFutureChildrenDentistExpenses(futureChildrenDentistExpenses || 0);
            setFutureWelfareExpenses(futureWelfareExpenses || 0);
            setFutureFoodExpenses(futureFoodExpenses || 0);
            setFutureDiningRoomExpenses(futureDiningRoomExpenses || 0);
            setFutureLaundryExpenses(futureLaundryExpenses || 0);
            setFutureFlatTaxExpenses(1500);
            setFutureGrossTaxExpenses(state.futureGrossIncome * 0.06);
            setFutureAlimonyExpenses(futureAlimonyExpenses || 0);
            setFutureCleaningExpenses(futureCleaningExpenses || 0);
            // setFutureDecorationsExpenses(0);
            setFutureOtherExpenses(futureOtherExpenses || 0);
        }


        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            setFuturePropertyTaxExpenses(apartmentSquareFootageTax);
            setFutureWaterAndSewerExpenses(familyMemberCount * 85);
            // setFutureGasExpenses(0);
            // setFutureElectricityExpenses(0);
            setFutureEnergyExpenses(familyMemberCount * 177);
            setFutureHouseMaintenanceExpenses(250);
            setFutureGardeningExpenses(futureGardeningExpenses || 0);
            setFutureNetworkingExpenses(100);
            setFutureInternetExpenses(futureInternetExpenses || 0);
            setFutureVehicleExpenses(futureVehicleExpenses || 0);
            setFutureEducationSystemExpenses(totalEducationSystemFees || 0);
            // setFutureEducationTransportationExpenses(futureEducationTransportationExpenses || 0);
            // setFutureTuitionsExpenses( futureTuitionsExpenses || 0);
            //setFutureSafetyNetExpenses(futureSafetyNetExpenses || 0);
            setFutureHealthInsuranceExpenses(futureChildrenHealthInsuranceExpenses + 226 || 0);
            setFutureDentistExpenses(futureDentistExpenses || 0);
            setFuturePartnerDentistExpenses(futurePartnerDentistExpenses || 0);
            setFutureChildrenDentistExpenses(futureChildrenDentistExpenses || 0);
            setFutureWelfareExpenses(futureWelfareExpenses || 0);
            setFutureFoodExpenses(futureFoodExpenses || 0);
            setFutureDiningRoomExpenses(futureDiningRoomExpenses || 0);
            setFutureLaundryExpenses(futureLaundryExpenses || 0);
            setFutureFlatTaxExpenses(750);
            setFutureGrossTaxExpenses(state.futureGrossIncome * 0.06);
            setFutureAlimonyExpenses(futureAlimonyExpenses || 0);
            setFutureCleaningExpenses(futureCleaningExpenses || 0);
            // setFutureDecorationsExpenses(0);
            setFutureOtherExpenses(futureOtherExpenses || 0);
        }

        if (state.familyStatus === 'divorced' || 'single' || 'single-parent' || 'widower') {
            setFuturePropertyTaxExpenses(apartmentSquareFootageTax);
            setFutureWaterAndSewerExpenses(familyMemberCount * 85);
            // setFutureGasExpenses(0);
            // setFutureElectricityExpenses(0);
            setFutureEnergyExpenses(familyMemberCount * 177);
            setFutureHouseMaintenanceExpenses(250);
            setFutureGardeningExpenses(futureGardeningExpenses || 0);
            setFutureNetworkingExpenses(100);
            setFutureInternetExpenses(futureInternetExpenses || 0);
            setFutureVehicleExpenses(futureVehicleExpenses || 0);
            setFutureEducationSystemExpenses(totalEducationSystemFees);
            //setFuturePrivateLessonExpenses(futurePrivateLessonExpenses);
            //setFutureTeenageClassExpenses(futureTeenageClassExpenses);
            // setFutureEducationTransportationExpenses(futureEducationTransportationExpenses || 0);
            // setFutureTuitionsExpenses(futureTuitionsExpenses || 0);
            //setFutureSafetyNetExpenses(futureSafetyNetExpenses || 0);
            setFutureHealthInsuranceExpenses(futureChildrenHealthInsuranceExpenses + 226 || 0);
            setFutureDentistExpenses(futureDentistExpenses || 0);
            setFuturePartnerDentistExpenses(futurePartnerDentistExpenses || 0);
            setFutureChildrenDentistExpenses(futureChildrenDentistExpenses || 0);
            setFutureWelfareExpenses(futureWelfareExpenses || 0);
            setFutureFoodExpenses(futureFoodExpenses || 0);
            setFutureDiningRoomExpenses(futureDiningRoomExpenses || 0);
            setFutureLaundryExpenses(futureLaundryExpenses || 0);
            setFutureFlatTaxExpenses(750);
            setFutureGrossTaxExpenses(state.futureGrossIncome * 0.06);
            setFutureAlimonyExpenses(futureAlimonyExpenses || 0);
            setFutureCleaningExpenses(futureCleaningExpenses || 0);
            // setFutureDecorationsExpenses(0);
            setFutureOtherExpenses(futureOtherExpenses || 0);
        }

        if (state.memberRetired === 'yes') {
            setFuturePropertyTaxExpenses(apartmentSquareFootageTax * 0.20);
        }

        setExpenses([
            futureEducationSystemExpenses,
            futureEducationExpenses,
            futurePropertyTaxExpenses,
            futureWaterAndSewerExpenses,
            // futureGasExpenses,
            // futureElectricityExpenses,
            futureEnergyExpenses,
            futureHouseMaintenanceExpenses,
            futureGardeningExpenses,
            futureNetworkingExpenses,
            futureInternetExpenses,
            futureVehicleExpenses,
            //state.futurePrivateLessonExpenses,
            //state.futureTeenageClassExpenses, // IMPORTANT: Adding this might trigger an error
            // futureEducationTransportationExpenses,
            //futureEducationPersonalCareExpenses,
            //futureEducationDayCareExpenses,
            // futureTuitionsExpenses,
            // futureSafetyNetExpenses,
            futureHealthInsuranceExpenses,
            futureDentistExpenses,
            futurePartnerDentistExpenses,
            futureChildrenDentistExpenses,
            futureWelfareExpenses,
            futureFoodExpenses,
            futureDiningRoomExpenses,
            futureLaundryExpenses,
            futureFlatTaxExpenses,
            futureGrossTaxExpenses,
            futureAlimonyExpenses,
            futureCleaningExpenses,
            // futureDecorationsExpenses,
            futureOtherExpenses,
        ]);
    }, [
        state.childrenData,
        futureEducationSystemExpenses,
        futureEducationExpenses,
        futurePropertyTaxExpenses,
        futureWaterAndSewerExpenses,
        // futureGasExpenses,
        // futureElectricityExpenses,
        futureEnergyExpenses,
        futureHouseMaintenanceExpenses,
        futureGardeningExpenses,
        futureNetworkingExpenses,
        futureInternetExpenses,
        futureVehicleExpenses,
        futurePrivateLessonExpenses,
        futureTeenageClassExpenses,
        futureEducationTransportationExpenses,
        futureEducationPersonalCareExpenses,
        futureEducationDayCareExpenses,
        //futureTuitionsExpenses,
        // futureSafetyNetExpenses,
        futureHealthInsuranceExpenses,
        futureDentistExpenses,
        futurePartnerDentistExpenses,
        futureChildrenDentistExpenses,
        futureWelfareExpenses,
        futureFoodExpenses,
        futureDiningRoomExpenses,
        futureLaundryExpenses,
        futureFlatTaxExpenses,
        futureGrossTaxExpenses,
        futureAlimonyExpenses,
        futureCleaningExpenses,
        // futureDecorationsExpenses,
        futureOtherExpenses,
    ]);

    return (
        <Card title="הוצאות" className={styles.card}>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                <Form.Item
                    label="ארנונה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futurePropertyTaxExpenses}
                        // onChange={(value) => setFuturePropertyTaxExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#ffff' }}
                        disabled
                    />
                    <Tooltip title="מידע על חיובי ארנונה">
                        <Button
                            type="link"
                            icon={<InfoCircleFilled style={{ color: '#33a2f2', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futurePropertyTaxExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="מים וביוב"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureWaterAndSewerExpenses}
                        // onChange={(value) => setFutureWaterAndSewerExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על חיובי מים וביוב">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureWaterAndSewerExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="אנרגיה(גז וחשמל)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureEnergyExpenses}
                        onChange={(value) => setFutureEnergyExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על חיובי אנרגיה">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureEnergyExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="תחזוקת בית"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureHouseMaintenanceExpenses}
                        onChange={(value) => setFutureHouseMaintenanceExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות תחזוקת בית">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureHouseMaintenanceExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="נוי, שיפוץ ודקורציה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureGardeningExpenses}
                        onChange={(value) => setFutureGardeningExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות נוי, שיפוץ ודקורציה">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureGardeningExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="תקשורת"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureNetworkingExpenses}
                        min={0}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#ffff' }}
                    />
                    <Tooltip title="מידע על חיובי תקשורת">
                        <Button
                            type="link"
                            icon={<InfoCircleFilled style={{ color: '#33a2f2', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureNetworkingExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כבלים/אינטרנט"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureInternetExpenses}
                        onChange={(value) => setFutureInternetExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות כבלים/אינטרנט">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureInternetExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="תחבורה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureVehicleExpenses}
                        onChange={(value) => setFutureVehicleExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות תחבורה">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureVehicleExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="מערכת חינוך"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureEducationSystemExpenses}
                        onChange={(value) => setFutureEducationSystemExpenses(value || 0)}
                        min={0}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#ffff' }}
                    />
                    <Tooltip title="מידע על הוצאות חינוך">
                        <Button
                            type="link"
                            icon={<InfoCircleFilled style={{ color: '#33a2f2', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureEducationSystemExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.numberOfChildren > 0 && (
                    <Form.Item
                        label="הוצאות חינוך משתנות"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futureEducationExpenses}
                            onChange={(value) => setFutureEducationExpenses(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#ffff' }}
                        />
                        <Tooltip title="מידע על הוצאות חינוך שוטפות">
                            <Button
                                type="link"
                                icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                                onClick={() => showDrawer('futureEducationExpenses')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.numberOfChildren > 0 && (
                    <Form.Item
                        label="הסעות"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futureEducationTransportationExpenses}
                            onChange={(value) => setFutureEducationTransportationExpenses(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על חיובי הסעות">
                            <Button
                                type="link"
                                icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                                onClick={() => showDrawer('futureEducationTransportationExpenses')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.numberOfChildren > 0 && (
                    <Form.Item
                        label="טיפול פרטני לילד"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futureEducationPersonalCareExpenses}
                            onChange={(value) => setFutureEducationPersonalCareExpenses(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על הוצאות טיפול פרטני ילדים">
                            <Button
                                type="link"
                                icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                                onClick={() => showDrawer('futureEducationPersonalCareExpenses')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.numberOfChildren > 0 && (
                    <Form.Item
                        label="צהרון"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={state.futureEducationDayCareExpenses}
                            onChange={(value) => setFutureEducationDayCareExpenses(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על הוצאות צהרון">
                            <Button
                                type="link"
                                icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                                onClick={() => showDrawer('futureEducationDayCareExpenses')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                {state.childrenData.map((child, childIndex) => (
                    <div key={child.id}>
                        {/* Future Education Expenses */}
                        {child.teenageClassFees.map((fee, classIndex) => (
                            <Form.Item
                                key={`child-${childIndex}-future-teenage-class-${classIndex}`}
                                label={`חוג העשרה ${classIndex + 1}`}
                                labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                                wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                            >
                                <InputNumber
                                    min={0}
                                    value={fee}
                                    onChange={(value) => handleFutureTeenageClassExpenseChange(childIndex, classIndex, value || 0)}
                                    style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                                />
                                <Tooltip title="מידע על הוצאות חוגי העשרה">
                                    <Button
                                        type="link"
                                        icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                                        onClick={() => showDrawer('futureTeenageClassExpenses')}
                                    />
                                </Tooltip>
                            </Form.Item>
                        ))}
                        {child.privateLessonFees.map((fee, lessonIndex) => (
                            <Form.Item
                                key={`child-${childIndex}-future-private-lesson-${lessonIndex}`}
                                label={`שיעור פרטי ${lessonIndex + 1}`}
                                labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                                wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                            >
                                <InputNumber
                                    min={0}
                                    value={fee}
                                    onChange={(value) => handleFuturePrivateLessonExpenseChange(childIndex, lessonIndex, value || 0)}
                                    style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                                />
                                <Tooltip title="מידע על הוצאות שיעורים פרטיים">
                                    <Button
                                        type="link"
                                        icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                                        onClick={() => showDrawer('futurePrivateLessonExpenses')}
                                    />
                                </Tooltip>
                            </Form.Item>
                        ))}
                    </div>
                ))}
                <Form.Item
                    label="ביטוח בריאות"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureHealthInsuranceExpenses}
                        onChange={(value) => setFutureHealthInsuranceExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על ביטוח בריאות">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureHealthInsuranceExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="חברה/ה טיפולי שיניים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureDentistExpenses}
                        onChange={(value) => setFutureDentistExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות טיפולי שיניים">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureDentistExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.partnerCommunityStatus !== 'no-partner' && (
                    <Form.Item
                        label="טיפולי שיניים בן/ת זוג"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={futurePartnerDentistExpenses}
                            onChange={(value) => setFuturePartnerDentistExpenses(value || 0)}
                            min={0}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        />
                        <Tooltip title="מידע על הוצאות טיפולי שיניים">
                            <Button
                                type="link"
                                icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                                onClick={() => showDrawer('futurePartnerDentistExpenses')}
                            />
                        </Tooltip>
                    </Form.Item>
                )}
                <Form.Item
                    label="טיפולי שיניים ילדים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureChildrenDentistExpenses}
                        onChange={(value) => setFutureChildrenDentistExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות טיפולי שיניים">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureChildrenDentistExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="רווחה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureWelfareExpenses}
                        onChange={(value) => setFutureWelfareExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות רווחה">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureWelfareExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כלכלה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureFoodExpenses}
                        onChange={(value) => setFutureFoodExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות כלכלה">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureFoodExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="חדר אוכל"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureDiningRoomExpenses}
                        onChange={(value) => setFutureDiningRoomExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על חיובי חד״א">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureDiningRoomExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כביסה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureLaundryExpenses}
                        onChange={(value) => setFutureLaundryExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות כביסה">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureLaundryExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="מס אחיד"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureFlatTaxExpenses}
                        onChange={(value) => setFutureFlatTaxExpenses(value || 0)}
                        min={750}
                        max={1500}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#ffff' }}
                    />
                    <Tooltip title="מידע על חיובי מס אחיד">
                        <Button
                            type="link"
                            icon={<InfoCircleFilled style={{ color: '#33a2f2', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureFlatTaxExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="מס ברוטו"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureGrossTaxExpenses}
                        onChange={(value) => setFutureGrossTaxExpenses(value || 0)}
                        min={0}
                        max={2500}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#ffff' }}
                    />
                    <Tooltip title="מידע על חיובי מס ברוטו">
                        <Button
                            type="link"
                            icon={<InfoCircleFilled style={{ color: '#33a2f2', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureGrossTaxExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="מזונות"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureAlimonyExpenses}
                        onChange={(value) => setFutureAlimonyExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על מזונות">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureAlimonyExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="ניקיון"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureCleaningExpenses}
                        onChange={(value) => setFutureCleaningExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות ניקיון">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureCleaningExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={futureOtherExpenses}
                        onChange={(value) => setFutureOtherExpenses(value || 0)}
                        min={0}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    />
                    <Tooltip title="מידע על הוצאות אחרות">
                        <Button
                            type="link"
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('futureOtherExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                {drawerContentKey && (
                    <InfoDrawer
                        //title="מידע"
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

export default FutureExpenses;