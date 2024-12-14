import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';
import pool from '../../../lib/db';

const dbConfig = {
  host: 'localhost', // Ubah sesuai konfigurasi Anda
  user: 'root',
  password: '',
  database: 'db_cari_pasangan',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and Password are required' });
    }

    try {
      const connection = await mysql.createConnection(dbConfig);
      const [rows]: any = await connection.execute(
        'SELECT * FROM tb_login WHERE username = ? AND password = ?',
        [username, password]
      );
      await connection.end();

      if (rows.length > 0) {
        // Login berhasil
        res.status(200).json({ success: true, user: rows[0] });
      } else {
        // Login gagal
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
