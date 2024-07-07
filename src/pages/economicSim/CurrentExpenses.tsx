/* ./src/pages/economicSim/CurrentExpenses.tsx */
import React, { useEffect, useState } from 'react';
import { Card, Typography, Form, InputNumber, Tooltip, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import InfoDrawer from '../../components/ui/drawer/InfoDrawer';
import { drawerContent } from '../../components/ui/drawer/drawerContent';
import styles from './css/AccountBalance.module.css';
// import { useCurrentExpenses } from '../../context/CurrentExpensesGSP'; // Import the hook
import { childrenData, useGlobalState } from '../../GlobalStateProvider'; // Import the hook
import type { ChildData } from '../../GlobalStateProvider';

const { Title } = Typography;

interface CurrentExpensesProps {
    setExpenses: (expenses: number[]) => void;
    // apartmentSquareFootage: number | null;
}

// export const educationTuitionFeesMap: { [key: string]: number } = {
//     'יסודי': 300,
//     'תיכון': 500,
// };

const calculateFamilyMemberCount = (familyStatus, partnerCommunityStatus, childrenCount) => {
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

// const calculateTuitionExpenses = (schoolExpenses, highSchoolExpenses) => {
//     let schoolCoverage = 300;
//     let highSchoolCoverage = 500;
//     let tuitionExpenses = 0;

//     if (schoolExpenses >= schoolCoverage) {
//         tuitionExpenses += schoolExpenses - schoolCoverage;
//     } else if (schoolExpenses < schoolCoverage) {
//         tuitionExpenses += 0;
//     } else if (highSchoolExpenses >= highSchoolCoverage) {
//         tuitionExpenses += highSchoolExpenses - highSchoolCoverage;
//     } else if (highSchoolExpenses < highSchoolCoverage) {
//         tuitionExpenses += 0;
//     }

//     return tuitionExpenses
// }

const CurrentExpenses: React.FC<CurrentExpensesProps> = ({ setExpenses }) => {
    /* Use the useCurrentExpenses hook to get context values and setters */
    const { state } = useGlobalState();


    const [drawerOpen, setDrawerOpen] = useState(false);
    // const [drawerContent, setDrawerContent] = useState('');
    const [drawerContentKey, setDrawerContentKey] = useState<keyof typeof drawerContent | null>(null);

    const showDrawer = (key: keyof typeof drawerContent) => {
        //setDrawerContent(content);
        setDrawerContentKey(key);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setDrawerContentKey(null);
    };

    const handleTeenageClassExpenseChange = (childIndex: number, classIndex: number, value: number) => {
        const updatedTeenageClassFees = [...state.teenageClassExpenses];
        updatedTeenageClassFees[childIndex][classIndex] = value;
        setTeenageClassExpenses(updatedTeenageClassFees);
    };

    const handlePrivateLessonExpenseChange = (childIndex: number, lessonIndex: number, value: number) => {
        const updatedPrivateLessonFees = [...state.privateLessonExpenses];
        updatedPrivateLessonFees[childIndex][lessonIndex] = value;
        setPrivateLessonExpenses(updatedPrivateLessonFees);
    };

    const {
        // state,
        // setGasExpenses,
        setElectricityExpenses,
        setMaintenanceServiceExpenses,
        setHouseMaintenanceExpenses,
        setGardeningExpenses,
        setNetworkingExpenses,
        setInternetExpenses,
        setVehicleExpenses,
        // setSchoolExpenses,
        // setHighSchoolExpenses,
        setTeenageClassExpenses,
        setPrivateLessonExpenses,
        setOtherEducationExpenses,
        // setDentistExpenses,
        setPartnerDentistExpenses,
        setChildrenDentistExpenses,
        setWelfareExpenses,
        setFoodExpenses,
        setDiningRoomExpenses,
        setLaundryExpenses,
        setOtherExpenses
    } = useGlobalState();

    const {
        // gasExpenses,
        electricityExpenses,
        maintenanceServiceExpenses,
        houseMaintenanceExpenses,
        gardeningExpenses,
        networkingExpenses,
        internetExpenses,
        vehicleExpenses,
        // schoolExpenses,
        // highSchoolExpenses,
        privateLessonExpenses,
        teenageClassExpenses,
        // tuitionsExpenses,
        otherEducationExpenses,
        // dentistExpenses,
        partnerDentistExpenses,
        childrenDentistExpenses,
        welfareExpenses,
        foodExpenses,
        diningRoomExpenses,
        laundryExpenses,
        otherExpenses
    } = state;

    useEffect(() => {
        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, childrenCount);

        // const totalSchoolExpenses = state.childrenData.reduce((total, child) => {
        //     const tuition = child.educationTuition || 0; // Default to 0 if not provided
        //     const level = child.educationLevel;
        //     const coverage = (level === 'יסודי' || level === 'תיכון') ? 300 : 0;
        //     return total + Math.max(0, tuition - coverage); // Only add the difference if tuition exceeds coverage
        // }, 0);

        // const totalSchoolFees = state.educationTuitionFees.reduce((acc, fee) => acc + fee, 0);
        // const totalEducationSchoolExpenses = state.educationSchoolExpenses - totalSchoolFees > 0 ? state.educationSchoolExpenses - totalSchoolFees : 0;
        // const totalEducationHighSchoolExpenses = state.educationHighSchoolExpenses - totalSchoolFees > 0 ? state.educationHighSchoolExpenses - totalSchoolFees : 0;

        // const totalCustomTuition = state.childrenData.reduce((sum, child) => {
        //     if (child.educationLevel === 'יסודי' || child.educationLevel === 'תיכון') {
        //         const tuitionCoverage = educationTuitionFeesMap[child.educationLevel || ''];
        //         const customTuition = child.customTuition || 0;
        //         return sum + Math.max(0, customTuition - tuitionCoverage);
        //     }
        //     return sum;
        // }, 0);


        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') { /* Change this condition. This is just a mockup */
            // setGasExpenses(0); /* 63 per family member */
            state.childrenData,
            setElectricityExpenses(177 * familyMemberCount);
            setMaintenanceServiceExpenses(63);
            setHouseMaintenanceExpenses(houseMaintenanceExpenses || 0);
            setGardeningExpenses(gardeningExpenses || 0);
            setNetworkingExpenses(100);
            setInternetExpenses(internetExpenses || 0);
            setVehicleExpenses(vehicleExpenses);
            // setSchoolExpenses(schoolExpenses);
            // setHighSchoolExpenses(highSchoolExpenses);
            // setPrivateLessonExpenses(privateLessonExpenses);
            // setTeenageClassExpenses(teenageClassExpenses);
            // setTuitionsExpenses(tuitionsExpenses || 0);
            setOtherEducationExpenses(otherEducationExpenses || 0);
            //setDentistExpenses(dentistExpenses || 0); /* 70 for kid /110 Adults in 70% */
            setPartnerDentistExpenses(partnerDentistExpenses || 0),
            setChildrenDentistExpenses(childrenDentistExpenses || 0),
            setWelfareExpenses(welfareExpenses || 0);
            setFoodExpenses(foodExpenses || 0);
            setDiningRoomExpenses(diningRoomExpenses || 0);
            setLaundryExpenses(laundryExpenses || 0);
            setOtherExpenses(otherExpenses || 0);
        }


        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            // setGasExpenses(63 * familyMemberCount); /* 177 per family member */
            state.childrenData,
                setElectricityExpenses(177 * familyMemberCount);
            setMaintenanceServiceExpenses(63)
            setHouseMaintenanceExpenses(houseMaintenanceExpenses || 0);
            setGardeningExpenses(gardeningExpenses || 0);
            setNetworkingExpenses(100);
            setInternetExpenses(internetExpenses || 0);
            setVehicleExpenses(vehicleExpenses || 0);
            // setSchoolExpenses(schoolExpenses);
            // setHighSchoolExpenses(highSchoolExpenses);
            // setPrivateLessonExpenses(privateLessonExpenses);
            // setTeenageClassExpenses(teenageClassExpenses);
            // setTuitionsExpenses(tuitionsExpenses || 0);
            setOtherEducationExpenses(otherEducationExpenses || 0);
            //setDentistExpenses(dentistExpenses || 0); /* 70 for kid /110 Adults in 70% */
            setPartnerDentistExpenses(partnerDentistExpenses || 0),
                setChildrenDentistExpenses(childrenDentistExpenses || 0)
            setWelfareExpenses(welfareExpenses || 0);
            setFoodExpenses(foodExpenses || 0);
            setDiningRoomExpenses(diningRoomExpenses || 0);
            setLaundryExpenses(laundryExpenses || 0);
            setOtherExpenses(otherExpenses || 0);
        }

        setExpenses([
            // gasExpenses,
            electricityExpenses,
            maintenanceServiceExpenses,
            houseMaintenanceExpenses,
            gardeningExpenses,
            networkingExpenses,
            internetExpenses,
            vehicleExpenses,
            // schoolExpenses,
            // highSchoolExpenses,
            // state.privateLessonExpenses,
            // state.teenageClassExpenses, // IMPORTANT: Adding this might trigger an error
            // tuitionExpenses,
            otherEducationExpenses,
            //dentistExpenses,
            partnerDentistExpenses,
            childrenDentistExpenses,
            welfareExpenses,
            foodExpenses,
            diningRoomExpenses,
            laundryExpenses,
            otherExpenses
        ]);
    }, [
        // gasExpenses,
        state.childrenData,
        electricityExpenses,
        maintenanceServiceExpenses,
        houseMaintenanceExpenses,
        gardeningExpenses,
        networkingExpenses,
        internetExpenses,
        vehicleExpenses,
        // schoolExpenses,
        // highSchoolExpenses,
        privateLessonExpenses,
        teenageClassExpenses,
        //tuitionsExpenses,
        otherEducationExpenses,
        //dentistExpenses,
        partnerDentistExpenses,
        childrenDentistExpenses,
        welfareExpenses,
        foodExpenses,
        diningRoomExpenses,
        laundryExpenses,
        otherExpenses,
        setExpenses
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הוצאות</Title>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                {/* <Form.Item
                    label="גז"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        title="גז"
                        value={gasExpenses}
                        style={{ width: '100%' }}
                    />
                </Form.Item> */}
                <Form.Item
                    label="אנרגיה(חשמל וגז)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={electricityExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    /* onChange={setElectricity} */
                    />
                    <Tooltip title="מידע על חיובי אנרגיה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('electricityExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="אחזקה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={maintenanceServiceExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                    // onChange={setMaintenanceServiceExpenses}
                    />
                    <Tooltip title="מידע על חיובי אחזקה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('maintenanceServiceExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="תחזוקת בית"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={houseMaintenanceExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        onChange={(value) => setHouseMaintenanceExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות תחזוקת בית">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('houseMaintenanceExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="נוית שיפוץ ודקורציה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={gardeningExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setGardeningExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות נוי, שיפוץ ודקורציה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('electricityExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="תקשורת"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={networkingExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        disabled
                    />
                    <Tooltip title="מידע על חיובי תקשורת">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('networkingExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כבלים/אינטרנט"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={internetExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setInternetExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות כבלים/אינטרנט">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('internetExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="רכב"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={vehicleExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setVehicleExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות רכב">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('electricityExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.childrenData.map((child, childIndex) => (
                    <div key={child.id}>
                        {child.teenageClassFees.map((fee, classIndex) => (
                            <Form.Item
                                key={`child-${childIndex}-teenage-class-${classIndex}`}
                                label={`חוג העשרה ${classIndex + 1}`}
                                labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                                wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                            >
                                <InputNumber
                                    min={0}
                                    value={fee}
                                    onChange={(value) => handleTeenageClassExpenseChange(childIndex, classIndex, value || 0)}
                                    style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                                />
                                <Tooltip title="מידע על הוצאות חוגי העשרה">
                                    <Button
                                        type="link"
                                        icon={<InfoCircleOutlined />}
                                        onClick={() => showDrawer('teenageClassExpenses')}
                                    />
                                </Tooltip>
                            </Form.Item>
                        ))}
                        {child.privateLessonFees.map((fee, lessonIndex) => (
                            <Form.Item
                                key={`child-${childIndex}-private-lesson-${lessonIndex}`}
                                label={`שיעור פרטי ${lessonIndex + 1}`}
                                labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                                wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                            >
                                <InputNumber
                                    min={0}
                                    value={fee}
                                    onChange={(value) => handlePrivateLessonExpenseChange(childIndex, lessonIndex, value || 0)}
                                    style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                                />
                                <Tooltip title="מידע על הוצאות שיעורים פרטיים">
                                    <Button
                                        type="link"
                                        icon={<InfoCircleOutlined />}
                                        onClick={() => showDrawer('privateLessonExpenses')}
                                    />
                                </Tooltip>
                            </Form.Item>
                        ))}
                    </div>
                ))}
                <Form.Item
                    label="חינוך אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={otherEducationExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setOtherEducationExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות אחרות">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('electricityExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                {/* <Form.Item
                    label="טיפולי שיניים חבר/ה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={partnerDentistExpenses}
                        style={{ width: '100%' }}
                        min={0}
                        disabled
                        onChange={(value) => setPartnerDentistExpenses(value || 0)}
                    />
                </Form.Item> */}
                {state.partnerCommunityStatus !== 'no-partner' && (
                    <Form.Item
                        label="טיפולי שיניים בן/ת זוג"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={partnerDentistExpenses}
                            style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                            min={0}
                            disabled
                            onChange={(value) => setPartnerDentistExpenses(value || 0)}
                        />
                        <Tooltip title="מידע על הוצאות טיפולי שיניים">
                            <Button
                                type="link"
                                icon={<InfoCircleOutlined />}
                                onClick={() => showDrawer('partnerDentistExpenses')}
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
                        value={childrenDentistExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        disabled
                        onChange={(value) => setChildrenDentistExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות טיפולי שיניים">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('childrenDentistExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="רווחה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={welfareExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setWelfareExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על חיובי רווחה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('diningRoomExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כלכלה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={foodExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setFoodExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות כלכלה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('foodExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="חדא אוכל"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={diningRoomExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setDiningRoomExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות חד״א">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('diningRoomExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כביסה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={laundryExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setLaundryExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות כביסה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('diningRoomExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={otherExpenses}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setOtherExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות אחרות">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('diningRoomExpenses')}
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

// interface SectionProps {
//     title: string;
//     value: number;

// /*     onChange: (value: number) => void; */
// }

// const ExpenseSection: React.FC<SectionProps> = ({ title, value,
//     /* onChange }) => { */
//     return (
//         <Card className={styles.sectionCard}>
//             <Title level={5}>{title}</Title>
//             <Form layout="vertical">
//                 <Form.Item label = "סכום">
//                     <InputNumber
//                         value={value}
//                     /*     onChange= */
//                     /* onChange} */
//                         min={0}
//                         style={{ width: '100%' }}
//                         placeholder="הכנס סכום"
//                     />
//                 </Form.Item>
//             </Form>
//         </Card>
//     );
// };

export default CurrentExpenses;
