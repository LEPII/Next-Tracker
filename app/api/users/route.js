import { NextRequest, NextResponse } from "next/server";
import prisma from "@prisma/client";

export async function POST(NextRequest) {
  const body = await NextRequest.json();

  if (!body.name || !body.email || !body.password) {
    return NextResponse.json(
      { message: "Please provide all required fields: name, email, password" },
      {
        status: 400,
      }
    );
  }

  try {
    const newUser = await prisma.user.create({
      data: { name: body.name, email: body.email, password: body.password },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "An error occurred during user creation" },
      {
        status: 500,
      }
    );
  }
}
