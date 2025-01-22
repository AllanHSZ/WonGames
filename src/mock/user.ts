/* eslint-disable react-hooks/rules-of-hooks */
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { AuthorizeProps } from 'pages/api/auth/[...nextauth]'
import { useState } from 'react'
import { APP_KEY, getStorageItem, setStorageItem } from 'utils/localStorage'

export const USERS_KEY = 'USERS'

export type UserProps = {
  id: number
} & UsersPermissionsRegisterInput

async function timeout() {
  await new Promise((sucess) => {
    setTimeout(() => sucess('success'), 2000)
  })
}

type GraphQlCallbacks = {
  onError: (error: string) => void
  onCompleted: (success: boolean) => void
}

export function createUserMock({ onError, onCompleted }: GraphQlCallbacks) {
  const [loading, setLoading] = useState(false)

  const createUser = async (user: UsersPermissionsRegisterInput) => {
    setLoading(true)
    const users = getUsers()
    await timeout()

    let success = false
    if (users?.some(({ username }) => username === user.username)) {
      onError('Username already in use')
    } else if (users?.some(({ email }) => email === user.email)) {
      onError('Email already in use')
    } else {
      success = true
      updateUsers([...users, { ...user, id: users.length }])
    }

    onCompleted(success)
    setLoading(false)
  }

  return { createUser, loading }
}

export function singInMock({
  email,
  password,
  users: usersString
}: AuthorizeProps) {
  const users = JSON.parse(usersString!) as UserProps[]
  const user = users.find(
    (user) => user.email === email && user.password === password
  )

  return {
    user,
    jwt: 'TOKEN'
  }
}

export function getUsers() {
  return getStorageItem<UserProps[]>(USERS_KEY) || []
}

export function getUsersAsString() {
  if (typeof window === 'undefined') return '[]'

  return window.localStorage.getItem(`${APP_KEY}_${USERS_KEY}`) || '[]'
}
export function updateUsers(users: UserProps[]) {
  return setStorageItem(USERS_KEY, users)
}

export function getUserMock(id: number) {
  const users = getUsers()

  console.log('users', users)
  return users.find((user) => user.id === id)
}
