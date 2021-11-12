/* App (wrapper) comonent */

import { useState } from 'react';

import SiteHeader from'./components/site/SiteHeader';
import Description from'./components/content/Description';
import InventoryList from'./components/inventory/InventoryList';
import AddToOrderModal from'./components/inventory/AddToOrderModal';
import Basket from'./components/basket/Basket';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [addToOrderData, setAddToOrderData] = useState({});

  return (
    <div className="App">
      <header>
        <SiteHeader />
      </header>
      <main>
        <Container>
          <Row className="my-5">
            <Col 
              xs={{span: 12, order: 'last'}} 
              lg={{span: 9, order: 'first'}}
            >
              <Description />      
              <InventoryList setModalShow={setModalShow} setAddToOrderData={setAddToOrderData} />

            </Col>
            <Col 
              xs={{span: 12, order: 'first'}} 
              lg={{span: 3, order: 'last'}}
            >
              <Basket />
            </Col>
          </Row>
        </Container>
      </main>   
      <AddToOrderModal
        modalShow={modalShow}
        addToOrderData={addToOrderData}
        setModalShow={setModalShow}
      />        
    </div>
  );
}

export default App;
