import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        
    })
  ],
}
export default NextAuth(authOptions)