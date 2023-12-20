import axios from 'axios'
import { useEffect, useState } from 'react'
import { ProductsTypes } from '../types'
import { ProductCard } from './ProductCard'

const productsURL = 'https://api.escuelajs.co/api/v1/products/?categoryId=1'

export const FetchingData = () => {
    const [fetchedData, setFetchedData] = useState([] as ProductsTypes[])

    async function fetchData() {
        const response = await axios.get(productsURL)
        setFetchedData(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h2>This is the fetching data component</h2>
            {fetchedData.length > 0 ? (
                <>
                    {fetchedData.map((product) => {
                        return (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                category={product.category}
                            />
                        )
                    })}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}

// {fetchedData.map((product) => {
//     return (
//         <div key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//         </div>
//     )
// })}
