import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.user.deleteMany();

	console.log('Seeding...');

	const user1 = await prisma.user.create({
		data: {
			email: 'lisa@simpson.com',
			fullName: 'Lisa Simpson',
			phoneNumber: '+3809999999998',
			uniqueName: 'lisa',
			password:
				'$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
			role: 'USER',
		},
	});
	const user2 = await prisma.user.create({
		data: {
			email: 'bart@simpson.com',
			fullName: 'Bart Simpson',
			phoneNumber: '+380999999999',
			uniqueName: 'bart',
			role: 'ADMIN',
			password:
				'$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
		},
	});

	const doctor = await prisma.user.create({
		data: {
			email: 'doctor@test.com',
			fullName: 'Doctor',
			phoneNumber: '+380999999997',
			uniqueName: 'doctor',
			role: 'DOCTOR',
			password:
				'$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
		},
	});
	console.log({ user1, user2, doctor });
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
