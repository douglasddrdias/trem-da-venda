import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import ContainerPricipal from '../../components/elements/containerPrincipal/ContainerPrincipal';
import DetalheProduto from '../../components/elements/detalheProduto/DetalheProduto';
import { fetchProduto } from '../../helper/ProdutoHelper';
import CarrinhoAction from '../../redux/actions/CarrinhoAction';
import ModalMensagem from '../../components/elements/modalMensagem/ModalMensagem';

function Produto() {
  const produto = useSelector((state) => state.produtoReducer.produtos[0]);
  const loading = useSelector((state) => state.produtoReducer.loading);
  const dispatch = useDispatch();
  const { idProduto } = useParams();
  const navigate = useNavigate();
  const getProduto = useCallback(() => {
    fetchProduto(dispatch, idProduto);
  }, [dispatch]);
  useEffect(() => {
    getProduto();
  }, [getProduto]);
  const valorCarrinho = useSelector((state) => state.carrinhoReducer.value);
  const produtosCarrinho = useSelector((state) => state.carrinhoReducer.Cart);
  const [mensagemCarrinho, setMensagemCarrinho] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('success');
  const mensagemSucesso = 'Produto adicionado com sucesso!';
  const mesagemJaExistente = 'O produto selecionado já existia no carrinho então foi aumentada a quantidade do mesmo!';
  const atualizaModalMensagem = (mensagem) => {
    setMensagemCarrinho('');
    setTimeout(() => {
      setMensagemCarrinho(mensagem);
    }, 400);
  };
  const addProdutoCarrinho = () => {
    dispatch(CarrinhoAction.Add(valorCarrinho, produto));
    const [produtoCarrinho] = produtosCarrinho.filter((item) => item.id === produto.id);
    setMensagemCarrinho('');
    const produtoJaExistente = produtoCarrinho && produtoCarrinho.quantity > 1;
    if (produtoJaExistente) {
      setTipoMensagem('info');
      atualizaModalMensagem(mesagemJaExistente);
    } else {
      setTipoMensagem('success');
      atualizaModalMensagem(mensagemSucesso);
    }
    setTimeout(() => {
      navigate('/carrinho');
    }, 2000);
  };

  return (
    <ContainerPricipal>
      <DetalheProduto
        produto={produto}
        loading={loading}
        oncomprar={() => { addProdutoCarrinho(); }}
      />
      <ModalMensagem mensagem={mensagemCarrinho} tipo={tipoMensagem} exibirIcone />
    </ContainerPricipal>
  );
}

export default Produto;
