import { Table, Button } from "antd";
import { Actions, ButtonActions } from "./styled"
//INPUT: dataSource, onEdit, onDelete
const Exam05 = (props) => {

    const columns = [
        {
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            width: "10%"
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
            key: 'author',
            width: "10%"
        },
        {
            title: 'Mô tả',
            dataIndex: 'descrition',
            key: 'descrition',
            width: '40%'
        },
        {
            title: 'Loại sách',
            dataIndex: 'type',
            key: 'type',
            width: "10%"
        },
        {
            title: 'Số trang',
            dataIndex: 'pages',
            key: 'pages',
            width: "10%"
        },
        {
            title: "",
            dataIndex: 'actions',
            render: (text, item) => {
                return (
                    <Actions>
                        <ButtonActions
                            onClick={() => {
                                props.onEdit(item);
                            }}
                        >Edit
                        </ButtonActions>

                        <ButtonActions
                            onClick={() => {
                                props.onDelete(item);
                            }}
                        >Delete
                        </ButtonActions>
                    </Actions>
                );
            },
        },
    ];
    return (
        <Table dataSource={props.dataSource} columns={columns} />
    )
};

export default Exam05;



