import { Table, Button } from "antd";
import { Actions, ButtonActions, Country, Image, Population } from "./styled"
import { UserOutlined } from '@ant-design/icons'
//INPUT: dataSource, onEdit, onDelete

const getColor = (population) => {
    if (population < 5) {
        return "darkgreen";
    }
    if (population < 10) {
        return "darkorange";
    }
    return "darkred"
};

const Exam06 = (props) => {

    const columns = [
        {
            title: 'Thành phố',
            dataIndex: 'name',
            key: 'name',
            width: "30%"
        },
        // {
        //     title: 'Quốc gia',
        //     dataIndex: 'country',
        //     key: 'country',
        //     width: "15%"
        // },
        // {
        //     title: 'Mã quốc gia',
        //     dataIndex: 'countrycode',
        //     key: 'countrycode',
        //     width: '15%'
        // },
        {
            title: 'Quốc kỳ',
            dataIndex: 'country',
            key: 'country',
            width: "30%",
            render: (_, item) => {
                return (
                    <Country>
                        <Image src={item.countryflag} />
                        <div>
                            <h6>{item.country}</h6>
                            <div>{item.countrycode}</div>
                        </div>
                    </Country>
                )
            }
        },
        {
            title: 'Dân số',
            dataIndex: 'population',
            key: 'population',
            width: "20%",
            render: (_, item) => {
                const color = getColor(item.population)
                return (
                    <Population color={color}>
                        {item.population} < UserOutlined />
                    </Population>
                )
            }
        },
        {
            title: "",
            dataIndex: 'actions',
            render: (text, item) => {
                return (
                    <Actions>
                        <Button
                            onClick={() => {
                                props.onGetWeather(item.name);
                            }}>
                            Weather
                        </Button>
                        <ButtonActions
                            disabled={props.itemloading}
                            onClick={() => {
                                props.onEdit(item.id);
                            }}
                        >Edit
                        </ButtonActions>

                        <ButtonActions
                            disabled={props.itemloading}
                            onClick={() => {
                                props.onDelete(item.id);
                            }}
                        >Delete
                        </ButtonActions>
                    </Actions>
                );
            },
        },
    ];
    return (
        <Table
            loading={props.loading}
            dataSource={props.dataSource}
            columns={columns} />
    )
};

export default Exam06;



