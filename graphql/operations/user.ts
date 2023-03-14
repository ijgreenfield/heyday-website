import { gql } from "@apollo/client";

export default {
    Queries: {
        getUser: gql`
            query getUser($token: String!) {
                customer(customerAccessToken: $token) {
                    id
                    firstName
                    lastName
                    email
                    phone
                }
            }
        `
    },
    Mutations: {
        createAccessToken: gql`
            mutation CustomerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
                customerAccessTokenCreate(input: $input) {
                    customerAccessToken {
                      accessToken
                    }
                    customerUserErrors {
                      message
                    }
                }
            }
        `
    },
    Subscriptions: {},
}