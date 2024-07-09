/* ./src/pages/socialSim/SocialSimulator.tsx */
import React, { useState } from 'react';
import { Layout, Card, Typography, Form, Input, Select, InputNumber, Row } from 'antd';
import MemberStatus from '../../components/ui/select/MemberStatus'; // Add this import statement
import PartnerCommunityStatus from '../../components/ui/select/PartnerCommunityStatus';
import ChildrenSelect from '../../components/ui/select/ChildrenSelect';
import NumberOfChildrenSelect from '../../components/ui/select/NumberOfChildrenSelect';
import ChildrenStatusTable from '../../components/ui/tables/ChildrenStatusTable';
import StepsBar from "../../components/ui/stepper/StepsBar";
import Seniority from '../../components/ui/select/Seniority';
import PartnerSeniority from '../../components/ui/select/PartnerSeniority';
import DeceasedSeniority from '../../components/ui/select/DeceasedSeniority';
import ApartmentSquareFootage from '../../components/ui/select/ApartmentSquareFootage';
import MemberAge from '../../components/ui/input/MemberAge';
import MemberPartnerAge from '../../components/ui/input/MemberPartnerAge';
import MemberRetired from '../../components/ui/input/MemberRetired';
import MemberPartnerRetired from '../../components/ui/input/MemberPartnerRetired';
import MemberGoldenAge from '../../components/ui/select/MemberGoldenAge';
import MemberPartnerGoldenAge from '../../components/ui/select/MemberPartnerGoldenAge';
import FamilyNationalInsurance from '../../components/ui/select/FamilyNationalInsurance';
import MemberPositionScope from '../../components/ui/select/MemberPositionScope';
import MemberPartnerPositionScope from '../../components/ui/select/MemberPartnerPositionScope';
import DynamicLayout from '../../components/ui/layouts/DynamicBackgroundLayout';
import FamilyAvatar from '../../components/ui/avatars/FamilyAvatar';
import styles from './css/SocialSimulator.module.css';

import { useGlobalState } from '../../GlobalStateProvider';

// const baseStyle: React.CSSProperties = {
//     padding: '0px 4px',
// };

