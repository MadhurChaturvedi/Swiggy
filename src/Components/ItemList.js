import React from 'react'

export default function ItemList({ item }) {
    return (
        <div className='bg-red-700 mt-9'>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.name}</p>
        </div>
    )
}
