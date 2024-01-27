import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <HashLoader color="#000000" size={150}></HashLoader>
    </div>
  );
};

export default Spinner;
