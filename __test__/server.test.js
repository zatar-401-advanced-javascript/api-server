'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);

describe('API Server', () => {
  describe('Categaory routes', () => {
    let obj = { 'name': 'test0', 'display_name': 'test0', 'description': 'test test0' };
    let newObj = { 'name': '99', 'display_name': '99', 'description': '99' };
    it('/api/v1/categories should respond with 200',() => {
      return mockRequest.get('/api/v1/categories').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('GET /categories/:id should respond with 200',() => {
      return mockRequest.post('/api/v1/categories').send(obj).then((data) => {
        return mockRequest.get(`/api/v1/categories/${data.body._id}`).then((results) => {
          expect(results.status).toBe(200);
          Object.keys(obj).forEach((key) => {
            expect(obj[key]).toEqual(results.body[0][key]);
          });
        });
      });
    });
    it('POST /categories should respond with 201',() => {
      return mockRequest.post('/api/v1/categories').send(obj).then((results) => {
        expect(results.status).toBe(201);
        Object.keys(obj).forEach((key) => {
          expect(obj[key]).toEqual(results.body[key]);
        });
      });
    });
    it('PUT /categories/:id should respond with 202',() => {
      return mockRequest.post('/api/v1/categories').send(obj).then((data) => {
        return mockRequest.put(`/api/v1/categories/${data.body._id}`).send(newObj).then((results) => {
          expect(results.status).toBe(202);
          Object.keys(obj).forEach((key) => {
            expect(newObj[key]).toEqual(results.body[key]);
          });
        });
      });
    });
    it('PATCH /categories/:id should respond with 202',() => {
      return mockRequest.post('/api/v1/categories').send(obj).then((data) => {
        return mockRequest.patch(`/api/v1/categories/${data.body._id}`).send(newObj).then((results) => {
          expect(results.status).toBe(202);
          Object.keys(obj).forEach((key) => {
            expect(newObj[key]).toEqual(results.body[key]);
          });
        });
      });
    });
    it('DELETE /categories/:id should respond with 202',() => {
      return mockRequest.post('/api/v1/categories').send(obj).then((data) => {
        return mockRequest.delete(`/api/v1/categories/${data.body._id}`).then((results) => {
          expect(results.status).toBe(202);
          expect({}).toEqual(results.body);
        });
      });
    });
  });
  let obj = { 'category': 'test', 'name': 'test0', 'display_name': 'test0', 'description': 'test test0' };
  let newObj = { 'category': '99', 'name': '99', 'display_name': '99', 'description': '99' };
  describe('Product routes', () => {
    it('/api/v1/products should respond with 200',() => {
      return mockRequest.get('/api/v1/products').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('GET /products/:id should respond with 200',() => {
      return mockRequest.post('/api/v1/products').send(obj).then((data) => {
        mockRequest.get(`/api/v1/products/${data.body._id}`).then((results) => {
          expect(results.status).toBe(200);
          Object.keys(obj).forEach((key) => {
            expect(obj[key]).toEqual(results.body[0][key]);
          });
        });
      });
    });
    it('POST /products should respond with 201',() => {
      return mockRequest.post('/api/v1/products').send(obj).then((results) => {
        expect(results.status).toBe(201);
        Object.keys(obj).forEach((key) => {
          expect(obj[key]).toEqual(results.body[key]);
        });
      });
    });
    it('PUT /products/:id should respond with 202',() => {
      return mockRequest.post('/api/v1/products').send(obj).then((data) => {
        return mockRequest.put(`/api/v1/products/${data.body._id}`).send(newObj).then((results) => {
          expect(results.status).toBe(202);
          Object.keys(obj).forEach((key) => {
            expect(newObj[key]).toEqual(results.body[key]);
          });
        });
      });
    });
    it('PATCH /products/:id should respond with 202',() => {
      return mockRequest.post('/api/v1/products').send(obj).then((data) => {
        return mockRequest.patch(`/api/v1/products/${data.body._id}`).send(newObj).then((results) => {
          expect(results.status).toBe(202);
          Object.keys(obj).forEach((key) => {
            expect(newObj[key]).toEqual(results.body[key]);
          });
        });
      });
    });
    it('DELETE /products/:id should respond with 202',() => {
      return mockRequest.post('/api/v1/products').send(obj).then((data) => {
        return mockRequest.delete(`/api/v1/products/${data.body._id}`).then((results) => {
          expect(results.status).toBe(202);
          expect({}).toEqual(results.body);
        });
      });
    });
  });
});