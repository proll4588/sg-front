// import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
// import {
//   createContext,
//   FC,
//   PropsWithChildren,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
// } from 'react';
// // import {
// //   ANS_TEST_ONE,
// //   COMPLETE_TEST_ONE,
// //   GET_TEST_ONE_BY_USER_ID,
// //   GET_TEST_ONE_QUESTIONS,
// //   START_TEST_ONE,
// // } from '../../../apollo/fetchs';
// import { useUser } from '../../../shared/context/UserContext';

// type TestOneType = {
//   startDate: string;
//   id: number;
//   endDate?: string | null;
//   complete: boolean;
//   User: {
//     id: number;
//     login: string;
//     Role: {
//       id: number;
//       title: string;
//     };
//   };
//   TestOneAnswer: Array<{
//     answer?: number | null;
//     id: number;
//     TestOneQuestions: {
//       id: number;
//       position: number;
//       text: string;
//     };
//   }>;
// };

// export interface Test1PageContextType {
//   isLoadingQuestions: boolean;
//   isStartingTest: boolean;
//   isLoadingTestOne: boolean;
//   isAnswering: boolean;
//   isCompleting: boolean;

//   testOne: TestOneType | null;

//   startTestOne: () => Promise<void>;
//   answerQuestion: (qId: number, answer: number) => Promise<void>;
//   completeTest: () => Promise<void>;

//   questions: {
//     id: number;
//     text: string;
//     position: number;
//   }[];
// }

// export const TEST1_PAGE_CONTEXT_INIT: Test1PageContextType = {
//   isLoadingQuestions: true,
//   isLoadingTestOne: true,
//   isStartingTest: false,
//   isAnswering: false,
//   isCompleting: false,
//   questions: [],
//   testOne: null,
//   startTestOne: async () => {},
//   answerQuestion: async () => {},
//   completeTest: async () => {},
// };

// export const Test1PageContext = createContext<Test1PageContextType>(
//   TEST1_PAGE_CONTEXT_INIT
// );

// export const useTest1 = () => useContext(Test1PageContext);

// export const Test1PageProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [testProcess, setTestProcess] = useState<TestOneType | null>(null);

//   /* Test one back state */
//   const { user } = useUser();

//   const [getTestProcess, { loading: isLoadingTestOne }] = useLazyQuery(
//     GET_TEST_ONE_BY_USER_ID
//   );

//   useEffect(() => {
//     if (user) updateTestProcess();
//   }, [user]);

//   const updateTestProcess = async () => {
//     if (user) {
//       const { data } = await getTestProcess({ variables: { userId: user.id } });

//       setTestProcess(data?.getTestOneProcessByUserId || null);
//     }
//   };
//   /* ===== */

//   /* Getting questions */
//   // TODO: Мб вынести на страницу
//   const [questions, isLoadingQuestions] = useTest1Questions();
//   /* ===== */

//   /* Starting test */
//   const [startTest, { loading: isStartingTest }] = useMutation(START_TEST_ONE);

//   const startTestOne = async () => {
//     const { data } = await startTest({ variables: { userId: user?.id || -1 } });

//     if (data && data.startTestOne) setTestProcess(data.startTestOne);
//   };
//   /* ===== */

//   /* Answering  */
//   const [ans, { loading: isAnswering }] = useMutation(ANS_TEST_ONE);

//   const answerQuestion = async (qId: number, answer: number) => {
//     if (testProcess) {
//       const res = await ans({
//         variables: {
//           ans: answer,
//           questionId: qId,
//           processId: testProcess.id,
//         },
//       });

//       if (res && res.data && res.data.ansTestOne)
//         setTestProcess(res.data.ansTestOne);
//     }
//   };
//   /* ===== */

//   /* Complete test */
//   const [completeTestQuery, { loading: isCompleting }] =
//     useMutation(COMPLETE_TEST_ONE);

//   const completeTest = async () => {
//     if (testProcess) {
//       const { data } = await completeTestQuery({
//         variables: {
//           processId: testProcess.id,
//         },
//       });

//       if (data && data.completeTestOne) setTestProcess(data.completeTestOne);
//     }
//   };
//   /* ===== */

//   return (
//     <Test1PageContext.Provider
//       value={{
//         isLoadingQuestions,
//         questions,
//         startTestOne,
//         isStartingTest,
//         testOne: testProcess,
//         isLoadingTestOne,
//         isAnswering,
//         answerQuestion,
//         completeTest,
//         isCompleting,
//       }}
//     >
//       {children}
//     </Test1PageContext.Provider>
//   );
// };

// export const useTest1Questions = () => {
//   const { data: questionsRes, loading: isLoadingQuestions } = useQuery(
//     GET_TEST_ONE_QUESTIONS
//   );

//   const questions = useMemo(() => {
//     if (!questionsRes || !questionsRes.getTestOneQuestions) return [];

//     return [...questionsRes.getTestOneQuestions].sort(
//       (a, b) => a.position - b.position
//     );
//   }, [questionsRes]);

//   return [questions, isLoadingQuestions] as const;
// };
