import { home, about } from '../handlers.js'

test('home page renders', () => {
  const req = {}
  const res = { render: jest.fn() }
  home(req, res)
  expect(res.render.mock.calls[0][0]).toBe('home')
})

test('about page renders with fortune', () => {
  const req = {}
  const res = { render: jest.fn() }
  about(req, res)
  expect(res.render.mock.calls.length).toBe(1)
  expect(res.render.mock.calls[0][0]).toBe('about')
  // TODO: Fix up this test
  /* expect(res.render.mock.calls[0][1])
    .toEqual(expect.objectContaining({
      fortune: expect.stringMatching(/\W/),
    })) */
})
