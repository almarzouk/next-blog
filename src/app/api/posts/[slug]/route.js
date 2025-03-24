import prisma from "@/app/utils/connect";
import { skip } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";
// Get Single post
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
};
