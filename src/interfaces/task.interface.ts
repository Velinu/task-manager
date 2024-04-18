export interface iTask{
    id: number
    title: string
    description: string
    creationDate: Date
    completeDate: Date
    category: {
        id: number
        name: string
        color: string
    }
    status: string
    userId: number
}