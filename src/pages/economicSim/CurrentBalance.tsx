/* ./src/pages/economicSim/CurrentBalance.tsx */
import React, { useState, useEffect } from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { useGlobalState } from '../../GlobalStateProvider';
import styles from './css/AccountBalance.module.css';

const { Title } = Typography;

interface CurrentBalanceProps {
    incomes: number[];
    expenses: number[];
}

const CurrentBalance: React.FC<{ incomes: number[], expenses: number[] }> = ({ incomes, expenses }) => {
    // Dev
    const { state } = useGlobalState();

    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [balanceTotal, setBalanceTotal] = useState(0);

    useEffect(() => {
        const totalIncomes = incomes.reduce((total, income) => total + income, 0);
        const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);
        setIncomeTotal(totalIncomes);
        setExpenseTotal(totalExpenses);
        setBalanceTotal(totalIncomes - totalExpenses);
    }, [incomes, expenses]);

    return (
        <Row gutter={16} className={styles.totalCurrentBalance}>
            <Col span={8}>
                <Card className={styles.incomeAmount}>
                    <p>סה״כ הכנסות: <span className={styles.financialNumber}> ח״ש {incomeTotal}</span></p>
                </Card>
            </Col>
            <Col span={8}>
                <Card className={styles.totalBalance}>
                    <p>סה״כ יתרה: <span className={styles.financialNumber}> ח״ש {balanceTotal}</span></p>
                </Card>
            </Col>
            <Col span={8}>
                <Card className={styles.expensesAmount}>
                    <p>סה״כ הוצאות: <span className={styles.financialNumber}> ח״ש {expenseTotal}</span></p>
                </Card>
            </Col>
        </Row>
    );
};

export default CurrentBalance;
