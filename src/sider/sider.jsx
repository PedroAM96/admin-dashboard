import '../styles/global.scss';
import './sider.scss';

import { Layout, Menu, } from "antd";
import { HomeOutlined, SendOutlined, SmileOutlined, TeamOutlined, UserAddOutlined, WifiOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

export function SiderComponent() {
    function handleClick(e) {
        console.log('click ', e);
    };

    return <Sider width={256}>
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>
                Times
            </Menu.Item>
            <Menu.Item key="3" icon={<SmileOutlined />}>
                Agências
            </Menu.Item>
            <SubMenu key="4" icon={<UserAddOutlined />} title="Novo Cadastro">
                <Menu.Item key="sub1">Novo link de contratação</Menu.Item>
                <Menu.Item key="sub2">Novo usuário</Menu.Item>
                <Menu.Item key="sub3">Novo CS</Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<SendOutlined />}>
                Envio de email teste
            </Menu.Item>
            <Menu.Item key="6" icon={<WifiOutlined />}>
                Status dos servidores
            </Menu.Item>
        </Menu>
    </Sider>
}