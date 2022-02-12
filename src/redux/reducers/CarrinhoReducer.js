import produce from 'immer';

const INITIAL_STATE = {
  value: 0,
  Cart: [],
};

export default function CarrinhoReducer(state = INITIAL_STATE, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        console.log(action);
        if (draft.value === 0) {
          const item = {
            id: action.produto.id,
            title: action.produto.title,
            price: action.produto.price,
            image: action.produto.image,
            quantity: 1,
          };
          draft.Cart.push(item);
        } else {
          let check = false;
          draft.Cart.map((item, key) => {
            if (item.id === action.produto.id) {
              draft.Cart[key].quantity += draft.Cart[key].quantity + 1;
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
            draft.Cart.push(item);
          }
        }
        draft.value += draft.value + 1;
        break;
      case 'ADD_ITEM':
        draft.Cart.forEach((item, key) => {
          if (item.id === action.produto.id) {
            draft.Cart[key].produto.quantity += draft.Cart[key].produto.quantity + 1;
          }
        });
        draft.value += draft.value + 1;
        break;
      case 'REMOVE_ITEM':
        draft.Cart.forEach((item, key) => {
          if (item.id === action.produto.id) {
            draft.Cart[key].produto.quantity += draft.Cart[key].produto.quantity - 1;
          }
        });
        draft.value += draft.value - 1;
        break;
      case 'DELETE_ITEM':
        draft.Cart.filter((item) => item.id !== action.produto.id);
        break;
      default:
    }
  });
}
