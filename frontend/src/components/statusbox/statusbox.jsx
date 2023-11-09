import BasicCard from "../status/status";
import "./statusbox.css";

const StatusBox = () => {
  return (
    <section className="status-box">
      <BasicCard
        className="card"
        status={true}
        website="https://deerwalk.edu.np"
        datetime="10/25/2023"
        id="21"
      />
      <BasicCard
        className="card"
        status={false}
        website="https://documentarynepal.com/"
        datetime="9/25/2023"
        id="2"
      />
    </section>
  );
};

export default StatusBox;
