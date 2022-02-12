const INITIAL_STATE = {
  value: 0,
  Cart: [],
};

export default function CarrinhoReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (state.value === 0) {
        const item = {
          id: action.produto.id,
          title: action.produto.title,
          price: action.produto.price,
          image: action.produto.image,
          quantity: 1,
        };
        state.Cart.push(item);
      } else {
        let check = false;
        state.Cart.map((item, key) => {
          if (item.id === action.produto.id) {
            state.Cart[key].quantity += state.Cart[key].quantity + 1;
            check = true;
          }
          return item;
        });
        if (!check) {
          const item = {
            id: action.produto.id,
            title: action.produto.title,
            price: action.produto.price,
            image: action.produto.image,
            quantity: 1,
          };
          state.Cart.push(item);
        }
      }
      return {
        ...state,
        value: (state.value + 1),
      };
    case 'ADD_ITEM':
      action.produto.quantity += action.produto.quantity + 1;
      return {
        ...state,
        value: (action.cart.value + 1),
      };
    case 'REMOVE_ITEM':
      if (action.produto.quantity > 1) {
        action.produto.quantity += action.produto.quantity - 1;
        return {
          ...state,
          value: (action.cart.value - 1),
        };
      }
      return state;

    case 'DELETE_ITEM':
      return {
        ...state,
        value: (action.cart.value - action.produto.quantity),
        Cart: state.Cart.filter((item) => item.id !== action.produto.id),
      };
    case 'CHANGE_CART':
      state = action.localCart;
      return state;
    default:
      return state;
  }
}
