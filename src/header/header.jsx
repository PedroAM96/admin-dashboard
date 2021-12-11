import React, { useState } from "react";
import '../styles/global.scss';
import './header.scss';
import { Avatar, Badge, Button, Col, Image, Layout, Row, Tooltip, Typography } from "antd";
import { BellOutlined, QuestionCircleOutlined, SearchOutlined, Icon, MehTwoTone, FireTwoTone } from '@ant-design/icons';

const { Text } = Typography;
const { Header } = Layout;
const email = 'peter.paker@marvel.com';
const letter = email.slice(0, 1).toUpperCase();


export function HeaderComponent() {
    const [ellipsis, setEllipsis] = useState(true);

    return <>
        <Header>
            <Row>
                <Col flex="16rem" className="centralize">
                    <FireTwoTone twoToneColor="#FF007F" high style={{ fontSize: '32px', margin: '5px' }} />
                    <div className="title"> admin dashboard </div>
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
                                    href="https://github.com/PedroAM96/admin-dashboard/"
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
                            <MehTwoTone twoToneColor="#FF007F" alt="Avatar" style={{ margin: 10, padding: 3 }} />
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