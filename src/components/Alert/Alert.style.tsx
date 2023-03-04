
import styled from "styled-components";

type AlertWrapperProps = {
    error:boolean
}

const AlertWrapper = styled.div<AlertWrapperProps>`

    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.error ? '#fd3b3b' : '#46e984' };

    font-family: Verdana, Geneva, Tahoma, sans-serif;

    font-weight: 700;
    text-transform: uppercase;

    position: absolute;
    bottom: 40px;

`

export default AlertWrapper;