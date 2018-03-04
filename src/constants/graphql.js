import gql from 'graphql-tag'

/* -- SURVIVANTS -- */
export const ALL_SURVIVANTS_QUERY = gql`
  {
    survivants {
      id
      nom,
      cout,
      img_min,
      membres{
        id,
        type,
        val_blanc,
        val_bleue,
        val_rouge,
        bullet_blanc,
        bullet_rouge
      }
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

/* -- FACTIONS -- */
export const ALL_FACTIONS_QUERY = gql`
  {
    factions {
      id
      nom
    }
  }
`
