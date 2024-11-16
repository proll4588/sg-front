// import {
//   Button,
//   ButtonGroup,
//   Grid,
//   LinearProgress,
//   Typography,
// } from '@mui/material';
// import { FC, useEffect, useMemo, useState } from 'react';
// import { useTest1 } from './context/Test1PageContext';
// import { LoadingButton } from '@mui/lab';
// import { CustomBackdrop } from '../../shared/ui/custom-backdrop';

// const useTestOneNavigation = (questionsSize: number, isSelected: boolean) => {
//   const MAX = questionsSize;

//   const [currentQ, setCurrentQ] = useState(0);

//   const canNext = currentQ < MAX && isSelected;
//   const canBack = currentQ > 1;

//   const next = () => {
//     if (canNext) setCurrentQ(currentQ + 1);
//   };

//   const back = () => {
//     if (canBack) setCurrentQ(currentQ - 1);
//   };

//   const onStart = () => {
//     setCurrentQ(1);
//   };

//   return { next, back, onStart, canBack, canNext, currentQ, setCurrentQ };
// };

// const ansArray = new Array(7).fill(1);

// export const Test1Page = () => {
//   const {
//     isLoadingQuestions,
//     questions,
//     isStartingTest,
//     startTestOne,
//     isLoadingTestOne,
//     testOne,
//     answerQuestion,
//     isAnswering,
//     completeTest,
//     isCompleting,
//   } = useTest1();

//   const [isChangedAns, setIsChangedAns] = useState(false);
//   const markChange = () => setIsChangedAns(true);
//   const unMarkChange = () => setIsChangedAns(false);

//   const [selectedAns, setSelectedAns] = useState<null | number>(null);
//   const { back, canBack, canNext, next, onStart, currentQ, setCurrentQ } =
//     useTestOneNavigation(questions.length, selectedAns !== null);

//   const startTest = async () => {
//     await startTestOne();
//     onStart();
//   };

//   const currentQuestion = useMemo(() => {
//     return questions[currentQ - 1];
//   }, [currentQ, questions]);

//   const nextHandler = async () => {
//     if (selectedAns && currentQuestion) {
//       if (isChangedAns) await answerQuestion(currentQuestion.id, selectedAns);

//       next();
//     }
//   };

//   useEffect(() => {
//     const ans = testOne?.TestOneAnswer.find(
//       (el) => el.TestOneQuestions.id === currentQuestion?.id
//     );
//     if (ans) setSelectedAns(ans.answer || null);
//     else setSelectedAns(null);

//     unMarkChange();
//   }, [currentQ, testOne]);

//   const isLastQuestion = currentQ === questions.length;

//   const onContinueHandler = () => {
//     if (testOne) {
//       const lastQ = [...testOne.TestOneAnswer].sort(
//         (a, b) => b.TestOneQuestions.position - a.TestOneQuestions.position
//       );

//       if (lastQ.length === 0) setCurrentQ(1);
//       else if (lastQ) setCurrentQ(lastQ[0].TestOneQuestions.position + 1);
//     }
//   };

//   const completeHandler = async () => {
//     if (selectedAns) {
//       await answerQuestion(currentQuestion.id, selectedAns);
//       await completeTest();
//       setCurrentQ(0);
//     }
//   };

//   // =================

//   if (isLoadingTestOne) return <CustomBackdrop isLoading />;

//   if (!currentQ)
//     return (
//       <StartTestOnePage
//         isLoading={isStartingTest}
//         onStart={startTest}
//         onContinue={onContinueHandler}
//         test={testOne}
//       />
//     );

//   if (isLoadingQuestions) return <CustomBackdrop isLoading />;
//   if (questions.length === 0) return <Typography>Упс</Typography>;

//   return (
//     <Grid
//       container
//       flexDirection={'column'}
//       gap={2}
//     >
//       <Typography fontWeight={'bold'}>Вопрос {currentQ}</Typography>

//       <Typography>{currentQuestion.text}</Typography>

//       <Grid>
//         <ButtonGroup>
//           {ansArray.map((_, i) => (
//             <Button
//               size='small'
//               onClick={() => {
//                 setSelectedAns(i + 1);
//                 markChange();
//               }}
//               variant={i + 1 === selectedAns ? 'contained' : 'outlined'}
//             >
//               {i + 1}
//             </Button>
//           ))}
//         </ButtonGroup>

//         <Grid
//           container
//           justifyContent={'space-between'}
//           width={280}
//         >
//           <Typography fontSize={12}>Не согласен</Typography>
//           <Typography fontSize={12}>Согласен</Typography>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         gap={2}
//         flexDirection={'row'}
//         alignItems={'center'}
//         justifyContent={'stretch'}
//         maxWidth={400}
//       >
//         <Button
//           onClick={back}
//           variant='outlined'
//           disabled={!canBack}
//         >
//           Назад
//         </Button>

//         <LinearProgress
//           variant='determinate'
//           value={((currentQ - 1) / questions.length) * 100}
//           sx={{ flex: 1 }}
//         />

//         {isLastQuestion ? (
//           <LoadingButton
//             loading={isCompleting || isAnswering}
//             onClick={completeHandler}
//             disabled={selectedAns === null}
//             variant='contained'
//           >
//             Завершить
//           </LoadingButton>
//         ) : (
//           <LoadingButton
//             loading={isAnswering}
//             onClick={nextHandler}
//             disabled={!canNext}
//             variant='contained'
//           >
//             Далее
//           </LoadingButton>
//         )}
//       </Grid>
//     </Grid>
//   );
// };

// export interface StartTestOnePageProps {
//   test:
//     | {
//         startDate: string;
//         id: number;
//         endDate?: string | null;
//         complete: boolean;
//         User: {
//           id: number;
//           login: string;
//           Role: {
//             id: number;
//             title: string;
//           };
//         };
//         TestOneAnswer: Array<{
//           answer?: number | null;
//           id: number;
//           TestOneQuestions: {
//             id: number;
//             position: number;
//             text: string;
//           };
//         }>;
//       }
//     | null
//     | undefined;
//   onStart?: () => void;
//   onContinue?: () => void;
//   isLoading?: boolean;
// }
// export const StartTestOnePage: FC<StartTestOnePageProps> = ({
//   onStart,
//   onContinue,
//   isLoading = false,
//   test,
// }) => {
//   if (!test)
//     return (
//       <Grid>
//         <Typography>Чтобы начать нажмите на кнопку</Typography>
//         <LoadingButton
//           loading={isLoading}
//           onClick={onStart}
//           variant='contained'
//         >
//           Начать
//         </LoadingButton>
//       </Grid>
//     );
//   else if (!test.complete)
//     return (
//       <Grid>
//         <Typography>Чтобы продолжить нажмите на кнопку</Typography>
//         <LoadingButton
//           loading={isLoading}
//           onClick={onContinue}
//           variant='contained'
//         >
//           Продолжить
//         </LoadingButton>
//       </Grid>
//     );
//   else
//     return (
//       <Grid>
//         <Typography>Тест завершён</Typography>
//       </Grid>
//     );
// };
