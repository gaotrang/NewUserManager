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

export const Country = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 1rem;

    h6 {
        font-size: 1rem;
        margin: 0;
    }
`
export const Image = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    padding-top: 100%;
`;
export const Population = styled.div`
    color: ${props => props.color};
    font-weight: 700;
`;
