
import React from 'react';
import { Box, Button, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useColorMode, Center } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../images/logo_celu.jpg';
import style from '../NavBar/NavBar.module.css';
import Profile from '../Login/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';


export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleToggleColorMode = () => {
    if (colorMode === 'light') {
      toggleColorMode('dark');
    } else {
      toggleColorMode('light');
    }
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className={style.navbar} style={{ backgroundColor: colorMode === 'light' ? 'white' : '#1A202C' }}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      
      <div className={style.rightSection}>
      <h1 style={{ marginRight: '10rem', fontFamily: 'Libre Baskerville'}}>CeluShop</h1>
        
        {/* <div className={style.centerSection}> */}
          {/* <Menu>
            <MenuButton
              as={Link}
              to="/detail:id"
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              _hover={{ bg: 'transparent' }}
              _expanded={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
              bg={colorMode === 'light' ? 'white' : '#1A202C'}
             
            >
                  Accesorios
          </MenuButton>
          {/* <MenuList bg={colorMode === 'light' ? 'white' : '#1A202C'}>
            <MenuItem>Accesorio 1</MenuItem>
            <MenuItem>Accesorio 2</MenuItem>
            <MenuItem>Accesorio 3</MenuItem>
          </MenuList> */}
        {/* </Menu>
        </div>
        <div className={style.centerSection}>
        <Menu>
          <MenuButton
            as={Link}
            to="/form"
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
            _hover={{ bg: 'transparent' }}
            _expanded={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'none' }}
            bg={colorMode === 'light' ? 'white' : '#1A202C'}
          >
            Pedí tu presupuesto
          </MenuButton>  */}
          {/* <MenuList bg={colorMode === 'light' ? 'white' : '#1A202C'}>
            <MenuItem>Presupuesto 1</MenuItem>
            <MenuItem>Presupuesto 2</MenuItem>
            <MenuItem>Presupuesto 3</MenuItem>
          </MenuList> */}
        {/* </Menu>
        </div> */}
        {isAuthenticated ? (
            <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              _hover={{ bg: 'transparent' }}
              _expanded={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
            >
              <Profile size="sm"/>
            </MenuButton>
            <MenuList alignItems={'center'} bg={colorMode === 'light' ? 'white' : '#1A202C'}>
              <br />
              <Center>
                <Profile />
              </Center>
              <br />
              <Center>
                <p>María Rosa Fuhr</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>mariarosafuhr@gmail.com</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            variant="solid"
            bg="blue.500"
            color="white"
            _hover={{ bg: 'blue.600' }}
            onClick={loginWithRedirect}
          >
            Login
          </Button>
        )}
          <Box style={{marginTop: '5px'}}>
            <Button onClick={handleToggleColorMode} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Box>
      </div>
    </div>
  );
}