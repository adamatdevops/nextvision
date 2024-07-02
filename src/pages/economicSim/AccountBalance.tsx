/* ./src/pages/economicSim/AccountBalance.tsx */
import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Typography, Card, Button } from 'antd';
import StepsBar from '../../components/ui/stepper/StepsBar';
import CurrentIncomes from './CurrentIncomes';
import CurrentExpenses from './CurrentExpenses';
import FutureIncomes from './FutureIncomes';
import FutureExpenses from './FutureExpenses';
import CurrentBalance from './CurrentBalance';
import FutureBalance from './FutureBalance';
import InfoDrawer from '../../components/ui/drawer/InfoDrawer'; // Import InfoDrawer
import DynamicLayout from '../../components/ui/layouts/DynamicBackgroundLayout';
import styles from './css/AccountBalance.module.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const AccountBalance: React.FC = () => {
    const [incomes, setIncomes] = useState<number[]>([]);
    const [expenses, setExpenses] = useState<number[]>([]);
    const [futureIncomes, setFutureIncomes] = useState<number[]>([]);
    const [futureExpenses, setFutureExpenses] = useState<number[]>([]);
    const [balanceDifference, setBalanceDifference] = useState<number>(0);

    const [drawerVisible, setDrawerVisible] = useState(false);
    const [drawerContent, setDrawerContent] = useState('');

    const showDrawer = (content: string) => {
        setDrawerContent(content);
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    useEffect(() => {
        const currentIncomeTotal = incomes.reduce((total, income) => total + income, 0);
        const currentExpenseTotal = expenses.reduce((total, expense) => total + expense, 0);
        const currentBalanceTotal = currentIncomeTotal - currentExpenseTotal;

        const futureIncomeTotal = futureIncomes.reduce((total, income) => total + income, 0);
        const futureExpenseTotal = futureExpenses.reduce((total, expense) => total + expense, 0);
        const futureBalanceTotal = futureIncomeTotal - futureExpenseTotal;

        const balanceDifference = (futureIncomeTotal - futureExpenseTotal) - (currentIncomeTotal - currentExpenseTotal);
    }, [incomes, expenses, futureIncomes, futureExpenses]);


    const handleCalculate = () => {
        const currentIncomeTotal = incomes.reduce((total, income) => total + income, 0);
        const currentExpenseTotal = expenses.reduce((total, expense) => total + expense, 0);
        const currentBalanceTotal = currentIncomeTotal - currentExpenseTotal;

        const futureIncomeTotal = futureIncomes.reduce((total, income) => total + income, 0);
        const futureExpenseTotal = futureExpenses.reduce((total, expense) => total + expense, 0);
        const futureBalanceTotal = futureIncomeTotal - futureExpenseTotal;

        const balanceDifference = (futureIncomeTotal - futureExpenseTotal) - (currentIncomeTotal - currentExpenseTotal);

        setBalanceDifference(balanceDifference);
    };

    return (
        <DynamicLayout>
            <Header className={styles.header}>
                {/* <TotalBalance currentBalance={currentBalanceTotal} futureBalance={futureBalanceTotal}  /> */}
                <Row gutter={24} align="middle" justify="space-between">
                    <Col>
                        <Title level={5}>הפרש כולל</Title>
                        <p>הפרש כולל: <span className={styles.financialNumber}> ח״שׁ {balanceDifference}</span></p>
                    </Col>
                    <Col>
                        <Button className={styles.buttonCalculate} type="primary" size="large" onClick={handleCalculate}>
                            חישוב
                        </Button>
                    </Col>
                </Row>
            </Header>
            <Content className={styles.content}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Row>
                            <Card className={styles.cardAccountBalance}>
                                <p>מודל שיתופי</p>
                            </Card>
                        </Row>
                        <Row>
                            <Col span={12} className={styles.columnGeneral}>
                                <CurrentIncomes setIncomes={setIncomes} />
                            </Col>
                            <Col span={12} className={styles.columnGeneral}>
                                <CurrentExpenses setExpenses={setExpenses} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <CurrentBalance incomes={incomes} expenses={expenses} />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row>
                            <Card className={styles.cardAccountBalance}>
                                <p>מודל מתחדש</p>
                            </Card>
                        </Row>
                        <Row>
                            <Col span={12} className={styles.columnGeneral}>
                                <FutureIncomes setIncomes={setFutureIncomes}/>
                            </Col >
                            <Col span={12} className={styles.columnGeneral}>
                                <FutureExpenses setExpenses={setFutureExpenses} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FutureBalance incomes={futureIncomes} expenses={futureExpenses} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
            <StepsBar />
            <InfoDrawer
                title="Information"
                content={drawerContent}
                visible={drawerVisible}
                onClose={closeDrawer}
            />
        </DynamicLayout>
    );
};

export default AccountBalance;