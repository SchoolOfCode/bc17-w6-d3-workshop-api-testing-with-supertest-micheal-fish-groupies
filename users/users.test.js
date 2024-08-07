//"GET /api/health works"
//npm install supertest --save-dev MAYBE THIS IS IMPORTANT
import { test, expect } from 'vitest';
import request from 'supertest';
import app from '../app.js';

test('GET /api/health works', async () => {
    const fishyResponse = await request(app).get('/api/health');
    console.log(fishyResponse.body);  // Log the response body for debugging
    expect(fishyResponse.body).toEqual({
      success: true,
      payload: 'API is running correctly',
    });
  });

// Goal: make a GET request with Supertest to the /api/health
//
// import the Express app from app.js (because it needs to be tested) Y
// import the function from Supertest (maybe call it `request` like the documentation did)Y
// within the existing test, follow the example from the documentation and:
//    call `request` and pass in the Express app as an argumentY
//    send a GET request to the /api/health endpointY
//    await the overall expression and assign it to a `response` constantY
//    console.log `response.body` for now to at least see a result

//write basic test function
//test('GET /api/health works', () => {
//     expect()
// });