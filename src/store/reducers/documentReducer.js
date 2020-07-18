const initState = {
  newGon: {
    gonId: "",
    gonDate: "",
    customer: "Adex",
    reciepient: "",
    products: [{ id: 1, name: "", qty: "", price: "" }],
    info: "",
  },
};

const documentReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_CUSTOMER":
      console.log("Added customer", action.customer);
      return {
        ...state,
        newGon: {
          ...state.newGon,
          customer: action.customer,
        },
      };
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default documentReducer;
