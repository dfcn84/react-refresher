/* Basket component */

import Card from 'react-bootstrap/Card';
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Basket = ({ basket = [] }) => {
    let grand_total = 0;
    return (
      <Card className="text-center bg-light">
      <Card.Body>
        <Card.Title className="fs-5 fw-bolder">Your Basket</Card.Title>
        { (basket && basket.length > 0) ? (
          <>
            <div className="basket-items text-start">
              {
                basket.map((item, key) => {
                  grand_total += item.item_subtotal;
                  return (
                    <div key={key} className="mb-4 pb-3 border-bottom">
                      <h5>
                        <Badge bg="info" className="me-2">{item.quantity}x</Badge>
                        {item.name}
                      </h5>
                      {
                        (item.item_details.length > 0) ? (
                          <ul>
                            { item.item_details.map((item_detail, i) => (
                              <li key={i}>{item_detail[1]}</li>
                            ))}
                          </ul>
                        ) : false
                      }
                      <strong>HK${item.item_subtotal.toFixed(2)}</strong>
                    </div>
                  )
                })
              }
            </div>
            <div className="grand-total mb-4 text-start">
              <h4>Grand Total: <strong>HK${grand_total.toFixed(2)}</strong></h4>
            </div>          
          </>
        ) : (
          <Card.Text>
            Your basket is empty.
          </Card.Text>          
        ) }
        <div className="d-grid">
          <Button 
            id="checkout-basket"
            variant={  (basket && basket.length === 0) ? "secondary" : "success"} 
            disabled={ (basket && basket.length === 0) }
          >
            Checkout
          </Button>
        </div>
      </Card.Body>
    </Card>
    )
  }
  
const mapStateToProps = state => ({
  basket: state.basket,
});

export default connect(mapStateToProps, null)(Basket);