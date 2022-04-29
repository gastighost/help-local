/** @jest-environment jsdom */
import { render } from '@testing-library/react';
import React from 'react';
import JobsForm from './jobs-form';

describe('rendering', () => {
  it('renders job form', () => {
    const { jobsForm } = render(<JobsForm />);
    expect(jobsForm).toMatchSnapshot();
  });

  // it('inputs new job information into the form', () => {

  // });
});

// describe('jobs form', () => {
//   const onSubmit = jest.fn();

//   beforeEach(() => {
//     onSubmit.mockClear();
//     render(<JobsForm onSubmit={onSubmit} />);
//   });

//   it('onSubmit is called when all fields are filled out and pass validation', () => {

//   });
// });
