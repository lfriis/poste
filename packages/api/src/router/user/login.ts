import { z } from 'zod';
import trpc from '../../trpc';

const loginProcedure = trpc.procedure
	.input(
		z.object({
			email: z.string(),
			password: z.string(),
		}),
	)
	.mutation(({ ctx, input }) =>
		ctx.prisma.user.findFirst({
			where: { email: input.email, password: input.password },
		}),
	);

export default loginProcedure;
