import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
  SimpleGrid,
  Text
} from "@chakra-ui/react"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"
import { useState , useEffect } from "react"
import { useNavigate ,useParams } from "react-router-dom"
import axios from "axios"
import cardImg from "../assets/img-eid-fcebd1cd.jpg"

const data = 
{
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34
}

function ProductAddToCart() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const api = `https://64896de05fa58521caaf9461.mockapi.io/Card/${id}`
    useEffect(() => {
        axios.get(api).then((res) => {
            setData(res.data)
            console.log(res.data);
        })
    } , [])
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
        {data == undefined ? (
            <>

            </>
        ):(
            <>
        <SimpleGrid columns={{base: 1, md: 2 ,lg: 1}} spacing='40px'>
        <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image
          src={cardImg}
          alt={`Picture of ${data.title}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {data.name}
            </Box>
          </Flex>
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Text as="span" color="gray.600">
                {data.to}
            </Text>
          </Box>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                {data.body}
              </Box>
            </Box>
            <Box as="span" color={"gray.600"} fontSize="lg">
                <Button>Share</Button>
            </Box>
          </Flex>
        </Box>
      </Box>
        </SimpleGrid>
            </>
        )}
    </Flex>
  )
}

export default ProductAddToCart
