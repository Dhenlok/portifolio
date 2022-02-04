import styled from "styled-components"

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    top: 0;
    font-weight: 600;
    position: sticky;
    background-color: #011726;
    color: white;
    
    a {
        text-decoration: none;
        color: white;
        cursor: pointer;

        :hover{
            font-size: large;
        }
    }
`