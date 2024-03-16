export type DetailProductList = {
    title: string
    user_account: string
    profile: string
    image?: string
    house_type?: string
    type_house?: string
    design_type?: string
    detail_product: DetailProduct[]
    price: number
    price_description: string
}

export type DetailProduct = {
    icon: string
    text: string
    value: string | JSX.Element
}