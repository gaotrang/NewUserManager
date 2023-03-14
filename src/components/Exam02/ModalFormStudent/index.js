import { useEffect } from "react";
import { Form, Input, Modal } from "antd";

const Exam02 = (props) => {
    const [form] = Form.useForm()

    useEffect(() => {
        if (!props.open) {
            form.resetFields()
        }
    }, [props.open])

    const onSubmit = () => {
        const data = form.getFieldsValue()
        props.onSubmit(props.formData.id, data)
    };

    const onCancel = () => {
        props.setOpen(false)
    };


    return (
        <Modal open={props.open} onOk={onSubmit} onCancel={onCancel}>
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Tên họ">
                    <Input />
                </Form.Item>

                <Form.Item name="studentId" label="Mã số học sinh">
                    <Input />
                </Form.Item>

                <Form.Item name="score" label="Điểm số">
                    <Input />
                </Form.Item>

                <Form.Item name="className" label="Lớp">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )

};

export default Exam02;


