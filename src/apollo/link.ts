import { ApolloLink, concat, HttpLink } from '@apollo/client';
// @ts-ignore
import { createUploadLink } from 'apollo-upload-client';
import { tokenController } from '../shared/token';

const IP = 'localhost:4000';

export const getLink = () => {
  const httpLink = new createUploadLink({
    uri: `http://${IP}/graphql`,
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    // TODO: Сделать нормальное получение токена с обновлением
    const token = tokenController.getToken();
    operation.setContext({
      headers: {
        authorization: token && token !== 'null' ? `${token}` : '',
        'apollo-require-preflight': true,
      },
    });
    return forward(operation);
  });

  return concat(authMiddleware, httpLink);
};