import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Textarea,
  FormHelperText,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



const Form1 = () => {
 const [show, setShow] = useState(false)
const handleClick = () => setShow(!show)
const navigate = useNavigate();
const handleGoBack = () => {
  navigate(-1);
};

  return (
    <>
    <Button onClick={handleGoBack} colorScheme="blue" mb={4}>
        Volver
      </Button>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Nuevo Presupuesto
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Nombre
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Apellido
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email 
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Teléfono
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
      
    </>
  )
}

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Detalle Usuario
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          País
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Seleccione opción"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>Argentina</option>
         
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Dirección
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
         Ciudad
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Provincia
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Selecione opción"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>Buenos Aires</option>
          <option>Ciudad Autónoma de Buenos Aires</option>
          <option>Catamarca</option>
          <option>Chaco</option>
          <option>Chubut</option>
          <option>Córdoba</option>
          <option>Corrientes</option>
          <option>Entre Ríos</option>
          <option>Formosa</option>
          <option>Jujuy</option>
          <option>La Pampa</option>
          <option>La Rioja</option>
          <option>Mendoza</option>
          <option>Misiones</option>
          <option>Neuquén</option>
          <option>Río Negro</option>
          <option>Salta</option>
          <option>San Juan</option>
          <option>San Luis</option>
          <option>Santa Cruz</option>
          <option>Santa Fe</option>
          <option>Santiago del Estero</option>
          <option>Tierra del Fuego</option>
          <option>Tucumán</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Código Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  )
}

const Form3 = () => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Detalle Presupuesto
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Modelo de Celular
        </FormLabel>
        <Select
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Seleccione opción"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>Alcatel</option>
          <option>Huawei</option>
          <option>Iphone</option>
          <option>Lg</option>
          <option>Motorola</option>
          <option>Nokia</option>
          <option>Only</option>
          <option>Samsung</option>
          <option>Sony</option>
          <option>TCL</option>
          <option>Xiaomi</option>
         
        </Select>
      </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Descripción
          </FormLabel>
          <Textarea
            placeholder="texto"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          {/* <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText> */}
        </FormControl>
      </SimpleGrid>
    </>
  )
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Atrás
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Siguiente
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Enviar
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}
