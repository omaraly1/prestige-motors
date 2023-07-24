import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import { Center,Button, Text, Grid, AspectRatio } from "@mantine/core";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { Phone, MapPin, ClockHour4 } from 'tabler-icons-react'
import { Footer } from "../components/Footer";
function Location() {


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/inventory`;
    navigate(path);
  };

  return (
    <div>
         <div class="footerFit">
      <Nav language={true}/>
      <Banner title="Location and Hours"></Banner>

      <Text fw={700} size={30} pt="50px" ta="center">
       Come see us!
      </Text>
      <Grid pt={80} columns={24}>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={9}>

        <AspectRatio ratio={16 / 9}>
        <iframe  frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.384788443655!2d-79.89583072350487!3d44.69628143907565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2adb1027cc52d3%3A0xd3bc4d85ac4181f2!2sPrestige%20Motors!5e0!3m2!1sen!2sca!4v1690145697619!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </AspectRatio>
         
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={9}>
        <Text fw={600} size={25} pt="50px" ta="center">
        <MapPin
    size={30}
    strokeWidth={2}
    color={'black'}
    pr={10}
  /> 
        {" "}11 Mill Street, Tiny, ON, L0K 2E1
          </Text>    
        <Text fw={600} size={25} pt="50px" ta="center">
        <Phone
    size={30}
    strokeWidth={2}
    color={'black'}
    pr={10}
  /> 
           {`   `}613-555-5555
          </Text>
          <Text fw={600} size={25} pt="50px" ta="center">
          <ClockHour4
    size={30}
    strokeWidth={2}
    color={'black'}
    pr={10}
  /> 
            {" "}Hours of Operation
          </Text>
          <Text fw={400} size={20} pt="20px" ta="center">
            Monday: 9am-6pm
          </Text>
          <Text fw={400} size={20} pt="10px" ta="center">
            Tuesday: 9am-6pm
          </Text>
          <Text fw={400} size={20} pt="10px" ta="center">
            Wednesday: 9am-6pm
          </Text>
          <Text fw={400} size={20} pt="10px" ta="center">
            Thursday: 9am-6pm
          </Text>
          <Text fw={400} size={20} pt="10px" ta="center">
            Friday-Sunday: 11am-4pm
          </Text>
       
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>

      <Center maw={400} h={100} pt={100} mx="auto">
          <Button onClick={routeChange} size='lg'  radius="md" color="dark">
            View Inventory
        </Button>
          </Center>
          </div>
          <Footer/>
    </div>
    
  );
}

export default Location;
