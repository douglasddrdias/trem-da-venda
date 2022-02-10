export const FETCH_PRODUTOS_LOADING = 'FETCH_PRODUTOS_LOADING';
export const FETCH_PRODUTOS_SUCCESS = 'FETCH_PRODUTOS_SUCCESS';
export const FETCH_PRODUTOS_ERROR = 'FETCH_PRODUTOS_ERROR';

export function fetchProdutosLoading() {
  return {
    type: FETCH_PRODUTOS_LOADING,
    loading: true,
  };
}
export function fetchProdutosSuccess(produtos) {
  return {
    type: FETCH_PRODUTOS_SUCCESS,
    produtos,
    loading: false,
  };
}
export function fetchProdutosError(error) {
  return {
    type: FETCH_PRODUTOS_ERROR,
    error,
  };
}
