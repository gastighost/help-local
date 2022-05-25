/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import Router from "next/router";
import React from 'react';
import JobsForm from './jobs-form';
import user from '@testing-library/user-event'

describe('rendering', () => {
  it('renders job form', () => {
    const { jobsForm } = render(<JobsForm />);
    expect(jobsForm).toMatchSnapshot();
  });

  // it('inputs new job information into the form', () => {

  // });
});

jest.mock('next/router')

describe('jobs form', () => {
  beforeEach(() => {
  });

  afterEach(() => {
    global.fetch.mockClear();
    jest.restoreAllMocks();
  });

  it('when entering into the jobs form, fetch responds correctly and router pushes back to jobs index', async () => {
    let routerSpy = jest.spyOn(Router, 'push')

    render(<JobsForm />);
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: async () => ({success: true}),
      })
    )

    const category = document.getElementById("category");
    const title = document.getElementById("title");
    const location = document.getElementById("location");
    const monthlySalary = document.getElementById("monthlySalary");
    const weeklyHours = document.getElementById("weeklyHours");
    const requirements = document.getElementById("requirements");
    const language = document.getElementById("language");
    const description = document.getElementById("description");
    const company = document.getElementById("company");

    user.type(category, 'Part-Time');
    user.type(title, 'Bus driver');
    user.type(location, 'Berlin');
    user.type(monthlySalary, "1800");
    user.type(weeklyHours, "25");
    user.type(requirements, 'Bus drivers license');
    user.type(language, 'German');
    user.type(description, 'Shift work driving busses in Berlin public transport system');
    user.type(company, 'BVG');

    await user.click(screen.getByRole('button', {
      name: /add/i
    }));

    expect(routerSpy).toBeCalledWith('/jobs')
    expect(global.fetch).toHaveBeenCalledWith(
      "/api/jobs",
      {
        body: JSON.stringify({
          category: "P",
          title: "B",
          location: "B",
          monthlySalary: "1",
          weeklyHours: "2",
          requirements: "B",
          language: "G",
          description: "S",
          company: "B"
        }),
        headers: {"Content-Type": "application/json"},
        method: "POST"
      }
    );
  });

  // it('onSubmit is called when all fields are filled out and pass validation', async () => {
  //   const onSubmit = jest.fn();
  //   onSubmit.mockClear();
  //   render(<JobsForm onSubmit={onSubmit} />);
  //   expect(onSubmit).toHaveBeenCalledTimes(1);
  // })
});
