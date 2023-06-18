import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue
} from "@chakra-ui/react"
import { useState , useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function SimpleCard() {
    const [data, setData] = useState([])
    const [title , setTitle] = useState("")
    const [content , setContent] = useState("")
    const [to , setTo] = useState("")
    const api = "https://64896de05fa58521caaf9461.mockapi.io/Card"
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(api , {
            title : title ,
            content : content ,
            to : to
        }).then((res) => {
            setData(res.data)
            navigate(`/${res.data.id}`)
            console.log(res.data);
        })
    }


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Title Card</FormLabel>
              <Input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>To</FormLabel>
              <Input type="text" onChange={(e) => setTo(e.target.value) }/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Content</FormLabel>
              <Input type="text" onChange={(e) => setContent(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500"
                }}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
