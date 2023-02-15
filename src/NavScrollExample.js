
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Ajout from './Ajout';

import './list.css';

function NavScrollExample() {
  return (
      <Container fluid>
        <header>
        <h1>MOvie <span> House</span></h1>
        <nav>
            <ul>
            <li><button>ajouter </button> </li>
            </ul>
          </nav>
          </header>

         
       
      </Container>
   
  );
}

export default NavScrollExample;