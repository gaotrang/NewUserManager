import { useEffect } from "react";
import { Form, Input, InputNumber, Modal, Select } from "antd";
import { PageNumber } from "./styled"

const ModalFormBook = (props) => {
    const [form] = Form.useForm()

    useEffect(() => {
        if (!props.open) {
            form.resetFields()
        }
    }, [props.open])

    useEffect(() => {
        if (props.open && props.formData.id) {
            form.setFieldsValue(props.formData)
        }
    }, [props.open, props.formData])

    const onSubmit = async () => {
        const values = await form.validateFields()
        props.onSubmit(props.formData.id, values) 
        
    };
    const onCancel = () => {
        if(!props.loading) {
            props.setOpen(false)
        }
    };

    return (
        <Modal open={props.open || props.loading} confirmLoading={props.loading} onOk={onSubmit} onCancel={onCancel}>
            <Form form={form} layout="vertical">
                <Form.Item name="title" label="Tiêu đề" rules={[{ required: true, message: 'Tiêu đề là bắt buộc' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="author" label="Tác giả" rules={[{ required: true, message: 'Vui lòng nhập tác giả' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    name="descrition"
                    label="Mô tả"
                    rules={[
                        { required: true, message: 'Vui lòng mô tả sách này' },
                    ]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item name='type' label='Loại sách' rules={[{ required: true }, { message: 'Bắt buộc' }]}>
                    <Select options={[
                        { value: 'Tiểu thuyết', label: 'Tiểu thuyết' },
                        { value: 'Kinh dị', label: 'Kinh dị' },
                        { value: 'Tình cảm', label: 'Tình cảm' },
                        { value: 'Truyện', label: 'Truyện' },
                        { value: 'Khoa học viễn tưởng', label: 'Khoa học viễn tưởng' },
                    ]} />
                </Form.Item>

                <Form.Item name="pages" label="Số trang" rules={[{ required: true, message: 'Vui lòng nhập số trang' }]}>
                    <PageNumber placeholder="100-200" />
                </Form.Item>

            </Form>
        </Modal>
    )
};
export default ModalFormBook;


