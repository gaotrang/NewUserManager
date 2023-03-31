import styled from "styled-components";
import { Input, Button } from "antd";

//1rem = 16px
//8px = 0.5rem
//20px = 1.25rem
//24px = 1.5rem
//32px = 2rem
//40px = 2.5rem

//styled-component bao boc style cua antd
export const ButtonCreate = styled(Button)` 
    display: block;
    margin: 10px 0px;
    &:hover {
        background: orange;
        color: #fff;
        border-color: #fff

    }
    &:active, &:focus {
        background: #gray ;
        color: #gray;
        border-color: #fff;
    }
`
// export const FrameBook = styled.div`
//     margin: 50px 50px;
//     border: 5px solid gray;
//     border-radius: 15px;
// `
export const SearchContainer = styled.div`
    background-image
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
   justify-content: space-between;
   margin-bottom: 1.25rem;

`
export const SearchBox = styled(Input.Search)`
    width: 30%;
`

