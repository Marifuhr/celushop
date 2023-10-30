

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from '../images/logo_celu2.jpg'



const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank" // Agrega este atributo
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <img src={logo} alt="celushop" />
        <Text>© 2023 Derechos Reservados</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'} target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/celushop_okk/'} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}