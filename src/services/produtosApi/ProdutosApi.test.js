import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { GetCategoriasProdutos } from './ProdutosApi';

const response = { test: 'testing' };

const server = setupServer(
  rest.get(
    process.env.REACT_APP_ROOT_PRODUTOS_APP_API + process.env.REACT_APP_CATEGORIAS_APP_API,
    (req, res, ctx) => res(ctx.json(response)),
  ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transforms service GetCategorias in json response into object', async () => {
  const { data } = await GetCategoriasProdutos();

  expect(data).toStrictEqual(response);
});
