/* src/components/ui/stepper/StepBar.tsx */
import React from 'react';
import { Steps, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './css/StepsBar.module.css';
import { UserOutlined, BankOutlined, SmileOutlined, FileDoneOutlined } from '@ant-design/icons';

const { Step } = Steps;

const StepsBar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const steps = [
        { title: 'כניסה', percent: '25', path: '/', description: 'עמוד הבית', icon: <UserOutlined /> },
        { title: 'מידע כללי', percent: '50', path: '/social-data', description: 'הזנת נתונים סוציאלים', icon: <FileDoneOutlined /> },
        { title: 'מאזן', percent: '75', path: '/account-balance', description: 'סימולצית נתונים', icon: <BankOutlined /> },
        // { title: 'תחזית', path: '/forecast', description: 'מודל התחדשות', icon: <RiseOutlined /> },
        { title: 'סיום', percent: '100', path: '/review-and-logout', description: 'סקירת נתונים ', icon: <SmileOutlined /> }
    ];

    const currentStep = steps.findIndex(step => step.path === location.pathname);

    const next = () => {
        if (currentStep < steps.length - 1) {
            navigate(steps[currentStep + 1].path);
        }
    };

    const prev = () => {
        if (currentStep > 0) {
            navigate(steps[currentStep - 1].path);
        }
    };

    return (
        <div className={styles.stepsBar}>
            <Steps current={currentStep} size={"default"}>
                {steps.map(step => (
                    <Step key={step.title} title={step.title} description={step.description} icon={step.icon} />
                ))}
            </Steps>
            <div className={styles.stepsAction}>
                {currentStep > 0 && (
                    <Button className={styles.buttonPrev} size="large" onClick={() => prev()}>
                        הקודם
                    </Button>
                )}
                {currentStep < steps.length - 1 && (
                    <Button className={styles.buttonPrev} size="large" type="primary" onClick={() => next()}>
                        הבא
                    </Button>
                )}
            </div>
        </div>
    );
};

export default StepsBar;