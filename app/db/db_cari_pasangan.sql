-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2024 at 07:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_cari_pasangan`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_hobi`
--

CREATE TABLE `tb_hobi` (
  `id_hobi` int(11) NOT NULL,
  `nama_hobi` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_hobi`
--

INSERT INTO `tb_hobi` (`id_hobi`, `nama_hobi`) VALUES
(1, 'Membaca'),
(2, 'Menulis'),
(3, 'Memasak'),
(4, 'Fotografi'),
(5, 'Melukis'),
(6, 'Bersepeda'),
(7, 'Memancing'),
(8, 'Menyanyi'),
(9, 'Bermain Musik'),
(10, 'Berkebun'),
(11, 'Menjahit'),
(12, 'Berenang'),
(13, 'Bermain Sepak Bola'),
(14, 'Basket'),
(15, 'Voli'),
(16, 'Bermain Video Game'),
(17, 'Mendaki Gunung'),
(18, 'Berkemah'),
(19, 'Menyelam'),
(20, 'Berburu'),
(21, 'Berburu Foto'),
(22, 'Tenis Meja'),
(23, 'Tenis Lapangan'),
(24, 'Badminton'),
(25, 'Jogging'),
(26, 'Yoga'),
(27, 'Meditasi'),
(28, 'Bermain Catur'),
(29, 'Bermain Kartu'),
(30, 'Menggambar'),
(31, 'Bermain Puzzle'),
(32, 'Membangun Model'),
(33, 'Bermain Lego'),
(34, 'Mengoleksi Barang Antik'),
(35, 'Mengoleksi Koin'),
(36, 'Mengoleksi Prangko'),
(37, 'Merakit Komputer'),
(38, 'Mengedit Video'),
(39, 'Membuat Kerajinan Tangan'),
(40, 'Menari'),
(41, 'Berlayar'),
(42, 'Memahat Kayu'),
(43, 'Membuat Sketsa'),
(44, 'Belajar Bahasa Asing'),
(45, 'Menonton Film'),
(46, 'Berbelanja Online'),
(47, 'Berbelanja di Mall'),
(48, 'Makan di Restoran Baru'),
(49, 'Traveling'),
(50, 'Berkendara Motor'),
(51, 'Bermain Skateboard'),
(52, 'Bermain Sepatu Roda'),
(53, 'Menyusun Puzzle Jigsaw'),
(54, 'Membuat Origami'),
(55, 'Mengelola Blog'),
(56, 'Membaca Komik'),
(57, 'Menonton Anime'),
(58, 'Bermain Drama'),
(59, 'Bermain Bola Voli Pantai'),
(60, 'Bermain Futsal'),
(61, 'Olahraga Bela Diri'),
(62, 'Bermain Golf'),
(63, 'Menjahit Pakaian'),
(64, 'Membuat Sabun'),
(65, 'Membuat Parfum'),
(66, 'Menulis Buku Harian'),
(67, 'Menyusun Album Foto');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kota`
--

CREATE TABLE `tb_kota` (
  `id_kota` int(11) NOT NULL,
  `nama_kota` varchar(100) NOT NULL,
  `provinsi_kota` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_kota`
--

INSERT INTO `tb_kota` (`id_kota`, `nama_kota`, `provinsi_kota`) VALUES
(1, 'Jakarta', 'DKI Jakarta'),
(2, 'Tangerang', 'Banten'),
(3, 'Cilegon', 'Banten'),
(4, 'Serang', 'Banten'),
(5, 'Tangerang Selatan', 'Banten'),
(6, 'Bandung', 'Jawa Barat'),
(7, 'Bekasi', 'Jawa Barat'),
(8, 'Bogor', 'Jawa Barat'),
(9, 'Cimahi', 'Jawa Barat'),
(10, 'Cirebon', 'Jawa Barat'),
(11, 'Depok', 'Jawa Barat'),
(12, 'Sukabumi', 'Jawa Barat'),
(13, 'Tasikmalaya', 'Jawa Barat'),
(14, 'Banjar', 'Jawa Barat'),
(15, 'Semarang', 'Jawa Tengah'),
(16, 'Surakarta', 'Jawa Tengah'),
(17, 'Salatiga', 'Jawa Tengah'),
(18, 'Magelang', 'Jawa Tengah'),
(19, 'Pekalongan', 'Jawa Tengah'),
(20, 'Tegal', 'Jawa Tengah'),
(21, 'Yogyakarta', 'DI Yogyakarta'),
(22, 'Surabaya', 'Jawa Timur'),
(23, 'Malang', 'Jawa Timur'),
(24, 'Batu', 'Jawa Timur'),
(25, 'Kediri', 'Jawa Timur'),
(26, 'Madiun', 'Jawa Timur'),
(27, 'Mojokerto', 'Jawa Timur'),
(28, 'Blitar', 'Jawa Timur'),
(29, 'Probolinggo', 'Jawa Timur'),
(30, 'Pasuruan', 'Jawa Timur'),
(31, 'Denpasar', 'Bali');

-- --------------------------------------------------------

--
-- Table structure for table `tb_login`
--

CREATE TABLE `tb_login` (
  `id_login` int(11) NOT NULL,
  `username_login` varchar(100) NOT NULL,
  `password_login` varchar(100) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_login`
--

INSERT INTO `tb_login` (`id_login`, `username_login`, `password_login`, `id_user`) VALUES
(1, 'budi', 'budi12345', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(100) NOT NULL,
  `gender_user` enum('Pria','Wanita') NOT NULL,
  `usia_user` int(2) NOT NULL,
  `ig_user` varchar(100) NOT NULL,
  `tiktok_user` varchar(100) NOT NULL,
  `bio_user` varchar(100) NOT NULL,
  `ft_profile_user` varchar(100) DEFAULT NULL,
  `id_kota` int(11) DEFAULT NULL,
  `id_hobi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id_user`, `nama_user`, `gender_user`, `usia_user`, `ig_user`, `tiktok_user`, `bio_user`, `ft_profile_user`, `id_kota`, `id_hobi`) VALUES
(2, 'budi', 'Pria', 21, 'bdisan_', 'budi', 'indit tunduh te indit butuh', 'pp', 6, 44);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_hobi`
--
ALTER TABLE `tb_hobi`
  ADD PRIMARY KEY (`id_hobi`);

--
-- Indexes for table `tb_kota`
--
ALTER TABLE `tb_kota`
  ADD PRIMARY KEY (`id_kota`);

--
-- Indexes for table `tb_login`
--
ALTER TABLE `tb_login`
  ADD PRIMARY KEY (`id_login`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_kota` (`id_kota`,`id_hobi`),
  ADD KEY `id_hobi` (`id_hobi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_hobi`
--
ALTER TABLE `tb_hobi`
  MODIFY `id_hobi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `tb_kota`
--
ALTER TABLE `tb_kota`
  MODIFY `id_kota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `tb_login`
--
ALTER TABLE `tb_login`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_login`
--
ALTER TABLE `tb_login`
  ADD CONSTRAINT `tb_login_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `tb_user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD CONSTRAINT `tb_user_ibfk_1` FOREIGN KEY (`id_kota`) REFERENCES `tb_kota` (`id_kota`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `tb_user_ibfk_2` FOREIGN KEY (`id_hobi`) REFERENCES `tb_hobi` (`id_hobi`) ON DELETE SET NULL ON UPDATE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
