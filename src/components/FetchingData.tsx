import axios from 'axios'
import { useEffect, useState } from 'react'

const productsURL = 'https://api.escuelajs.co/api/v1/products'

type ProductTypes = {
    id: number
    title: string
    price: number
    image: string
    description: string
}

export const FetchingData = () => {
    const [fetchedData, setFetchedData] = useState<ProductTypes[]>(
        [] as ProductTypes[]
    )

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
            <div> Product Name: {fetchedData[0].title}</div>
            <div> Product ID: {fetchedData[0].id}</div>
            <div> Price: {fetchedData[0].price}€</div>
            <div> Description: {fetchedData[0].description}</div>
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
