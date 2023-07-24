import React from "react";
import '../App.css';
import Nav from "../components/Nav.jsx";
import { Center, Title, Button, Transition } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import About from "./About";

function Home() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/inventory`; 
    navigate(path);
  }

  return (<>
    <div>
      <div
        style={{
          backgroundImage: "url(" + require("../img/supercars-dark.jpg") + ")",
          backgroundPosition: "center",
          minHeight: "100vh",
          backgroundSize: "cover"
        }}
      >
    <Nav language={true}/>

    <Transition mounted={true} transition="fade" duration={400} timingFunction="ease">
      {(styles) => <Center style={{ width: "100vh", height: "70vh"}}>
    <div>
        <Title size="80px" color="white">Prestige Motors</Title>
        <Title size="60px" color="dimmed" pb="20px">Find your drive.</Title>
        <Button onClick={routeChange} size='lg' variant="white" color="dark">
            View Inventory
        </Button>
    </div>
        </Center>
   }
    </Transition>
    
      </div>
    </div>
    </>
  )
}

export default Home;
