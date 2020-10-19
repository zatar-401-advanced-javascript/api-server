'use strict';

const { server } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API Server', () => {
  describe('Categaory routes', () => {
    it('/categories should respond with 200', async () => {
      await mockRequest.get('/categories').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('GET /categories/:id should respond with 200', async () => {
      await mockRequest.get('/categories/1').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('GET /categories/:id should respond with 200', async () => {
      await mockRequest.get('/categories/1').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('POST /categories should respond with 201', async () => {
      await mockRequest.post('/categories').then((results) => {
        expect(results.status).toBe(201);
      });
    });
    it('PUT /categories/:id should respond with 202', async () => {
      await mockRequest.put('/categories/1').then((results) => {
        expect(results.status).toBe(202);
      });
    });
    it('DELETE /categories/:id should respond with 202', async () => {
      await mockRequest.delete('/categories/1').then((results) => {
        expect(results.status).toBe(202);
      });
    });
  });
  describe('Product routes', () => {
    it('/products should respond with 200', async () => {
      await mockRequest.get('/products').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('GET /products/:id should respond with 200', async () => {
      await mockRequest.get('/products/1').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('GET /products/:id should respond with 200', async () => {
      await mockRequest.get('/products/1').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('POST /products should respond with 201', async () => {
      await mockRequest.post('/products').then((results) => {
        expect(results.status).toBe(201);
      });
    });
    it('PUT /products/:id should respond with 202', async () => {
      await mockRequest.put('/products/1').then((results) => {
        expect(results.status).toBe(202);
      });
    });
    it('DELETE /products/:id should respond with 202', async () => {
      await mockRequest.delete('/products/1').then((results) => {
        expect(results.status).toBe(202);
      });
    });
  });
});