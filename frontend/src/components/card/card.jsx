import "./card.css";
import toast from "react-hot-toast";
const success = (message) => toast.success(message);
const failure = (message) => toast.error(message);

export default function Card({ ...props }) {
  async function deleteWebsite() {
    const options = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    const result = await fetch(`http://localhost:8080/${props._id}`, options);
    const data = await result.json();
    if (data.error) {
      failure(data.detail);
    } else {
      success(data.detail);
    }
    setTimeout(() => {
      window.location = "/";
    }, 500);
  }
  console.log(props);
  return (
    <div className="main-div">
      <div className="website-link">
        <h2>{props.url}</h2>
        <code>{props._id}</code>
        <div className="small-class">
          <p>{props.date}</p>
          <p className="status">{props.status}</p>
        </div>
      </div>
      <button className="delete-button" onClick={deleteWebsite}>
        {" "}
        Delete{" "}
      </button>
    </div>
  );
}
