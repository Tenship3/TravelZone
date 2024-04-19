import { NextResponse } from "next/server";
import { createTransport } from 'nodemailer'
import {config} from 'dotenv'
import connection from "../libs/dbConnection";
import { hash } from "bcrypt";
config()

export async function POST(request) {
    try {
        const {email} = await request.json()

        const [user] = await connection.query('SELECT * FROM users WHERE email = ?', [email])

        if(user.length < 1) return NextResponse.json('User not found', {status: 404})

        const transport = createTransport({
            service: 'gmail',
            auth: {
                user: 'irissusanamartinezarias237@gmail.com',
                pass: process.env.MAIL_PASS
            }
        })

        const code = Math.floor(Math.random() * 900000) + 100000

        const mailOptions = {
            from: 'irissusanamartinezarias237@gmail.com',
            to: email,
            subject: 'TRAVELZONE | Reset yout password',
            text: `This is yout code to reset your password: ${code}`
        } 

        transport.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Correo electrónico enviado: ' + info.response);
            }
          });

          return NextResponse.json(code)
    } catch (error) {
        console.log(error)
    }
}

export async function PATCH(request) {
    try {
        const {email, password} = await request.json()

        const encryptedPassword = await hash(password, 10)

        await connection.query('UPDATE users SET password = ? WHERE email = ?', [encryptedPassword, email])

        return NextResponse.json('Password reseted successfully')
    } catch (error) {
        console.log(error)
    }
}