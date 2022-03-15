export interface IProduct {
    id: number,
    title: string,
    price: number,
    description?: string | null,
    category?: string | null,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}
