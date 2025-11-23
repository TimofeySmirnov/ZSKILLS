import { SubTypeInAuth } from "../subscribe/subscribe.types"

export type registrationDTO = {
    firstName: string,
    lastName: string,
    phoneNumber: string
    email: string,
    password: string
}

export type loginDTO = {
    login: string,
    password: string
}

export type UserType = {
    id: string
    firstName: string
    lastName: string
}

export type responseAuthUser = {
    user: UserType,
    token: string
    sub: SubTypeInAuth
}