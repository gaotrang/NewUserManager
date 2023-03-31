import { useNavigate } from 'react-router-dom';
import { Dropdown } from "antd";
import { User, Image, Role, Name } from './styled';

const AuthUser = () => {
    const navigate = useNavigate();

    const onLogout = (e) => {
        e.preventDefault();

        localStorage.removeItem('token')
        navigate("/");
    }

    return (
        <Dropdown
            menu={{
                items: [
                    {
                        key: "0",
                        label: <a onClick={onLogout}>Log out</a>,
                    },
                ],
            }}
        >
            <User>
                <Image src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/anh-conan-dep-nhat-1.jpg?fit=857%2C933sl=1" />
                <div>
                    <Role>Admin</Role>
                    <Name>Edogawa Conan</Name>
                </div>
            </User>
        </Dropdown>
    );
};

export default AuthUser;


