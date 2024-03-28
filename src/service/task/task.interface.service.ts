export interface userServiceInterface {
    getAll()
    getById(id: number)
    post(newUser: {
        Id: number
        username: string
        peso?: number
        senha: string
        email: string
    })
    patch(id: number, dataPatch: {
        username?: string
        peso?: number
        senha?: string
        email?: string
    })
    delete(id: number)
}