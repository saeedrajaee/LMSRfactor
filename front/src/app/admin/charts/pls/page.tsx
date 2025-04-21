'use client'

import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./chart5'), {
    ssr: false, // Disable server-side rendering
});

export default function Chart5(){

    return(<MyComponent/>)
}
