import trpc from '../../trpc';
import loginProcedure from './login';
import createProcedure from './create';
import readProcedure from './read';

const userRouter = trpc.router({
	all: trpc.procedure.query(({ ctx }) => ctx.prisma.user.findMany()),
	login: loginProcedure,
	create: createProcedure,
	read: readProcedure,
});

export default userRouter;
