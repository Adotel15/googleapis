
import styled from "styled-components";

const FormCWrapper = styled.form`

    background-color: #ebfffd;

    position: relative;

    box-shadow: 0px 0px 100px 2px rgba(255,255,255,0.79);
    -webkit-box-shadow: 0px 0px 100px 2px rgba(255,255,255,0.79);
    -moz-box-shadow: 0px 0px 100px 2px rgba(255,255,255,0.79);

    width: 40%;
    height: 50%;
    border-radius: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width: 769px) {
        width: 90%;
        height: 50%;
    }
`

const InputWrapper = styled.div`

    display: flex;
    flex-direction: column;

    color: #30e5f1;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    width: 50%;
    height: 23%;

    input {
        border: none;
        background: none;
        height: 60px;
        border-bottom: 2px solid #1eeed9;
        color: #62a9bb;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #bbd2d8;
        }
    }

    @media (max-width: 769px) {
        width: 80%;
        height: 30%;
    }
`

const SubmitButton = styled.input`

    width: 50%;
    height: 35px;
    border-radius: 20px;
    border: none;
    background-color: #1eeed9;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    font-size: 18px;

    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #74fff1;
        box-shadow: 0px 0px 5px 2px rgba(53, 255, 255, 0.79);
        -webkit-box-shadow: 0px 0px 5px 2px rgba(53, 255, 255, 0.79);
        -moz-box-shadow: 0px 0px 5px 2px rgba(53, 255, 255, 0.79);
    }

`

export default FormCWrapper;

export {
    InputWrapper,
    SubmitButton
}