import { NextResponse } from 'next/server';
import { NextApiRequest } from "next";

let gridDataDB = [];
export async function GET() {
    return NextResponse.json(gridDataDB);
}

export async function POST(req: Request) {
    const body = await req.json();
    gridDataDB = [...gridDataDB,...body];
    return NextResponse.json(gridDataDB);
}