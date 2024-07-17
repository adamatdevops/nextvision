/* ./src/pages/economicSim/CurrentExpenses.tsx */
import React, { useEffect, useState } from 'react';
import { Card, Typography, Form, InputNumber, Tooltip, Button } from 'antd';
import { InfoCircleTwoTone, InfoCircleFilled } from '@ant-design/icons';
import InfoDrawer from '../../components/ui/drawer/InfoDrawer';
import { drawerContent } from '../../components/ui/drawer/drawerContent';
import styles from './css/AccountBalance.module.css';
// import { useCurrentExpenses } from '../../context/CurrentExpensesGSP'; // Import the hook
import { childrenData, useGlobalState } from '../../GlobalStateProvider'; // Import the hook
import type { ChildData } from '../../GlobalStateProvider';

const { Title } = Typography;

interface CurrentExpensesProps {
    setExpenses: (expenses: number[]) => void;
}

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
        <Card title="הוצאות" className={styles.card}>
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('houseMaintenanceExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="נוי, שיפוץ ודקורציה"
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#fffff' }}
                        disabled
                    />
                    <Tooltip title="מידע על חיובי תקשורת">
                        <Button
                            type="link"
                            icon={<InfoCircleFilled style={{ color: '#33a2f2', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
                            onClick={() => showDrawer('electricityExpenses')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.childrenData.map((child, childIndex) => (
                    <div key={child.id}>
                        {child.teenageClassFees.map((fee, classIndex) => (
                            <Form.Item
                                key={`child-${childIndex}-teenage-class-${classIndex}`}
                                label={`${child.name || 'Unnamed Child'} חוג העשרה ${classIndex + 1}`}
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
                                        icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                                        icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                                icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#fffff' }}
                        min={0}
                        disabled
                        onChange={(value) => setChildrenDentistExpenses(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות טיפולי שיניים">
                        <Button
                            type="link"
                            icon={<InfoCircleFilled style={{ color: '#33a2f2', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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
                            icon={<InfoCircleTwoTone twoToneColor="#1e8de2" style={{ color: '#ffff', fontSize: '18px' }} />}
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

export default CurrentExpenses;
