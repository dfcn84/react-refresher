/* 'Add to order' modal component */

import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { addToOrder } from "../../actions/basketActions";
import { calculateSubtotal } from "../../utils/calculateSubtotal";
import { resetModal } from "../../utils/resetModal";

import AddToOrderOption from'./AddToOrderOption';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const AddToOrderModal = ({basket = [], modalShow, setModalShow, addToOrderData, onAddToOrderPressed }) => {

  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderOptions, setOrderOptions] = useState([]);
  const [orderSubtotal, setOrderSubtotal] = useState(0.0);

  useEffect(() => {
    if (addToOrderData) {
      setOrderSubtotal(calculateSubtotal(
                        addToOrderData.base_price, 
                        orderOptions, 
                        orderQuantity
                      ))
    }
  }, [orderOptions, orderQuantity])
 
  const handleOptionChange = (e) => {
    const { name, value, type } = e.target;
    let option_name = value;
    let option_price = Number(e.target.getAttribute('data-option-price'));
    let option_array = [ name, option_name, option_price];
    /* If radio options, need to remove previous other choice of same group */
    if (type === "radio") {
      let updatedOrderOptions = orderOptions.filter(order_option => order_option[0] !== option_array[0])
      setOrderOptions([...updatedOrderOptions, option_array]);
    }
    /* checkbox options just add on */
    else if (type === "checkbox") {
      if (orderOptions.some(order_option => order_option[1] === option_array[1])) {
        setOrderOptions(orderOptions.filter(order_option => order_option[1] !== option_array[1]));
      }
      else {
        setOrderOptions([...orderOptions, option_array]);
      }
    }
  };

  return (
    <Modal
      id="add-order-modal"
      show={modalShow}
      onHide={() => {
        resetModal(setModalShow, setOrderQuantity, setOrderSubtotal, setOrderOptions);       
      }}
      onShow={() => {
        setOrderQuantity(1);
        setOrderSubtotal(0.0);
        setOrderOptions([]);         
      }}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Modal.Body>
    <img src={addToOrderData.item_image_details} alt={addToOrderData.item_name} className="img-fluid rounded mb-3" />
    <h4>
      {addToOrderData.item_name}
      <Badge bg="secondary" className="ms-2">
        HK${addToOrderData.base_price && addToOrderData.base_price.toFixed(2)}
      </Badge>        
    </h4>
    <p>{addToOrderData.item_description}</p>
    <Form>
      <Form.Group 
        className="mb-3"
        controlId="order_quantity"
      >
      <Form.Control 
        type="number"
        min="1"
        defaultValue={orderQuantity}
        placeholder="Quantity" 
        onChange={e => setOrderQuantity(e.target.value)}
      />
      </Form.Group>     
      { (addToOrderData.options && addToOrderData.options.length > 0) ? (
        addToOrderData.options.map( (option, key) => {
        return (
          <AddToOrderOption
            key={key}
            option={option}
            orderOptions={orderOptions}
            setOrderOptions={setOrderOptions} 
            orderQuantity={orderQuantity}
            setOrderQuantity={setOrderQuantity}
            handleOptionChange={handleOptionChange}
          />
        )
        } )
        ) : false
      }   
    <div className="d-flex space-around mt-4 mb-3">
      <Button 
        variant="danger"
        className="flex-grow-1 mx-2"
        type="button"
        onClick={() => {
            resetModal(setModalShow, setOrderQuantity, setOrderSubtotal, setOrderOptions);            
          }
        }
      >
        Cancel
      </Button>
      <Button 
        variant="success"
        className="flex-grow-1 mx-2"
        type="button"
        onClick={() => {
          let orderItem = {
            "name": addToOrderData.item_name,
            "quantity": orderQuantity,
            "item_details": orderOptions,
            "item_subtotal": Number(orderSubtotal.toFixed(2))
          };
          onAddToOrderPressed(orderItem);
          resetModal(setModalShow, setOrderQuantity, setOrderSubtotal, setOrderOptions);
        }} 
      >
        Add to Order { (orderSubtotal > 0) ? `(HK$${orderSubtotal.toFixed(2)})` : false }
      </Button>
    </div>            
    </Form>
    </Modal.Body>
  </Modal>     
  )
}

const mapStateToProps = state => ({
  basket: state.basket,
});

const mapDispatchToProps = dispatch => ({
  onAddToOrderPressed: item => dispatch(addToOrder(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToOrderModal);