//Book: title, author, descrition, type, so trang
//style-component
//API
import { useState } from "react";
// import { Button } from "antd";
import TableBook from "./TableBook";
import ModalFormBook from "./ModalFormBook"
import { ButtonCreate } from "./style"

const DEFAULT_BOOK = { title: "", author: "", descrition: "", type: "", pages: ""}

const Exam05 = () => {
    // const [modal, contextHolder] = Modal.useModal();
    const [formData, setFormData] = useState(DEFAULT_BOOK)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)

    const onCreate = () => {
        setFormData(DEFAULT_BOOK);
        setOpen(true)
    };

    const onEdit = (book) => {
        setFormData(book);
        setOpen(true);
    };
    const onDelete = (item) => {
        const newBooks = dataSource.filter((book) => {
            return book.id !== item.id
        })
        setDataSource(newBooks)
    };
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = (id , data) => {
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
        setFormData(DEFAULT_BOOK);
        setOpen(false);
    }
    return (
        <div>
            <ModalFormBook
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                formData={formData}
                onChange={onChange} />

            <ButtonCreate onClick={onCreate}>New Book</ButtonCreate>

            <TableBook dataSource={dataSource} onEdit={onEdit} onDelete={onDelete} />
        </div>
    );
};

export default Exam05;


