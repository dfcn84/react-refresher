/* Inventory list (card list) component */

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import InventoryItem from'./InventoryItem';

import inventoryData from '../../data/inventory.json';

const InventoryList = ({setModalShow, setAddToOrderData}) => { 
  return (inventoryData && inventoryData.length > 0) ? (
    <Row>                
      {
        inventoryData.map( (inventoryItem) => {
          return (
            <Col 
              xs={12}
              sm={6}
              md={4}
              key={inventoryItem.item_id}
              className="d-flex inventory-item"
            >
              <InventoryItem 
                inventoryItem={inventoryItem}
                setModalShow={setModalShow}
                setAddToOrderData={setAddToOrderData} 
              />
            </Col>                         
          )
        })   
      }              
    </Row>
  ) : (
  <Alert variant="warning">
    No inventory found!
  </Alert>
) }

export default InventoryList;

