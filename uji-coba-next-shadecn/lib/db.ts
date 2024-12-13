import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',        // Username default XAMPP adalah 'root'
  password: '',        // Default password untuk XAMPP kosong (jika tidak diubah)
  database: 'db_cari_pasangan',  // Ganti dengan nama database yang kamu buat
});

export default pool;
