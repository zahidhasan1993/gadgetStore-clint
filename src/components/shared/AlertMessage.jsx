import Alert from "react-bootstrap/Alert";

const AlertMessage = ({ variant, message, link }) => {
  return <Alert variant={variant}>{message} <span className="">{link}</span></Alert>;
};

export default AlertMessage;
