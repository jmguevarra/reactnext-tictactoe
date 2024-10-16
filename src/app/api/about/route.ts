import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const data = {
        title: "About Us",
        content: "This is the about page content.",
    };
    return NextResponse.json(data);
}