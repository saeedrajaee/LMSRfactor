'use client'

import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./chart3'), {
    ssr: false, // Disable server-side rendering
});

export default function Chart3(){

    return(<MyComponent/>)
}
