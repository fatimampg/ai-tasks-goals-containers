// const Prisma = require("@prisma/client");
// const prisma = new Prisma.PrismaClient();

// const newUser = {
//   email: "testUser1@email.com",
//   password: "passwordtest",
// };

// async function main() {
//   const existingUser = await prisma.user.findUnique({
//     where: { email: newUser.email },
//   });

//   if (existingUser) {
//     await prisma.task.deleteMany({
//       where: { belongsToId: existingUser.id },
//     });
//     await prisma.goal.deleteMany({
//       where: { belongsToId: existingUser.id },
//     });
//     await prisma.progress.deleteMany({
//       where: { belongsToId: existingUser.id },
//     });
//   } else {
//     await prisma.user.upsert({
//       where: { email: newUser.email },
//       name: "userTest",
//       password: newUser.password,
//     });
//     await prisma.task.upsert({
//       where: { email: newUser.email },
//       update: {},
//       create: {
//         email: newUser.email,
//         password: newUser.password,
//         name: "userTest",
//         tasks: {
//           create: [
//             {
//               description: "task 1",
//               deadline: new Date.now(),
//               status: "TO_DO",
//               percentageCompleted: 0,
//               priority: "MODERATE",
//               category: "CAREER",
//             },
//             {
//               description: "task 2",
//               deadline: new Date.now(),
//               status: "IN_PROGRESS",
//               percentageCompleted: 50,
//               priority: "HIGH",
//               category: "LEISURE",
//             },
//           ],
//         },
//         goals: {
//           create: [
//             {
//               description: "goal 1",
//               month: 6,
//               year: 2024,
//               category: "CAREER",
//               status: "NEEDS_IMPROVEMENT",
//             },
//             {
//               description: "goal 2",
//               month: 6,
//               year: 2024,
//               category: "LEISURE",
//               status: "IN_PROGRESS",
//             },
//           ],
//         },
//       },
//     });
//   }
// }

// if (require.main === module) {
//   main();
// }

// module.exports = async () =>
//   main()
//     .catch((error) => {
//       console.log(error);
//       process.exit(1);
//     })
//     .finally(async () => {
//       await prisma.$disconnect();
//     });
