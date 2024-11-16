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
  EmployeePosition: EmployeePosition;
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
  Employee: Employee;
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
  EmployeeProcessMembers: Array<EmployeeTestProcessMember>;
  EmployeeTest?: Maybe<Array<EmployeeTest>>;
  EmployeeTestVariant: EmployeeTestVariant;
  User: User;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  startDate: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EmployeeTestProcessMember = {
  __typename?: 'EmployeeTestProcessMember';
  Employee: Employee;
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
  EmployeeTestBlock: SimpleEmployeeTestBlock;
  id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type EmployeeTestVariant = {
  __typename?: 'EmployeeTestVariant';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  answerEmployeeTest: Scalars['Boolean']['output'];
  answerStudentTestOne: Scalars['Boolean']['output'];
  answerStudentTestThree: Scalars['Boolean']['output'];
  answerStudentTestTwo: Scalars['Boolean']['output'];
  createEmployee: Employee;
  createEmployeePosition: EmployeePosition;
  createEmployeeTestProcess?: Maybe<EmployeeTestProcess>;
  createStudent: Student;
  createStudentGroup: StudentGroup;
  createUser: User;
  deleteEmployee: Scalars['Boolean']['output'];
  deleteStudent: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  finishEmployeeTest: Scalars['Boolean']['output'];
  finishEmployeeTestProcess: Scalars['Boolean']['output'];
  finishStudentTestProcess: Scalars['Boolean']['output'];
  login?: Maybe<LoginResponse>;
  startEmployeeTest?: Maybe<EmployeeTest>;
  startStudentTest?: Maybe<Scalars['Int']['output']>;
  startStudentTestProcess?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAnswerEmployeeTestArgs = {
  answers: Array<CompleteEmployeeTestAnswer>;
  testId: Scalars['Int']['input'];
};


export type MutationAnswerStudentTestOneArgs = {
  answers: Array<StudentTestOneAnswerInput>;
  studentTestId: Scalars['Int']['input'];
};


export type MutationAnswerStudentTestThreeArgs = {
  fileBase64: Scalars['String']['input'];
  studentTestId: Scalars['Int']['input'];
};


export type MutationAnswerStudentTestTwoArgs = {
  answers: Array<StudentTestTwoAnswerInput>;
  studentTestId: Scalars['Int']['input'];
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


export type MutationCreateStudentArgs = {
  groupId: Scalars['Int']['input'];
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  passbookNumber: Scalars['Int']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateStudentGroupArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
};


export type MutationDeleteEmployeeArgs = {
  employeeId: Scalars['Int']['input'];
};


export type MutationDeleteStudentArgs = {
  studentId: Scalars['Int']['input'];
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


export type MutationFinishStudentTestProcessArgs = {
  studentTestProcessId: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationStartEmployeeTestArgs = {
  testProcessId: Scalars['Int']['input'];
};


export type MutationStartStudentTestArgs = {
  studentTestProcessId: Scalars['Int']['input'];
};


export type MutationStartStudentTestProcessArgs = {
  studentPassbookNumbers: Array<Scalars['Int']['input']>;
  studentTestVariantId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAvailableEmployeeTestProcesses: Array<EmployeeTestProcess>;
  getAvailableStudentTestProcesses: Array<StudentTestProcessListItemWithStudentTest>;
  getEmployeePositions: Array<EmployeePosition>;
  getEmployeeTestById?: Maybe<EmployeeTest>;
  getEmployeeTestByProcessId?: Maybe<EmployeeTest>;
  getEmployeeTestProcessById?: Maybe<EmployeeTestProcess>;
  getEmployeeTestProcessResults: Array<EmployeeTestProcessResult>;
  getEmployeeTestProcesses: Array<EmployeeTestProcess>;
  getEmployeeTestQuestions: Array<EmployeeTestQuestion>;
  getEmployeeTestVariants: Array<EmployeeTestVariant>;
  getEmployees: Array<Employee>;
  getStudentGroups: Array<StudentGroup>;
  getStudentTestById?: Maybe<StudentTest>;
  getStudentTestProcessMembers: Array<StudentTestProcessMembers>;
  getStudentTestProcesses: Array<StudentTestProcessListItem>;
  getStudentTestQuestions: Array<StudentTestQuestion>;
  getStudentTestVariants: Array<StudentTestVariant>;
  getStudents: Array<Student>;
  getUser?: Maybe<User>;
  getUsers: Array<User>;
  getUsersRoles: Array<UserRole>;
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


export type QueryGetStudentTestByIdArgs = {
  studentTestId: Scalars['Int']['input'];
};


export type QueryGetStudentTestProcessMembersArgs = {
  studentTestProcessId: Scalars['Int']['input'];
};


export type QueryGetStudentTestQuestionsArgs = {
  studentTestId: Scalars['Int']['input'];
};

export type SimpleEmployeeTestBlock = {
  __typename?: 'SimpleEmployeeTestBlock';
  employeeTestVariantId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Student = {
  __typename?: 'Student';
  Group: StudentGroup;
  name: Scalars['String']['output'];
  passbookNumber: Scalars['Int']['output'];
};

export type StudentGroup = {
  __typename?: 'StudentGroup';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type StudentTest = {
  __typename?: 'StudentTest';
  StudentTestVariant: StudentTestVariant;
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  passbookNumber: Scalars['String']['output'];
  studentTestProcessId: Scalars['Int']['output'];
};

export type StudentTestOneAnswerInput = {
  answer: Scalars['Int']['input'];
  questionId: Scalars['Int']['input'];
};

export type StudentTestProcessListItem = {
  __typename?: 'StudentTestProcessListItem';
  StudentTestVariant: StudentTestVariant;
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type StudentTestProcessListItemWithStudentTest = {
  __typename?: 'StudentTestProcessListItemWithStudentTest';
  StudentTest: Array<Maybe<_StudentTest>>;
  StudentTestVariant: StudentTestVariant;
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type StudentTestProcessMembers = {
  __typename?: 'StudentTestProcessMembers';
  Group: StudentGroup;
  StudentTest: Array<Maybe<_StudentTest>>;
  name: Scalars['String']['output'];
  passbookNumber: Scalars['Int']['output'];
};

export type StudentTestQuestion = {
  __typename?: 'StudentTestQuestion';
  id: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type StudentTestTwoAnswerInput = {
  answer: Scalars['Boolean']['input'];
  questionId: Scalars['Int']['input'];
};

export type StudentTestVariant = {
  __typename?: 'StudentTestVariant';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  Role: UserRole;
  id: Scalars['Int']['output'];
  login: Scalars['String']['output'];
};

export type UserRole = {
  __typename?: 'UserRole';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type _StudentTest = {
  __typename?: '_StudentTest';
  dateEnd?: Maybe<Scalars['String']['output']>;
  dateStart: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type GetEmployeesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeesQuery = { __typename?: 'Query', getEmployees: Array<{ __typename?: 'Employee', name: string, id: number, email: string, EmployeePosition: { __typename?: 'EmployeePosition', id: number, title: string } }> };

export type GetEmployeePositionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeePositionsQuery = { __typename?: 'Query', getEmployeePositions: Array<{ __typename?: 'EmployeePosition', id: number, title: string }> };

export type CreateEmployeeMutationVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  positionId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: { __typename?: 'Employee', name: string, id: number, email: string, EmployeePosition: { __typename?: 'EmployeePosition', id: number, title: string } } };

export type DeleteEmployeeMutationVariables = Exact<{
  employeeId: Scalars['Int']['input'];
}>;


export type DeleteEmployeeMutation = { __typename?: 'Mutation', deleteEmployee: boolean };

export type CreateEmployeePositionMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateEmployeePositionMutation = { __typename?: 'Mutation', createEmployeePosition: { __typename?: 'EmployeePosition', id: number, title: string } };

export type GetEmployeeTestProcessesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmployeeTestProcessesQuery = { __typename?: 'Query', getEmployeeTestProcesses: Array<{ __typename?: 'EmployeeTestProcess', title: string, startDate: string, id: number, endDate?: string | null, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'UserRole', title: string, id: number } }, EmployeeProcessMembers: Array<{ __typename?: 'EmployeeTestProcessMember', id: number, employeeTestProcessId: number, Employee: { __typename?: 'Employee', name: string, id: number, email: string, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'UserRole', title: string, id: number } }, EmployeePosition: { __typename?: 'EmployeePosition', title: string, id: number } } }>, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number }, EmployeeTest?: Array<{ __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, Employee: { __typename?: 'Employee', name: string, id: number, email: string, User: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'UserRole', id: number, title: string } }, EmployeePosition: { __typename?: 'EmployeePosition', id: number, title: string } }, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', id: number, title: string }, EmployeeTestAnswer: Array<{ __typename?: 'EmployeeTestAnswer', id: number, answer: string, EmployeeTestQuestion: { __typename?: 'EmployeeTestQuestion', id: number, title: string, position: number } }> }> | null }> };

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


export type CreateEmployeeTestProcessMutation = { __typename?: 'Mutation', createEmployeeTestProcess?: { __typename?: 'EmployeeTestProcess', title: string, startDate: string, id: number, endDate?: string | null, User: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'UserRole', title: string, id: number } }, EmployeeProcessMembers: Array<{ __typename?: 'EmployeeTestProcessMember', id: number, employeeTestProcessId: number, Employee: { __typename?: 'Employee', name: string, id: number, email: string, User: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'UserRole', title: string, id: number } }, EmployeePosition: { __typename?: 'EmployeePosition', title: string, id: number } } }>, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number } } | null };

export type GetAvailableEmployeeTestProcessesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailableEmployeeTestProcessesQuery = { __typename?: 'Query', getAvailableEmployeeTestProcesses: Array<{ __typename?: 'EmployeeTestProcess', title: string, startDate: string, id: number, endDate?: string | null, EmployeeTest?: Array<{ __typename?: 'EmployeeTest', startDate: string, id: number, endDate?: string | null, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', title: string, id: number }, EmployeeTestAnswer: Array<{ __typename?: 'EmployeeTestAnswer', id: number, answer: string, EmployeeTestQuestion: { __typename?: 'EmployeeTestQuestion', id: number, title: string, position: number } }> }> | null, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'UserRole', id: number, title: string } }, EmployeeTestVariant: { __typename?: 'EmployeeTestVariant', id: number, title: string }, EmployeeProcessMembers: Array<{ __typename?: 'EmployeeTestProcessMember', id: number, employeeTestProcessId: number, Employee: { __typename?: 'Employee', id: number, name: string, email: string, EmployeePosition: { __typename?: 'EmployeePosition', id: number, title: string }, User: { __typename?: 'User', id: number, login: string, Role: { __typename?: 'UserRole', id: number, title: string } } } }> }> };

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

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', getStudents: Array<{ __typename?: 'Student', passbookNumber: number, name: string, Group: { __typename?: 'StudentGroup', id: number, title: string } }> };

export type GetStudentGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentGroupsQuery = { __typename?: 'Query', getStudentGroups: Array<{ __typename?: 'StudentGroup', id: number, title: string }> };

export type CreateStudentMutationVariables = Exact<{
  passbookNumber: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  groupId: Scalars['Int']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'Student', passbookNumber: number, name: string, Group: { __typename?: 'StudentGroup', id: number, title: string } } };

export type CreateStudentGroupMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateStudentGroupMutation = { __typename?: 'Mutation', createStudentGroup: { __typename?: 'StudentGroup', id: number, title: string } };

export type DeleteStudentMutationVariables = Exact<{
  studentId: Scalars['Int']['input'];
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent: boolean };

export type GetStudentTestQuestionsQueryVariables = Exact<{
  studentTestId: Scalars['Int']['input'];
}>;


export type GetStudentTestQuestionsQuery = { __typename?: 'Query', getStudentTestQuestions: Array<{ __typename?: 'StudentTestQuestion', id: number, title: string, position: number }> };

export type GetStudentTestVariantsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentTestVariantsQuery = { __typename?: 'Query', getStudentTestVariants: Array<{ __typename?: 'StudentTestVariant', id: number, title: string }> };

export type AnswerStudentTestOneMutationVariables = Exact<{
  studentTestId: Scalars['Int']['input'];
  answers: Array<StudentTestOneAnswerInput> | StudentTestOneAnswerInput;
}>;


export type AnswerStudentTestOneMutation = { __typename?: 'Mutation', answerStudentTestOne: boolean };

export type AnswerStudentTestTwoMutationVariables = Exact<{
  studentTestId: Scalars['Int']['input'];
  answers: Array<StudentTestTwoAnswerInput> | StudentTestTwoAnswerInput;
}>;


export type AnswerStudentTestTwoMutation = { __typename?: 'Mutation', answerStudentTestTwo: boolean };

export type AnswerStudentTestThreeMutationVariables = Exact<{
  studentTestId: Scalars['Int']['input'];
  fileBase64: Scalars['String']['input'];
}>;


export type AnswerStudentTestThreeMutation = { __typename?: 'Mutation', answerStudentTestThree: boolean };

export type StartStudentTestMutationVariables = Exact<{
  studentTestProcessId: Scalars['Int']['input'];
}>;


export type StartStudentTestMutation = { __typename?: 'Mutation', startStudentTest?: number | null };

export type GetStudentTestByIdQueryVariables = Exact<{
  studentTestId: Scalars['Int']['input'];
}>;


export type GetStudentTestByIdQuery = { __typename?: 'Query', getStudentTestById?: { __typename?: 'StudentTest', id: number, passbookNumber: string, studentTestProcessId: number, dateStart: string, dateEnd?: string | null, StudentTestVariant: { __typename?: 'StudentTestVariant', id: number, title: string } } | null };

export type GetAvailableStudentTestProcessesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAvailableStudentTestProcessesQuery = { __typename?: 'Query', getAvailableStudentTestProcesses: Array<{ __typename?: 'StudentTestProcessListItemWithStudentTest', title: string, id: number, StudentTestVariant: { __typename?: 'StudentTestVariant', id: number, title: string }, StudentTest: Array<{ __typename?: '_StudentTest', id: number, dateStart: string, dateEnd?: string | null } | null> }> };

export type GetStudentTestProcessMembersQueryVariables = Exact<{
  studentTestProcessId: Scalars['Int']['input'];
}>;


export type GetStudentTestProcessMembersQuery = { __typename?: 'Query', getStudentTestProcessMembers: Array<{ __typename?: 'StudentTestProcessMembers', passbookNumber: number, name: string, StudentTest: Array<{ __typename?: '_StudentTest', id: number, dateStart: string, dateEnd?: string | null } | null>, Group: { __typename?: 'StudentGroup', title: string, id: number } }> };

export type GetStudentTestProcessesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentTestProcessesQuery = { __typename?: 'Query', getStudentTestProcesses: Array<{ __typename?: 'StudentTestProcessListItem', id: number, title: string, dateStart: string, dateEnd?: string | null, StudentTestVariant: { __typename?: 'StudentTestVariant', id: number, title: string } }> };

export type FinishStudentTestProcessMutationVariables = Exact<{
  studentTestProcessId: Scalars['Int']['input'];
}>;


export type FinishStudentTestProcessMutation = { __typename?: 'Mutation', finishStudentTestProcess: boolean };

export type StartStudentTestProcessMutationVariables = Exact<{
  studentTestVariantId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  studentPassbookNumbers: Array<Scalars['Int']['input']> | Scalars['Int']['input'];
}>;


export type StartStudentTestProcessMutation = { __typename?: 'Mutation', startStudentTestProcess?: boolean | null };

export type LoginMutationVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResponse', token: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: number, login: string, Role: { __typename?: 'UserRole', id: number, title: string } }> };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', login: string, id: number, Role: { __typename?: 'UserRole', id: number, title: string } } | null };

export type GetUsersRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersRolesQuery = { __typename?: 'Query', getUsersRoles: Array<{ __typename?: 'UserRole', id: number, title: string }> };

export type CreateUserMutationVariables = Exact<{
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  roleId: Scalars['Int']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number } };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };


export const GetEmployeesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeesQuery, GetEmployeesQueryVariables>;
export const GetEmployeePositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeePositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeePositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetEmployeePositionsQuery, GetEmployeePositionsQueryVariables>;
export const CreateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"positionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const DeleteEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"employeeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}}}]}]}}]} as unknown as DocumentNode<DeleteEmployeeMutation, DeleteEmployeeMutationVariables>;
export const CreateEmployeePositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployeePosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployeePosition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateEmployeePositionMutation, CreateEmployeePositionMutationVariables>;
export const GetEmployeeTestProcessesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeProcessMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeTestProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"Employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"Employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestProcessesQuery, GetEmployeeTestProcessesQueryVariables>;
export const FinishEmployeeTestProcessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishEmployeeTestProcess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishEmployeeTestProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}]}]}}]} as unknown as DocumentNode<FinishEmployeeTestProcessMutation, FinishEmployeeTestProcessMutationVariables>;
export const GetEmployeeTestVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestVariantsQuery, GetEmployeeTestVariantsQueryVariables>;
export const CreateEmployeeTestProcessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployeeTestProcess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testVariantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployeeTestProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"employeeIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"testVariantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testVariantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeProcessMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeTestProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"Employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateEmployeeTestProcessMutation, CreateEmployeeTestProcessMutationVariables>;
export const GetAvailableEmployeeTestProcessesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAvailableEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAvailableEmployeeTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeProcessMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeTestProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"Employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeePosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAvailableEmployeeTestProcessesQuery, GetAvailableEmployeeTestProcessesQueryVariables>;
export const GetEmployeeTestQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestQuestionsQuery, GetEmployeeTestQuestionsQueryVariables>;
export const StartEmployeeTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartEmployeeTest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testProcessId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startEmployeeTest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testProcessId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testProcessId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<StartEmployeeTestMutation, StartEmployeeTestMutationVariables>;
export const GetEmployeeTestProcessByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestProcessById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestProcessById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestProcessByIdQuery, GetEmployeeTestProcessByIdQueryVariables>;
export const GetEmployeeTestByProcessIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestByProcessId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestByProcessId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestByProcessIdQuery, GetEmployeeTestByProcessIdQueryVariables>;
export const GetEmployeeTestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"EmployeeTestQuestion"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestByIdQuery, GetEmployeeTestByIdQueryVariables>;
export const AnswerEmployeeTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnswerEmployeeTest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"testId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answers"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompleteEmployeeTestAnswer"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerEmployeeTest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"testId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"testId"}}},{"kind":"Argument","name":{"kind":"Name","value":"answers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answers"}}}]}]}}]} as unknown as DocumentNode<AnswerEmployeeTestMutation, AnswerEmployeeTestMutationVariables>;
export const GetEmployeeTestProcessResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeTestProcessResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeTestProcessResults"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"processId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetEmployeeTestProcessResultsQuery, GetEmployeeTestProcessResultsQueryVariables>;
export const GetStudentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passbookNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentsQuery, GetStudentsQueryVariables>;
export const GetStudentGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudentGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetStudentGroupsQuery, GetStudentGroupsQueryVariables>;
export const CreateStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"passbookNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"passbookNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"passbookNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"groupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"groupId"}}},{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passbookNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"Group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<CreateStudentMutation, CreateStudentMutationVariables>;
export const CreateStudentGroupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStudentGroup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStudentGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateStudentGroupMutation, CreateStudentGroupMutationVariables>;
export const DeleteStudentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteStudent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteStudent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentId"}}}]}]}}]} as unknown as DocumentNode<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const GetStudentTestQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudentTestQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentTestQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}}]}}]} as unknown as DocumentNode<GetStudentTestQuestionsQuery, GetStudentTestQuestionsQueryVariables>;
export const GetStudentTestVariantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudentTestVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentTestVariants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetStudentTestVariantsQuery, GetStudentTestVariantsQueryVariables>;
export const AnswerStudentTestOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnswerStudentTestOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answers"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StudentTestOneAnswerInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerStudentTestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}}},{"kind":"Argument","name":{"kind":"Name","value":"answers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answers"}}}]}]}}]} as unknown as DocumentNode<AnswerStudentTestOneMutation, AnswerStudentTestOneMutationVariables>;
export const AnswerStudentTestTwoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnswerStudentTestTwo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"answers"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StudentTestTwoAnswerInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerStudentTestTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}}},{"kind":"Argument","name":{"kind":"Name","value":"answers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"answers"}}}]}]}}]} as unknown as DocumentNode<AnswerStudentTestTwoMutation, AnswerStudentTestTwoMutationVariables>;
export const AnswerStudentTestThreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AnswerStudentTestThree"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileBase64"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerStudentTestThree"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileBase64"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileBase64"}}}]}]}}]} as unknown as DocumentNode<AnswerStudentTestThreeMutation, AnswerStudentTestThreeMutationVariables>;
export const StartStudentTestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartStudentTest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestProcessId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startStudentTest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestProcessId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestProcessId"}}}]}]}}]} as unknown as DocumentNode<StartStudentTestMutation, StartStudentTestMutationVariables>;
export const GetStudentTestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudentTestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentTestById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"passbookNumber"}},{"kind":"Field","name":{"kind":"Name","value":"studentTestProcessId"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"StudentTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentTestByIdQuery, GetStudentTestByIdQueryVariables>;
export const GetAvailableStudentTestProcessesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAvailableStudentTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAvailableStudentTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"StudentTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"StudentTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}}]}}]}}]}}]} as unknown as DocumentNode<GetAvailableStudentTestProcessesQuery, GetAvailableStudentTestProcessesQueryVariables>;
export const GetStudentTestProcessMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudentTestProcessMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestProcessId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentTestProcessMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestProcessId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestProcessId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"passbookNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"StudentTest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Group"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentTestProcessMembersQuery, GetStudentTestProcessMembersQueryVariables>;
export const GetStudentTestProcessesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStudentTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStudentTestProcesses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateStart"}},{"kind":"Field","name":{"kind":"Name","value":"dateEnd"}},{"kind":"Field","name":{"kind":"Name","value":"StudentTestVariant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetStudentTestProcessesQuery, GetStudentTestProcessesQueryVariables>;
export const FinishStudentTestProcessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"FinishStudentTestProcess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestProcessId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"finishStudentTestProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestProcessId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestProcessId"}}}]}]}}]} as unknown as DocumentNode<FinishStudentTestProcessMutation, FinishStudentTestProcessMutationVariables>;
export const StartStudentTestProcessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartStudentTestProcess"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentTestVariantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"studentPassbookNumbers"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startStudentTestProcess"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"studentTestVariantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentTestVariantId"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"studentPassbookNumbers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"studentPassbookNumbers"}}}]}]}}]} as unknown as DocumentNode<StartStudentTestProcessMutation, StartStudentTestProcessMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const GetUsersRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsersRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsersRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetUsersRolesQuery, GetUsersRolesQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;