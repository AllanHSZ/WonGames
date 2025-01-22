import { GetServerSidePropsContext } from 'next'

import Profile from 'templates/Profile'
import FormProfile from 'components/FormProfile'

import protectedRoutes from 'utils/protected-routes'
import { getUserMock } from 'mock/user'

type Props = {
  id: number
}

export default function Me(props: Props) {
  const user = getUserMock(props.id as number)

  return (
    <Profile>
      <FormProfile {...user} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) return { props: {} }

  return {
    props: { session, id: session.id }
  }
}
