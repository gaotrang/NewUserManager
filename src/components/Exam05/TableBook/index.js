import { Table, Button } from "antd";
import { Actions, ButtonActions } from "./styled"
//INPUT: dataSource, onEdit, onDelete
const Exam05 = (props) => {

    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            width: "25%"
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
            key: 'author',
            width: "15%"
        },
        {
            title: 'Mô tả',
            dataIndex: 'descrition',
            key: 'descrition',
            width: '30%'
        },
        {
            title: 'Loại sách',
            dataIndex: 'type',
            key: 'type',
            width: "15%"
        },
        {
            title: 'Số trang',
            dataIndex: 'pages',
            key: 'pages',
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

export default Exam05;



