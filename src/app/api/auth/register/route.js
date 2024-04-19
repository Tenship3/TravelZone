import { NextResponse } from "next/server";
import connection from "../../libs/dbConnection";
import bcrypt from 'bcrypt'

export async function POST(request) {
    try {
        const { username, email, password, confirmPassword } = await request.json();

        if(!username || !email || !password || !confirmPassword) return NextResponse.json({
            errors: {
                username: !username ? 'Required' : '',
                email: !email ? 'Required' : '',
                password: !password ? 'Required' : '',
                confirmPassword: !confirmPassword ? 'Required' : ''
            }
        }, {status: 500})

        if(password !== confirmPassword) return NextResponse.json({
            errors: {
                username: '',
                email: '',
                password: 'Passwords do not match',
                confirmPassword: ''
            }
        }, {status: 500})

        const [user] = await connection.query('SELECT * FROM users WHERE email = ?', [email])

        if(user.length > 0) return NextResponse.json('User already exists', {status: 500})

        const encryptedPassword = await bcrypt.hash(confirmPassword, 10)

        await connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, encryptedPassword])

        return NextResponse.json('User created successfully!')
    } catch (error) {
        console.log(error);
    }
}