import React from "react";
import { useState } from "react";
import "../App.css";
import Nav from "../components/Nav";
import { Center, Affix,Button, Text, Grid, Box, rem } from "@mantine/core";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
function About() {


  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/inventory`;
    navigate(path);
  };

  const [eng, setEng] = useState(true);

const texts = [
  { 
    eng: "About Us",
    fr: "À propos de nous"
  },
  {
    eng: "Our Story",
    fr: "Notre Histoire"
  },
  {
    eng: "Richard Sterling, the visionary founder of Prestige Motors, exudes an unwavering passion for automobiles and luxury. His commitment to curating an exclusive collection of the world's finest cars and providing unmatched customer experiences has earned him widespread acclaim in the industry, propelling Prestige Motors to new heights of success and distinction.",
    fr: "Richard Sterling, le fondateur visionnaire de Prestige Motors, dégage une passion inébranlable pour l'automobile et le luxe. Son engagement à organiser une collection exclusive des meilleures voitures au monde et à offrir des expériences client inégalées lui a valu une reconnaissance généralisée dans l'industrie, propulsant Prestige Motors vers de nouveaux sommets de succès et de distinction."
  },
  {
    eng: "Each car, meticulously selected and curated, tells a unique story of power, craftsmanship,and exclusivity. Nestled in a bustling city, this exotic showroom exudes opulence and sophistication, captivating all passersby. Entering, visitors are awed by an array of rare, high-performance vehicles from brands like Lamborghini, Ferrari, Porsche, Aston Martin, McLaren, and Bugatti, gleaming under soft spotlights, promising an unparalleled experience for discerning clients.",
    fr: "Chaque voiture, méticuleusement sélectionnée et organisée, raconte une histoire unique de puissance, de savoir-faire et d'exclusivité. Niché dans une ville animée, ce showroom exotique respire l'opulence et la sophistication, captivant tous les passants. En entrant, les visiteurs sont émerveillés par une gamme de véhicules rares et performants de marques telles que Lamborghini, Ferrari, Porsche, Aston Martin, McLaren et Bugatti, brillant sous des projecteurs tamisés, promettant une expérience inégalée aux clients exigeants."
  },
  {
    eng: "Prestige Motors is not your ordinary car dealership; it's a realm of automotive dreams and luxury beyond compare. Nestled in the heart of a bustling city, this exotic car dealership exudes an air of opulence and sophistication that captures the attention of all who pass by. Stepping into the showroom, visitors are immediately greeted by a breathtaking display of automotive marvels.",
    fr: "Prestige Motors n'est pas votre concessionnaire automobile ordinaire; c'est un royaume de rêves automobiles et de luxe incomparable. Niché au cœur d'une ville animée, ce concessionnaire automobile exotique dégage un air d'opulence et de sophistication qui capte l'attention de tous les passants. En entrant dans la salle d'exposition, les visiteurs sont immédiatement accueillis par une exposition époustouflante de merveilles automobiles."

  },
  {
    en: "View Our Inventory",
    fr: "Voir notre inventaire"
  }

]
  return (
    <div>
      <div class="footerFit">
      <Nav language={eng}/>
      <Banner title={eng ? texts[0].eng : texts[0].fr}></Banner>

      <Text fw={700} size={30} pt="50px" ta="center">
      {eng ? texts[1].eng : texts[1].fr}
      </Text>
      <Grid columns={28}>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={8}>

        <Text size={16} pt="50px" ta="center">
        {eng ? texts[2].eng : texts[2].fr}          </Text>

          
          
          <Center pt={40}>
          <img length="200" width="400" src="https://i.pinimg.com/originals/d5/2d/8a/d52d8abd1b55a721b0bfdc34a2214648.png" alt="Lamborghini"></img>
          </Center>

        </Grid.Col>
        <Grid.Col span={8}>
        <Center pt={40}>
          <img length="200" width="400" src="data:image/jpeg;base64,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" alt="BMW M5"></img>
          </Center>

          <Text size={16} pt="50px" ta="center">
          {eng ? texts[3].eng : texts[3].fr}          </Text>

       
        </Grid.Col>
        <Grid.Col span={8}>
        <Text size={16} pt="50px" ta="center">
        {eng ? texts[4].eng : texts[4].fr}
          </Text>
          <Center pt={40}>
          <img length="200" width="400" src="https://shreepng.com/img/Inside/Car/Bugatti/veyron%20super%20sport%20300%20bugatti.png" alt="Bugatti Chrion SuperSport"></img>
          </Center>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
      {
        eng &&  <Center maw={400} h={100} mx="auto">
        <Button onClick={routeChange} size='lg'  radius="md" color="dark">
        View Our Inventory
      </Button>
        </Center>
        
      }
      {
        !eng &&  <Center maw={400} h={100} mx="auto">
        <Button onClick={routeChange} size='lg'  radius="md" color="dark" aria-label={eng ? "View Our Inventory" : "Voir notre inventaire"}>
        Voir notre inventaire
      </Button>
        </Center>
        
      }

{
        eng &&  <Center maw={400} h={100} mx="auto">
        <Button onClick={() => setEng(!eng)} size='md'  radius="md" color="dark" aria-label={eng ? "Switch to French" : "Switch to English"}>
        FR
      </Button>
        </Center>
        
      }

{
        !eng &&  <Center maw={400} h={100} mx="auto">
        <Button onClick={() => setEng(!eng)} size='md'  radius="md" color="dark" aria-label={eng ? "Switch to French" : "Switch to English"}>
        EN
      </Button>
        </Center>
        
      }
          
          
          {/* <Center>
            <Affix position={{ bottom: rem(0) }} width="">
            <Box
      sx={(theme) => ({
        backgroundColor: "black",
        textAlign: 'center',
        width: "100%"
      })}
    >
      Prestige Motors 
    </Box>
            </Affix>
          
          </Center> */}
          </div>
         <Footer/>
        
    </div>
  );
}

export default About;
