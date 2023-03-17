import styled from "styled-components";
import { Button } from "antd";

//styled-component bao boc style cua antd
export const ButtonCreate = styled(Button)` 
    display: block;
    margin-bottom: 20px;
    margin-top: 20px;
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
`
   