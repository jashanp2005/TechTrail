import React from 'react';
import { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const {theme} = useSelector((state) => state.theme)
  const {currentUser} = useSelector((state) => state.user);

  const handleSignout = async () => {
    try{
      const res = await fetch('/api/user/signout', {
        method: 'POST'
      });
      const data = await res.json();
      if(!res.ok){
        console.log(data.message);
      }
      else{
        dispatch(signoutSuccess);
      }
    }
    catch(error){
      console.log(error.message);
    }
  }
  
  return (
    <Navbar className='border-b-2'>

      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Jashan's
        </span>
        Blog
      </Link>

      <form>
        <TextInput
          type='text'
          placeholder='Search'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>

        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun/> : <FaMoon/>}
        </Button>

        {currentUser ? (
          <Dropdown arrowIcon={false} inline 
          label={<Avatar alt='user' img={currentUser.profilePicture} rounded />}
          >
            <Dropdown.Header>
              <span className='block text-sm'> @{currentUser.username} </span>
              <span className='block text-sm font-medium truncate'> {currentUser.email} </span>
            </Dropdown.Header>

            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <DropdownDivider/>
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Link to='/' className='block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
          Home
        </Link>
        <Link to='/about' className='block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
          About
        </Link>
        <Link to='/projects' className='block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'>
          Projects
        </Link>
      </Navbar.Collapse>
      
    </Navbar>
  );
}

export default Header;
