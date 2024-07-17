/* src/pages/home/Credits.tsx */
import React from 'react';
import { Row, Col, Typography } from 'antd';
import AWSAmplifyIcon from '../assets/icons/aws-amplify.svg';
import BuilderIOIcon from '../assets/icons/builder-io.svg';
import ChatGPTIcon from '../../../assets/icons/openai.svg';
import GithubCopilotIcon from '../assets/icons/github-copilot.svg';
import GithubIcon from '../assets/icons/github.svg';
import ReactIcon from '../assets/icons/react.svg';
import TypescriptIcon from '../assets/icons/typescript.svg';
import NodeJSIcon from '../assets/icons/nodejs.svg';
import { AntDesignOutlined } from '@ant-design/icons';
import VSCodeIcon from '../assets/icons/vscode.svg';
import styles from './css/Credits.module.css';

const { Title } = Typography;

const Credits: React.FC = () => {
    return (
        <div className={styles.creditsSection}>
            <Title level={4}>NextVision is an open-source code that's been created using:</Title>
            <Row justify="center" gutter={[16, 16]}>
                <Col className={styles.iconCol}>
                    <AWSAmplifyIcon className={styles.icon} />
                    <p>AWS Amplify</p>
                </Col>
                <Col className={styles.iconCol}>
                    <BuilderIOIcon className={styles.icon} />
                    <p>Builder.io</p>
                </Col>
                <Col className={styles.iconCol}>
                    <ChatGPTIcon className={styles.icon} />
                    <p>Chat GPT 4</p>
                </Col>
                <Col className={styles.iconCol}>
                    <GithubCopilotIcon className={styles.icon} />
                    <p>Github Copilot</p>
                </Col>
                <Col className={styles.iconCol}>
                    <GithubIcon className={styles.icon} />
                    <p>Github</p>
                </Col>
                <Col className={styles.iconCol}>
                    <ReactIcon className={styles.icon} />
                    <p>React</p>
                </Col>
                <Col className={styles.iconCol}>
                    <TypescriptIcon className={styles.icon} />
                    <p>Typescript</p>
                </Col>
                <Col className={styles.iconCol}>
                    <NodeJSIcon className={styles.icon} />
                    <p>Node.js</p>
                </Col>
                <Col className={styles.iconCol}>
                    <AntDesignIcon className={styles.icon} />
                    <p>Ant Design</p>
                </Col>
                <Col className={styles.iconCol}>
                    <VSCodeIcon className={styles.icon} />
                    <p>VSCode</p>
                </Col>
            </Row>
        </div>
    );
};

export default Credits;
