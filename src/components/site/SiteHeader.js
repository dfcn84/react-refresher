/* Site header component */

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const SiteHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#">
        <strong>Restaurant App</strong>
      </Navbar.Brand>
    </Container>
    </Navbar>       
  )
};

export default SiteHeader;