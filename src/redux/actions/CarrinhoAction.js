const Add = (cart, produto) => ({
  type: 'ADD_TO_CART',
  cart,
  produto,
});

const AddItem = (cart, produto) => ({
  type: 'ADD_ITEM',
  cart,
  produto,
});

const RemoveItem = (cart, produto) => ({
  type: 'REMOVE_ITEM',
  cart,
  produto,
});

const DeleteItem = (cart, produto) => ({
  type: 'DELETE_ITEM',
  cart,
  produto,
});

const ChangeCart = (localCart) => ({
  type: 'CHANGE_CART',
  localCart,
});

export default {
  Add,
  AddItem,
  RemoveItem,
  DeleteItem,
  ChangeCart,
};
