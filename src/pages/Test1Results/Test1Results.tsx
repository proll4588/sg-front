// import { useQuery } from '@apollo/client';
// import { GET_ALL_TEST_ONE_RESULTS } from '../../apollo/fetchs';
// import { TestOneResultsTable } from '../../widget/tables/test-one-results-table/TestOneResultsTable';
// import { RESULT_FIELDS_MAP } from '../../widget/tables/test-one-results-table/constants';

// export interface TestOneResult {
//   id: number;
//   TestOneProcesses: {
//     id: number;
//     complete: boolean;
//     startDate: string;
//     endDate?: string | null;
//     User: {
//       id: number;
//       login: string;
//     };
//   };
//   TestOneResultItem: Array<{
//     id: number;
//     result: number;
//     TestOneScale: {
//       id: number;
//       title: string;
//     };
//     TestOneLevel: {
//       id: number;
//       title: string;
//     };
//   }>;
// }

// export interface TestOneResultNormal {
//   resultId: number;
//   processId: number;

//   complete: boolean;

//   startDate: string;
//   endDate?: string | null;

//   userId: number;
//   login: string;

//   TestOneResultItem: Array<{
//     id: number;
//     result: number;

//     scaleId: number;
//     scaleTitle: string;

//     levelId: number;
//     levelTitle: string;
//   }>;
// }

// const transformToNormalize = (data: TestOneResult): TestOneResultNormal => {
//   return {
//     complete: data.TestOneProcesses.complete,
//     login: data.TestOneProcesses.User.login,
//     processId: data.TestOneProcesses.id,
//     resultId: data.id,
//     startDate: data.TestOneProcesses.startDate,
//     endDate: data.TestOneProcesses.endDate,
//     userId: data.TestOneProcesses.User.id,
//     TestOneResultItem: data.TestOneResultItem.map((el) => {
//       return {
//         id: el.id,
//         levelId: el.TestOneLevel.id,
//         levelTitle: el.TestOneLevel.title,
//         scaleId: el.TestOneScale.id,
//         scaleTitle: el.TestOneScale.title,
//         result: el.result,
//       };
//     }),
//   };
// };

// export const Test1Results = () => {
//   const { data, loading } = useQuery(GET_ALL_TEST_ONE_RESULTS);

//   return (
//     <TestOneResultsTable
//       data={(data?.getTestOneResults || []).map(transformToNormalize)}
//       fields={RESULT_FIELDS_MAP}
//       onChangeFields={() => {}}
//       renderActions={() => null}
//       visibleFields={RESULT_FIELDS_MAP}
//       isLoading={loading}
//     />
//   );
// };
