import React, { useState } from "react";
import { Drawer, Burger, Anchor, List } from "@mantine/core";
import "../App.css";

function Nav({language}) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    setOpened(!opened);
  };

  return (
    <div>
      <Burger
        style={{ zIndex: 1000 }}
        m={"40px"}
        size={30}
        color="white"
        variant="filled"
        opened={opened}
        onClick={toggleDrawer}
      />
      <Drawer
        opened={isDrawerOpen}
        onClose={toggleDrawer}
        position="left"
        size="md"
        padding="xl"
        withCloseButton={false}
        style={{ backgroundColor: "black" }}
      >
        { language &&
        <List withPadding pt="80px">
        <List.Item pb="10px">
            <Anchor size={30} underline={false} color="white" href="/">
              Home
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor size={30} underline={false} color="white" href="/about">
              About Us
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/inventory"
            >
              View Our Inventory
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/trade"
            >
              Value Your Trade
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/location"
            >
              Location
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/contact"
            >
              Leave a Review
            </Anchor>
          </List.Item>
        </List>
  }
          { !language &&
        <List withPadding pt="80px">
        <List.Item pb="10px">
            <Anchor size={30} underline={false} color="white" href="/">
              Maison
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor size={30} underline={false} color="white" href="/about">
              À propos de nous
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/inventory"
            >
              Voir Notre Inventaire
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/trade"
            >
              Valuez Votre Échange
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/location"
            >
              Location
            </Anchor>
          </List.Item>
          <List.Item pb="10px">
            <Anchor
              size={30}
              underline={false}
              color="white"
              href="/contact"
            >
              Laissez Un Revue
            </Anchor>
          </List.Item>
        </List>
  }
      </Drawer>
    </div>
  );
}

export default Nav;
