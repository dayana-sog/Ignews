import { NextApiRequest, NextApiResponse} from 'next'

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (req: NextApiRequest, res: NextApiResponse) => {
    const user = [
        { id: 1 , name: 'Dayana'},
        { id: 2 , name: 'Beto'},
        { id: 3 , name: 'Maggy'}
    ]

    return res.json(user)
}