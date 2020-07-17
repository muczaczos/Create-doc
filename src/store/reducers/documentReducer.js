const initState = {
  newGon: {
    gonId: '',
    gonDate: '',
    customer: '',
    reciepient: '',
    products: [{ id: 1, name: '', qty: '', price: '' }],
    info: '',
  },
};

const documentReducer = (state = initState, action) => {
  return state;
};

export default documentReducer;
