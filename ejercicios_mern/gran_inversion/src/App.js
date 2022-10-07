import React from "react";
import "./App.css";
import PersonCard from "./Components/PersonCard";

const App = () => {

  const users=[
    {firsName:"Jane",
    lastName: "Doe",
    age: 45,
    hairColor:"Black"
    },
    {firsName:"John",
    lastName: "Smith",
    age: 88,
    hairColor:"Brown"
    },
    {firsName:"Millard",
    lastName: "Fillmore",
    age: 50,
    hairColor:"Brown"
    },
    {firsName:"María",
    lastName: "Smith",
    age: 62,
    hairColor:"Brown"
    },
  ]

  return (
    <div>
      {users.map((user, index)=><PersonCard firsName={user.firsName} lastName={user.lastName} age={user.age} hairColor={user.hairColor} key={index} />)}
    </div>
  );

};

export default App;
