import { NextApiRequest,NextApiResponse } from 'next';
import { IPerson } from '@/lib/interfaces/IPerson';

export default (req:NextApiRequest,res:NextApiResponse<IPerson|Error>):void=>{
    const {query:{id}} = req;
    if(typeof id ==='string'){
        console.log(`getting person by id :${id}`)
        res.status(200).json({id:id,name:'John',age:25})
    }else{
        res.status(500).json(new Error('id is not of correct type'))
    }
}