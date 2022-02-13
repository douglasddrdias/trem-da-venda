import produce from 'immer';

const INITIAL_STATE = {
  value: 0,
  Cart: [],
};

export default function CarrinhoReducer(state = INITIAL_STATE, action = {}) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        if (draft.value === 0) {
          const item = {
            id: action.produto.id,
            title: action.produto.title,
            price: action.produto.price,
            image: action.produto.image,
            quantity: 1,
          };
          draft.Cart.push(item);
          draft.value = item.price;
        } else {
          let check = false;
          draft.Cart.map((item, key) => {
            if (item.id === action.produto.id) {
              draft.Cart[key].quantity += 1;
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
        draft.value += action.produto.price;
        break;
      case 'ADD_ITEM':
        draft.Cart.forEach((item) => {
          if (item.id === action.produto.id) {
            item.quantity += 1;
          }
        });
        draft.value += action.produto.price;
        break;
      case 'REMOVE_ITEM':
        draft.Cart.forEach((item) => {
          if (item.id === action.produto.id) {
            item.quantity -= 1;
          }
        });
        draft.value -= 1;
        draft.value -= action.produto.price;
        break;
      case 'DELETE_ITEM':
        draft.Cart = draft.Cart.filter((item) => item.id !== action.produto.id);
        draft.value -= action.produto.price;
        break;
      default:
    }
  });
}
