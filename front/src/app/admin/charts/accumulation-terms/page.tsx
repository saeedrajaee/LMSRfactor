'use client'

import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('./chart1'), {
    ssr: false, // Disable server-side rendering
});

export default function Chart1(){

    return(<MyComponent/>)
}
