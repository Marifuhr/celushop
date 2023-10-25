

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'
import {useState} from 'react'


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function CaptionCarousel() {

  const [slider, setSlider] = useState()

  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  const cards = [
    {
      title: 'Servicio Técnico Especializado',
      text: "Brindamos soluciones profesionales, garantizando una atención de calidad y la restauración óptima de tu celular",
     image: 'https://recambiostablet.com/blog/wp-content/uploads/2019/08/cuanto-cuesta-cambiar-la-pantalla-del-movil.jpg',
        
    },
    {
      title: 'Venta de Accesorios',
      text: " Encuentra una amplia variedad de accesorios de calidad para tu celular. Desde fundas y protectores hasta cargadores y auriculares, tenemos todo lo que necesitas para complementar y proteger tu dispositivo.",
      image:
        'https://www.blog.doto.com.mx/wp-content/uploads/2023/03/accesorios-para-celular.jpg',
    },
    {
      title: 'Solicitá tu Presupuesto',
      text: "Obtén un presupuesto detallado y sin costo. Nuestro equipo especializado evaluará el daño y te brindará la información necesaria para que tomes la mejor decisión.",
      image:
        'https://www.cenedi.com/assets/Reparacio%CC%81n-de-Tele%CC%81fonos-Celulares.jpg',
    },
  ]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
  {cards.map((card, index) => (
    <Box
      key={index}
      height={'600px'}
      position="relative"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${card.image})`}
    >
      <Container size="container.lg" height="600px" position="relative">
        <Stack
          spacing={6}
          w={'full'}
          maxW={'lg'}
          position="absolute"
          top="50%"
          transform="translate(0, -50%)"
        >
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }} color="black" marginLeft="-40rem" marginTop="26rem" fontFamily ="Fredericka the Great" serif backgroundColor="rgba(255, 255, 255, 0.5)">
            {card.title}
          </Heading>
          {/* <img
            src={card.image}
            alt={card.title}
            style={{ maxWidth: '100%', height: 'auto' }} // Estilos para ajustar el tamaño
          /> */}
          <Text fontSize={{ base: 'md', lg: 'lg' }} color="black" marginRight="-18rem">
            {card.text}
          </Text>
        </Stack>
      </Container>
    </Box>
  ))}
</Slider>
    </Box>
  )
}