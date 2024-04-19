import { NextResponse } from "next/server";
import connection from "../../libs/dbConnection";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
import {config} from 'dotenv'
config()

export async function POST(request) {
    try {
        const {email, password} = await request.json()

        if(!email || !password) return NextResponse.json({
            errors: {
                email: !email ? 'Required' : '',
                password: !password ? 'Required' : ''
            }
        }, {status: 500})

        const [user] = await connection.query('SELECT * FROM users WHERE email = ?', [email])

        if(user.length < 1) return NextResponse.json('User not found', {status: 404})

        const returnedPassword = user[0].password

        const statusPassword = await bcrypt.compare(password, returnedPassword)

        if(!statusPassword) return NextResponse.json('Incorrect password', {status: 500})

        const payload = {
            email: user[0].email,
            username: user[0].username
        }

        const token = jwt.sign(payload, process.env.SECRETKEY)

        cookies().set({
            name: "token",
            value: token,
            httpOnly: true,
            sameSite: 'strict',
            path: '/'
        })

        return NextResponse.json(JSON.stringify(payload))
    } catch (error) {
        console.log(error);
    }
}