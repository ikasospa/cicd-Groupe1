const request = require('supertest');
const app = require('../src/index');

describe('Tests de l\'API', () => {
  
  test('GET / doit retourner "Hello CI/CD!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello CI/CD!');
  });

  test('GET /api/data doit retourner un JSON', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Données du backend');
  });
});