// import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
// import {
//   ANS_TEST_TWO,
//   COMPLETE_TEST_TWO,
//   GET_TEST_TWO_BY_USER_ID,
//   GET_TEST_TWO_QUESTIONS,
//   START_TEST_TWO,
// } from '../../../apollo/fetchs';
// import {
//   createContext,
//   FC,
//   PropsWithChildren,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
// } from 'react';
// import { useUser } from '../../../shared/context/UserContext';

// type TestTwoType = {
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
//   TestTwoAnswer: Array<{
//     answer?: boolean | null;
//     id: number;
//     TestTwoQuestions: {
//       id: number;
//       position: number;
//       text: string;
//     };
//   }>;
// };

// export interface Test2PageContextType {
//   isLoadingQuestions: boolean;
//   isStartingTest: boolean;
//   isLoadingTestTwo: boolean;
//   isAnswering: boolean;
//   isCompleting: boolean;

//   testTwo: TestTwoType | null;

//   startTestTwo: () => Promise<void>;
//   answerQuestion: (qId: number, answer: boolean) => Promise<void>;
//   completeTest: () => Promise<void>;

//   questions: {
//     id: number;
//     text: string;
//     position: number;
//   }[];
// }

// export const TEST2_PAGE_CONTEXT_INIT: Test2PageContextType = {
//   isLoadingQuestions: true,
//   isLoadingTestTwo: true,
//   isStartingTest: false,
//   isAnswering: false,
//   isCompleting: false,
//   questions: [],
//   testTwo: null,
//   startTestTwo: async () => {},
//   answerQuestion: async () => {},
//   completeTest: async () => {},
// };

// export const Test2PageContext = createContext<Test2PageContextType>(
//   TEST2_PAGE_CONTEXT_INIT
// );

// export const useTest2 = () => useContext(Test2PageContext);

// export const Test2PageProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [testProcess, setTestProcess] = useState<TestTwoType | null>(null);

//   /* Test one back state */
//   const { user } = useUser();

//   const [getTestProcess, { loading: isLoadingTestTwo }] = useLazyQuery(
//     GET_TEST_TWO_BY_USER_ID
//   );

//   useEffect(() => {
//     if (user) updateTestProcess();
//   }, [user]);

//   const updateTestProcess = async () => {
//     if (user) {
//       const { data } = await getTestProcess({ variables: { userId: user.id } });

//       setTestProcess(data?.getTestTwoProcessByUserId || null);
//     }
//   };
//   /* ===== */

//   /* Getting questions */
//   // TODO: Мб вынести на страницу
//   const [questions, isLoadingQuestions] = useTest1Questions();
//   /* ===== */

//   /* Starting test */
//   const [startTest, { loading: isStartingTest }] = useMutation(START_TEST_TWO);

//   const startTestTwo = async () => {
//     const { data } = await startTest({ variables: { userId: user?.id || -1 } });

//     if (data && data.startTestTwo) setTestProcess(data.startTestTwo);
//   };
//   /* ===== */

//   /* Answering  */
//   const [ans, { loading: isAnswering }] = useMutation(ANS_TEST_TWO);

//   const answerQuestion = async (qId: number, answer: boolean) => {
//     if (testProcess) {
//       const res = await ans({
//         variables: {
//           ans: answer,
//           questionId: qId,
//           processId: testProcess.id,
//         },
//       });

//       if (res && res.data && res.data.ansTestTwo)
//         setTestProcess(res.data.ansTestTwo);
//     }
//   };
//   /* ===== */

//   /* Complete test */
//   const [completeTestQuery, { loading: isCompleting }] =
//     useMutation(COMPLETE_TEST_TWO);

//   const completeTest = async () => {
//     if (testProcess) {
//       const { data } = await completeTestQuery({
//         variables: {
//           processId: testProcess.id,
//         },
//       });

//       if (data && data.completeTestTwo) setTestProcess(data.completeTestTwo);
//     }
//   };
//   /* ===== */

//   return (
//     <Test2PageContext.Provider
//       value={{
//         isLoadingQuestions,
//         questions,
//         startTestTwo,
//         isStartingTest,
//         testTwo: testProcess,
//         isLoadingTestTwo,
//         isAnswering,
//         answerQuestion,
//         completeTest,
//         isCompleting,
//       }}
//     >
//       {children}
//     </Test2PageContext.Provider>
//   );
// };

// export const useTest1Questions = () => {
//   const { data: questionsRes, loading: isLoadingQuestions } = useQuery(
//     GET_TEST_TWO_QUESTIONS
//   );

//   const questions = useMemo(() => {
//     if (!questionsRes || !questionsRes.getTestTwoQuestions) return [];

//     return [...questionsRes.getTestTwoQuestions].sort(
//       (a, b) => a.position - b.position
//     );
//   }, [questionsRes]);

//   return [questions, isLoadingQuestions] as const;
// };
