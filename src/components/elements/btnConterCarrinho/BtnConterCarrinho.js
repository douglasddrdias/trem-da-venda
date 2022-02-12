// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import CarrinhoAction from '../../../redux/actions/CarrinhoAction';

// export default function BtnCounterCarrinho({ produto }) {
//   const [value, setValue] = useState(produto.quantity);
//   const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active');
//   const carrinho = useSelector((state) => state.carrinhoReducer?.Cart);
//   const dispatch = useDispatch();
//   function down() {
//     if (value <= 1) {
//       // mudar o css
//       setButtonStyle('counter-button-minus-desactive');
//       dispatch(CarrinhoAction.DeleteItem(carrinho, produto));
//     }
//     if (value > 0) {
//       setValue(value - 1);
//       dispatch(CarrinhoAction.RemoveItem(carrinho, produto));
//     }
//   }
//   function up() {
//     setValue(value + 1);
//     setButtonStyle('counter-button-minus-active');
//     dispatch(CarrinhoAction.AddItem(carrinho, produto));
//   }
//   return (
//     <div className="counter-wrapper">
//       <button type="button" className={buttonStyle} onClick={down}>-</button>
//       <p className="counter-p">{value}</p>
//       <button type="button" className="counter-button-plus-active" onClick={up}>+</button>
//     </div>
//   );
// }

export default function BtnCounterCarrinho({ produto, down = () => {}, up = () => {} }) {
  return (
    <div className="counter-wrapper">
      <button type="button" className="counter-button-minus-active" onClick={down}>-</button>
      <p className="counter-p">{produto.quantity}</p>
      <button type="button" className="counter-button-plus-active" onClick={up}>+</button>
    </div>
  );
}
