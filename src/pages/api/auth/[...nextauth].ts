import { Session } from 'next-auth'
import NextAuth, { User } from 'next-auth'
import Providers from 'next-auth/providers'
import { JWT } from 'next-auth/jwt'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'
import { singInMock } from 'mock/user'

export type AuthorizeProps = {
  email: string
  password: string
  users: string
}

const options = {
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    Providers.Credentials({
      name: 'Sign-in',
      credentials: {},
      async authorize(authorize: AuthorizeProps) {
        const data = singInMock(authorize)

        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.jwt = user.jwt
      session.id = user.id

      return Promise.resolve(session)
    },
    jwt: async (token: JWT, user: User) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username as string
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    }
  }
}

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)

export default Auth
