import { NextApiRequest, NextApiResponse } from "next";
import users from '@/__mocks__/users.json';
import User from '@/@types/User';

export let mockData: Array<User> = users;

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    const email: string = req.body.email
    if (email) {
        mockData = mockData.filter((i) => i.email === email);
    }
    console.log("mockData", mockData);
    res.status(200).json(mockData);
}