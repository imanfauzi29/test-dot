export type NavigationType = {
    name: string
    href: string
    children?: NavigationType[]
}

export type BreadcrumbType = {
    name: string
    href: string
}