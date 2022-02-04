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

    p {
        font-size: 0.9rem;
    }

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
    background: rgb(2,65,89);
    background: linear-gradient(45deg, rgba(2,65,89,1) 0%, rgba(130,208,217,1) 100%);
    color: white;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 3fr ;
    text-align: center;
    margin-bottom: 10px;
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
    height: 300px;
    gap: 10px;
`

export const Course1 = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    font-size: small;
    background-color: #024159;
    color: white;
    font-weight: 500;
    `

export const Course2 = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        font-size: small;
        background-color: #025e73;
        color: white;
        font-weight: 500;
        `

export const Course3 = styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        font-size: small;
        background-color: #82d0d9;
        color: white;
        font-weight: 500;
`