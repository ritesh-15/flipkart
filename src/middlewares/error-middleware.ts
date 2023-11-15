import { NextFunction, Request, Response } from "express";
import CreateHttpError from "../utils/error-handler";

export const errorMiddleware = (error:Error,req:Request,res:Response,next:NextFunction) => {

    if(error instanceof CreateHttpError){
        return res.status(error.status)
            .json({
                success:false,
                error:{
                    message:error.message,
                    status:error.status,
                    generatedAt:error.generatedAt
                }
            })
    }

    return res.status(500)
    .json({
        success:false,
        error:{
            message:"Internal server error!",
            status:500,
            generatedAt:new Date(Date.now())
        }
    })

}
