import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import HeroBg from "../assets/bg-edi.svg";

export default function App(){
  const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>

      <Box
        w="full"
        h="container.md"
        backgroundImage={HeroBg}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgBlendMode="overlay"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", , "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              Build Your new{" "}
              <chakra.span color="blue.400" textDecor="underline">
                Saas
              </chakra.span>
            </Heading>
            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
            >
              Start project
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

