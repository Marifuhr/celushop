

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  Button,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  FiHeadphones,
  FiLink,
  FiBatteryCharging,
  FiSpeaker,
  FiClock,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'

import React from 'react'
import logo from '../images/logo_celu2.jpg'
import Profile from '../Login/Profile'
import { useNavigate } from 'react-router-dom';

// const LinkItemProps = {
//   name: "string",
//   icon: IconType
// }

// const NavItemProps = {
//   icon: IconType,
//   children: React.ReactNode
// }

// const MobileProps = {
//   onOpen: () => void
// }

// const SidebarProps = {
//   onClose: () => void
// }


const LinkItems = [
  { name: 'Auriculares', icon: FiHeadphones },
  { name: 'Cables', icon: FiLink },
  { name: 'Cargadores', icon: FiBatteryCharging },
  { name: 'Parlantes', icon: FiSpeaker },
  { name: 'Relojes', icon: FiClock },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
const handleGoBack = () => {
  navigate(-1);
}

  return (
    

    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="6" justifyContent="space-between" marginBottom="30px" marginTop="30px">
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        <img src={logo} alt="logo" />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
            <Button onClick={handleGoBack} colorScheme="blue" mb={4} marginTop="10px">
                Volver
              </Button>

    </Box>

  )

}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="40"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            {/* <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}> */}
              <HStack>
                <Profile />
                {/* <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">María Rosa Fuhr</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box> */}
              </HStack>
            {/* </MenuButton> */}
            {/* <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList> */}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  )
}

export default SidebarWithHeader