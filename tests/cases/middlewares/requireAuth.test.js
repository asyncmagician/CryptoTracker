const requireAuth = require('../../../src/middlewares/requireAuth');

describe('requireAuth middleware', () => {
  it('should call next if user is authenticated', () => {
    const req = { session: { userId: '123' } };
    const res = {};
    const next = jest.fn();
    requireAuth(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('should redirect to login page if user is not authenticated', () => {
    const req = { session: {} };
    const res = { redirect: jest.fn() };
    const next = jest.fn();
    requireAuth(req, res, next);
    expect(res.redirect).toHaveBeenCalledWith('/');
  });
});
