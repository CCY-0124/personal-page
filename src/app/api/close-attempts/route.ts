// src/app/api/close-attempts/route.ts
import { NextResponse } from "next/server";

let count = 0; 

export async function GET() {
    return NextResponse.json({ count });
}

export async function POST() {
    count += 1;
    return NextResponse.json({ count });
}
