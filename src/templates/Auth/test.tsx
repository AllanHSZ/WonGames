import { render, screen } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    render(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    )

    // verifique se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i
      })
    ).toBeInTheDocument()

    // verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform/i
      })
    ).toBeInTheDocument()

    // verifica se o children esta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()
  })
})
