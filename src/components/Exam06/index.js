//Book: title, author, descrition, type, so trang
//style-component
//API
import { useState, useMemo, useEffect } from "react";
// import { Button } from "antd";
import TableCity from "./TableCity";
import ModalFormCity from "./ModalFormCity"
import { ButtonCreate, SearchContainer } from "./styled"
import axios from "axios";
import { Modal } from "antd";
import ModalWeather from "./ModalWeather";
import ButtonImport from "./ButtonImport";
import SearchBox from "./SearchBox";
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
    const [cityName, setCityName] = useState()

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
            onOk() {
                setItemLoading(true)
                axios
                    .delete(`https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities/${id}`)
                    .then((res) => {
                        setItemLoading(false)
                        fetchData()
                    })
            }
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
                return item.name.includes(keyword) || item.country.includes(keyword)
            })
        }
        return dataSource
    }, [keyword, dataSource]);

    const onGetWeather = (name) => {
        setCityName(name)
    };
    const onImport = async (items) => {
        setTableLoading(true)
        for (let i = 0; i < items.length; i++) {
            await axios.post("https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities/", items[i])
        }
        fetchData();
    }

    // const onImport = (items) => {
    //     const promises = []

    //     for (let i = 0; i < items.length; i++) {
    //         promises.push("https://6401de2aab6b7399d0ae7950.mockapi.io/api/1/cities/", items[i])
    //     }
    //     Promise.all(promises).then(() => {
    //         fetchData();
    //     })
    // }

    return (
        <div>
            <ModalFormCity
                loading={submitloading}
                open={open}
                setOpen={setOpen}
                onSubmit={onSubmit}
                formData={formData}
                onChange={onChange} />

            <ModalWeather name={cityName} />

            <SearchContainer>
                <SearchBox onChange={onSearch} />
                <div>
                    <ButtonImport onImport={onImport} />
                    <ButtonCreate onClick={onCreate}>New City</ButtonCreate>
                </div>

            </SearchContainer>


            <TableCity
                onGetWeather={onGetWeather}
                loading={tableloading}
                itemloading={itemloading}
                dataSource={searchDataSource} onEdit={onEdit} onDelete={onDelete} />


        </div>
    );
};

export default Exam06;


