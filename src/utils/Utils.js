export function fomatarValorEmReal(valor) {
  const formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return formatado;
}
