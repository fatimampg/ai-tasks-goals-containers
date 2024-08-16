// const Prisma = require("@prisma/client");
// const prisma = new Prisma.PrismaClient();

// async function main() {
//   const testEmail = "testUser1@email.com";

//   const existingUser = await prisma.user.findUnique({
//     where: { email: testEmail },
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
