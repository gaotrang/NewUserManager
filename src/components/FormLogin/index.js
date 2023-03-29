import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";

//Tao mot form login voi email va password
//co validate day du

const FormLogin = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onSubmit = async () => {
        const values = await form.validateFields()

        if (values.email === 'admin@gmail.com' && values.password === 'admin123') {
            localStorage.setItem('token', `${values.email}${values.password}`)
            navigate('/dashboard')
        }
        else {
            message.error('Thông tin đăng nhập không chính xác.')
        }


        //DO SOMETHINGS

    }
    //Trong Form.Item luôn có 3 thứ: name, label, rules
    return (
        <div>
            <Form form={form} layout='vertical'>
                <Form.Item name='email' label='Email' rules={[{ required: true }, { type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='password' label='Password' rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Button type='primary' onClick={onSubmit}>
                    Log In
                </Button>
            </Form>
        </div>
    );
};

export default FormLogin;


