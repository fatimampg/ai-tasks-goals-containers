jest.mock("../user", () => ({
    ...jest.requireActual("../user"),
    hashPassword: jest.fn().mockResolvedValue("hashed-pass"),
    createJWT: jest.fn().mockReturnValue("mocked-token"),
  }));
  
  import { createNewUser } from "../user";
  import { prismaMock } from "../../singleton";
  import { Request, Response, NextFunction } from "express";
  import { mockReset } from 'jest-mock-extended'
  
  
  describe("user handler", () => {
    beforeEach(() => {
      mockReset(prismaMock);  
    });
  
    // it("should create a new user and return token", async () => {
  
    //   const user = {
    //     name: "test",
    //     email: "test@test.com",
    //     password: "pass",
    //   };
  
    //   prismaMock.user.create.mockResolvedValue({
    //     id: "1",
    //     name: "test",
    //     email: "test@test.com",
    //     createdAt: new Date(),
    //     password: "hashed-password", 
    //   });
  
    //   const req = {
    //     body: user,
    //     get: jest.fn(),
    //     header: jest.fn(),
    //     accepts: jest.fn(),
    //     acceptsCharsets: jest.fn(),
    //   } as unknown as Request;
  
    //   const res = {
    //     json: jest.fn(), 
    //   } as unknown as Response;
  
    //   const next = jest.fn() as NextFunction;
  
    //   await createNewUser(req, res, next);
  
    //   expect(prismaMock.user.create).toHaveBeenCalledWith({
    //     data: {
    //       email: user.email,
    //       name: user.name,
    //       password: expect.any(String), 
    //     },
    //   });
  
    // });
  
    it("should return error if missing required fields", async () => {
      const req = {
        body: { email: "test@test.com" }, 
        get: jest.fn(),
        header: jest.fn(),
        accepts: jest.fn(),
        acceptsCharsets: jest.fn(),
      } as unknown as Request;
  
      const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      } as unknown as Response;
  
      const next = jest.fn() as NextFunction;
  
      await createNewUser(req, res, next);
  
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.send).toHaveBeenCalledWith({
        message: "Invalid input or missing data",
      });
  
      expect(next).not.toHaveBeenCalled();
    });
  });