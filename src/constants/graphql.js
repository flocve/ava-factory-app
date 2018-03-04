import gql from 'graphql-tag'

export const ALL_SURVIVANTS_QUERY = gql`
  {
    survivants {
      id
      nom
      cout
    }
  }
`

export const CREATE_SURVIVANT_MUTATION = gql`
  mutation createSurvivant($input: SurvivantInput!) {
    createSurvivant(input: $input) {
      nom
      membres {
        val_blanc
      }
      }
  }
`
