import * as trpc from '@trpc/server';
import prisma from '@acme/db';

export const createContextInner = async () => ({
	prisma,
});
export const createContext = async () => createContextInner();
export type Context = trpc.inferAsyncReturnType<typeof createContext>;
