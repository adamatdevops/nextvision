/* ./src/pages/economicSim/CurrentIncomes.tsx */
import React, { useEffect, useState} from 'react';
import { Card, Typography, Form, InputNumber, Tooltip, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import InfoDrawer from '../../components/ui/drawer/InfoDrawer';
import { drawerContent } from '../../components/ui/drawer/drawerContent';
import styles from './css/AccountBalance.module.css';
// import { useCurrentIncomesState } from '../../context/CurrentIncomesGSP'; // Import the hook
import { childrenData, useGlobalState } from '../../GlobalStateProvider'; // Import the hook
import type { ChildData } from '../../GlobalStateProvider';

const { Title } = Typography;

interface CurrentIncomesProps {
    setIncomes: (incomes: number[]) => void;
}


export const educationTuitionFeesMap: { [key: string]: number } = {
    'יסודי': 300,
    'תיכון': 500,
};

const calculateChildrenCount = (numberOfChildren): number => {
    let childrenCount = numberOfChildren + 0;
    return childrenCount
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

const CurrentIncomes: React.FC<CurrentIncomesProps> = ({ setIncomes }) => {
    /* Use the useGlobalState hook to get context values and setters */

    // Calculate the total education fees
    // const totalEducationFees = state.educationLevelFees.reduce((acc, fee) => acc + fee, 0);

    const [drawerOpen, setDrawerOpen] = useState(false);
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

    const {
        state,
        setEducationSystemBudgets,
        setPersonalBudget,
        setChildrenAddition,
        setProvisions,
        setLaundry,
        setGas,
        setHygiene,
        setMaintenance,
        setVehicle,
        setEnergy,
        setBenefitForWork,
        setOutsourcedFood,
        setChronicleTreatment,
        setSeniorityAddition,
        setWelfare,
        // setPartnerSeniorityAddition,
        // setDeceasedSeniorityAddition,
        setMemberGoldenAge,
        setMemberPartnerGoldenAge,
        setGoldenAgeAmount,
        setOtherIncome,
    } = useGlobalState();

    const {
        personalBudget,
        educationSystemBudgets,
        childrenAddition,
        provisions,
        laundry,
        gas,
        hygiene,
        maintenance,
        vehicle,
        energy,
        benefitForWork,
        outsourcedFood,
        chronicleTreatment,
        seniorityAddition,
        welfare,
        // partnerSeniorityAddition,
        // deceasedSeniorityAddition,
        memberGoldenAge,
        memberPartnerGoldenAge,
        goldenAgeAmount,
        otherIncome,
    } = state;

    useEffect(() => {

        let childrenCount = state.numberOfChildren || 0;
        let familyMemberCount = calculateFamilyMemberCount(state.familyStatus, state.partnerCommunityStatus, state.numberOfChildren);
        // Calculate the total education budgets
        const totalEducationSystemBudgets = state.educationSystemBudgets.reduce((acc, budget) => acc + budget, 0);
        // Calculate seniority additions (30 NIS per year)
        const seniorityAdditionAmount = state.seniority ? state.seniority * 41 - 41: 0;
        const partnerSeniorityAdditionAmount = state.partnerSeniority ? state.partnerSeniority * 41 + 41: 0;
        // const deceasedSeniorityAdditionAmount = state.deceasedSeniority ? state.deceasedSeniority * 41 - 41: 0;

        // Calculate total seniority addition
        const totalSeniorityAddition =
            seniorityAdditionAmount + partnerSeniorityAdditionAmount;

        setSeniorityAddition(totalSeniorityAddition);
        setChildrenAddition(totalEducationSystemBudgets);

        if (state.familyStatus === 'married' && state.partnerCommunityStatus === 'community-member') {
            setPersonalBudget(4954);
            // setEducationSystemBudgets([]);
            setChildrenAddition(totalEducationSystemBudgets);
            setProvisions(2 * 772 + childrenCount * 683);
            setLaundry(2 * 61 + childrenCount * 61);
            setGas(92);
            setHygiene(44);
            setMaintenance(94);
            setVehicle(1094);
            setEnergy(269);
            /* TODO: To be set by the user */
            setBenefitForWork(benefitForWork || 0);
            setOutsourcedFood( outsourcedFood || 0);
            setChronicleTreatment( chronicleTreatment || 0);
            setSeniorityAddition(totalSeniorityAddition || 0);
            setWelfare(state.welfareExpenses * 0.30 || 0),
            // setPartnerSeniorityAddition(partnerSeniorityAdditionAmount || 0),
            // setDeceasedSeniorityAddition(deceasedSeniorityAdditionAmount || 0),
            setOtherIncome(otherIncome || 0);
        }

        if (state.familyStatus === 'married' && state.partnerCommunityStatus !== 'community-member') {
            // setPersonalBudget(9970);
            setPersonalBudget(2887);
            // setEducationSystemBudgets([]);
            setChildrenAddition(totalEducationSystemBudgets);
            setProvisions(772 * familyMemberCount + childrenCount * 683);
            setLaundry(61 * familyMemberCount);
            setGas(92);
            setHygiene(44); /* TODO: this is to set set according to the number of family members */
            setMaintenance(94);
            setVehicle(547);
            setEnergy(269);
            /* TODO: To be set by the user */
            setBenefitForWork(benefitForWork || 0);
            setOutsourcedFood(outsourcedFood || 0);
            setChronicleTreatment(chronicleTreatment || 0);
            setSeniorityAddition(totalSeniorityAddition || 0);
            setWelfare(state.welfareExpenses * 0.30 || 0),
            // setPartnerSeniorityAddition(partnerSeniorityAdditionAmount || 0),
            // setDeceasedSeniorityAddition(deceasedSeniorityAdditionAmount || 0),
            setOtherIncome(otherIncome || 0);
        }

        if (state.memberGoldenAge === 'yes') {
            setGoldenAgeAmount(1000);
        }

        if (state.memberPartnerGoldenAge === 'yes') {
            setGoldenAgeAmount(1000);
        }

        setIncomes([
            personalBudget,
            childrenAddition,
            provisions,
            laundry,
            gas,
            hygiene,
            maintenance,
            vehicle,
            energy,
            // benefitForWork,
            // outsourcedFood,
            chronicleTreatment,
            seniorityAddition,
            welfare,
            // partnerSeniorityAddition,
            // deceasedSeniorityAddition,
            benefitForWork,
            outsourcedFood,
            goldenAgeAmount,
            otherIncome,
        ]);
    }, [
        personalBudget,
        educationSystemBudgets,
        childrenAddition,
        provisions,
        laundry,
        gas,
        hygiene,
        maintenance,
        vehicle,
        energy,
        benefitForWork,
        outsourcedFood,
        chronicleTreatment,
        seniorityAddition,
        welfare,
        // partnerSeniorityAddition,
        // deceasedSeniorityAddition,
        benefitForWork,
        outsourcedFood,
        goldenAgeAmount,
        otherIncome,
    ]);

    return (
        <Card className={styles.card}>
            <Title level={4}>הכנסות</Title>
            <Form
                layout="horizontal"
                labelAlign="right"
            >
                <Form.Item
                    label="תקציב אישי"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}

                >
                    <InputNumber
                        value={state.personalBudget}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed'}}
                    />
                    {/* <InfoCircleOutlined className={styles.infoIcon} onClick={() => showDrawer('Details about salary')} /> */}
                    <Tooltip title="מידע על תקציב אישי">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('personalBudget')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="תוספת ילדים"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={state.childrenAddition || 0}
                        disabled // Fixed value
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב ילדים">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('childrenAddition')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כלכלה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={state.provisions}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב כלכלה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('provisions')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="כביסה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={laundry}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב כביסה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('laundry')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="גז"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={gas}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב גז">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('gas')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="היגיינה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={hygiene}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב היגיינה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('hygiene')}
                        />
                    </Tooltip>
                </Form.Item >
                <Form.Item
                    label="אחזקה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={maintenance}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב אחזקה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('maintenance')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="רכב"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={vehicle}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב רכב">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('vehicle')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="חשמל"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={energy}
                        disabled
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px', color: '#6ab2ed' }}
                    />
                    <Tooltip title="מידע על תקציב חשמל">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('energy')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="הטבה בגין עבודה"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={benefitForWork}
                        style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
                        min={0}
                        max={3000}
                        onChange={(value) => setBenefitForWork(value || 0)}
                    />
                    <Tooltip title="מידע על הטבה בגין עבודה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('personalBudget')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="אש״ל עובד חוץ"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={outsourcedFood}
                        style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setOutsourcedFood(value || 0)}
                    />
                    <Tooltip title="מידע על תקציב אש״ל עובדי חוץ">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('outsourcedFood')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="טיפול כרוני"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={chronicleTreatment}
                        style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setChronicleTreatment(value || 0)}
                    />
                    <Tooltip title="מידע על תקציב טיפולים כרוניים">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('personalBudget')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="תוספת ותק"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={seniorityAddition}
                        style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setSeniorityAddition(value || 0)}
                    />
                    <Tooltip title="מידע על תוספת ותק">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('seniorityAddition')}
                        />
                    </Tooltip>
                </Form.Item>
                <Form.Item
                    label="רווחה (זיכוי)"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={welfare}
                        style={{ width: 'calc(100% - 42px)', marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setWelfare(value || 0)}
                    />
                    <Tooltip title="מידע על זיכוי רווחה">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('welfare')}
                        />
                    </Tooltip>
                </Form.Item>
                {state.memberGoldenAge === "yes" && (
                    <Form.Item
                        label="קרן גיל הזהב - חבר/ה"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={goldenAgeAmount}
                            style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
                            // min={0}
                            onChange={(value) => setGoldenAgeAmount(value || 1000)}
                        />
                        <Tooltip title="מידע על קרן גיל הזהב">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('personalBudget')}
                        />
                    </Tooltip>
                    </Form.Item>
                )}
                {state.memberPartnerGoldenAge === "yes" && (
                    <Form.Item
                        label="קרן גיל הזהב - בן/ת זוג"
                        labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                        wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                    >
                        <InputNumber
                            value={goldenAgeAmount}
                            style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
                            // min={0}
                            onChange={(value) => setGoldenAgeAmount(value || 1000)}
                        />
                        <Tooltip title="מידע על קרן גיל הזהב">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('personalBudget')}
                        />
                    </Tooltip>
                    </Form.Item>
                )}
                <Form.Item
                    label="אחר"
                    labelCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 12 }}
                    wrapperCol={{ span: 4, sm: 4, md: 6, lg: 8, xl: 10 }}
                >
                    <InputNumber
                        value={otherIncome}
                        style={{ width: 'calc(100% - 42px)',  marginLeft: '8px' }}
                        min={0}
                        onChange={(value) => setOtherIncome(value || 0)}
                    />
                    <Tooltip title="מידע על הוצאות אחרות">
                        <Button
                            type="link"
                            icon={<InfoCircleOutlined />}
                            onClick={() => showDrawer('personalBudget')}
                        />
                    </Tooltip>
                </Form.Item>
                {drawerContentKey && (
                <InfoDrawer
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


export default CurrentIncomes;
