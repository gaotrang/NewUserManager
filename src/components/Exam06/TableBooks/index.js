import { Table, Button } from "antd";
import { Actions, ButtonActions } from "./styled"
//INPUT: dataSource, onEdit, onDelete
const Exam06 = (props) => {

    const columns = [
        {
            title: 'Thành phố',
            dataIndex: 'name',
            key: 'name',
            width: "15%"
        },
        {
            title: 'Quốc gia',
            dataIndex: 'country',
            key: 'country',
            width: "15%"
        },
        {
            title: 'Mã quốc gia',
            dataIndex: 'countrycode',
            key: 'countrycode',
            width: '15%'
        },

        {
            title: 'Quốc kỳ',
            dataIndex: 'countryflag',
            key: 'countryflag',
            width: "25%"
        },
        {
            title: 'Dân số',
            dataIndex: 'population',
            key: 'population',
            width: "15%"
        },
        {
            title: "",
            dataIndex: 'actions',
            render: (text, item) => {
                return (
                    <Actions>
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



