import { z } from 'zod';
import trpc from '../../trpc';

const createProcedure = trpc.procedure
	.input(
		z.object({
			username: z.string(),
			password: z.string(),
			email: z.string(),
			firstName: z.string(),
			lastName: z.string(),
			phoneNumber: z.string(),
		}),
	)
	.mutation(({ ctx, input }) => ctx.prisma.user.create({ data: input }));

export default createProcedure;
