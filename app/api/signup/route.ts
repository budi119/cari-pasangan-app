import { NextApiRequest, NextApiResponse } from 'next';
import { RowDataPacket, OkPacket } from 'mysql2';
import pool from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    try {
      // Cek apakah username sudah ada
      const [rows] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM tb_login WHERE username = ?',
        [username]
      );

      if (rows.length > 0) {
        return res.status(400).json({ success: false, message: 'Username already exists' });
      }

      // Insert pengguna baru
      const [result] = await pool.query<OkPacket>(
        'INSERT INTO tb_login (username, password) VALUES (?, ?)',
        [username, password]
      );

      if (result.affectedRows > 0) {
        return res.status(201).json({ success: true, message: 'Signup successful' });
      } else {
        return res.status(500).json({ success: false, message: 'Signup failed' });
      }
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
