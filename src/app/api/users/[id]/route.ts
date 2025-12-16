import { NextResponse } from 'next/server';
import { usersList } from "../route";
export const GET = async (
    request: Request,
    { params }: { params: { id: number } }
) => {
    const userId = await params;
    const user = usersList.filter(u => u.id === Number(userId.id));
    if (!user) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(user);
};