//Book: title, author, descrition, type, so trang
//style-component
//API
import { useState, useMemo, useEffect } from "react";
// import { Button } from "antd";
import TableBooks from "./TableBooks";
import ModalFormBooks from "./ModalFormBooks"
import { ButtonCreate, SearchBox, SearchContainer, FrameBook } from "./styled"
import axios from "axios";
import { Modal } from "antd";

const DEFAULT_CV = { name: "", country: "", countrycode: "", population: "", countryflag: "" }

const Exam06 = () => {
    // const [modal, contextHolder] = Modal.useModal();
    const [formData, setFormData] = useState(DEFAULT_CV)
    const [dataSource, setDataSource] = useState([])
    const [open, setOpen] = useState(false)
    const [keyword, setKeyWord] = useState('')
    const [tableloading, setTableLoading] = useState(false)
    const [submitloading, setSubmitLoading] = useState(false)
    const [itemloading, setItemLoading] = useState(false)

    useEffect(() => {
        axios.get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities').then((res) => {
            setDataSource(res.data)
        })
    }, []);

    const fetchData = () => {
        setTableLoading(true)

        axios
        .get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities')
        .then((res) => {
            setDataSource(res.data)
            setTableLoading(false)
        });
    };

    // useEffect( async () => {
    //     const res = await axios.get('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/books');
    // setDataSource(res.data)
    // }, []); cach viet 2

    const onCreate = () => {
        setFormData(DEFAULT_CV);
        setOpen(true)
    };
    const onEdit = (id) => {
        setItemLoading(true)
        axios
            .get(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities/${id}`)
            .then((res) => {
                setItemLoading(false)
                setFormData(res.data);
                setOpen(true);
            })

    };
    const onDelete = (id) => {

        Modal.confirm({
            title: "Xóa dữ liệu này?",
            content: "Dữ liệu sẽ bị xóa vĩnh viễn.",
            onOk(){
                setItemLoading(true)
            axios
            .delete(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities/${id}`)
            .then((res) => {
                setItemLoading(false)
                fetchData()
            })}
    });
    }
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const onSubmit = (id, data) => {
        setSubmitLoading(true)
        if (id) {
            axios.put(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities/${id}`, data).then((res) => {
                setSubmitLoading(false)
                setFormData(DEFAULT_CV);
                setOpen(false);
                fetchData()
            })
            // const newDataSource = dataSource.map((item) => { // return item.id === formData.id ? item
            //     return item.id === id ? { id: id, ...data } : item;
            // });
            // setDataSource(newDataSource);
        }
        else {
            axios.post('https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities', data).then((res) => {
                setSubmitLoading(false)
                setFormData(DEFAULT_CV);
                setOpen(false);
                fetchData()
            });
            //     setDataSource([
            //         ...dataSource,
            //         {
            //             id: Math.random(),
            //             ...data,
            //         },
            //     ]);
        };
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
        <FrameBook>
            <ModalFormBooks
                loading={submitloading}
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                formData={formData}
                onChange={onChange} />

            <SearchContainer>
                <SearchBox onChange={onSearch} />
                <ButtonCreate onClick={onCreate}>New City</ButtonCreate>
            </SearchContainer>


            <TableBooks 
            loading={tableloading} 
            itemloading={itemloading}
            dataSource={searchDataSource} onEdit={onEdit} onDelete={onDelete} />
            <input value={keyword} onChange={onSearch} />
        </FrameBook>
    );
};

export default Exam06;


