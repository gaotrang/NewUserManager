import { Button } from 'antd';
import { CheckOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { Header, Main, Footer, Sidebar, Content, Logo, Layout, MenuItem } from './styled';
import AuthUser from "./AuthUser";

const DefaultLayout = ({ children }) => {

    return (
        <Layout>
            <Sidebar>
                <Logo>Green Academy</Logo>
                <MenuItem>
                    <Link to='/dashboard'>
                        <CheckOutlined />Dashboard
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/students'>
                        <UserOutlined /> Students
                    </Link>
                </MenuItem>
            </Sidebar>

            <Content>

                <Header>
                    <AuthUser />
                </Header>

                <Main>
                    {children}
                </Main>

                <Footer>Powered by </Footer>

            </Content>

        </Layout>
    );
};

export default DefaultLayout;


