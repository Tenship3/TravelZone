import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    try {
        cookies().delete('token')
        return NextResponse.json('Log out')
    } catch (error) {
        console.log(error);
    }
}