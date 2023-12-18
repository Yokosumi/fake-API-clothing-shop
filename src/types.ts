export type ProductsTypes = {
    id: number
    title: string
    price: number
    category: CategoryTypes
    description: string
}

export type CategoryTypes = {
    id: number
    name: string
    image: string
}
