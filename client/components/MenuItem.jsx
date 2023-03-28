import Link from 'next/link'
import React from 'react'

export default function MenuItem({ title, address }) {
    return (
        <div>
            <Link href={address} className='hover:text-amber-600'>
                <p>{title}</p>
            </Link>
        </div>
    )
}
