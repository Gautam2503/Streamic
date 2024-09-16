import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

const UpvoteSchema = z.object({
    streamId: z.string()
})


export async function POST(req: NextRequest){
    const session = await getServerSession();
    const user = await prismaClient.user.findUnique({
        where: {
            email: session?.user?.email ?? ""
        }
    })

    if(!user){
        return NextResponse.json({
            message: "Unauthenticated"
        },{
            status: 403
        })
    }
    try{
        const data = UpvoteSchema.parse(await req.json());
        await prismaClient.upvote.delete({
            where: {
                userId_streamId: {
                    streamId: data.streamId,
                    userId: user?.id
                }
            }
        });

    }catch(e){
        return NextResponse.json({
            message: "Error while upvoting"
        },{
            status: 403
        })
    }
}