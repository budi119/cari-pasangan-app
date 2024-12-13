import pool from '../../../lib/db'; // Impor koneksi database

export async function GET(request) {
  try {
    const [rows] = await pool.query('SELECT * FROM tb_user WHERE id_user = 2');
    return new Response(JSON.stringify(rows[0]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response('Database query failed', {
      status: 500,
    });
  }
}
