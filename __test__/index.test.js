/** @jest-environment jsdom */
import { render } from '@testing-library/react'
import React from 'react'
import Home from '../pages/index'

describe('insert', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  });
});
