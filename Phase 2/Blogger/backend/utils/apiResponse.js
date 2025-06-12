class ApiResponse{
    constructor(
        statuscode,
        data,
        message = 'success'
    ){
        this.satuscode = statuscode
        this.data = data
        this.message = message
        this.success = statuscode < 400
    }
}


export {ApiResponse}