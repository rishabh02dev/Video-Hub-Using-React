import { Box, Heading, Image } from '@chakra-ui/react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import React from 'react';
import { Text } from '@chakra-ui/react';

const headingOptions = {
    pos:"absolute",
    left :"50%",
    top : "50%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    padding:4,
    size : "3xl",
}
const Home = () => {
  return (
   <Box>
   <MyCarousel />
   <Container maxW = {'container.xl'} minH = {'100vh'} padding = "16">
    <Heading textTransform={"uppercase"} py ="2" w = "fit-content" borderBottom={'2px solid'}
    m="auto"      >Services</Heading>

   <Stack h = "full" p ={'4'} alignItems={'center'} direction={['column', 'row']} >
   <Image src={img5} h ={["40", "400"]} filter={'hue-rotate(-130deg)'}/>
   <Text letterSpacing = {"widest"} lineHeight={"190%"} p ={["4", "16"]} textAlign={"center"} >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero delectus cum ipsam ad, eligendi, pariatur culpa voluptatum tenetur sed deserunt optio repellendus nesciunt, cumque veniam! Labore at quod pariatur velit! Hic explicabo dolores consequuntur praesentium necessitatibus asperiores saepe voluptatibus ipsa, nulla aut corporis ducimus reprehenderit! Ab consectetur obcaecati blanditiis dolore, impedit doloribus odit beatae, unde debitis iure, asperiores error maiores ducimus quaerat iste facilis distinctio soluta! Unde suscipit eveniet alias. Nulla fugit eveniet dolores repellendus blanditiis quibusdam debitis, nesciunt veritatis quas voluptatum tenetur dolor veniam amet, molestiae voluptate ad eaque laboriosam deleniti. Totam dicta nulla magnam nihil nam aliquid quae?
   </Text>
   </Stack>

   </Container>
   </Box>
  );
};

const MyCarousel = () =>{
    return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus = {false} showThumbs = {false} showArrows = {false}
    >
        <Box w={"full"} h={"100vh"}>
           <Image src= {img1} height={"full"} w={"full"} objectFit={"cover"}/>
           <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch the Future</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
           <Image src= {img2}  height={"full"} w={"full"} objectFit={"cover"} />
           <Heading bgColor={'whiteAlpha.800'} color={'black'} {...headingOptions} >Future is Gaming</Heading>
        </Box>

        <Box w={"full"} h={"100vh"}>
           <Image src= {img3}  height={"full"} w={"full"} objectFit={"cover"} />
           <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >Gaming on Console</Heading>
        </Box>
        <Box w={"full"} h={"100vh"}>
           <Image src= {img4}  height={"full"} w={"full"} objectFit={"cover"} />
           <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >Night life is Cool</Heading>
        </Box>

    </Carousel>
    );
}

export default Home;