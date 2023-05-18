import { Navbar } from "flowbite-react";

const NaveBar = () => {
  return (
    <div>
      <Navbar className=" shadow-md" fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src="/assets/pokemon-logo-png-1447.png"
            className="mr-3 h-6 sm:h-9"
            alt="pokemon Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Pokémon Store
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link className=" cursor-pointer" to="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">Store</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NaveBar;
