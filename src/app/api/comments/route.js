import { NextResponse } from "next/server";
import connection from "../libs/dbConnection";

export async function GET() {
    try {
        const [result] = await connection.query('SELECT * FROM comments')

        return NextResponse.json(result)
    } catch (error) {
        console.log(error);
    }
}

export async function POST(request) {
    try {
        const {user, name, message, grade, date} = await request.json();

        if(!name || !message || !grade) return NextResponse.json({
            errors: {
                name: !name ? 'Required' : '',
                message: !message ? 'Required' : '',
                grade: !grade ? 'Required' : ''
            }
        }, {status: 500})

        if(parseInt(grade) > 5 || parseInt(grade) < 1) return NextResponse.json({
            errors: {
                name: '',
                message: '',
                grade: 'Grade must be between 1 and 5'
            }
        }, {status: 500})

        await connection.query('INSERT INTO comments(user, name, message, grade, date) VALUES (?, ?, ?, ?, ?)', [user, name, message, grade, date])

        return NextResponse.json('Comment sended successfully')
    } catch (error) {
        console.log(error);
    }
}