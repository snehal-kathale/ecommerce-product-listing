import { Oval } from "react-loader-spinner";
import "./Loader.css";

const Loader = ({ loading }) => {
  return (
    <div className="loader-overlay">
      <Oval
        ariaLabel="oval-loading"
        height={80}
        width={80}
        color="#2f3e4d"
        secondaryColor="#575b57"
        strokeWidth={2}
        strokeWidthSecondary={2}
        visible={loading}
      />
    </div>
  );
};

export default Loader;
