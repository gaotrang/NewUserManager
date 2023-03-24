import axios from "axios";
import { useState, useEffect, } from "react";
import { Modal } from "antd";

const ModalWeather = ({ name }) => {
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false)

    useEffect(() => {

        if (name !== '') {
            console.log(name)
            axios.get(`http://api.weatherapi.com/v1/current.json?key=db3d4314cf6a4ab2926132518232403&q=${name}&aqi=no`).then((res) => {
                setData(res.data);
                console.log(res.data)
                setOpen(true)
            });
        }
    }, [name])

    return (
        <Modal open={open} footer={null} >
            {data.location && data.current && (
                <div>
                    <div>Thành phố: {data.location.name}</div>
                    <div>lon: {data.location.lon}, lat: {data.location.lat}</div>
                    <div>Nhiệt độ: {data.current.temp_c}</div>
                    <div>Thời tiết: {data.current.condition.text} </div>
                </div>
            )}
        </Modal>

    );
};

export default ModalWeather;


