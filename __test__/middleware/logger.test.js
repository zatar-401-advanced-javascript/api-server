'use strict';

const logger = require('../../lib/middleware/logger');

describe('Logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it('log the output correctly', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('move to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});