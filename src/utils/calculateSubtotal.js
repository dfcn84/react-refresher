export const calculateSubtotal = (base_price, order_options, order_quantity) => {
    if (order_quantity === 0) {
      return 0.0;
    }
    if (order_options.length > 0) {
      let option_subtotal = 0.0;
      order_options.map( (order_option) => {
        return option_subtotal += order_option[2];
      } )
      return (Number(base_price) +  Number(option_subtotal)) * Number(order_quantity);
    }
    return Number(base_price) * Number(order_quantity);
  };