import { NextApiRequest,NextApiResponse } from 'next';
import { IPerson } from '@/lib/interfaces/IPerson';

export default (_req:NextApiRequest,res:NextApiResponse<IPerson>):void=>{
    console.log('api요청')
    res.status(200).json({id:'1',name:'John',age:25})
}