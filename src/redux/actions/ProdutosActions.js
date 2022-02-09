export const GETALLPRODUTOS = 'ADDCATEGORIAS';

export function fetchAllProdutos(produtos) {
  return {
    type: GETALLPRODUTOS,
    produtos,
  };
}
