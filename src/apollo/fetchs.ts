// import { gql } from '@apollo/client';

import { gql } from '../__generated__';

export const LOGIN = gql(`
  query Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
    }
  }
`);

export const GET_USER = gql(`
  query GetUser {
    getUser {
      login
      id
      Role {
        id
        title
      }
    }
  }
`);

export const GET_USERS = gql(`
  query GetUsers($roleId: Int) {
    getUsers(roleId: $roleId) {
      id
      login
      Role {
        id
        title
      }
    }
  }
`);

export const GET_USERS_ROLES = gql(`
  query GetUsersRoles {
    getUsersRoles {
      id
      title
    }
  }
`);

export const REGISTRATION = gql(`
  mutation Mutation($login: String!, $password: String!, $roleId: Int!) {
    registration(login: $login, password: $password, roleId: $roleId) {
      token
    }
  }
`);

export const DELETE_USER = gql(`
  mutation DeleteUser($userId: Int!) {
    deleteUser(userId: $userId)
  }
`);

export const GET_TEST_ONE_QUESTIONS = gql(`
  query GetTestOneQuestions {
    getTestOneQuestions {
      id
      text
      position
    }
  }
`);

export const START_TEST_ONE = gql(`
  mutation StartTestOne($userId: Int!) {
    startTestOne(userId: $userId) {
      id
      complete
      startDate
      endDate
      TestOneAnswer {
        id
        answer
        TestOneQuestions {
          id
          text
          position
        }
      }
      User {
        id
        login
        Role {
          id
          title
        }
      }
    }
}
`);

export const COMPLETE_TEST_ONE = gql(`
  mutation CompleteTestOne($processId: Int!) {
  completeTestOne(processId: $processId) {
    id
    complete
    startDate
    endDate
    TestOneAnswer {
      id
      answer
      TestOneQuestions {
        id
        text
        position
      }
    }
    User {
      id
      login
      Role {
        id
        title
      }
    }
  }
}
  `);

export const GET_TEST_ONE_BY_USER_ID = gql(`
  query GetTestOne($userId: Int!) {
  getTestOne(userId: $userId) {
    startDate
    id
    endDate
    complete
    User {
      id
      login
      Role {
        id
        title
      }
    }
    TestOneAnswer {
      answer
      id
      TestOneQuestions {
        id
        position
        text
      }
    }
  }
}
  `);

export const ANS_TEST_ONE = gql(`
  mutation AnsTestOne($processId: Int!, $ans: Int!, $questionId: Int!) {
  ansTestOne(processId: $processId, ans: $ans, questionId: $questionId) {
    id
    complete
    startDate
    endDate
    TestOneAnswer {
      id
      answer
      TestOneQuestions {
        id
        text
        position
      }
    }
    User {
      id
      login
      Role {
        id
        title
      }
    }
  }
}
  `);

export const GET_TEST_TWO_QUESTIONS = gql(`
  query GetTestTwoQuestions {
  getTestTwoQuestions {
    id
    text
    position
  }
}
  `);

export const GET_TEST_TWO_BY_USER_ID = gql(`
  query GetTestTwo($userId: Int!) {
  getTestTwo(userId: $userId) {
    id
    complete
    startDate
    endDate
    TestTwoAnswer {
      id
      answer
      TestTwoQuestions {
        id
        text
        position
      }
    }
    User {
      id
      login
      Role {
        id
        title
      }
    }
  }
}
  `);

export const START_TEST_TWO = gql(`
  mutation StartTestTwo($userId: Int!) {
  startTestTwo(userId: $userId) {
    id
    complete
    startDate
    endDate
    TestTwoAnswer {
      id
      answer
      TestTwoQuestions {
        id
        text
        position
      }
    }
    User {
      id
      login
      Role {
        id
        title
      }
    }
  }
}
  `);

export const ANS_TEST_TWO = gql(`
  mutation AnsTestTwo($processId: Int!, $questionId: Int!, $ans: Boolean!) {
  ansTestTwo(processId: $processId, questionId: $questionId, ans: $ans) {
    id
    complete
    startDate
    endDate
    TestTwoAnswer {
      id
      answer
      TestTwoQuestions {
        id
        text
        position
      }
    }
    User {
      id
      login
      Role {
        id
        title
      }
    }
  }
}
  `);

export const COMPLETE_TEST_TWO = gql(`
  mutation CompleteTestTwo($processId: Int!) {
  completeTestTwo(processId: $processId) {
    id
    complete
    startDate
    endDate
    TestTwoAnswer {
      id
      answer
      TestTwoQuestions {
        id
        text
        position
      }
    }
    User {
      id
      login
      Role {
        id
        title
      }
    }
  }
}
  `);
