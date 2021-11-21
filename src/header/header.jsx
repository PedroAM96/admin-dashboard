import React, { useState } from "react";
import '../styles/global.scss';
import './header.scss';
import AvatarIcon from '../../public/avatar.png';
import RamperLogo from '../../public/ramper.svg';
import { Avatar, Badge, Button, Col, Image, Layout, Row, Tooltip, Typography } from "antd";
import { BellOutlined, QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Header } = Layout;
const email = 'pedro.angelo@ramper.com.br';
const letter = email.slice(0, 1).toUpperCase();


export function HeaderComponent() {
    const [ellipsis, setEllipsis] = useState(true);

    return <>
        <Header>
            <Row>
                <Col flex="10rem" className="centralize">
                    <img src={RamperLogo} alt="ramper" style={{ margin: 10, padding: 6 }} />
                </Col>
                <Col flex="auto">
                    <Row justify="end">
                        <Col flex="3rem" className="centralize">
                            <Tooltip title="pesquisar" className="centralize">
                                <Button type='link' icon={<SearchOutlined />} size="medium" />
                            </Tooltip>
                        </Col>
                        <Col flex="3rem" className="centralize">
                            <Tooltip title="base de conhecimento">
                                <Button
                                    className="centralize"
                                    type='link'
                                    href="https://basedeconhecimento.ramper.com.br/en/"
                                    target="_blank"
                                    icon={<QuestionCircleOutlined />}
                                    size="medium"
                                />
                            </Tooltip>
                        </Col>
                        <Col flex="3rem" className="centralize">
                            <Tooltip title="notificação">
                                <Badge size="small" count={5}>
                                    <Button type='link' icon={<BellOutlined />} size="medium" />
                                </Badge>
                            </Tooltip>
                        </Col>
                        <Col flex="10rem" className="centralize">
                            <Avatar src={AvatarIcon} alt="avatar" style={{ margin: 10, padding: 3 }}>
                                {letter}
                            </Avatar>
                            <Text
                                style={ellipsis ? { width: 100 } : undefined}
                                ellipsis={ellipsis ? { tooltip: email } : false}
                            >
                                {email}
                            </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    </>
}