/* src/pages/home/Credits.tsx */
import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import AWSIcon from '../../components/ui/icons/awsIcon.tsx';
import AWSAmplifyIcon from '../../components/ui/icons/awsAmplifyIcon.tsx';
import BuilderIOIcon from '../../components/ui/icons/builderIOIcon.tsx';
import OpenAIIcon from '../../components/ui/icons/openAIIcon.tsx';
import GeminiIcon from '../../components/ui/icons/geminiIcon.tsx';
import GithubCopilotIcon from '../../components/ui/icons/githubCopilotIcon.tsx';
import GithubIcon from '../../components/ui/icons/githubIcon.tsx';
import ReactIcon from '../../components/ui/icons/reactIcon.tsx';
import TypescriptIcon from '../../components/ui/icons/typescriptIcon.tsx';
import NodeJSIcon from '../../components/ui/icons/nodeJSIcon.tsx';
import ANTDesignIcon from '../../components/ui/icons/antDesignIcon.tsx';
import FigmaIcon from '../../components/ui/icons/figmaIcon.tsx';
import VSCodeIcon from '../../components/ui/icons/vscodeIcon.tsx';
import styles from './css/Credits.module.css';

const { Title } = Typography;

const Credits: React.FC = () => {
    return (
        <Card className={styles.card}>
        <div className={styles.creditsSection}>
                <Title level={4} style={{ margin: "30px", color: "LemonChiffon" }}>NextVision is an open-source non-profit project that's been created using</Title>
            <Row justify="center" gutter={[16, 16]}>
                <Col className={styles.iconCol}>
                    <AWSIcon/>
                    <p>Amazon</p>
                    <p>Web Services</p>
                </Col>
                <Col className={styles.iconCol}>
                    <AWSAmplifyIcon />
                    <p>AWS</p>
                    <p>Amplify</p>
                </Col>
                <Col className={styles.iconCol}>
                    <BuilderIOIcon />
                    <p>Builder.IO</p>
                </Col>
                <Col className={styles.iconCol}>
                    <OpenAIIcon />
                    <p>OpenAI</p>
                </Col>
                <Col className={styles.iconCol}>
                    <GeminiIcon />
                    <p>Google</p>
                    <p>Bard</p>
                </Col>
                <Col className={styles.iconCol}>
                    <GithubCopilotIcon />
                    <p>Github</p>
                    <p>Copilot</p>
                </Col>
                <Col className={styles.iconCol}>
                    <GithubIcon />
                    <p>Github</p>
                </Col>
                <Col className={styles.iconCol}>
                    <ReactIcon />
                    <p>React.js</p>
                </Col>
                <Col className={styles.iconCol}>
                    <TypescriptIcon />
                    <p>Typesscript</p>
                </Col>
                <Col className={styles.iconCol}>
                    <NodeJSIcon />
                    <p>Node.js</p>
                </Col>
                <Col className={styles.iconCol}>
                    <FigmaIcon />
                    <p>Figma</p>
                </Col>
                <Col className={styles.iconCol}>
                    <ANTDesignIcon />
                    <p>Ant-Design</p>
                </Col>
                <Col className={styles.iconCol}>
                    <VSCodeIcon />
                    <p>VSCode</p>
                </Col>
            </Row>
        </div>
        </Card>
    );
};

export default Credits;
