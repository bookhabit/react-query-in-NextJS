import React from 'react';
import {useQuery,UseQueryResult} from "@tanstack/react-query"
import { IPerson } from '@/lib/interfaces/IPerson';

const PersonPage:React.FC = () => {
    const {isLoading,isError,error,data}:UseQueryResult<IPerson,Error> = useQuery<IPerson,Error,IPerson>(
        ['person'],
        async ()=>{
            const res= await fetch('/api/person')
            return res.json();
        }
    )
    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error is : {error.message}</p>
    return (
        <div>
            <p>{data?.id}</p>
            <p>{data?.name}</p>
            <p>{data?.age}</p>
        </div>
    );
};

export default PersonPage;