//Book: title, author, descrition, type, so trang
//style-component
//API
import { useState, useMemo, useEffect } from "react";
// import { Button } from "antd";
import TableBook from "./TableBook";
import ModalFormBook from "./ModalFormBook"
import { ButtonCreate, SearchBox, SearchContainer } from "./style"
import axios from "axios";

const DEFAULT_BOOK = { title: "", author: "", descrition: "", type: "", pages: "" }

const Exam05 = () => {
    // const [modal, contextHolder] = Modal.useModal();
    const [formData, setFormData] = useState(DEFAULT_BOOK)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)
    const [keyword, setKeyWord] = useState('')

    //API có 5 MAIN-HOST
    //GET: lấy thông tin dữ liệu
    //// axios.get(url)
    //POST: Sử dụng khi muốn tạo mới dữ liệu
    //// axios.post(url, formData) // dữ liệu vừa được tạo trên sever
    //PUT / PATCH: Sử dụng khi muốn update dữ liệu
    //// axios.put(url, formData) // dữ liệu vừa được cập nhật trên sever
    //DELETE: Sử dụng khi muốn xóa dữ liệu đó
    //// axios.delete(url) // true or false

    useEffect(() => {
        axios.get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/books').then((res) => {
            setDataSource(res.data)
        })
    }, []);

    const fetchData = () => {
        axios.get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/books').then((res) => {
            setDataSource(res.data)
        })
    };

    // useEffect( async () => {
    //     const res = await axios.get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/books');
    // setDataSource(res.data)
    // }, []); cach viet 2

    const onCreate = () => {
        setFormData(DEFAULT_BOOK);
        setOpen(true)
    };
    const onEdit = (id) => {
        axios
            .get(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/books/${id}`)
            .then((res) => {
                setFormData(res.data);
                setOpen(true);
            })

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
    const onSubmit = (id, data) => {
        if (id) {
            axios.put(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/books/${id}`, data).then((res) => {
                fetchData()
            })
            // const newDataSource = dataSource.map((item) => { // return item.id === formData.id ? item
            //     return item.id === id ? { id: id, ...data } : item;
            // });
            // setDataSource(newDataSource);
        }
        else {
            axios.post('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/books', data).then((res) => {
                fetchData()
            })
            //     setDataSource([
            //         ...dataSource,
            //         {
            //             id: Math.random(),
            //             ...data,
            //         },
            //     ]);
        };
        setFormData(DEFAULT_BOOK);
        setOpen(false);
    }
    const onSearch = (e) => {
        setKeyWord(e.target.value)
    }
    const searchDataSource = useMemo(() => {
        if (keyword) {

            return dataSource.filter((item) => {
                return item.title.includes(keyword) || item.author.includes(keyword)
            })
        }
        return dataSource
    }, [keyword, dataSource])

    return (
        <div>
            <ModalFormBook
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                formData={formData}
                onChange={onChange} />

            <SearchContainer>
                <SearchBox onChange={onSearch} />
                <ButtonCreate onClick={onCreate}>New Book</ButtonCreate>
            </SearchContainer>


            <TableBook dataSource={searchDataSource} onEdit={onEdit} onDelete={onDelete} />
            <input value={keyword} onChange={onSearch} />
        </div>
    );
};

export default Exam05;


