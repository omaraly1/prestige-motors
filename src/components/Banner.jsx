import React from "react";
import "../App.css";
import image from "../img/wallpaper.jpg";
import { Center, Title, BackgroundImage } from "@mantine/core";

function Banner({title}) {
  return (
    <div>
      <BackgroundImage height={300} mx="auto" src={image}>
        <Center style={{ height: "20vh" }}>
          <Title ta="center" size="60px" color="white" pb="20px">
            {title}
          </Title>
        </Center>
        </BackgroundImage>
    </div>
      
  );
}

export default Banner;
