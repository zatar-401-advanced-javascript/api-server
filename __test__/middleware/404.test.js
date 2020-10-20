'use strict';

const { server } = require('../../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404 Middleware', () => {
  it('should respond with 404 on not found route', async () => {
    await mockRequest.get('/foo').then((results) => {
      expect(results.status).toBe(404);
    });
  });
});