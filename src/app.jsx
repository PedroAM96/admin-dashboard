import React from "react";
import './styles/global.scss';
import './app.scss';

import { Card, Col, Layout, Row, } from "antd";
import { HeaderComponent } from "./header/header";
import { SiderComponent } from "./sider/sider";
const { Footer, Content } = Layout;

export function App() {
    return <>
        <Layout>
            <HeaderComponent></HeaderComponent>
            <Layout>
                <SiderComponent></SiderComponent>
                <Content>
                    <Row gutter={[24, 24]}>
                        <Col span={8}>
                            <Card title="[LANÇAMENTO] Agenda Inteligente" bordered={false}>
                                Lançamento agenda inteligente
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="[CORRIGIDO] Bounce não sincronizando" bordered={false}>
                                Os créditos de Bounce não são devolvidos para os clientes. Quando os envios continuam ocorrendo para um e-mail que deu Bounce, mas não sincronizou, os créditos de envio são consumidos.
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="[DESENVOLVIMENTO] Separar integração do email da assinatura de email" bordered={false}>
                                Eu enquanto usuário desejo que a integração do email seja separada da assinatura para que assim não precise refazer a integração do email sempre que alterar minha assinatura
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 24 }}>
                        <Col span={24}>
                            <Card style={{ height: 600 }} title="[CORRIGIDO] Bounce não sincronizando" alt="[CORRIGIDO] Bounce não sincronizando" bordered={false}>
                                Os créditos de Bounce não são devolvidos para os clientes. Quando os envios continuam ocorrendo para um e-mail que deu Bounce, mas não sincronizou, os créditos de envio são consumidos.
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    </>
}