import {sign, verify} from "jsonwebtoken"
import {config} from "dotenv"
import { authenticationData } from "../types/types"


config()

const {JWT_KEY} = process.env

export const generateToken = (
    playload: authenticationData
): string => sign (
    playload,
    JWT_KEY!,
    {expiresIn: "1h"}

)

export const getTokenData = (
    token:string
): authenticationData | null => {
    try {
        const {id} = verify(token, JWT_KEY) as authenticationData

        return {id}

    }catch (error) {
        return null
    }
} 