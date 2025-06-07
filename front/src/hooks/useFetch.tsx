import { useState, useEffect } from 'react';

interface FetchOptions {
    method?: 'GET' | 'POST';
    body?: unknown;
    headers?: { [key: string]: string };
}

interface UseFetchResult<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

const apiServerAddress = process.env.NEXT_PUBLIC_API_SERVER_ADDRESS;

function useFetch<T>(url: string, options?: FetchOptions): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(apiServerAddress + url, {
                    method: options?.method || 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(options?.headers || {}),
                    },
                    credentials: 'include',
                    body: options?.body ? JSON.stringify(options.body) : null,
                });

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const result = await response.json();
                setData(result);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, options?.method, options?.body, options?.headers]);

    return { data, error, loading };
}

export default useFetch;
