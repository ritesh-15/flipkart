class CreateHttpError{
    status:number
    message:string
    generatedAt:Date

    constructor(message:string,status:number){
        this.message = message
        this.status = status
        this.generatedAt = new Date(Date.now())
    }

    static notFound(message:string = "Not found!"){
        return new CreateHttpError(message,404)
    }

    static forbidden(message:string = "Forbidden!"){
        return new CreateHttpError(message,403)
    }


    static unProcessableEntitiy(message:string = "Unprocessabel entity!"){
        return new CreateHttpError(message,422)
    }


    static unAuthorised(message:string = "Unauthorised!"){
        return new CreateHttpError(message,401)
    }

    static serverError(message:string = "Internal server error!"){
        return new CreateHttpError(message,500)
    }
}

export default CreateHttpError