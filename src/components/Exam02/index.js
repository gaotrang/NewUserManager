
import { useState } from "react";
import { Button } from "antd";
import TableStudents from "./TableStudent";
import ModalFormStudent from "./ModalFormStudent"

const DEFAULT_STUDENT = { name: "", studentId: "", score: "", className: "" }

const Exam02 = (props) => {
    // const [modal, contextHolder] = Modal.useModal();
    const [formData, setFormData] = useState(DEFAULT_STUDENT)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)


    const onCreate = () => {
        setOpen(true)
    };

    const onEdit = (student) => {
        setFormData(student);
        setOpen(true);
    };
    const onDelete = (item) => {
        const newStudents = dataSource.filter((student) => {
            return student.id !== item.id
        })
        setDataSource(newStudents)
    };
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const onCancel = () => {
    //     setOpen(false)
    // };

    const onSubmit = (id, data) => {
        if (id) {
            const newDataSource = dataSource.map((item) => { // return item.id === formData.id ? item
                return item.id === id ? { id: id, ...data } : item;
            });
            setDataSource(newDataSource);
        }
        else {
            setDataSource([
                ...dataSource,
                {
                    id: Math.random(),
                    ...data,
                },
            ]);
        };
        setFormData(DEFAULT_STUDENT);
        setOpen(false);
    }
    // const dataSource = [
    //     {name: " Phùng Văn A ", StudentID: " 123 ", score: " 10 ", className: "1"},
    //     {name: " Trần Văn B ", StudentID: " 456 ", score: " 9 ", className: "2"},
    //     {name: " Lê Văn C ", StudentID: " 789 ", score: " 5 ", className: "1"},
    //     {name: " Trương Văn D ", StudentID: " 147 ", score: " 8 ", className: "2"},
    //     {name: " Huỳnh Văn E ", StudentID: " 258 ", score: " 9 ", className: "1"},
    // ]
    return (
        <div>
            <ModalFormStudent
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                formData={formData}
                onChange={onChange} />

            <Button onClick={onCreate}>New Student</Button>

            <TableStudents dataSource={dataSource} onEdit={onEdit} onDelete={onDelete} />
        </div>
    );
};

export default Exam02;


