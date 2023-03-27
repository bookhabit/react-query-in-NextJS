import React from 'react';
import {useQuery,UseQueryResult} from "@tanstack/react-query"
import { IPerson } from '@/lib/interfaces/IPerson';
import Link from 'next/link';

const fetchPerson = async ():Promise<IPerson>=>{
    const res= await fetch('/api/person')
    if(res.ok){
        return res.json();
    }
    throw new Error('Network response not ok')
}


const PersonPage:React.FC = () => {
    const {isLoading,isError,error,data}:UseQueryResult<IPerson,Error> = useQuery<IPerson,Error,IPerson>(
        ['person'],
        fetchPerson,
        {
            staleTime:5*1000
        }
    )
    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Error is : {error.message}</p>
    return (
        <div>
            <Link href={`/person/${data?.id}`}>
                <p>{data?.id}</p>
            </Link>
            <p>{data?.name}</p>
            <p>{data?.age}</p>
        </div>
    );
};

export default PersonPage;