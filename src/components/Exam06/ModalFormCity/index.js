import { useEffect } from "react";
import { Form, Input, InputNumber, Modal, Select } from "antd";
import { PageNumber } from "./styled"

const ModalFormCity = (props) => {
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
        if (!props.loading) {
            props.setOpen(false)
        }
    };

    return (
        <Modal open={props.open || props.loading} confirmLoading={props.loading} onOk={onSubmit} onCancel={onCancel}>
            <Form form={form} layout="vertical">
                <Form.Item name="name" label="Tên" rules={[{ required: true, message: 'Tên là bắt buộc' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="country" label="Quốc gia" rules={[{ required: true, message: 'Vui lòng chọn quốc gia' }]}>
                    <Select options={[
                        { value: 'VietNam', label: 'VietNam' },
                        { value: 'USA', label: 'USA' },
                        { value: 'France', label: 'France' },
                        { value: 'Korea', label: 'Korea' },
                        { value: 'Japan', label: 'Japan' },

                    ]} />
                </Form.Item>

                <Form.Item
                    name="countrycode"
                    label="Mã"
                    rules={[
                        { required: true, message: 'Vui lòng mã quốc gia' },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name='population' label='Dân số' rules={[{ required: true }, { message: 'Bắt buộc' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="countryflag" label="Quốc kỳ" rules={[{ required: true, message: 'Vui lòng chọn quốc kỳ' }]}>
                    <Input />
                </Form.Item>

            </Form>
        </Modal>
    )
};
export default ModalFormCity;


