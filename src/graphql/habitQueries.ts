import { gql } from "@apollo/client";

export const GET_HABITS = gql`
  query GetHabits {
    habits {
      id
      name
      description
    }
  }
`;

export const ADD_HABIT = gql`
  mutation AddHabit($name: String!, $description: String) {
    addHabit(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_HABIT = gql`
  mutation DeleteHabit($id: ID!) {
    deleteHabit(id: $id) {
      id
      name
    }
  }
`;

export const UPDATE_HABIT = gql`
  mutation UpdateHabit($id: ID!, $name: String!, $description: String) {
    updateHabit(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;
