import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@acme/db';

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
	const posts = await prisma.user.findMany();
	res.status(200).json(posts);
};

export default examples;
