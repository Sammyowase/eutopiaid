import { NextRequest, NextResponse } from "next/server";
import { JwtPayload, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Verify admin authentication
const verifyAdmin = (request: NextRequest): boolean => {
  try {
    const cookieStore = cookies();
    const token = (cookies()as any).get("admin_token")?.value;

    if (!token) return false;

    const decoded = verify(token, JWT_SECRET) as JwtPayload | string;

    if (typeof decoded === "string") return false;

    return decoded.role === "admin";
  } catch (err) {
    console.error("Admin API - Token verification failed:", err);
    return false;
  }
};

// DELETE handler to delete a user by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("DELETE request received for user ID:", params.id);

  if (!verifyAdmin(request)) {
    console.log("Authentication failed for delete request");
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const userId = params.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(
      { message: "User deleted successfully", userId },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in database operation:", err);
    return NextResponse.json(
      {
        message: "Database error: " + (err instanceof Error ? err.message : String(err)),
        details: err instanceof Error ? err.stack : undefined,
      },
      { status: 500 }
    );
  }
}
