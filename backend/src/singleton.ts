jest.mock('./db', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
  }))
  import { PrismaClient } from '@prisma/client'
  import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'
  
  import prisma from './db'
  
  
  beforeEach(() => {
    mockReset(prismaMock)
  })
  
  export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>