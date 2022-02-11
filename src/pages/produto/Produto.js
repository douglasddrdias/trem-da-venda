import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ContainerPricipal from '../../components/elements/containerPrincipal/ContainerPrincipal';
import DetalheProduto from '../../components/elements/detalheProduto/DetalheProduto';
import { fetchProduto } from '../../helper/ProdutoHelper';

function Produto() {
  const produto = useSelector((state) => state.produtoReducer.produtos[0]);
  const loading = useSelector((state) => state.produtoReducer.loading);
  const dispatch = useDispatch();
  const { idProduto } = useParams();
  const getProduto = useCallback(() => {
    fetchProduto(dispatch, idProduto);
  }, [dispatch]);
  useEffect(() => {
    getProduto();
  }, [getProduto]);

  return (
    <ContainerPricipal>
      <DetalheProduto produto={produto} loading={loading} />
    </ContainerPricipal>
  );
}

export default Produto;
