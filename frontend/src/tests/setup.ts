import "@testing-library/jest-dom/vitest";
import { server } from './mocks/server';
import.meta.env.VITE_BACKEND_URL = "http://localhost:3001";

  beforeAll(() => server.listen()); // Enable API mocking before tests.
  afterEach(() => server.resetHandlers()); 
  afterAll(() => server.close()) //disable API mocking after tests are done
