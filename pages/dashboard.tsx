import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

export const DashBoard = () => {

    const Content = () => {

        const { isLoading, error, data } = useQuery(['reposData'], () => 
        fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => res.json())
        )

        // Use Mutation is for create/update/delete data

        if(isLoading) return <div>'Loading...'</div>

        // if(error) return 'An error has occured: ' + error

        return (
            <div style={{"textAlign": "center"}}>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <strong> Subscribers Count: {data.subscribers_count}</strong>
                <strong> Stargazers Count: {data.stargazers_count}</strong>
                <strong> Forks Count: {data.forks_count}</strong>
            </div>
        )
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Content />
        </QueryClientProvider>
    )
}

