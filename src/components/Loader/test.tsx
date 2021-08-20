import { render, screen } from '@testing-library/react'

import Loader from '.'

describe('<Loader />', () => {
  it('should render correctly', () => {
    render(<Loader />)
    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })

  it('should render with a black dots', () => {
    const { container } = render(<Loader color="black" />)
    expect(container.querySelector('svg > g:nth-child(2)')).toHaveAttribute(
      'fill',
      '#06092b'
    )
  })

  it('should render with a white dots', () => {
    const { container } = render(<Loader color="white" />)
    expect(container.querySelector('svg > g:nth-child(2)')).toHaveAttribute(
      'fill',
      '#bababa'
    )
  })
})
