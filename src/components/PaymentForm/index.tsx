import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'
import { CardElement } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import { Session } from 'next-auth'

import Button from 'components/Button'
import Heading from 'components/Heading'
import { FormLoading } from 'components/Form'
import { createOrder } from 'mock/orders'
import { useCart } from 'hooks/use-cart'

import * as S from './styles'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()
  const { push } = useRouter()

  const [loading, setLoading] = useState(false)
  const [card, setCard] = useState<StripeCardElementChangeEvent>()
  const [error, setError] = useState<string | null>(null)
  const [freeGames, setFreeGames] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const freeGames = items.every((item) => item.price === 'FREE')

        // se eu receber freeGames: true => setFreeGames
        // faço o fluxo de jogo gratuito
        if (freeGames) {
          setFreeGames(freeGames)
          return
        }

        // senão o paymentIntent foi válido
        // setClientSecret
        setFreeGames(freeGames)
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
    setCard(event)
  }

  const saveOrder = async (card?: StripeCardElementChangeEvent) => {
    const data = await createOrder({
      items,
      user: session.id as string,
      card: card!
    })

    return data
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    // se for freeGames
    if (freeGames) {
      // salva no banco
      // bater na API /orders
      saveOrder()

      // redireciona para success
      push('/success')
      return
    }

    // salvar a compra no banco do Strapi
    // bater na API /orders
    saveOrder(card)
    setLoading(false)

    // redirectionar para a página de Sucesso
    push('/success')
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Body>
          <Heading color="black" size="small" lineBottom>
            Payment
          </Heading>

          {freeGames ? (
            <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
          ) : (
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: '16px'
                  }
                }
              }}
              onChange={handleChange}
            />
          )}

          {error && (
            <S.Error>
              <ErrorOutline size={20} />
              {error}
            </S.Error>
          )}
        </S.Body>
        <S.Footer>
          <Link href="/" passHref>
            <Button as="a" fullWidth minimal>
              Continue shopping
            </Button>
          </Link>
          <Button
            fullWidth
            icon={loading ? <FormLoading /> : <ShoppingCart />}
            disabled={!freeGames && (disabled || !!error)}
          >
            {!loading && <span>Buy now</span>}
          </Button>
        </S.Footer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
