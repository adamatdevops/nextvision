/* ./src/pages/economicSim/AccountBalance.tsx */
import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Typography, Card, Button, Flex } from 'antd';
import StepsBar from '../../components/ui/stepper/StepsBar';
import CurrentIncomes from './CurrentIncomes';
import CurrentExpenses from './CurrentExpenses';
import FutureIncomes from './FutureIncomes';
import FutureExpenses from './FutureExpenses';
import CurrentBalance from './CurrentBalance';
import FutureBalance from './FutureBalance';
import InfoDrawer from '../../components/ui/drawer/InfoDrawer'; // Import InfoDrawer
import { drawerContent } from '../../components/ui/drawer/drawerContent';
import FamilyAvatar from '../../components/ui/avatars/FamilyAvatar';
import DynamicLayout from '../../components/ui/layouts/DynamicBackgroundLayout';
import { useGlobalState } from '../../GlobalStateProvider';
import styles from './css/AccountBalance.module.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const AccountBalance: React.FC = () => {
    const [incomes, setIncomes] = useState<number[]>([]);
    const [expenses, setExpenses] = useState<number[]>([]);
    const [futureIncomes, setFutureIncomes] = useState<number[]>([]);
    const [futureExpenses, setFutureExpenses] = useState<number[]>([]);
    const [balanceDifference, setBalanceDifference] = useState<number>(0);

    //const [drawerVisible, setDrawerVisible] = useState(false);
    //const [drawerContent, setDrawerContent] = useState('');

    const [drawerOpen, setDrawerOpen] = useState(false);
    // const [drawerContent, setDrawerContent] = useState('');
    const [drawerContentKey, setDrawerContentKey] = useState<keyof typeof drawerContent | null>(null);

    const { state } = useGlobalState();

    const showDrawer = (key: keyof typeof drawerContent) => {
        //setDrawerContent(content);
        setDrawerContentKey(key);
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setDrawerContentKey(null);
    };

    useEffect(() => {
        const currentIncomeTotal = incomes.reduce((total, income) => total + income, 0);
        const currentExpenseTotal = expenses.reduce((total, expense) => total + expense, 0);
        const currentBalanceTotal = currentIncomeTotal - currentExpenseTotal;

        const futureIncomeTotal = futureIncomes.reduce((total, income) => total + income, 0) - state.futureGrossIncome - state.futurePartnerGrossIncome;
        const futureExpenseTotal = futureExpenses.reduce((total, expense) => total + expense, 0);
        const futureBalanceTotal = futureIncomeTotal - futureExpenseTotal;

        // const setBalanceDifference = futureBalanceTotal - currentBalanceTotal;
        // setBalanceDifference(balanceDifference);
        const balanceDifference = (futureIncomeTotal - futureExpenseTotal) - (currentIncomeTotal - currentExpenseTotal);
    }, [incomes, expenses, futureIncomes, futureExpenses, state.futureGrossIncome, state.futurePartnerGrossIncome]);


    const handleCalculate = () => {
        const currentIncomeTotal = incomes.reduce((total, income) => total + income, 0);
        const currentExpenseTotal = expenses.reduce((total, expense) => total + expense, 0);
        const currentBalanceTotal = currentIncomeTotal - currentExpenseTotal;

        const futureIncomeTotal = futureIncomes.reduce((total, income) => total + income, 0) - state.futureGrossIncome - state.futurePartnerGrossIncome;
        const futureExpenseTotal = futureExpenses.reduce((total, expense) => total + expense, 0);
        const futureBalanceTotal = futureIncomeTotal - futureExpenseTotal;

        const balanceDifference = (futureIncomeTotal - futureExpenseTotal) - (currentIncomeTotal - currentExpenseTotal);
        //const balanceDifference = futureBalanceTotal - currentBalanceTotal;
        setBalanceDifference(balanceDifference);
    };

    return (
        <DynamicLayout>
            <Header className={styles.header}>
                <Col span={8}>
                    <Row gutter={8}>
                        <Card className={styles.cardAccountBalance} style={{ background: "rgba(195, 27, 83, 0.292)" }}>
                            <p>מודל שיתופי</p>
                        </Card>
                    </Row>
                </Col>
                <Col span={8}>
                    <Card className={styles.cardAccountBalance}>
                        <Flex align="center" justify="space-between" gap={70}>
                            <Row>
                                <span className={styles.financialNumber} style={{ direction: 'rtl' }}> הפרש כולל:</span>
                                <span className={styles.financialNumber}> {balanceDifference} </span>
                            </Row>
                            <Row>
                                <Button className={styles.buttonCalculate} type="primary" size="large" onClick={handleCalculate}>
                                    חישוב
                                </Button>
                            </Row>
                            <Row>
                                <span className={styles.loginName}>{state.loginName}</span>
                                <FamilyAvatar />
                            </Row>
                        </Flex>
                    </Card>
                </Col>
            <Col span={8}>
                <Row gutter={8}>
                        <Card className={styles.cardAccountBalance} style={{ background: "rgba(195, 27, 83, 0.292)" }}>
                        <p>מודל מתחדש</p>
                    </Card>
                </Row>
            </Col>
            </Header>
            <Content className={styles.content}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Row>
                            <Col span={12} className={styles.columnGeneral}>
                                <CurrentIncomes setIncomes={setIncomes} />
                            </Col>
                            <Col span={12} className={styles.columnGeneral}>
                                <CurrentExpenses setExpenses={setExpenses} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className={styles.columnBottom}>
                                <CurrentBalance incomes={incomes} expenses={expenses} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Col span={12} className={styles.columnGeneral}>
                                <FutureIncomes setIncomes={setFutureIncomes}/>
                            </Col >
                            <Col span={12} className={styles.columnGeneral}>
                                <FutureExpenses setExpenses={setFutureExpenses} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className={styles.columnBottom}>
                                <FutureBalance incomes={futureIncomes} expenses={futureExpenses} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
            <StepsBar />
            {drawerContentKey && (
                <InfoDrawer
                    // title="מידע"
                    //content={drawerContent}
                    open={drawerOpen}
                    onClose={closeDrawer}
                    contentKey={drawerContentKey}
                />
            )}
        </DynamicLayout>
    );
};

export default AccountBalance;