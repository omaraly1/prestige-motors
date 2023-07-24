import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import { Center,Button, Text, Textarea, Box } from "@mantine/core";
import Banner from "../components/Banner";
import { CircleCheck } from 'tabler-icons-react';
import { Notifications, notifications } from '@mantine/notifications';
import { Footer } from "../components/Footer";
import { useForm } from "@mantine/form";


function Contact() {
  const check = () => {  
     if  (Object.keys(form.validate().errors).length === 0) {
      notifications.show({
        autoClose: 5000,
        title: "Thank you for leaving your thoughts!",
        message: 'We will take your feedback into account.',
        color: 'green',
        icon: <CircleCheck />,
      }) 
     }
  }

  const form = useForm({
    initialValues: {
      feedback: ""
    },

    validate: {
      feedback: (value) => (value.length < 20 ? "Please write at least 20 characters." : null)
    },
  });
    
  return (
    <div>
    <div class="footerFit">
      <Nav language={true}/>
<Notifications/>
      <Banner title="Leave a Review"></Banner>

      <Text fw={700} size={30} pt="50px" ta="center">
        Have Something to Say? Let us know.
      </Text>

      <Box maw={1000} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Textarea
        placeholder="Leave your review..."
        label="Feedback"
        autosize
        minRows={4}
        {...form.getInputProps('feedback')}
      />
      </form>
      </Box>
      <Center maw={400} h={100} mx="auto">
          <Button  onClick={check}
        size='md'  radius="md" color="dark">
            Submit
        </Button>
          </Center>
          

      <Center pt={100}>
      <img length="200" width="500" src="https://shreepng.com/img/Inside/Car/Bugatti/veyron%20super%20sport%20300%20bugatti.png"></img>
      </Center>
         </div>
<Footer/>
    </div>
  );
}

export default Contact;
