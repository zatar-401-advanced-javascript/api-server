'use strict';
require('@code-fellows/supergoose');
const collection = require('../lib/models/categories/categories.collection');
const CRUD = collection;
const obj = { 'name': 'test0', 'display_name': 'test0', 'description': 'test test0' };
const newObj = { 'name': '99', 'display_name': '99', 'description': '99' };

describe('CRUD', () => {
  it('can create() a new item', () => {
    return CRUD.create(obj).then((record) => {
      Object.keys(obj).forEach((key) => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });
  it('can read() item', () => {
    return CRUD.create(obj).then((record) => {
      return CRUD.read(record._id).then((data) => {
        Object.keys(obj).forEach((key) => {
          expect(data[0][key]).toEqual(record[key]);
        });
      });
    });
  });
  it('can delete() item', () => {
    return CRUD.create(obj).then((record) => {
      return CRUD.delete(record._id).then(() => {
        return CRUD.read(record._id).then((data) => {
          expect(data[0]).toBeUndefined();
        });
      });
    });
  });
  it('can update() item', () => {
    return CRUD.create(obj).then((record) => {
      return CRUD.update(record._id, newObj).then(() => {
        return CRUD.read(record._id).then((data) => {
          Object.keys(obj).forEach((key) => {
            expect(data[0][key]).toEqual(newObj[key]);
          });
        });
      });
    });
  });

});