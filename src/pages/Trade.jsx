import React, { useCallback } from "react";
import { useState } from "react";
import "../App.css";
import Nav from "../components/Nav";
import {
  Container,
  Stepper,
  Button,
  Group,
  Box,
  TextInput,
  Image,
  SimpleGrid,
Text, useMantineTheme, rem 
} from "@mantine/core";
import Banner from "../components/Banner";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { Upload, Photo, X, Language } from 'tabler-icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Footer } from "../components/Footer";


function Trade() {
  const [files, setFiles] = useState([]);
  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);
    return (
      <Image
        key={index}
        src={imageUrl}
        imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
      />
    );
  });


const randomPrice = () => {
    return Math.round((Math.random() * (100000 - 50000) + 50000)*100/100);
} 

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


    
  const [active, setActive] = useState(0);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      city: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) => (value.length < 2 ? "First name is too short" : null),
      city: (value) => (value.length < 2 ? "City name is too short" : null),
    },
  });

  const vehicleForm = useForm({
    initialValues: {
      make: "",
      model: "",
      year: "",
    },

    validate: {
      make: (value) => (value.length < 2 ? "Invalid Make" : null),
      model: (value) => (value.length < 2 ? "Invalid Model" : null),
      year: (value) => (value.length != 4 ? "Invalid Year" : null),
    },
  });


  const nextStep = useCallback(() => {
    if (active === 0){
        if (Object.keys(form.validate().errors).length === 0){
            setActive((current) => (current < 3 ? current + 1 : current));
        }
    
    }
    else if (active === 1){
        if (Object.keys(vehicleForm.validate().errors).length === 0){
            setActive((current) => (current < 3 ? current + 1 : current));
        }
    }
    else {
        setActive((current) => (current < 3 ? current + 1 : current));
    };
  },[active,form, vehicleForm]);
    
  
    
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  

  return (
    <>
      <div class="footerFit">
      <Nav language={true}/>
      <Banner title="Value Your Trade"></Banner>
      <Container p="60px">
        <Stepper
          color="green"
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step
            label="Personal Information"
            description="Tell us a bit about yourself"
          >
            <Box maw={700} mx="auto" p="75px">
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                  withAsterisk
                  label="Name"
                  placeholder="John Doe"
                  {...form.getInputProps('name')}
                />
                 <TextInput
                  withAsterisk
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps('email')}
               
                />
                 <TextInput
                  withAsterisk
                  label="City"
                  placeholder="Ottawa"
                  {...form.getInputProps('city')}
                />
              </form>
            </Box>
          </Stepper.Step>
          <Stepper.Step
            label="Vehicle Information"
            description="Tell us about your vehicle"
          >
            <Box maw={700} mx="auto"  p="75px">
              <form onSubmit={vehicleForm.onSubmit((values) => console.log(values))}>
                <TextInput
                  withAsterisk
                  label="Make"
                  placeholder="BMW"
                  {...vehicleForm.getInputProps('make')}
                />
                 <TextInput
                  withAsterisk
                  label="Model"
                  placeholder="M3"
                  {...vehicleForm.getInputProps('model')}
               
                />
                 <TextInput
                  withAsterisk
                  label="Year"
                  placeholder="2023"
                  {...vehicleForm.getInputProps('year')}
                />
              </form>
            </Box>
          </Stepper.Step>
          <Stepper.Step label="Pictures" description="Let us get a visual">
          <Dropzone
      onDrop={setFiles}
      onReject={(files) => console.log('rejected files', files)}
      accept={IMAGE_MIME_TYPE}
    >
      <Group  p="75px" position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
        <Dropzone.Accept>
          hello
          <Upload
            size="3.2rem"
            stroke={1.5}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <X
            size="3.2rem"
            stroke={1.5}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
      
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
    <SimpleGrid
        cols={4}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        mt={previews.length > 0 ? 'xl' : 0}
      >
        {previews}
      </SimpleGrid>
          </Stepper.Step>
          <Stepper.Completed>
          <Text size={20} pt={20} fw={600} ta="center">
          Thanks for your information, {form.values.name}. Based on your vehicle information, your car is valued at {formatter.format(randomPrice())}.
            </Text>
           
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          {active < 3 && <Button color="dark" onClick={nextStep} disabled = {active === 2 && files.length === 0}>
            Next step
          </Button> }
        </Group>
      </Container>
      

      </div>
      <Footer/>
    </>
  );
}
export default Trade;
