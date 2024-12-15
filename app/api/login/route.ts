import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost', // Ubah sesuai konfigurasi Anda
  user: 'root',
  password: '',
  database: 'db_cari_pasangan',
};

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ message: 'Username and Password are required' }, { status: 400 });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows]: any = await connection.execute(
      'SELECT * FROM tb_login WHERE username_login = ? AND password_login = ?',
      [username, password]
    );
    await connection.end();

    if (rows.length > 0) {
      // Login berhasil
      const user = rows[0];  // Ambil data pengguna dari database
      return NextResponse.json({
        success: true,
        user: {
          id_login: user.id_login,
          username: user.username_login,  // Kembalikan username
          id_user: user.id_user,
        },
      });
    } else {
      // Login gagal
      return NextResponse.json({ success: false, message: 'Invalid username or password' }, { status: 401 });
    }
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
