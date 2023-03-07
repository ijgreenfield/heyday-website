import { gql } from "@apollo/client";

export default {
    Queries: {
        getUser: gql`
            query getUser($token: String!) {
                customer(token: $token) {
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
            mutation CustomerAccessTokenCreate($email: String!, $password: String!) {
                customerAccessTokenCreate(email: $email, password: $password) {
                    customerAccessToken {
                      # CustomerAccessToken fields
                    }
                    customerUserErrors {
                      # CustomerUserError fields
                    }
                }
            }
        `
    },
    Subscriptions: {}
}