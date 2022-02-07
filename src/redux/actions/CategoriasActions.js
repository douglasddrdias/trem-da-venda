export const ADDCATEGORIAS = 'ADDCATEGORIAS';

export function fetchCategorias(categorias) {
  return {
    type: ADDCATEGORIAS,
    categorias,
  };
}
