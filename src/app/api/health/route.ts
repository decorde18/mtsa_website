import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/health
// Quick way to confirm the deployed app can actually reach MySQL —
// hit this right after a deploy instead of guessing from a blank page.
export async function GET() {
  const startedAt = Date.now();

  try {
    // Lightweight round-trip — doesn't touch real tables, just confirms
    // the connection (and credentials, and network path) actually work.
    await db.$queryRaw`SELECT 1`;

    return NextResponse.json({
      status: "ok",
      database: "connected",
      responseTimeMs: Date.now() - startedAt,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Health check failed:", error);

    return NextResponse.json(
      {
        status: "error",
        database: "unreachable",
        // Don't leak connection strings/credentials in the error message.
        error: "Database connection failed",
        timestamp: new Date().toISOString(),
      },
      { status: 503 }
    );
  }
}
