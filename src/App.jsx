import MainTittle from "./components/MainTittle";
// import UserList from "./components/UserList";
// import usersInit from "./users.json";
import Button from "./components/Button/Button";
// import UserClick from "./components/UserClick/UserClick";
// import { useState } from "react";
import ReviewApp from "./components/Reviews/ReviewApp/ReviewApp";






export default function App() {
//  const [clicks, setClicks] = useState(0);
// 	const handleClick = () => {
//     setClicks(clicks + 1);
//   };  приклад підняття стану
    
  return (
    <>
      <ReviewApp/>
      <MainTittle text="User info" />
      {/* <UserList users={usersInit} /> */}
      <Button>Standart button</Button>
      <Button variant="first">First button</Button>
      <Button variant="second">Second button</Button>
      {/* <UserClick value={clicks} onUpdate={handleClick}>Click me 1: </UserClick>
      <UserClick value={clicks} onUpdate={handleClick}>Click me 2: </UserClick>  приклад підняття стану */}
      
  </>
  );

}


