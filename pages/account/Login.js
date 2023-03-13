import { useMutation } from '@apollo/client'
import React from 'react'
import UserOperations from "../../graphql/operations/user"

export default function Login() {
  const [createSession, {data, loading, error}] = useMutation(UserOperations.Mutations.createAccessToken)

  const handleSubmit = async () => {
    try {
      await createSession({ 
        variables: {input: { email: "ian@shockmouse.com", password: "42Htn58n1!" }},
        onCompleted: (data) => (
          console.log(data)
        )
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={handleSubmit}>Test Button</button>
    </div>
  )
}
