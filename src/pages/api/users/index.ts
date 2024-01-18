import { NextApiRequest, NextApiResponse } from "next";
import users from '@/__mocks__/users.json';
import User from '@/@types/User';

export const mockData: Array<User> = users;

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(mockData);
}