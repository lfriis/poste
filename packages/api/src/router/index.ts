import trpc from '../trpc';
import userRouter from './user';

export const appRouter = trpc.router({
	user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
