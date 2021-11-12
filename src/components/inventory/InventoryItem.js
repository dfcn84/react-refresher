/* Inventory item (single card) component */

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const InventoryItem = ({inventoryItem, setAddToOrderData, setModalShow}) => {
  return (
    <Card className="bg-light mb-4 align-self-stretch">
      <Card.Body className="d-flex flex-column">
      <img src={inventoryItem.item_image_listing} alt={inventoryItem.item_name} className="mb-3 rounded img-fluid" />
      <Card.Title className="fs-5 fw-bolder mb-3">
        {inventoryItem.item_name}
      </Card.Title>
      <div className="flex-grow-1">
        <Card.Text className="mb-4">
          {inventoryItem.item_description}
        </Card.Text>
      </div>
      <Card.Text className="mb-4">
        <Badge bg="secondary">
          Prices from HK${inventoryItem.base_price.toFixed(2)}
        </Badge>      
      </Card.Text>

      <div className="d-grid">
        <Button 
          id={ "add-order-" + inventoryItem.item_id }
          className="btn-add-order"
          variant="primary" 
          onClick={() => {
            setAddToOrderData(inventoryItem);
            setModalShow(true);
          }
        }>
          Add to Order
        </Button>
      </div>
      </Card.Body>
    </Card>  
  )
}

export default InventoryItem;

