'use strict';

const timestamp = require('../../lib/middleware/timestamp');

describe('Timestamp Middleware', () =>{
  const req = {};
  const res = {};
  const next = jest.fn();

  it('Put the current date on the request object in a property called requestTime', ()=>{
    timestamp(req, res, next);
    expect(req.requestTime).toBeDefined();
  });
  it('move to the next middleware', () => {
    timestamp(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});