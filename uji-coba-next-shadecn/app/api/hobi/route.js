import pool from '../../../lib/db'; // Impor koneksi database

export async function GET(request) {
  try {
    const [rows] = await pool.query('SELECT * FROM tb_hobi');
    return new Response(JSON.stringify(rows), {
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
