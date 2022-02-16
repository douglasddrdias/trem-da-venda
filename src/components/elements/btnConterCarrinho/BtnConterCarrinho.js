export default function BtnCounterCarrinho({ produto, onDown = () => {}, onUp = () => {} }) {
  return (
    <div className="counter-wrapper">
      <button type="button" className="counter-button-minus-active" onClick={onDown}>-</button>
      <p className="counter-p">{produto.quantity}</p>
      <button type="button" className="counter-button-plus-active" onClick={onUp}>+</button>
    </div>
  );
}
