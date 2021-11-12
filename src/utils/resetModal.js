export const resetModal = (setModalShow, setOrderQuantity, setOrderSubtotal, setOrderOptions) => {
  setModalShow(false);
  setOrderQuantity(0);
  setOrderSubtotal(0.0);
  setOrderOptions([]); 
}