import React from "react";
import Customer from "./conponents/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "임승효",
    birthday: "961222",
    gender: "남자",
    job: "아이티꿈나무"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "김으녜",
    birthday: "981123",
    gender: "여자",
    job: "꿈나무"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "문승연",
    birthday: "000000",
    gender: "여자",
    job: "리얼꿈나무"
  }
];

function App() {
  return (
    <div>
      {customers.map(c => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
