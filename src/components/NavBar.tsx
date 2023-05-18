import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

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
          <Navbar.Link as={"div"} >
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"} className=" cursor-pointer">
            <Link to="/About">About</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to="/Store">Store</Link>
          </Navbar.Link>
          <Navbar.Link as={"div"}>
            <Link to="/Contact">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NaveBar;
