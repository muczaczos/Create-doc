export const addCustomer = (customer) => {
  return (dispatch, getState) => {
    dispatch({ type: "ADD_CUSTOMER", customer });
  };
};
