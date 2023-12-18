import axios from 'axios'
import { useEffect, useState } from 'react'

const productsURL = 'https://api.escuelajs.co/api/v1/products'

type ProductsTypes = {
    id: number
    title: string
    price: number
    category: CategoryTypes
    description: string
}

type CategoryTypes = {
    id: number
    name: string
    image: string
}

export const FetchingData = () => {
    const [fetchedData, setFetchedData] = useState([] as ProductsTypes[])

    async function fetchData() {
        const response = await axios.get(productsURL)
        setFetchedData(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(fetchedData)

    return (
        <>
            <h2>This is the fetching data component</h2>
            {fetchedData.length > 0 ? (
                <>
                    <img
                        className="w-20 h-full"
                        src={fetchedData[0].category.image}
                    />
                    <div> Product Name: {fetchedData[0].title}</div>
                    <div> Product ID: {fetchedData[0].id}</div>
                    <div> Price: {fetchedData[0].price}€</div>
                    <div> Description: {fetchedData[0].description}</div>
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
