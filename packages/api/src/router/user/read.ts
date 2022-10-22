import { z } from 'zod';
import trpc from '../../trpc';

const readProcedure = trpc.procedure
	.input(
		z.object({
			email: z.string(),
			password: z.string(),
		}),
	)
	.query(({ ctx, input }) =>
		ctx.prisma.user.findFirst({
			where: { email: input.email, password: input.password },
		}),
	);

export default readProcedure;
