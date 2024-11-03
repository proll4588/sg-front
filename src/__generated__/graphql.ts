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
};

export type CompleteEmployeeTestAnswer = {
  ans: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
};

export type Employee = {
  __typename?: 'Employee';
  EmploeePosition: EmployeePosition;
  User: User;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type EmployeePosition = {
  __typename?: 'EmployeePosition';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type EmployeeTest = {
  __typename?: 'EmployeeTest';
  Emplouee: Employee;
  EmployeeTestAnswer: Array<EmployeeTestAnswer>;
  EmployeeTestVariant: EmployeeTestVariant;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  startDate: Scalars['String']['output'];
};

export type EmployeeTestAnswer = {
  __typename?: 'EmployeeTestAnswer';
  EmployeeTestQuestion: EmployeeTestQuestion;
  answer: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type EmployeeTestProcess = {
  __typename?: 'EmployeeTestProcess';
  EmployeeTest?: Maybe<Array<EmployeeTest>>;
  EmployeeTestVariant: EmployeeTestVariant;
  EmplyeeProcessMembers: Array<EmployeeTestProcessMember>;
  User: User;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  startDate: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EmployeeTestProcessMember = {
  __typename?: 'EmployeeTestProcessMember';
  Emplouee: Employee;
  employeeTestProcessId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
};

export type EmployeeTestProcessResult = {
  __typename?: 'EmployeeTestProcessResult';
  title: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type EmployeeTestQuestion = {
  __typename?: 'EmployeeTestQuestion';
  EmployeeTestBlok: SimpleEmployeeTestBlock;
  id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type EmployeeTestVariant = {
  __typename?: 'EmployeeTestVariant';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ansTestOne?: Maybe<TestOneProcess>;
  ansTestTwo?: Maybe<TestTwoProcess>;
  answerEmployeeTest: Scalars['Boolean']['output'];
  completeTestOne?: Maybe<TestOneProcess>;
  completeTestTwo?: Maybe<TestTwoProcess>;
  createEmployee: Employee;
  createEmployeePosition: EmployeePosition;
  createEmployeeTestProcess?: Maybe<EmployeeTestProcess>;
  createUser: User;
  deleteUser: Scalars['Boolean']['output'];
  finishEmployeeTest: Scalars['Boolean']['output'];
  finishEmployeeTestProcess: Scalars['Boolean']['output'];
  login?: Maybe<LoginResponse>;
  processPdf?: Maybe<Scalars['Boolean']['output']>;
  startEmployeeTest?: Maybe<EmployeeTest>;
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


export type MutationAnswerEmployeeTestArgs = {
  answers: Array<CompleteEmployeeTestAnswer>;
  testId: Scalars['Int']['input'];
};


export type MutationCompleteTestOneArgs = {
  processId: Scalars['Int']['input'];
};


export type MutationCompleteTestTwoArgs = {
  processId: Scalars['Int']['input'];
};


export type MutationCreateEmployeeArgs = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  positionId: Scalars['Int']['input'];
};


export type MutationCreateEmployeePositionArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreateEmployeeTestProcessArgs = {
  employeeIds: Array<Scalars['Int']['input']>;
  testVariantId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationFinishEmployeeTestArgs = {
  testId: Scalars['Int']['input'];
};


export type MutationFinishEmployeeTestProcessArgs = {
  processId: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationProcessPdfArgs = {
  file: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationStartEmployeeTestArgs = {
  testProcessId: Scalars['Int']['input'];
};


export type MutationStartTestOneArgs = {
  userId: Scalars['Int']['input'];
};


export type MutationStartTestTwoArgs = {
  userId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllTestOneProcess: Array<Maybe<TestOneProcess>>;
  getAllTestTwoProcess: Array<TestTwoProcess>;
  getAvailableEmployeeTestProcesses: Array<EmployeeTestProcess>;
  getEmployeePositions: Array<EmployeePosition>;
  getEmployeeTestById?: Maybe<EmployeeTest>;
  getEmployeeTestByProcessId?: Maybe<EmployeeTest>;
  getEmployeeTestProcessById?: Maybe<EmployeeTestProcess>;
  getEmployeeTestProcessResults: Array<EmployeeTestProcessResult>;
  getEmployeeTestProcesses: Array<EmployeeTestProcess>;
  getEmployeeTestQuestions: Array<EmployeeTestQuestion>;
  getEmployeeTestVariants: Array<EmployeeTestVariant>;
  getEmployees: Array<Employee>;
  getStudentUsers: Array<Maybe<User>>;
  getTestOneProcessByUserId?: Maybe<TestOneProcess>;
  getTestOneQuestions: Array<TestOneQuestions>;
  getTestOneResults: Array<TestOneResult>;
  getTestTwoProcessByUserId?: Maybe<TestTwoProcess>;
  getTestTwoQuestions: Array<TestTwoQuestions>;
  getTestTwoResults: Array<TestTwoResult>;
  getUser?: Maybe<User>;
  getUsers: Array<Maybe<User>>;
  getUsersRoles: Array<Maybe<Role>>;
};


export type QueryGetEmployeeTestByIdArgs = {
  testId: Scalars['Int']['input'];
};


export type QueryGetEmployeeTestByProcessIdArgs = {
  processId: Scalars['Int']['input'];
};


export type QueryGetEmployeeTestProcessByIdArgs = {
  processId: Scalars['Int']['input'];
};


export type QueryGetEmployeeTestProcessResultsArgs = {
  processId: Scalars['Int']['input'];
};


export type QueryGetEmployeeTestQuestionsArgs = {
  testId: Scalars['Int']['input'];
};


export type QueryGetTestOneProcessByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetTestTwoProcessByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetUsersArgs = {
  roleId?: InputMaybe<Scalars['Int']['input']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type SimpleEmployeeTestBlock = {
  __typename?: 'SimpleEmployeeTestBlock';
  employeeTestVariantId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Student = {
  __typename?: 'Student';
  Group: Group;
  name: Scalars['String']['output'];
  passbookNumber: Scalars['Int']['output'];
};

export type TestOneAnswer = {
  __typename?: 'TestOneAnswer';
  TestOneQuestions: TestOneQuestions;
  answer?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
};

export type TestOneLevel = {
  __typename?: 'TestOneLevel';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
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

export type TestOneResult = {
  __typename?: 'TestOneResult';
  TestOneProcesses: TestOneProcess;
  TestOneResultItem: Array<TestOneResultItem>;
  id: Scalars['Int']['output'];
};

export type TestOneResultItem = {
  __typename?: 'TestOneResultItem';
  TestOneLevel: TestOneLevel;
  TestOneScale: TestOneScale;
  id: Scalars['Int']['output'];
  result: Scalars['Int']['output'];
};

export type TestOneScale = {
  __typename?: 'TestOneScale';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type TestTwoAnswer = {
  __typename?: 'TestTwoAnswer';
  TestTwoQuestions: TestTwoQuestions;
  answer: Scalars['Boolean']['output'];
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

export type TestTwoResult = {
  __typename?: 'TestTwoResult';
  TestTwoProcesses: TestTwoProcess;
  id: Scalars['Int']['output'];
  kom: Scalars['Float']['output'];
  komResult: Scalars['Float']['output'];
  org: Scalars['Float']['output'];
  orgResult: Scalars['Float']['output'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  Role: Role;
  Student?: Maybe<Student>;
  id: Scalars['Int']['output'];
  login: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', token: string } | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'Role', id: number, title: string } } | null };

export type GetUsersQueryVariables = Exact<{
  roleId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string }, Student?: { __typename?: 'Student', name: string, passbookNumber: number, Group: { __typename?: 'Group', id: number, title: string } } | null } | null> };

export type GetUsersRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersRolesQuery = { __typename?: 'Query', getUsersRoles: Array<{ __typename?: 'Role', id: number, title: string } | null> };

export type MutationMutationVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
}>;


export type MutationMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number } };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type GetTestOneQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestOneQuestionsQuery = { __typename?: 'Query', getTestOneQuestions: Array<{ __typename?: 'TestOneQuestions', id: number, text: string, position: number }> };

export type StartTestOneMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type StartTestOneMutation = { __typename?: 'Mutation', startTestOne?: { __typename?: 'TestOneProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', id: number, answer?: number | null, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type CompleteTestOneMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type CompleteTestOneMutation = { __typename?: 'Mutation', completeTestOne?: { __typename?: 'TestOneProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', id: number, answer?: number | null, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type GetTestOneProcessByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetTestOneProcessByUserIdQuery = { __typename?: 'Query', getTestOneProcessByUserId?: { __typename?: 'TestOneProcess', startDate: string, id: number, endDate?: string | null, complete: boolean, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } }, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', answer?: number | null, id: number, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, position: number, text: string } }> } | null };

export type AnsTestOneMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
  ans: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
}>;


export type AnsTestOneMutation = { __typename?: 'Mutation', ansTestOne?: { __typename?: 'TestOneProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestOneAnswer: Array<{ __typename?: 'TestOneAnswer', id: number, answer?: number | null, TestOneQuestions: { __typename?: 'TestOneQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type GetTestTwoQuestionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestTwoQuestionsQuery = { __typename?: 'Query', getTestTwoQuestions: Array<{ __typename?: 'TestTwoQuestions', id: number, text: string, position: number }> };

export type GetTestTwoProcessByUserIdQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type GetTestTwoProcessByUserIdQuery = { __typename?: 'Query', getTestTwoProcessByUserId?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer: boolean, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type StartTestTwoMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type StartTestTwoMutation = { __typename?: 'Mutation', startTestTwo?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer: boolean, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type AnsTestTwoMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
  ans: Scalars['Boolean']['input'];
}>;


export type AnsTestTwoMutation = { __typename?: 'Mutation', ansTestTwo?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer: boolean, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type CompleteTestTwoMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type CompleteTestTwoMutation = { __typename?: 'Mutation', completeTestTwo?: { __typename?: 'TestTwoProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, TestTwoAnswer: Array<{ __typename?: 'TestTwoAnswer', id: number, answer: boolean, TestTwoQuestions: { __typename?: 'TestTwoQuestions', id: number, text: string, position: number } }>, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } | null };

export type GetTestOneResultsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestOneResultsQuery = { __typename?: 'Query', getTestOneResults: Array<{ __typename?: 'TestOneResult', id: number, TestOneProcesses: { __typename?: 'TestOneProcess', id: number, complete: boolean, startDate: string, endDate?: string | null, User: { __typename?: 'User', id: number, login: string } }, TestOneResultItem: Array<{ __typename?: 'TestOneResultItem', id: number, result: number, TestOneScale: { __typename?: 'TestOneScale', id: number, title: string }, TestOneLevel: { __typename?: 'TestOneLevel', id: number, title: string } }> }> };

export type ProcessPdfMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  file: Scalars['String']['input'];
}>;


export type ProcessPdfMutation = { __typename?: 'Mutation', processPdf?: boolean | null };

export type GetStudentUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentUsersQuery = { __typename?: 'Query', getStudentUsers: Array<{ __typename?: 'User', login: string, id: number, Student?: { __typename?: 'Student', name: string, passbookNumber: number, Group: { __typename?: 'Group', title: string, id: number } } | null, Role: { __typename?: 'Role', id: number, title: string } } | null> };

export type GetEmployeePositionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeePositionsQuery = { __typename?: 'Query', getEmployeePositions: Array<{ __typename?: 'EmployeePosition', id: number, title: string }> };

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', getEmployees: Array<{ __typename?: 'Employee', id: number, name: string, email: string, EmploeePosition: { __typename?: 'EmployeePosition', id: number, title: string }, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } }> };

export type CreateEmployeePositionMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateEmployeePositionMutation = { __typename?: 'Mutation', createEmployeePosition: { __typename?: 'EmployeePosition', id: number, title: string } };

export type CreateEmployeeMutationVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  positionId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: { __typename?: 'Employee', id: number, name: string, email: string, EmploeePosition: { __typename?: 'EmployeePosition', id: number, title: string }, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } };

export type GetEmployeeTestProcessesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeTestProcessesQuery = { __typename?: 'Query', getEmployeeTestProcesses: Array<{ __typename?: 'EmployeeTestProcess', title: string, startDate: string, id: number, endDate?: string | null, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', title: string, id: number } }, EmplyeeProcessMembers: Array<{ __typename?: 'EmployeeTestProcessMember', id: number, employeeTestProcessId: number, Emplouee: { __typename?: 'Employee', name: string, id: number, email: string, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', title: string, id: number } }, EmploeePosition: { __typename?: 'EmployeePosition', title: string, id: number } } }>, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number }, EmployeeTest?: Array<{ __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, Emplouee: { __typename?: 'Employee', name: string, id: number, email: string, User: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'Role', id: number, title: string } }, EmploeePosition: { __typename?: 'EmployeePosition', id: number, title: string } }, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', id: number, title: string }, EmployeeTestAnswer: Array<{ __typename?: 'EmployeeTestAnswer', id: number, answer: string, EmployeeTestQuestion: { __typename?: 'EmployeeTestQuestion', id: number, title: string, position: number } }> }> | null }> };

export type FinishEmployeeTestProcessMutationVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type FinishEmployeeTestProcessMutation = { __typename?: 'Mutation', finishEmployeeTestProcess: boolean };

export type GetEmployeeTestVariantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeTestVariantsQuery = { __typename?: 'Query', getEmployeeTestVariants: Array<{ __typename?: 'EmployeeTestVariant', title: string, id: number }> };

export type CreateEmployeeTestProcessMutationVariables = Exact<{
  employeeIds: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
  title: Scalars['String']['input'];
  testVariantId: Scalars['Int']['input'];
}>;


export type CreateEmployeeTestProcessMutation = { __typename?: 'Mutation', createEmployeeTestProcess?: { __typename?: 'EmployeeTestProcess', title: string, startDate: string, id: number, endDate?: string | null, User: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'Role', title: string, id: number } }, EmplyeeProcessMembers: Array<{ __typename?: 'EmployeeTestProcessMember', id: number, employeeTestProcessId: number, Emplouee: { __typename?: 'Employee', name: string, id: number, email: string, User: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'Role', title: string, id: number } }, EmploeePosition: { __typename?: 'EmployeePosition', title: string, id: number } } }>, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number } } | null };

export type GetAvailableEmployeeTestProcessesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailableEmployeeTestProcessesQuery = { __typename?: 'Query', getAvailableEmployeeTestProcesses: Array<{ __typename?: 'EmployeeTestProcess', title: string, startDate: string, id: number, endDate?: string | null, EmployeeTest?: Array<{ __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number }, EmployeeTestAnswer: Array<{ __typename?: 'EmployeeTestAnswer', id: number, answer: string, EmployeeTestQuestion: { __typename?: 'EmployeeTestQuestion', id: number, title: string, position: number } }> }> | null, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } }, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', id: number, title: string }, EmplyeeProcessMembers: Array<{ __typename?: 'EmployeeTestProcessMember', id: number, employeeTestProcessId: number, Emplouee: { __typename?: 'Employee', id: number, name: string, email: string, EmploeePosition: { __typename?: 'EmployeePosition', id: number, title: string }, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'Role', id: number, title: string } } } }> }> };

export type GetEmployeeTestQuestionsQueryVariables = Exact<{
  testId: Scalars['Int']['input'];
}>;


export type GetEmployeeTestQuestionsQuery = { __typename?: 'Query', getEmployeeTestQuestions: Array<{ __typename?: 'EmployeeTestQuestion', id: number, title: string, position: number }> };

export type StartEmployeeTestMutationVariables = Exact<{
  testProcessId: Scalars['Int']['input'];
}>;


export type StartEmployeeTestMutation = { __typename?: 'Mutation', startEmployeeTest?: { __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', id: number, title: string } } | null };

export type GetEmployeeTestProcessByIdQueryVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type GetEmployeeTestProcessByIdQuery = { __typename?: 'Query', getEmployeeTestProcessById?: { __typename?: 'EmployeeTestProcess', title: string, startDate: string, id: number, endDate?: string | null, EmployeeTest?: Array<{ __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number }, EmployeeTestAnswer: Array<{ __typename?: 'EmployeeTestAnswer', id: number, answer: string, EmployeeTestQuestion: { __typename?: 'EmployeeTestQuestion', title: string, position: number, id: number } }> }> | null, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number } } | null };

export type GetEmployeeTestByProcessIdQueryVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type GetEmployeeTestByProcessIdQuery = { __typename?: 'Query', getEmployeeTestByProcessId?: { __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number }, EmployeeTestAnswer: Array<{ __typename?: 'EmployeeTestAnswer', id: number, answer: string, EmployeeTestQuestion: { __typename?: 'EmployeeTestQuestion', title: string, position: number, id: number } }> } | null };

export type GetEmployeeTestByIdQueryVariables = Exact<{
  testId: Scalars['Int']['input'];
}>;


export type GetEmployeeTestByIdQuery = { __typename?: 'Query', getEmployeeTestById?: { __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number }, EmployeeTestAnswer: Array<{ __typename?: 'EmployeeTestAnswer', id: number, answer: string, EmployeeTestQuestion: { __typename?: 'EmployeeTestQuestion', id: number, title: string, position: number } }> } | null };

export type AnswerEmployeeTestMutationVariables = Exact<{
  testId: Scalars['Int']['input'];
  answers: Array<CompleteEmployeeTestAnswer> | CompleteEmployeeTestAnswer;
}>;


export type AnswerEmployeeTestMutation = { __typename?: 'Mutation', answerEmployeeTest: boolean };

export type GetEmployeeTestProcessResultsQueryVariables = Exact<{
  processId: Scalars['Int']['input'];
}>;


export type GetEmployeeTestProcessResultsQuery = { __typename?: 'Query', getEmployeeTestProcessResults: Array<{ __typename?: 'EmployeeTestProcessResult', title: string, value: number }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"passbookNumber"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUsersRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetUsersRolesQuery, GetUsersRolesQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetTestOneQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetTestOneQuestionsQuery, GetTestOneQuestionsQueryVariables>;
export const StartTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StartTestOneMutation, StartTestOneMutationVariables>;
export const CompleteTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompleteTestOneMutation, CompleteTestOneMutationVariables>;
export const GetTestOneProcessByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestOneProcessByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestOneProcessByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTestOneProcessByUserIdQuery, GetTestOneProcessByUserIdQueryVariables>;
export const AnsTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnsTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ans"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ansTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ans"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ans"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AnsTestOneMutation, AnsTestOneMutationVariables>;
export const GetTestTwoQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetTestTwoQuestionsQuery, GetTestTwoQuestionsQueryVariables>;
export const GetTestTwoProcessByUserIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestTwoProcessByUserId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestTwoProcessByUserId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTestTwoProcessByUserIdQuery, GetTestTwoProcessByUserIdQueryVariables>;
export const StartTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StartTestTwoMutation, StartTestTwoMutationVariables>;
export const AnsTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnsTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ans"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ansTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}},{"kind":"Argument","name":{"kind":"Name","value":"questionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ans"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ans"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AnsTestTwoMutation, AnsTestTwoMutationVariables>;
export const CompleteTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CompleteTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"completeTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"TestTwoQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CompleteTestTwoMutation, CompleteTestTwoMutationVariables>;
export const GetTestOneResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTestOneResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTestOneResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"complete"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"TestOneResultItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"TestOneScale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"TestOneLevel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTestOneResultsQuery, GetTestOneResultsQueryVariables>;
export const ProcessPdfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProcessPdf"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processPdf"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<ProcessPdfMutation, ProcessPdfMutationVariables>;
export const GetStudentUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudentUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Student"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"passbookNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentUsersQuery, GetStudentUsersQueryVariables>;
export const GetEmployeePositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeePositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeePositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetEmployeePositionsQuery, GetEmployeePositionsQueryVariables>;
export const GetEmployeesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"EmploeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const CreateEmployeePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployeePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployeePosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateEmployeePositionMutation, CreateEmployeePositionMutationVariables>;
export const CreateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"positionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"EmploeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const GetEmployeeTestProcessesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmplyeeProcessMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeTestProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"Emplouee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmploeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"Emplouee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmploeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestProcessesQuery, GetEmployeeTestProcessesQueryVariables>;
export const FinishEmployeeTestProcessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishEmployeeTestProcess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishEmployeeTestProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}]}]}}]} as unknown as DocumentNode<FinishEmployeeTestProcessMutation, FinishEmployeeTestProcessMutationVariables>;
export const GetEmployeeTestVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestVariantsQuery, GetEmployeeTestVariantsQueryVariables>;
export const CreateEmployeeTestProcessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployeeTestProcess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testVariantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployeeTestProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"employeeIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"testVariantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testVariantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmplyeeProcessMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeTestProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"Emplouee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmploeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateEmployeeTestProcessMutation, CreateEmployeeTestProcessMutationVariables>;
export const GetAvailableEmployeeTestProcessesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAvailableEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAvailableEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmplyeeProcessMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeTestProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"Emplouee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"EmploeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAvailableEmployeeTestProcessesQuery, GetAvailableEmployeeTestProcessesQueryVariables>;
export const GetEmployeeTestQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestQuestionsQuery, GetEmployeeTestQuestionsQueryVariables>;
export const StartEmployeeTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartEmployeeTest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testProcessId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startEmployeeTest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testProcessId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testProcessId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<StartEmployeeTestMutation, StartEmployeeTestMutationVariables>;
export const GetEmployeeTestProcessByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestProcessById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestProcessById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestProcessByIdQuery, GetEmployeeTestProcessByIdQueryVariables>;
export const GetEmployeeTestByProcessIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestByProcessId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestByProcessId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestByProcessIdQuery, GetEmployeeTestByProcessIdQueryVariables>;
export const GetEmployeeTestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestByIdQuery, GetEmployeeTestByIdQueryVariables>;
export const AnswerEmployeeTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnswerEmployeeTest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answers"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompleteEmployeeTestAnswer"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerEmployeeTest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}},{"kind":"Argument","name":{"kind":"Name","value":"answers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answers"}}}]}]}}]} as unknown as DocumentNode<AnswerEmployeeTestMutation, AnswerEmployeeTestMutationVariables>;
export const GetEmployeeTestProcessResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestProcessResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestProcessResults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestProcessResultsQuery, GetEmployeeTestProcessResultsQueryVariables>;