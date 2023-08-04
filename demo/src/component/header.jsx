import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar
      fluid
      rounded
      className='bg-#e6eded position: fixed;'
    >
      <Navbar.Brand href="#">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://flowbite.com/docs/images/logo.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TalentSphere
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/login">
          <Button>
            Login
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


