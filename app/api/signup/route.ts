import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db'; // Pastikan path ini sesuai dengan lokasi koneksi database Anda.

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json(); // Parse request body

    // Validasi input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Username and password are required" },
        { status: 400 }
      );
    }

    // Cari nilai maksimum id_user
    const [rows]: any = await pool.query('SELECT MAX(id_user) AS maxId FROM tb_login');
    const maxId = rows[0].maxId || 0; // Jika tidak ada data, mulai dari 0
    const newIdUser = maxId + 1;

    // Masukkan data baru ke tabel
    const insertQuery = `
      INSERT INTO tb_login (id_user, username_login, password_login)
      VALUES (?, ?, ?)
    `;
    await pool.query(insertQuery, [newIdUser, username, password]);

    // Kirim respons sukses
    return NextResponse.json({
      success: true,
      message: "User successfully registered",
      user: { id_user: newIdUser, username }
    }, { status: 201 });
  } catch (error) {
    console.error("Error inserting user:", error);
    // Jika terjadi error, kirim respons error
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
