'use client'

import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./chart4'), {
    ssr: false, // Disable server-side rendering
});

export default function Chart4(){

    return(<MyComponent/>)
}
