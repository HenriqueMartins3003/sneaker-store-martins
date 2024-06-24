import GetItemsInterface from "./Items.Interface"

export interface NewTicket {
    purchaser: string,
    products: GetItemsInterface[],
    valorTotal: number
}

export interface GetTicket {
    purchaser: string 
}

