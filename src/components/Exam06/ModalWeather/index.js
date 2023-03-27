import axios from "axios";
import { useState, useEffect, } from "react";
import { Modal } from "antd";
import { Infor, Condition } from "./styled"
import src from "./../../../assets/humidity.png"


const ModalWeather = ({ name }) => {
    const [data, setData] = useState({});
    const [open, setOpen] = useState(false)

    useEffect(() => {

        if (name !== '') {
            console.log(name)
            axios.get(`http://api.weatherapi.com/v1/current.json?key=01002ca5662448f6a05114555232703&q=${name}&aqi=no`).then((res) => {
                setData(res.data);
                console.log(res.data)
                setOpen(true)
            });
        }
    }, [name]);

    const onCancel = () => {
        setOpen(false)
    };

    return (
        <Modal open={open} footer={null} onCancel={onCancel} >
            {data.location && data.current && (
                <Infor>
                    <div>Thành phố: {data.location.name}</div>
                    <div>lon: {data.location.lon}, lat: {data.location.lat}</div>
                    <div>Nhiệt độ: {data.current.temp_c}</div>
                    <div>Độ ẩm:
                        <div>
                        {data.current.humidity}
                        <img src={src} width={20}></img>
                        </div> 
                    </div>
                    <div>Thời tiết:
                        <Condition>
                            <img src={data.current.condition.icon}></img>{data.current.condition.text}
                        </Condition>
                        
                    </div>
                    <div>Nhiệt độ cơ thể: {data.current.feelslike_c} </div>
                    <div>Tốc độ gió: {data.current.gust_mph} </div>
                </Infor>
            )}
        </Modal>

    );
};

export default ModalWeather;


