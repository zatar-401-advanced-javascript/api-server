'use strict';

const { server } = require('../../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('500 Middleware', () => {
  it('should respond with 500 on an error', async () => {
    await mockRequest.get('/bad').then((results) => {
      expect(results.status).toBe(500);
    });
  });
});