'use strict';
const supergoose = require('@code-fellows/supergoose');
const { server } = require('../../lib/server');
const mockRequest = supergoose(server);

describe('getModel middleware',()=>{
  it('Correct model /categories should respond with 200',() => {
    return mockRequest.get('/api/v1/categories').then((data) =>{
      expect(data.status).toBe(200);
    });
  });
  it('Wrong model /fooboo should respond with 500',() => {
    return mockRequest.get('/api/v1/fooboo').then((data) =>{
      expect(data.status).toBe(500);
    });
  });
});