const checkAuth = require('../../../src/middlewares/checkAuth');

describe('checkAuth middleware', () => {
  it('should call next() if session.userId is not defined', () => {
    const req = { session: {} };
    const res = {};
    const next = jest.fn();

    checkAuth('/home')(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should redirect to the specified URL if session.userId is defined', () => {
    const req = { session: { userId: '123' } };
    const res = { redirect: jest.fn() };
    const next = jest.fn();

    checkAuth('/home')(req, res, next);

    expect(res.redirect).toHaveBeenCalledWith('/home');
  });
});