const { Header, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const SocialSimulator: React.FC = () => {
    // const SocialSimulator: React.FC<SocialSimulatorProps> = () => {
    const { state, setFamilyStatus, setPartnerCommunityStatus, setNumberOfChildren, setMemberAge, setMemberPartnerAge, setMemberRetired, setMemberPartnerRetired, setSeniority, setPartnerSeniority, setDeceasedSeniority, setApartmentSquareFootage, setMemberGoldenAge, setMemberPartnerGoldenAge } = useGlobalState();

    // const [familyStatus] = useState<string | null>(null);
    // const [partnerCommunityStatus] = useState<string | null>(null);
    const [hasChildren, setHasChildren] = useState<string | null>(null);
    // const [numberOfChildren] = useState<number | null>(null); // TODO: Check this

    const handleFamilyStatusChange = (status: string | null) => {
        setFamilyStatus(status);
    };

    const handlePartnerCommunityStatusChange = (status: string | null) => {
        setPartnerCommunityStatus(status);
    };

    const handleMemberRetiredChange = (status: string | null) => {
        setMemberRetired(status);
    }

    const handleMemberPartnerRetiredChange = (status: string | null) => {
        setMemberPartnerRetired(status);
    }

    const handleChildrenChange = (value: string) => {
        setHasChildren(value);
    };

    const handleNumberOfChildrenChange = (value: number) => {
        setNumberOfChildren(value);
    };

    const handleSeniorityChange = (value: number) => {
        setSeniority(value);
    }

    const handlePartnerSeniorityChange = (value: number) => {
        setPartnerSeniority(value);
    }

    const handleDeceasedSeniorityChange = (value: number) => {
        setDeceasedSeniority(value);
    }

    const handleApartmentSquareFootageChange = (value: number) => {
        setApartmentSquareFootage(value);
    }

    const handleMemberGoldenAgeChange = (value: string) => {
        setMemberGoldenAge(value);
    };

    const handleMemberPartnerGoldenAgeChange = (value: string) => {
        setMemberPartnerGoldenAge(value);
    };

    // const handleMemberAgeChange = (value: number) => {
    //     setMemberAge(value);
    // }

    // const handleMemberPartnerAgeChange = (value: number) => {
    //     setMemberPartnerAge(value);
    // }


    return (
        <DynamicLayout>
            <Header className={styles.header}>
                סימולטור מודל ההתחדשות
                <FamilyAvatar />
            </Header>
            {/* <h1>מידע אישי</h1> */}
            <Content className={styles.content}>
                <div className={styles.cardsContainer}>
                    <Card 
                        className={styles.card}
                        title="מידע אישי - חבר/ה"
                        >
                        {/* NOTE:We Had className={styles.form} here */}
                        <Form layout="horizontal">
                            <div className={styles.formRow}>
                                <MemberStatus status={state.familyStatus} onStatusChange={handleFamilyStatusChange} />
                                <MemberAge age={state.memberAge} onAgeChange={setMemberAge} />
                            </div>
                            <div className={styles.formRow}>
                                <Seniority onSeniorityChange={handleSeniorityChange} label="ותק" />
                                <MemberPositionScope />
                            </div>
                            <div className={styles.formRow}>
                                <MemberRetired onMemberRetiredChange={handleMemberRetiredChange} />
                                <MemberGoldenAge/>
                            </div>
                        </Form>
                        {/* <Card className={styles.card} title="מידע נוסף" style={{ ...baseStyle }}> */}
                        <Card className={styles.card} title="מידע נוסף">
                            <div className={styles.formRow}>
                                {/* <ApartmentSquareFootage onApartmentSquareFootageChange={handleApartmentSquareFootageChange}/> */}
                                <ApartmentSquareFootage />
                                <FamilyNationalInsurance />
                            </div>
                        </Card>
                    </Card>
                    </div>
                    <div className={styles.cardsContainer}>
                    <Card className={styles.card} title="מידע אישי - בן/ת זוג">
                        <Form layout="horizontal" className={styles.form}>
                            <div className={styles.formRow}>
                                <PartnerCommunityStatus status={state.partnerCommunityStatus} onStatusChange={handlePartnerCommunityStatusChange} />
                                <MemberPartnerAge age={state.memberPartnerAge} onAgeChange={setMemberPartnerAge} />
                            </div>
                            <div className={styles.formRow}>
                                <PartnerSeniority
                                    onPartnerSeniorityChange={handlePartnerSeniorityChange}
                                    label="ותק של בן/ת הזוג"
                                    disabled={state.partnerCommunityStatus !== 'community-member'}
                                />
                                <MemberPartnerPositionScope />
                            </div>
                            <div className={styles.formRow}>
                                <MemberPartnerRetired onMemberPartnerRetiredChange={handleMemberPartnerRetiredChange} />
                                <MemberPartnerGoldenAge />
                            </div>
                            {state.familyStatus === 'widower' && (
                                <div className={styles.formRow}>
                                    <DeceasedSeniority
                                        onDeceasedSeniorityChange={handleDeceasedSeniorityChange}
                                        label="ותק של הנפטר/ת"
                                        // disabled={state.partnerCommunityStatus !== 'community-member'}
                                    />
                                    {/* TODO: Need to make this row wider */}
                                </div>
                            )}
                        </Form>
                    </Card>
                    </div>
                    <div className={styles.cardsContainer}>
                    <Card className={styles.card} title="נתוני משפחה">
                        <Form layout="horizontal">
                            <div>
                                <ChildrenSelect onChildrenChange={handleChildrenChange} />
                                {/* Render ChildrenStatusTable when either hasChildren is 'yes' OR numberOfChildren is not null */}
                                {hasChildren === 'yes' && (
                                    <>
                                        <NumberOfChildrenSelect onNumberChange={handleNumberOfChildrenChange} />
                                        {state.numberOfChildren !== null && <ChildrenStatusTable numberOfChildren={state.numberOfChildren} />}
                                    </>
                                )}
                            </div>
                        </Form>
                    </Card>
                </div>
            </Content>
            <StepsBar />
        </DynamicLayout>
    );
};


export default SocialSimulator;