import {NextResponse} from "next/server";
import {blogs} from "@/app/api/blogs/route";

export const GET = async (request:Request, {params}:{params:{id:number}}) :Promise<T>=>{
    const {id:userId} = await params;
    return NextResponse.json(blogs.filter(post => post.id == userId));
}