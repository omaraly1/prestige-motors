import React, { useState, useRef } from "react";
import { useDisclosure } from "@mantine/hooks";
import "../App.css";
import Nav from "../components/Nav";
import { Notifications, notifications } from '@mantine/notifications';
import { useForm } from "@mantine/form";
import {
  Card,
  Image,
  Grid,
  Text,
  SimpleGrid,
  Center,
  Pagination,
  MultiSelect,
  NumberInput,
  Button,
  Modal,
  Alert
} from "@mantine/core";

import { DateInput, TimeInput } from '@mantine/dates';
import { CircleCheck } from 'tabler-icons-react';

import Banner from "../components/Banner";
import { cars } from "./data";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";

function Inventory() {
  
  const title = `Find your passion.`;
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [minYear, setMinYear] = useState(undefined);
  const [maxYear, setMaxYear] = useState(undefined);
  const [pageNum, setPageNum] = useState(1);
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [selected, setSelected] = useState({});
  const [alert, setAlert] = useState(false);

  const form = useForm({
    initialValues: {
      date: "",
      time: ""
    },

    validate: {
      date: (value) => (value != '' ? "Please select a date." : null),
      time: (value) => (value != '' ? "Please select a time." : null)
    },
  });


  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/trade`
    navigate(path);
  }

  const pagedCars = (pageIndex) => {
    const filteredResults = filteredCars();
    return filteredResults.filter((car, index) => {
      return Math.floor(index / 8) === pageIndex;
    });
  };

  const openDetails = (car) => {
    setSelected(car);
    open();
  };
const closeModal = () => {
  close();
  setAlert(false);
}

  const filteredCars = () => {
    console.log("here");
    return cars.filter((car) => {
      return (
        (selectedModels.length === 0 || selectedModels.includes(car.model)) &&
        (selectedMakes.length === 0 || selectedMakes.includes(car.make)) &&
        (minYear === undefined || car.year >= minYear) &&
        (maxYear === undefined || car.year <= maxYear) &&
        (maxPrice === undefined || car.price <= maxPrice)
      );
    });
  };

  const uniqueModels = [...new Set(cars.map((car) => car.model))];
  const uniqueMakes = [...new Set(cars.map((car) => car.make))];
  const models = uniqueModels.map((model) => ({ value: model, label: model }));
  const makes = uniqueMakes.map((make) => ({ value: make, label: make }));

  const getModelsForSelectedMakes = () => {
    const filteredModels = cars.filter((car) => {
      return selectedMakes.includes(car.make);
    });

    return [...new Set(filteredModels.map((car) => car.model))].map(
      (model) => ({ value: model, label: model })
    );
  };

  return (
    <>
      <div class="footerFit">
      <Modal opened={opened} size="75%" onClose={closeModal} centered>
        <Center>
          <Text size={30} fw={700}>
            {selected.year + " " + selected.make + " " + selected.model}
          </Text>
        </Center>

        <Grid columns={24} pt={30}>
          <Grid.Col pl={100} span={10}>
            <Image
              maw={600}
              radius="md"
              src={selected.img}
              alt="Random image"
            />
            <Center>
            <Text size={20} pt={20} fw={700}>
              {formatter.format(selected.price)}
            </Text>
            </Center>
            <Center maw={400} h={100} mx="auto">
          <Button onClick={routeChange} size='md'  radius="md" color="dark">
            Value Your Trade
        </Button>
          </Center>
          </Grid.Col>
          <Grid.Col span={14}>
            <Center>
            <Text size={20} fw={700}>
              Specifications
            </Text>
            </Center>
            <Center>
            <Text size={18} fw={500}>
              Engine: {selected.engine}
            </Text>
            </Center>
            <Center>
            <Text size={18} fw={500}>
              Power: {selected.power}
            </Text>
            </Center>
            <Center>
            <Text size={18} fw={500}>
              Size: {selected.size}
            </Text>
            </Center>
            
            <Center>
            <Text size={18} fw={500}>
              Mileage: {selected.mileage}
            </Text>
            </Center>
            
          <Center>
          <Text size={18} pt={95} fw={700}>
              Book a Test Drive
            </Text>
          </Center>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
           <Center>
            <DateInput
            label="Date"
             placeholder="Date"
             w={350}
             {...form.getInputProps('date')}
            />
            </Center>
            <Center>
            <TimeInput
            label="Time"
             placeholder="Time"
             w={350}
             {...form.getInputProps('time')}
            />
            </Center> 
            </form>
            <Center maw={400} h={100} mx="auto">
          <Button onClick={() => setAlert(!alert)} size='md'  radius="md" color="dark">
            Book
        </Button>
        </Center>
        
          </Grid.Col>
        </Grid>
        <Center>
        {alert && <Alert icon={<CircleCheck size="1rem" />} w={350} title="Thank your for booking a test drive!" color="green">
      We look forward to seeing you.
    </Alert>}
        </Center>
      </Modal>

      <div>
        <Nav language={true}/>
        <Banner title="Our Inventory"></Banner>

        <Text fw={700} size={30} p="50px" ta="center">
          {title}
        </Text>
        <Center pb={30} mx="auto">
          <SimpleGrid cols={5} maw={1500}>
            <MultiSelect
              data={makes}
              label="Make"
              placeholder="Select makes..."
              value={selectedMakes}
              onChange={(value) => {
                setSelectedMakes(value);
              }}
              w={300}
            />
            <MultiSelect
              data={getModelsForSelectedMakes()}
              label="Models"
              placeholder="Select models..."
              value={selectedModels}
              onChange={(value) => {
                setSelectedModels(value);
              }}
              w={300}
            />
            <NumberInput
              placeholder="Maximum Price"
              label="Maximum Price"
              value={maxPrice}
              onChange={(value) => {
                value === "" ? setMaxPrice(undefined) : setMaxPrice(value);
              }}
              step={10000}
              min={0}
              max={10000000}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              formatter={(value) =>
                !Number.isNaN(parseFloat(value))
                  ? `$ ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
                  : "$ "
              }
            />

            <NumberInput
              placeholder="Minimum Year"
              label="Minimum Year"
              value={minYear}
              onChange={(value) => {
                setMinYear(value);
              }}
              min={2000}
              max={2024}
            />
            <NumberInput
              placeholder="Maximum Year"
              label="Maximum Year"
              value={maxYear}
              onChange={(value) => {
                setMaxYear(value);
              }}
              min={2000}
              max={2024}
            />
          </SimpleGrid>
          
        </Center>
        { filteredCars().length === 0 && 
            <Center>
               <Text weight={500} size="lg" mt="md">
                    Sorry, we do not have any vehicles that match your search criteria.
                  </Text>
              </Center>}
        <Center mx="auto">
          <SimpleGrid cols={4} maw={1600}>
            
            {pagedCars(pageNum - 1).map((car, index) => {
              return (
                <Card
                  style={{
                    width: "365px", 
                    height: "300px", 
                  }}
                  shadow="sm"
                  padding="xl"
                >
                  <Card.Section>
                    <Image
                      src={car.img}
                      height={150}
                    />
                  </Card.Section>

                  <Text weight={500} size="lg" mt="md">
                    {car.year} {car.make} {car.model}
                  </Text>

                  <Text weight={500}>{formatter.format(car.price)}</Text>

                  <Button
                    onClick={() => openDetails(car)}
                    variant="default"
                    fullWidth
                    mt="md"
                    radius="md"
                  >
                    View Details
                  </Button>
                </Card>
              );
            })}
          </SimpleGrid>
        </Center>
        <Center pt={80} mx="auto">
          <Pagination
            color="dark"
            value={pageNum}
            pb={100}
            onChange={(value) => {
              setPageNum(value);
            }}
            total={Math.ceil(filteredCars().length / 8)}
          />
        </Center>
        </div>
        </div>
        < Footer/>
     
    </>
  );
}

export default Inventory;
