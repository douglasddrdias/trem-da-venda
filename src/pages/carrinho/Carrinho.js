import { useSelector } from 'react-redux';

function Carrinho() {
  const carrinho = useSelector((state) => state.carrinhoReducer?.Cart);
  console.log(carrinho);
  return (
    <div>
      <p>{carrinho.size}</p>
    </div>
  );
}
export default Carrinho;
