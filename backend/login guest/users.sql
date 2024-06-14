-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 14, 2024 at 09:53 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('guest','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'ryan', 'ryan1', 'guest'),
(2, 'admin', 'admin1', 'admin'),
(3, 'user', '$2y$10$plOCHqr3N86dGEYN5gOO..PxR28MZEj1i81wbWaF1MqoCxK1iDb4i', 'guest'),
(4, 'admin_user', '$2y$10$gNAC6/l4ckdTxv7Y7sucX.fsPM.sskceDKfUdVSyXQMK859IU4IIa', 'admin'),
(5, 'adri', '$2y$10$FqgCzI1F5fJUFPymLTk7busM2syEvn7RzQXudzoLCISRKtAuOHxlq', 'guest'),
(6, 'a', '$2y$10$BWQ1xDvkDlll17.U0DKBluok4TxyQkTyckWRAGBYi.K9XvWHEIJEG', 'guest'),
(7, 'b', '$2y$10$6fA3dgVZb8DKwIZIyCzTHOygaDR4heGJKuOhAjFZCgcczGI4/2gtm', 'guest'),
(8, 'q', '$2y$10$D5ihW6t8dbT37Nfp2ky3M.VL6WERzypRxpgfAIX/0O3jydXFz4HsO', 'guest'),
(9, '1', '$2y$10$pV9WO4cU.0iwXFG5SmGU6.x67Rx/8S.7GH5oUuzygADqpoBxWKL1K', 'guest');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
