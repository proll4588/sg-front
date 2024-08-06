/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
  date: { input: any; output: any; }
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ansTestOne?: Maybe<TestOneProcess>;
  ansTestTwo?: Maybe<TestTwoProcess>;
  completeTestOne?: Maybe<TestOneProcess>;
  completeTestTwo?: Maybe<TestTwoProcess>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  registration?: Maybe<Token>;
  startTestOne?: Maybe<TestOneProcess>;
  startTestTwo?: Maybe<TestTwoProcess>;
};


export type MutationAnsTestOneArgs = {
  ans: Scalars['Int']['input'];
  processId: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
};


export type MutationAnsTestTwoArgs = {
  ans: Scalars['Boolean']['input'];
  processId: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
};


export type MutationCompleteTestOneArgs = {
  processId: Scalars['Int']['input'];
};


export type MutationCompleteTestTwoArgs = {
  processId: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationRegistrationArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
};


export type MutationStartTestOneArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationStartTestTwoArgs = {
  userId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getTestOne?: Maybe<TestOneProcess>;
  getTestOneProcess?: Maybe<Array<Maybe<TestOneProcess>>>;
  getTestOneQuestions?: Maybe<Array<TestOneQuestions>>;
  getTestTwo?: Maybe<TestTwoProcess>;
  getTestTwoProcess?: Maybe<Array<Maybe<TestTwoProcess>>>;
  getTestTwoQuestions?: Maybe<Array<TestTwoQuestions>>;
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getUsersRoles?: Maybe<Array<Maybe<Role>>>;
  login?: Maybe<LoginResponse>;
};


export type QueryGetTestOneArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetTestTwoArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersArgs = {
  roleId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLoginArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type TestOneAnswer = {
  __typename?: 'TestOneAnswer';
  TestOneQuestions: TestOneQuestions;
  answer?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
};

export type TestOneProcess = {
  __typename?: 'TestOneProcess';
  TestOneAnswer: Array<TestOneAnswer>;
  User: User;
  complete: Scalars['Boolean']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  startDate: Scalars['String']['output'];
};

export type TestOneQuestions = {
  __typename?: 'TestOneQuestions';
  id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type TestTwoAnswer = {
  __typename?: 'TestTwoAnswer';
  TestTwoQuestions: TestTwoQuestions;
  answer?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['Int']['output'];
};

export type TestTwoProcess = {
  __typename?: 'TestTwoProcess';
  TestTwoAnswer: Array<TestTwoAnswer>;
  User: User;
  complete: Scalars['Boolean']['output'];
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  startDate: Scalars['String']['output'];
};

export type TestTwoQuestions = {
  __typename?: 'TestTwoQuestions';
  id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  text: Scalars['String']['output'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  Role: Role;
  id: Scalars['Int']['output'];
  login: Scalars['String']['output'];
};

export type LoginQueryVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'LoginResponse', token: string } | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'Role', id: number, title: string } } | null };

export type GetUsersQueryVariables = Exact<{
  roleId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers?: Array<{ __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } | null> | null };

export type GetUsersRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersRolesQuery = { __typename?: 'Query', getUsersRoles?: Array<{ __typename?: 'Role', id: number, title: string } | null> | null };

export type MutationMutationVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
}>;


export type MutationMutation = { __typename?: 'Mutation', registration?: { __typename?: 'Token', token: string } | null };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: boolean | null };

export type GetTestOneQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestOneQuestionsQuery = { __typename?: 'Query', getTestOneQuestions?: Array<{ __typename?: 'TestOneQuestions', id: number, text: string, position: number }> | null };

export type StartTestOneMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type StartTestOneMutation = { __typename?: 'Mutation', startTestOne?: { __typename?: 'TestOneProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', id: number, answer?: number | null, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type CompleteTestOneMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type CompleteTestOneMutation = { __typename?: 'Mutation', completeTestOne?: { __typename?: 'TestOneProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', id: number, answer?: number | null, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type GetTestOneQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetTestOneQuery = { __typename?: 'Query', getTestOne?: { __typename?: 'TestOneProcess', startDate: string, id: number, endDate?: string | null, complete: boolean, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } }, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', answer?: number | null, id: number, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, position: number, text: string } }> } | null };

export type AnsTestOneMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
  ans: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
}>;


export type AnsTestOneMutation = { __typename?: 'Mutation', ansTestOne?: { __typename?: 'TestOneProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', id: number, answer?: number | null, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type GetTestTwoQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestTwoQuestionsQuery = { __typename?: 'Query', getTestTwoQuestions?: Array<{ __typename?: 'TestTwoQuestions', id: number, text: string, position: number }> | null };

export type GetTestTwoQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetTestTwoQuery = { __typename?: 'Query', getTestTwo?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer?: boolean | null, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type StartTestTwoMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type StartTestTwoMutation = { __typename?: 'Mutation', startTestTwo?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer?: boolean | null, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type AnsTestTwoMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
  ans: Scalars['Boolean']['input'];
}>;


export type AnsTestTwoMutation = { __typename?: 'Mutation', ansTestTwo?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer?: boolean | null, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type CompleteTestTwoMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type CompleteTestTwoMutation = { __typename?: 'Mutation', completeTestTwo?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer?: boolean | null, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUsersRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetUsersRolesQuery, GetUsersRolesQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetTestOneQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetTestOneQuestionsQuery, GetTestOneQuestionsQueryVariables>;
export const StartTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StartTestOneMutation, StartTestOneMutationVariables>;
export const CompleteTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompleteTestOneMutation, CompleteTestOneMutationVariables>;
export const GetTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTestOneQuery, GetTestOneQueryVariables>;
export const AnsTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnsTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ans"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ansTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ans"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ans"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AnsTestOneMutation, AnsTestOneMutationVariables>;
export const GetTestTwoQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetTestTwoQuestionsQuery, GetTestTwoQuestionsQueryVariables>;
export const GetTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTestTwoQuery, GetTestTwoQueryVariables>;
export const StartTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StartTestTwoMutation, StartTestTwoMutationVariables>;
export const AnsTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnsTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ans"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ansTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ans"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ans"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AnsTestTwoMutation, AnsTestTwoMutationVariables>;
export const CompleteTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompleteTestTwoMutation, CompleteTestTwoMutationVariables>;