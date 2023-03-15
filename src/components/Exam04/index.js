
import { Form, Input, Select, Button } from "antd";

//Tạo một form đăng kí với email, password, confirmpassword, phone number, country
//Validate toàn bộ dữ liệu
const Exam04 = () => {
    const [form] = Form.useForm()
    const onSubmit = () => { }
    return (
        <div>
            <Form form={form} layout="vertical">
                <Form.Item name='email' label='Email' rules={[{ required: true }, { type: 'email' }, { message: 'Bắt buộc' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='password' label='Password' rules={[{ required: true }, { message: 'Bắt buộc' }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("The two passwords that you entered do not match!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name='phone' label='Phone Number' rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(value)) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error("The two passwords that you entered do not match!")
                            );
                        },
                    }),
                ]}>
                    <Input />
                </Form.Item>

                <Form.Item name='country' label='Country' rules={[{ required: true }, { message: 'Bắt buộc' }]}>
                    <Select options={[
                        { value: 'VN', label: 'Vietnam' },
                        { value: 'US', label: 'USA' }
                    ]} />
                </Form.Item>
                <Button type='primary' onClick={onSubmit}>Sign up</Button>

            </Form>









        </div>
    );
};

export default Exam04;


