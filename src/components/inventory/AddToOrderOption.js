/* 'Add to order' option (single) component */

import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const AddToOrderOption = ({option, orderOptions, setOrderOptions, orderQuantity, setOrderQuantity, handleOptionChange}) => {
  return (
    <Card className="option-group bg-light p-2 mt-4">
      <p className="option-title">
        <strong>{option.option_name}</strong>
      </p>
      <div className="option-items-wrapper" id={option.option_name.toLowerCase().split(' ').join('-')}>
        {
          option.values.map((value, key) => {
            let option_name = option.option_name.toLowerCase().split(" ").join("-");
            return (
              <Form.Check 
                className="option-item"
                key={key}
                type={option.type}
                data-option-price={value.price.toFixed(2)}
                value={value.name}
                name={option_name}
                id={option_name + "-" + key}
                label={value.name + " (" + ((value.price === 0) ? "FREE" : "+HK$" + value.price.toFixed(2)) + ")"}
                onChange={handleOptionChange}
              />                            
            )
          })
        }
      </div>
    </Card>
  )
}

export default AddToOrderOption;