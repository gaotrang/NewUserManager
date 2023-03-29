import styled from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
margin-bottom: 1rem;
background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png");
background-position: center;
background-size: cover;
color: #fff;

`
export const Sidebar = styled.div`
a {
    display: block;
}

`
export const Content = styled.div`
padding: 1rem;
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: 20rem 1fr;
    min-height: calc(100vh - 9.25rem );
`

export const Footer = styled.footer`
background-color: gray;
text-align: 1rem;
padding: 1rem;
margin-top: 1rem;
`