/* ./src/pages/logout/ReviewAndLogout.tsx */
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Layout, Row, Col, Typography, Button, Modal } from 'antd';
import StepsBar from '../../components/ui/stepper/StepsBar';
import DynamicLayout from '../../components/ui/layouts/DynamicBackgroundLayout';
import { useGlobalState } from '../../GlobalStateProvider';
import styles from './css/ReviewAndLogout.module.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const ReviewAndLogout: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { state } = useGlobalState();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleLogout = () => {
        window.location.href = 'https://www.google.co.il';

        window.close();
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.setFont('helvetica'); // Ensure the font supports Hebrew characters
        doc.text('סקירת סיכום', 10, 10);

        // Social Data
        doc.text(`מצב משפחתי: ${state.familyStatus}`, 10, 20);
        doc.text(`סטטוס קהילתי של בן/בת זוג: ${state.partnerCommunityStatus}`, 10, 30);
        doc.text(`שטח דירה: ${state.apartmentSquareFootage}`, 10, 40);
        doc.text(`מספר ילדים: ${state.numberOfChildren}`, 10, 50);
        state.childrenData.forEach((child, index) => {
            const yOffset = 60 + index * 100;
            doc.text(`ילד ${index + 1} - שם: ${child.name}`, 10, yOffset);
            doc.text(`ילד ${index + 1} - גיל: ${child.age}`, 10, yOffset + 10);
            doc.text(`ילד ${index + 1} - רמת השכלה: ${child.educationLevel}`, 10, yOffset + 20);
            doc.text(`ילד ${index + 1} - חוגי העשרה: ${child.teenageClassFees}`, 10, yOffset + 30);
            doc.text(`ילד ${index + 1} - מערכת חינוך: ${child.educationSystem}`, 10, yOffset + 40);
            doc.text(`ילד ${index + 1} - תשלום גן/פעוטון: ${child.futureKindergartenExpenses}`, 10, yOffset + 50);
            doc.text(`ילד ${index + 1} - שכר לימוד יסודי: ${child.futureSchoolExpenses}`, 10, yOffset + 60);
            doc.text(`ילד ${index + 1} - שכר לימוד תיכון: ${child.futureHighSchoolExpenses}`, 10, yOffset + 70);
            doc.text(`ילד ${index + 1} - שיעורים פרטיים: ${child.privateLessonFees}`, 10, yOffset + 80);
            doc.text(`ילד ${index + 1} - הסעות: ${child.educationTransportation}`, 10, yOffset + 90);
            doc.text(`ילד ${index + 1} - טיפול מיוחד: ${child.futureEducationPersonalCareExpenses}`, 10, yOffset + 100);
            doc.text(`ילד ${index + 1} - צהרון: ${child.futureEducationDayCareExpenses}`, 10, yOffset + 110);
        });

        // Financial Data
        doc.text(`תקציב אישי: ${state.personalBudget}`, 10, 180);
        doc.text(`תקציב חינוך: ${state.educationSystemBudgets}`, 10, 190);
        doc.text(`תוספת בגין ילדים: ${state.childrenAddition}`, 10, 200);
        doc.text(`מזון וכלכלה: ${state.provisions}`, 10, 210);
        doc.text(`כביסה: ${state.laundry}`, 10, 220);
        doc.text(`גז: ${state.gas}`, 10, 230);
        doc.text(`היגיינה: ${state.hygiene}`, 10, 240);
        doc.text(`אחזקה: ${state.maintenance}`, 10, 250);
        doc.text(`רכב: ${state.vehicle}`, 10, 260);
        doc.text(`אנרגיה: ${state.energy}`, 10, 270);
        doc.text(`תוספת בגין עבודה: ${state.benefitForWork}`, 10, 280);
        doc.text(`אש״ל עובדי חוץ: ${state.outsourcedFood}`, 10, 290);
        doc.text(`טיפול כרוני: ${state.chronicleTreatment}`, 10, 300);
        doc.text(`תוספת ותק: ${state.seniorityAddition}`, 10, 310);
        doc.text(`זיכוי בגין רווחה: ${state.welfare}`, 10, 320);
        doc.text(`קרן גיל הזהב: ${state.goldenAgeAmount}`, 10, 330);
        doc.text(`הכנסה אחרת: ${state.otherIncome}`, 10, 340);

        // Current Expenses
        doc.text(`חשמל: ${state.electricityExpenses}`, 10, 350);
        doc.text(`אחזקה: ${state.maintenanceServiceExpenses}`, 10, 360);
        doc.text(`תחזוקת בית: ${state.houseMaintenanceExpenses}`, 10, 370);
        doc.text(`נוי: ${state.gardeningExpenses}`, 10, 380);
        doc.text(`תקשורת: ${state.networkingExpenses}`, 10, 390);
        doc.text(`אינטרנט/כבלים: ${state.internetExpenses}`, 10, 400);
        doc.text(`תחבורה: ${state.vehicleExpenses}`, 10, 410);
        doc.text(`שיעורים פרטיים: ${state.privateLessonExpenses}`, 10, 420);
        doc.text(`חוגי העשרה: ${state.teenageClassExpenses}`, 10, 430);
        doc.text(`חינוך - אחר: ${state.otherEducationExpenses}`, 10, 440);
        doc.text(`טיפולי שיניים: ${state.partnerDentistExpenses}`, 10, 450);
        doc.text(`טיפולי שיניים - ילדים: ${state.childrenDentistExpenses}`, 10, 460);
        doc.text(`רווחה: ${state.welfareExpenses}`, 10, 470);
        doc.text(`כלכלה: ${state.foodExpenses}`, 10, 480);
        doc.text(`חדר אוכל: ${state.diningRoomExpenses}`, 10, 490);
        doc.text(`כביסה: ${state.laundryExpenses}`, 10, 500);
        doc.text(`אחר: ${state.otherExpenses}`, 10, 510);

        // Future Incomes
        doc.text(`משכורת נטו - חבר/ה: ${state.futureNetIncome}`, 10, 520);
        doc.text(`משכורת ברוטו - חבר/ה: ${state.futureGrossIncome}`, 10, 530);
        doc.text(`משכורת נטו - בן/ת זוג: ${state.futurePartnerNetIncome}`, 10, 540);
        doc.text(`משכורת ברוטו - בן/ת זוג: ${state.futurePartnerGrossIncome}`, 10, 550);
        doc.text(`משפחתי: ${state.futurePensionAllowance}`, 10, 560);
        doc.text(`משפחתי: ${state.futurePartnerPensionAllowance}`, 10, 570);
        doc.text(`משפחתי: ${state.futureNationalInsuranceAllowance}`, 10, 580);
        doc.text(`משפחתי: ${state.futureNationalInsuranceAllowanceCommunity}`, 10, 590);
        doc.text(`קצבת זקנה - חבר/ה: ${state.futureElderlyPension}`, 10, 600);
        doc.text(`קצבת זקנה - בן/ת זוג: ${state.futurePartnerElderlyPension}`, 10, 610);
        doc.text(`משפחתי: ${state.futureRecoveryFee}`, 10, 620);
        doc.text(`משפחתי: ${state.futurePartnerRecoveryFee}`, 10, 630);
        doc.text(`קרן השתלמות - חבר/ה: ${state.futureEducationFund}`, 10, 640);
        doc.text(`קרן השתלמות - בן/ת זוג: ${state.futurePartnerEducationFund}`, 10, 650);
        doc.text(`זיכוי בגין רווחה: ${state.futureWelfareIncomes}`, 10, 660);
        doc.text(`השתתפות בטיפולי שיניים - חבר/ה: ${state.futureDentistIncomes}`, 10, 670);
        doc.text(`השתתפות בטיפולי שיניים - בן/ת זוג: ${state.futurePartnerDentistIncomes}`, 10, 680);
        doc.text(`השתתפות בטיפולי שיניים - ילדים: ${state.futureChildrenDentistIncomes}`, 10, 690);
        doc.text(`זיכוי בגין ילדים: ${state.futureChildrenAddition}`, 10, 700);
        doc.text(`רשת ביטחון: ${state.futureFamilySafetyNet}`, 10, 710);
        doc.text(`רשת ביטחון חינוך: ${state.futureChildrenSafetyNet}`, 10, 720);
        doc.text(`מזון: ${state.futureProvisions}`, 10, 730);
        doc.text(`מענק הסתגלות: ${state.futureAdaptationGrant}`, 10, 740);
        doc.text(`אחר: ${state.futureOtherIncome}`, 10, 750);

        // Future Expenses
        doc.text(`ארנונה: ${state.futurePropertyTaxExpenses}`, 10, 760);
        doc.text(`מים וביוב: ${state.futureWaterAndSewerExpenses}`, 10, 770);
        doc.text(`אנרגיה: ${state.futureEnergyExpenses}`, 10, 780);
        doc.text(`תחזוקת בית: ${state.futureHouseMaintenanceExpenses}`, 10, 790);
        doc.text(`נוי, שיפוץ ודקורציה: ${state.futureGardeningExpenses}`, 10, 800);
        doc.text(`תקשורת: ${state.futureNetworkingExpenses}`, 10, 810);
        doc.text(`אינטרנט/כבלים: ${state.futureInternetExpenses}`, 10, 820);
        doc.text(`תחבורה: ${state.futureVehicleExpenses}`, 10, 830);
        doc.text(`מערכת חינוך: ${state.futureEducationSystemExpenses}`, 10, 840);
        doc.text(`שיעורים פרטיים: ${state.futurePrivateLessonExpenses}`, 10, 880);
        doc.text(`חוגי העשרה: ${state.futureTeenageClassExpenses}`, 10, 890);
        doc.text(`הסעות: ${state.futureEducationTransportationExpenses}`, 10, 900);
        doc.text(`ביטוח בריאות: ${state.futureHealthInsuranceExpenses}`, 10, 930);
        doc.text(`טיפולי שיניים - חבר/ה: ${state.futureDentistExpenses}`, 10, 940);
        doc.text(`טיפולי שיניים - בן/ת זוג: ${state.futurePartnerDentistExpenses}`, 10, 950);
        doc.text(`טיפולי שיניים - ילדים: ${state.futureChildrenDentistExpenses}`, 10, 960);
        doc.text(`רווחה: ${state.futureWelfareExpenses}`, 10, 970);
        doc.text(`מזון: ${state.futureFoodExpenses}`, 10, 980);
        doc.text(`חדר אוכל: ${state.futureDiningRoomExpenses}`, 10, 990);
        doc.text(`כביסה: ${state.futureLaundryExpenses}`, 10, 1000);
        doc.text(`מס אחיד: ${state.futureFlatTaxExpenses}`, 10, 1010);
        doc.text(`מס ברוטו: ${state.futureGrossTaxExpenses}`, 10, 1020);
        doc.text(`מזונות: ${state.futureAlimonyExpenses}`, 10, 1030);
        doc.text(`ניקיון: ${state.futureCleaningExpenses}`, 10, 1040);
        doc.text(`אחר: ${state.futureOtherExpenses}`, 10, 1050);

        doc.save('review-summary.pdf');
    };

    const renderSummary = () => {
        return (
            <>
                <Title level={4}>מידע אישי</Title>
                <Paragraph>מצב משפחתי: {state.familyStatus}</Paragraph>
                <Paragraph>סטטוס קהילתי של בן/בת זוג: {state.partnerCommunityStatus}</Paragraph>
                <Paragraph>מספר ילדים: {state.numberOfChildren}</Paragraph>
                {state.childrenData.map((child, index) => (
                    <div key={index}>
                        <Paragraph>ילד {index + 1} - שם: {child.name}</Paragraph>
                        <Paragraph>ילד {index + 1} - גיל: {child.age}</Paragraph>
                        <Paragraph>ילד {index + 1} - רמת השכלה: {child.educationLevel}</Paragraph>
                        <Paragraph>ילד {index + 1} - חוגי העשרה: {child.teenageClassFees}</Paragraph>
                        <Paragraph>ילד {index + 1} - מערכת חינוך: {child.educationSystem}</Paragraph>
                        <Paragraph>ילד {index + 1} - תשלום גן/פעוטון: {child.futureKindergartenExpenses}</Paragraph>
                        <Paragraph>ילד {index + 1} - שכר לימוד יסודי: {child.futureSchoolExpenses}</Paragraph>
                        <Paragraph>ילד {index + 1} - שכר לימוד תיכון: {child.futureHighSchoolExpenses}</Paragraph>
                        <Paragraph>ילד {index + 1} - שיעורים פרטיים: {child.privateLessonFees}</Paragraph>
                        <Paragraph>ילד {index + 1} - הסעה: {child.educationTransportation}</Paragraph>
                        <Paragraph>ילד {index + 1} - טיפול מיוחד: {child.futureEducationPersonalCareExpenses}</Paragraph>
                        <Paragraph>ילד {index + 1} - צהרון: {child.futureEducationDayCareExpenses}</Paragraph>
                    </div>
                ))}

                <Title level={4}>נתונים פיננסיים</Title>
                <Paragraph>תקציב אישי: {state.personalBudget}</Paragraph>
                <Paragraph>תקציב חינוך: {state.educationSystemBudgets}</Paragraph>
                <Paragraph>תוספת בגין ילדים: {state.childrenAddition}</Paragraph>
                <Paragraph>מזון וכלכלה: {state.provisions}</Paragraph>
                <Paragraph>כביסה: {state.laundry}</Paragraph>
                <Paragraph>גז: {state.gas}</Paragraph>
                <Paragraph>היגיינה: {state.hygiene}</Paragraph>
                <Paragraph>אחזקה: {state.maintenance}</Paragraph>
                <Paragraph>רכב: {state.vehicle}</Paragraph>
                <Paragraph>אנרגיה: {state.energy}</Paragraph>
                <Paragraph>תוספת בגין עבודה: {state.benefitForWork}</Paragraph>
                <Paragraph>אש״ל עובדי חוץ: {state.outsourcedFood}</Paragraph>
                <Paragraph>טיפול כרוני: {state.chronicleTreatment}</Paragraph>
                <Paragraph>תוספת ותק: {state.seniorityAddition}</Paragraph>
                <Paragraph>זיכוי בגין רווחה: {state.welfare}</Paragraph>
                <Paragraph>קרן גיל הזהב: {state.goldenAgeAmount}</Paragraph>
                <Paragraph>הכנסה אחרת: {state.otherIncome}</Paragraph>

                <Title level={4}>הוצאות נוכחיות</Title>
                <Paragraph>חשמל: {state.electricityExpenses}</Paragraph>
                <Paragraph>אחזקה: {state.maintenanceServiceExpenses}</Paragraph>
                <Paragraph>תחזוקת בית: {state.houseMaintenanceExpenses}</Paragraph>
                <Paragraph>נוי: {state.gardeningExpenses}</Paragraph>
                <Paragraph>תקשורת: {state.networkingExpenses}</Paragraph>
                <Paragraph>אינטרנט/כבלים: {state.internetExpenses}</Paragraph>
                <Paragraph>תחבורה: {state.vehicleExpenses}</Paragraph>
                <Paragraph>שיעורים פרטיים: {state.privateLessonExpenses}</Paragraph>
                <Paragraph>חוגי העשרה: {state.teenageClassExpenses}</Paragraph>
                <Paragraph>חינוך - אחר: {state.otherEducationExpenses}</Paragraph>
                <Paragraph>טיפולי שיניים: {state.partnerDentistExpenses}</Paragraph>
                <Paragraph>טיפולי שיניים - ילדים: {state.childrenDentistExpenses}</Paragraph>
                <Paragraph>רווחה: {state.welfareExpenses}</Paragraph>
                <Paragraph>כלכלה: {state.foodExpenses}</Paragraph>
                <Paragraph>חדר אוכל: {state.diningRoomExpenses}</Paragraph>
                <Paragraph>כביסה: {state.laundryExpenses}</Paragraph>
                <Paragraph>אחר: {state.otherExpenses}</Paragraph>

                <Title level={4}>הכנסות עתידיות</Title>
                <Paragraph>משכורת נטו - חבר/ה: {state.futureNetIncome}</Paragraph>
                <Paragraph>משכורת ברוטו - חבר/ה: {state.futureGrossIncome}</Paragraph>
                <Paragraph>משכורת נטו - בן/ת זוג: {state.futurePartnerNetIncome}</Paragraph>
                <Paragraph>משכורת ברוטו - בן/ת זוג: {state.futurePartnerGrossIncome}</Paragraph>
                <Paragraph>משפחתי: {state.futurePensionAllowance}</Paragraph>
                <Paragraph>משפחתי: {state.futurePartnerPensionAllowance}</Paragraph>
                <Paragraph>משפחתי: {state.futureNationalInsuranceAllowance}</Paragraph>
                <Paragraph>משפחתי: {state.futureNationalInsuranceAllowanceCommunity}</Paragraph>
                <Paragraph>קצבת זקנה - חבר/ה: {state.futureElderlyPension}</Paragraph>
                <Paragraph>קצבת זקנה - בן/ת זוג: {state.futurePartnerElderlyPension}</Paragraph>
                <Paragraph>משפחתי: {state.futureRecoveryFee}</Paragraph>
                <Paragraph>משפחתי: {state.futurePartnerRecoveryFee}</Paragraph>
                <Paragraph>קרן השתלמות - חבר/ה: {state.futureEducationFund}</Paragraph>
                <Paragraph>קרן השתלמות - בן/ת זוג: {state.futurePartnerEducationFund}</Paragraph>
                <Paragraph>זיכוי בגין רווחה: {state.futureWelfareIncomes}</Paragraph>
                <Paragraph>השתתפות בטיפולי שיניים - חבר/ה: {state.futureDentistIncomes}</Paragraph>
                <Paragraph>השתתפות בטיפולי שיניים - בן/ת זוג: {state.futurePartnerDentistIncomes}</Paragraph>
                <Paragraph>השתתפות בטיפולי שיניים - ילדים: {state.futureChildrenDentistIncomes}</Paragraph>
                <Paragraph>זיכוי בגין ילדים: {state.futureChildrenAddition}</Paragraph>
                <Paragraph>רשת ביטחון: {state.futureFamilySafetyNet}</Paragraph>
                <Paragraph>רשת ביטחון חינוך: {state.futureChildrenSafetyNet}</Paragraph>
                <Paragraph>מזון: {state.futureProvisions}</Paragraph>
                <Paragraph>מענק הסתגלות: {state.futureAdaptationGrant}</Paragraph>
                <Paragraph>אחר: {state.futureOtherIncome}</Paragraph>

                <Title level={4}>הוצאות עתידיות</Title>
                <Paragraph>ארנונה: {state.futurePropertyTaxExpenses}</Paragraph>
                <Paragraph>מים וביוב: {state.futureWaterAndSewerExpenses}</Paragraph>
                <Paragraph>אנרגיה: {state.futureEnergyExpenses}</Paragraph>
                <Paragraph>תחזוקת בית: {state.futureHouseMaintenanceExpenses}</Paragraph>
                <Paragraph>נוי, שיפוץ ודקורציה: {state.futureGardeningExpenses}</Paragraph>
                <Paragraph>תקשורת: {state.futureNetworkingExpenses}</Paragraph>
                <Paragraph>אינטרנט/כבלים: {state.futureInternetExpenses}</Paragraph>
                <Paragraph>תחבורה: {state.futureVehicleExpenses}</Paragraph>
                <Paragraph>מערכת חינוך: {state.futureEducationSystemExpenses}</Paragraph>
                <Paragraph>שיעורים פרטיים: {state.futurePrivateLessonExpenses}</Paragraph>
                <Paragraph>חוגי העשרה: {state.futureTeenageClassExpenses}</Paragraph>
                <Paragraph>הסעות: {state.futureEducationTransportationExpenses}</Paragraph>
                <Paragraph>ביטוח בריאות: {state.futureHealthInsuranceExpenses}</Paragraph>
                <Paragraph>טיפולי שיניים - חבר/ה: {state.futureDentistExpenses}</Paragraph>
                <Paragraph>טיפולי שיניים - בן/ת זוג: {state.futurePartnerDentistExpenses}</Paragraph>
                <Paragraph>טיפולי שיניים - ילדים: {state.futureChildrenDentistExpenses}</Paragraph>
                <Paragraph>רווחה: {state.futureWelfareExpenses}</Paragraph>
                <Paragraph>מזון: {state.futureFoodExpenses}</Paragraph>
                <Paragraph>חדר אוכל: {state.futureDiningRoomExpenses}</Paragraph>
                <Paragraph>כביסה: {state.futureLaundryExpenses}</Paragraph>
                <Paragraph>מס אחיד: {state.futureFlatTaxExpenses}</Paragraph>
                <Paragraph>מס ברוטו: {state.futureGrossTaxExpenses}</Paragraph>
                <Paragraph>מזונות: {state.futureAlimonyExpenses}</Paragraph>
                <Paragraph>ניקיון: {state.futureCleaningExpenses}</Paragraph>
                <Paragraph>אחר: {state.futureOtherExpenses}</Paragraph>
            </>
        );
    };

    return (
        <DynamicLayout className={styles.layout}>
            <Header className={styles.header}>
                <Title level={3} className={styles.title}>סקירה וסיום</Title>
            </Header>
            <Content className={styles.content}>
                <Row justify="center" gutter={16}>
                    <Col>
                        <Button className={styles.button} type="primary" size="large" onClick={showModal}>סקירה כללית</Button>
                    </Col>
                    <Col>
                        <Button className={styles.button} type="primary" size="large" onClick={handleLogout}>יציאה</Button>
                    </Col>
                </Row>
                <Modal title="סיכום" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    {renderSummary()}
                    <Button onClick={handleDownload} type="primary" style={{ marginTop: '20px' }}>הורד דו״ח</Button>
                </Modal>
            </Content>
            <StepsBar />
        </DynamicLayout>
    );
};

export default ReviewAndLogout;
