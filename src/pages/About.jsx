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
          <img length="200" width="400" src="/img/lavpng.png" alt="Lamborghini"></img>
          </Center>

        </Grid.Col>
        <Grid.Col span={8}>
        <Center pt={40}>
          <img length="200" width="400" src="/img/m8png.png" alt="BMW M8"></img>
          </Center>

          <Text size={16} pt="50px" ta="center">
          {eng ? texts[3].eng : texts[3].fr}          </Text>

       
        </Grid.Col>
        <Grid.Col span={8}>
        <Text size={16} pt="50px" ta="center">
        {eng ? texts[4].eng : texts[4].fr}
          </Text>
          <Center pt={40}>
          <img length="200" width="400" src="/img/chironpng.png" alt="Bugatti Chrion SuperSport"></img>
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
