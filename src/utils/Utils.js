import uuid from 'react-native-uuid';

export function fomatarValorEmReal(valor) {
  const formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return formatado;
}
export function mockListProdutos() {
  return Array.from({ length: 20 }, () => ({
    id: uuid.v4(),
    title: 'title',
    price: 'price',
    img: 'img',
    description: 'description',
    stats: 'category',
    rating: { rate: 0, count: 0 },
  }));
}
