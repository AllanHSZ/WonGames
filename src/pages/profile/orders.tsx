import { GetServerSidePropsContext } from 'next'

import Profile from 'templates/Profile'
import OrdersList from 'components/OrdersList'
import protectedRoutes from 'utils/protected-routes'
import { ordersMapper } from 'utils/mappers'
import { getUserOrders } from 'mock/orders'

type PageProps = {
  id: string
}

export default function Orders({ id }: PageProps) {
  const orders = getUserOrders(id)

  return (
    <Profile>
      <OrdersList items={ordersMapper(orders)} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (!session) return { props: {} }

  return {
    props: {
      id: session.id as string,
      session
    }
  }
}
