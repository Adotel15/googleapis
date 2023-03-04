
import AlertWrapper from "./Alert.style"

type AlertProps = {
    message: string,
    error: boolean
}

const Alert = ({ message, error }:AlertProps) => {

    return (
        <AlertWrapper error = {error}>
            <h3> {message} </h3>
        </AlertWrapper>
    )
}

export default Alert
