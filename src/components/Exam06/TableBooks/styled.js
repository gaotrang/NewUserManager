import { Button } from "antd";
import styled from "styled-components";
//voi nhung the HTML truyen thong nhu div, input, span, ..
// styled.tenthe
export const Actions = styled.div`
    button{
        margin-right: 20px;
    }
`;
export const ButtonActions = styled(Button)`
background: gray;
color: #000000;
border-color: #000000

&:hover {
    background: red;
    color: #eeeeee;
    border-color: #000000

}
&:active, &:focus {
    background: ;
    color: #000000;
    border-color: blued
}
`;
