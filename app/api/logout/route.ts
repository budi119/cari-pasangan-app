import { NextResponse } from 'next/server';

export async function POST() {
    try {
        // Hapus session user (misalnya jika Anda menggunakan cookie atau session di server)
        return NextResponse.json(
            { success: true, message: "User logged out successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Logout failed:", error);

        return NextResponse.json(
            { success: false, message: "Logout failed. Please try again." },
            { status: 500 }
        );
    }
}
