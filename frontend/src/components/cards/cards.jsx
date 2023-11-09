// prop = api-call
import "./cards.css";
import { useEffect, useState } from "react";

import Card from "../card/card";

export default function Cards() {
  const [data, setData] = useState([]);
  const dataSet = async () => {
    const local = await (await fetch("http://localhost:8080/")).json();
    console.log(local);
    setData(local);
  };
  console.log(data);
  useEffect(() => {
    dataSet();
  }, []);
  return (
    <div className="father">
      {data.map((element) => (
        <Card
          status={element.status ? "Online" : "Offline"}
          url={element.websiteUrl}
          date={element.createdAt}
          _id={element._id}
        />
      ))}
      {/* <Card status="Offline" url="https://helloworld.com" date="2023/4/12" _id="asd" />  */}
    </div>
  );
}
