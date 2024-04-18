export class ResponseModel{
    statusCode: number
    message?: string
    data?: any

    constructor(statusCode: number, message?: any, data?: any){
        this.statusCode = statusCode
        this.message = message
        this.data = data
    }
}