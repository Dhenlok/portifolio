import styled from 'styled-components'

export const WhoAmI = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    background-color: #011726;
    color: white;
    margin-bottom: 10px;
    text-align: center;

    h1 {
        font-size: 50px;
    }

    img {
        opacity: 0.47;
    }

    a {
        background-color: #82d0d9;
        border: none;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 5px;
        text-decoration: none;
        :hover{
            background-color: white;
            cursor: pointer;
        }
    }
`

export const Knowledge = styled.div`
    background-color: #1b818c;
    color: white;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 3fr ;
    text-align: center;
`

export const Fullstack = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20%;
    width: 50%;
    margin: 0 auto;
`

export const Education = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`

export const Course = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
`