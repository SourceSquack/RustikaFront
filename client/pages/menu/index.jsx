import Results from '@/components/Results'
import React from 'react'
import menujson from './menujson'

export default function MenuPage() {
    return (
        <Results results={menujson} />
    )
}
