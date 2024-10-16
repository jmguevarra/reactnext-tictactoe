import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    // Mock authentication logic (replace with real logic)
    if (username === "admin" && password === "password") {
        return NextResponse.json({ token: "mockToken123" });
    } else {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
}