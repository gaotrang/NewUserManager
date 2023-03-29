import { Button } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { Header, Main, Footer, Sidebar, Content } from './styled';

const DefaultLayout = ({ children }) => {
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('token')
        navigate("/");
    }
    return (
        <div>
            <Header>
                <a>Green Academy</a>
                <Button onClick={onLogout}>Logout</Button>
            </Header>

            <Main>
                <Sidebar>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/students'> Students</Link>
                </Sidebar>

                <Content>
                    {children}
                </Content>

            </Main>


            <Footer>Powered by </Footer>

        </div>
    );
};

export default DefaultLayout;


