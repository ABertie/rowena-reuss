import { NextResponse } from "next/server";
import imagekit from "@/lib/image-kit";

export async function GET() {
    const result = imagekit.getAuthenticationParameters()
    return NextResponse.json({result})
}