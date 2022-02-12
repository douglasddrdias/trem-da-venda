export const ALTERAR_STADO_DRAWER = 'ALTERAR_STADO_DRAWER';

export function alterarStadoDrawer(aberto) {
  return {
    type: ALTERAR_STADO_DRAWER,
    aberto,
  };
}
