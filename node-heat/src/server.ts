import { serverHttp } from './app';

serverHttp.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
