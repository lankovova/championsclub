-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 23, 2018 at 04:57 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `php_slots`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) NOT NULL,
  `login` varchar(30) CHARACTER SET utf8 NOT NULL,
  `pass` varchar(50) NOT NULL,
  `balance` decimal(20,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `admin_history`
--

CREATE TABLE `admin_history` (
  `id` int(11) NOT NULL,
  `ip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `data` datetime NOT NULL,
  `subdiler_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `balance` decimal(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `admiral_gm`
--

CREATE TABLE `admiral_gm` (
  `g_name` varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `g_bank` decimal(20,2) NOT NULL DEFAULT '0.00',
  `g_proc` decimal(3,0) NOT NULL DEFAULT '100',
  `g_shansbon` varchar(10) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `g_shanswin` text CHARACTER SET utf8 NOT NULL,
  `g_rezerv` varchar(5) CHARACTER SET utf8 NOT NULL DEFAULT '10',
  `g_rezim` char(1) CHARACTER SET utf8 NOT NULL DEFAULT '2'
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `id_agent` int(10) NOT NULL,
  `login` varchar(50) CHARACTER SET utf8 NOT NULL,
  `pass` varchar(50) CHARACTER SET utf8 NOT NULL,
  `balance` int(50) NOT NULL,
  `agent` int(10) NOT NULL DEFAULT '0',
  `FIO` varchar(300) CHARACTER SET utf8 NOT NULL DEFAULT 'Пупкин Василий Богданович ',
  `city` varchar(100) CHARACTER SET utf8 NOT NULL DEFAULT 'Киев',
  `pers` int(5) NOT NULL DEFAULT '5',
  `period` int(5) NOT NULL DEFAULT '10'
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `authorizations`
--

CREATE TABLE `authorizations` (
  `id` int(11) NOT NULL,
  `login` varchar(255) CHARACTER SET utf8 NOT NULL,
  `account_type` varchar(255) CHARACTER SET utf8 NOT NULL,
  `balance` float DEFAULT NULL,
  `ip` varchar(15) CHARACTER SET utf8 NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Dumping data for table `authorizations`
--

INSERT INTO `authorizations` (`id`, `login`, `account_type`, `balance`, `ip`, `datetime`) VALUES
(1, 'maindiller', '2', 768429, '46.211.119.221', '2018-02-06 15:02:51'),
(2, 'maindiller', '2', 768429, '93.75.25.102', '2018-02-07 08:02:04'),
(3, 'diller', '0', 10000, '46.174.163.139', '2018-02-07 09:02:30'),
(4, 'diller', '0', 10000, '185.107.81.233', '2018-02-07 12:02:30'),
(5, 'maindiller', '2', 768306, '93.75.25.102', '2018-02-07 15:02:02'),
(6, 'maindiller', '2', 768306, '93.75.25.102', '2018-02-07 16:02:53'),
(7, 'maindiller', '2', 768306, '93.75.25.102', '2018-02-08 08:02:06'),
(8, 'diller', '0', 9997, '46.174.163.139', '2018-02-08 08:02:36'),
(9, 'diller', '0', 9997, '46.174.163.139', '2018-02-08 09:02:26'),
(10, 'maindiller', '2', 768306, '93.75.25.102', '2018-02-08 10:02:35'),
(11, '601160', '0', 5000, '93.75.25.102', '2018-02-08 11:02:16');

-- --------------------------------------------------------

--
-- Table structure for table `bonus_and_jackpot`
--

CREATE TABLE `bonus_and_jackpot` (
  `id` int(11) NOT NULL,
  `last_bonus_win_cash` decimal(12,2) NOT NULL DEFAULT '0.00',
  `last_bonus_win_time` datetime NOT NULL,
  `last_jackpot_win_cash` decimal(12,2) NOT NULL DEFAULT '0.00',
  `last_jackpot_win_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='table used to store bonus and jackpot related information';

--
-- Dumping data for table `bonus_and_jackpot`
--

INSERT INTO `bonus_and_jackpot` (`id`, `last_bonus_win_cash`, `last_bonus_win_time`, `last_jackpot_win_cash`, `last_jackpot_win_time`) VALUES
(1, '7023.00', '2017-12-08 16:54:57', '6000.00', '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `datenow`
--

CREATE TABLE `datenow` (
  `id` int(20) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Dumping data for table `datenow`
--

INSERT INTO `datenow` (`id`, `start`, `end`) VALUES
(1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `historysch`
--

CREATE TABLE `historysch` (
  `id` int(11) NOT NULL,
  `PIN` varchar(20) NOT NULL,
  `subdiler` int(11) NOT NULL,
  `data` datetime NOT NULL,
  `ivent` varchar(200) NOT NULL,
  `summa` decimal(20,2) NOT NULL,
  `IP` varchar(20) NOT NULL,
  `prim` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `historysch`
--

INSERT INTO `historysch` (`id`, `PIN`, `subdiler`, `data`, `ivent`, `summa`, `IP`, `prim`) VALUES
(1, '69614983538117', 2, '2018-02-08 15:08:28', 'возврат', '12.30', '127.0.0.1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `history_user`
--

CREATE TABLE `history_user` (
  `id` int(11) NOT NULL,
  `login` varchar(50) CHARACTER SET utf8 NOT NULL,
  `event` varchar(255) CHARACTER SET utf8 NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `meneger_history`
--

CREATE TABLE `meneger_history` (
  `id` int(11) NOT NULL,
  `ip` varchar(50) CHARACTER SET utf8 NOT NULL,
  `data` datetime NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `balance` decimal(10,0) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `cash` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `login` varchar(255) NOT NULL,
  `ip` varchar(15) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `pay_stat`
--

CREATE TABLE `pay_stat` (
  `id` bigint(20) NOT NULL,
  `login` varchar(20) CHARACTER SET utf8 NOT NULL,
  `date` datetime NOT NULL,
  `inm` decimal(12,2) NOT NULL,
  `outm` decimal(12,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `pers`
--

CREATE TABLE `pers` (
  `id_manager` int(11) NOT NULL,
  `pers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `seting`
--

CREATE TABLE `seting` (
  `alog` varchar(10) CHARACTER SET utf8 NOT NULL DEFAULT 'admin',
  `apas` varchar(10) CHARACTER SET utf8 NOT NULL DEFAULT 'admin',
  `adm_email` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `cas_url` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT 'http://',
  `cas_name` varchar(40) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mrh_login` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mrh_pass1` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `mrh_pass2` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `ik_shop_id` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `ik_sekret_key` varchar(200) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `pcash` char(3) CHARACTER SET utf8 NOT NULL DEFAULT '20',
  `paymail` char(3) CHARACTER SET utf8 NOT NULL DEFAULT 'yes',
  `regmail` char(3) CHARACTER SET utf8 NOT NULL DEFAULT 'yes',
  `zakmail` char(3) CHARACTER SET utf8 NOT NULL DEFAULT 'yes',
  `icq` varchar(10) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `cas_bon` char(1) CHARACTER SET utf8 NOT NULL DEFAULT '0',
  `sessiondays` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `min_stavka` int(11) NOT NULL,
  `min_stavka_bingo` int(11) NOT NULL,
  `max_stavka` int(11) NOT NULL,
  `max_stavka_bingo` int(11) NOT NULL,
  `min_ruletka_int` int(11) NOT NULL,
  `max_ruletka_int` int(11) NOT NULL,
  `min_ruletka_chance` int(11) NOT NULL,
  `max_ruletka_chance` int(11) NOT NULL,
  `ruletka_denom` int(11) NOT NULL,
  `denom` varchar(250) NOT NULL,
  `id_agent` int(11) NOT NULL,
  `insurance_percent` int(11) NOT NULL DEFAULT '10'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `min_stavka`, `min_stavka_bingo`, `max_stavka`, `max_stavka_bingo`, `min_ruletka_int`, `max_ruletka_int`, `min_ruletka_chance`, `max_ruletka_chance`, `ruletka_denom`, `denom`, `id_agent`, `insurance_percent`) VALUES
(1, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 2, 10),
(97, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 3, 10),
(98, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 4, 10),
(99, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 11, 10),
(100, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 12, 10),
(101, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 14, 10),
(102, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 20, 10),
(103, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 22, 10),
(104, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 24, 10),
(105, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 26, 10),
(106, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 27, 10),
(107, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 29, 10),
(108, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 30, 10),
(109, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 34, 10),
(110, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 36, 10),
(111, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 40, 10),
(112, 1, 1, 100, 50, 1, 50, 10, 700, 1, '0.01 0.05 0.10 0.25 0.50 1.00', 44, 10);

-- --------------------------------------------------------

--
-- Table structure for table `stats_pin`
--

CREATE TABLE `stats_pin` (
  `id` int(15) NOT NULL,
  `data` datetime DEFAULT NULL,
  `summa` decimal(20,2) DEFAULT NULL,
  `sobytie` varchar(30) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `PIN` varchar(30) CHARACTER SET utf8 NOT NULL,
  `game` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `stav` decimal(20,2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

--
-- Dumping data for table `stats_pin`
--

INSERT INTO `stats_pin` (`id`, `data`, `summa`, `sobytie`, `PIN`, `game`, `stav`) VALUES
(1, '2018-02-05 18:07:40', '12.00', 'login', '26428043110290', NULL, NULL),
(2, '2018-02-05 18:07:56', '11.90', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(3, '2018-02-05 18:07:59', '11.80', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(4, '2018-02-05 18:08:01', '12.00', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(5, '2018-02-05 18:08:07', '11.70', 'game gamble loose', '26428043110290', NULL, NULL),
(6, '2018-02-05 18:08:09', '11.80', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(7, '2018-02-05 18:08:15', '11.70', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(8, '2018-02-05 18:08:33', '11.70', 'logout', '26428043110290', NULL, NULL),
(9, '2018-02-06 08:07:38', '11.70', 'login', '26428043110290', NULL, NULL),
(10, '2018-02-06 08:08:34', '11.60', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(11, '2018-02-06 08:08:38', '11.50', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(12, '2018-02-06 08:08:40', '11.40', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(13, '2018-02-06 08:08:42', '11.40', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(14, '2018-02-06 08:08:55', '11.40', 'logout', '26428043110290', NULL, NULL),
(15, '2018-02-06 09:04:17', '11.40', 'login', '26428043110290', NULL, NULL),
(16, '2018-02-06 09:06:37', '11.35', 'game bet, win', '26428043110290', 'BookOfWins', '10.00'),
(17, '2018-02-06 09:06:43', '11.25', 'game bet, no win', '26428043110290', 'BookOfWins', '10.00'),
(18, '2018-02-06 09:06:46', '11.80', 'game bet, win', '26428043110290', 'BookOfWins', '10.00'),
(19, '2018-02-06 09:06:54', '12.00', 'game bet, win', '26428043110290', 'BookOfWins', '10.00'),
(20, '2018-02-06 09:37:55', '11.90', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(21, '2018-02-06 09:38:19', '12.00', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(22, '2018-02-06 09:38:28', '11.90', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(23, '2018-02-06 09:38:31', '11.80', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(24, '2018-02-06 09:38:33', '11.80', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(25, '2018-02-06 09:41:27', '11.80', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(26, '2018-02-06 09:41:33', '11.75', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(27, '2018-02-06 09:45:05', '11.65', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(28, '2018-02-06 09:45:14', '11.75', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(29, '2018-02-06 09:45:23', '11.65', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(30, '2018-02-06 09:45:26', '11.60', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(31, '2018-02-06 09:48:38', '11.50', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(32, '2018-02-06 09:49:26', '11.45', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(33, '2018-02-06 09:49:30', '11.35', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(34, '2018-02-06 09:50:47', '11.70', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(35, '2018-02-06 09:50:57', '11.60', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(36, '2018-02-06 09:51:16', '11.60', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(37, '2018-02-06 09:51:23', '11.50', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(38, '2018-02-06 09:51:25', '11.70', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(39, '2018-02-06 09:51:35', '11.60', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(40, '2018-02-06 09:54:49', '11.70', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(41, '2018-02-06 09:54:54', '11.60', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '10.00'),
(42, '2018-02-06 09:54:59', '11.30', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '30.00'),
(43, '2018-02-06 09:55:02', '10.90', 'game bet, no win', '26428043110290', 'ComputerWorldOld', '40.00'),
(44, '2018-02-06 09:55:05', '10.70', 'game bet, win', '26428043110290', 'ComputerWorldOld', '40.00'),
(45, '2018-02-06 09:55:09', '10.50', 'game gamble loose', '26428043110290', NULL, NULL),
(46, '2018-02-06 09:55:22', '10.50', 'logout', '26428043110290', NULL, NULL),
(47, '2018-02-06 13:04:02', '10.50', 'login', '26428043110290', NULL, NULL),
(48, '2018-02-06 13:05:44', '10.50', 'login', '26428043110290', NULL, NULL),
(49, '2018-02-06 13:08:35', '11.30', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(50, '2018-02-06 13:08:41', '12.26', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(51, '2018-02-06 13:08:48', '12.26', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(52, '2018-02-06 13:08:53', '12.94', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(53, '2018-02-06 13:08:59', '12.78', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(54, '2018-02-06 13:09:10', '14.78', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(55, '2018-02-06 13:09:16', '14.38', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(56, '2018-02-06 13:09:19', '13.98', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(57, '2018-02-06 13:09:22', '13.58', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(58, '2018-02-06 13:09:24', '13.58', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(59, '2018-02-06 13:09:28', '13.18', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(60, '2018-02-06 13:09:30', '12.78', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(61, '2018-02-06 13:09:33', '12.38', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(62, '2018-02-06 13:09:35', '22.94', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(63, '2018-02-06 13:09:42', '22.54', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(64, '2018-02-06 13:09:45', '22.46', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(65, '2018-02-06 13:09:51', '24.06', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(66, '2018-02-06 13:09:55', '23.66', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(67, '2018-02-06 13:09:57', '24.46', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(68, '2018-02-06 13:10:01', '24.86', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(69, '2018-02-06 13:10:06', '48.50', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(70, '2018-02-06 13:10:54', '48.10', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(71, '2018-02-06 13:10:57', '47.70', 'game bet, no win', '26428043110290', 'Nautilus', '40.00'),
(72, '2018-02-06 13:10:59', '58.26', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(73, '2018-02-06 13:11:11', '58.66', 'game bet, win', '26428043110290', 'Nautilus', '40.00'),
(74, '2018-02-06 13:11:31', '58.26', 'game bet, no win', '26428043110290', 'Bananas', '40.00'),
(75, '2018-02-06 13:11:40', '57.36', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(76, '2018-02-06 13:11:42', '57.18', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(77, '2018-02-06 13:11:53', '74.28', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(78, '2018-02-06 13:11:57', '75.18', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(79, '2018-02-06 13:12:00', '74.64', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(80, '2018-02-06 13:12:04', '73.74', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(81, '2018-02-06 13:12:05', '73.20', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(82, '2018-02-06 13:12:10', '75.90', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(83, '2018-02-06 13:12:13', '75.00', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(84, '2018-02-06 13:12:14', '75.90', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(85, '2018-02-06 13:12:20', '87.96', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(86, '2018-02-06 13:12:24', '87.06', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(87, '2018-02-06 13:12:25', '86.16', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(88, '2018-02-06 13:12:28', '85.26', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(89, '2018-02-06 13:12:31', '84.36', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(90, '2018-02-06 13:12:33', '83.46', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(91, '2018-02-06 13:12:35', '83.28', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(92, '2018-02-06 13:12:40', '100.38', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(93, '2018-02-06 13:12:47', '99.48', 'game bet, no win', '26428043110290', 'Bananas', '90.00'),
(94, '2018-02-06 13:12:49', '104.70', 'game bet, win', '26428043110290', 'Bananas', '90.00'),
(95, '2018-02-06 13:13:17', '106.32', 'game bet, win', '26428043110290', 'Nautilus', '90.00'),
(96, '2018-02-06 13:13:24', '105.42', 'game bet, no win', '26428043110290', 'Nautilus', '90.00'),
(97, '2018-02-06 13:13:29', '104.52', 'game bet, no win', '26428043110290', 'Nautilus', '90.00'),
(98, '2018-02-06 13:13:31', '103.62', 'game bet, no win', '26428043110290', 'Nautilus', '90.00'),
(99, '2018-02-06 13:13:33', '103.44', 'game bet, win', '26428043110290', 'Nautilus', '90.00'),
(100, '2018-02-06 13:13:40', '102.54', 'game bet, no win', '26428043110290', 'Nautilus', '90.00'),
(101, '2018-02-06 13:13:42', '106.86', 'game bet, win', '26428043110290', 'Nautilus', '90.00'),
(102, '2018-02-06 13:13:51', '110.46', 'game bet, win', '26428043110290', 'Nautilus', '90.00'),
(103, '2018-02-06 13:13:56', '109.56', 'game bet, no win', '26428043110290', 'Nautilus', '90.00'),
(104, '2018-02-06 13:14:12', '109.56', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(105, '2018-02-06 13:14:19', '108.66', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(106, '2018-02-06 13:14:21', '109.56', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(107, '2018-02-06 13:14:28', '110.46', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(108, '2018-02-06 13:14:35', '109.56', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(109, '2018-02-06 13:14:37', '108.66', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(110, '2018-02-06 13:14:38', '107.76', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(111, '2018-02-06 13:14:40', '106.86', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(112, '2018-02-06 13:14:42', '106.41', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(113, '2018-02-06 13:14:47', '105.51', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(114, '2018-02-06 13:14:49', '177.96', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(115, '2018-02-06 13:20:59', '177.06', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(116, '2018-02-06 13:21:00', '177.96', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(117, '2018-02-06 13:21:06', '178.86', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(118, '2018-02-06 13:21:11', '177.96', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(119, '2018-02-06 13:21:13', '177.06', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(120, '2018-02-06 13:21:14', '196.86', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(121, '2018-02-06 13:21:22', '215.76', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(122, '2018-02-06 13:21:32', '195.96', 'game gamble loose', '26428043110290', NULL, NULL),
(123, '2018-02-06 13:21:35', '195.06', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(124, '2018-02-06 13:21:38', '194.16', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(125, '2018-02-06 13:21:40', '193.26', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(126, '2018-02-06 13:21:42', '192.36', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(127, '2018-02-06 13:21:43', '191.46', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(128, '2018-02-06 13:21:45', '190.56', 'game bet, no win', '26428043110290', 'BookOfWinner', '90.00'),
(129, '2018-02-06 13:21:46', '191.46', 'game bet, win', '26428043110290', 'BookOfWinner', '90.00'),
(130, '2018-02-06 13:22:57', '191.46', 'logout', '26428043110290', NULL, NULL),
(131, '2018-02-06 13:32:56', '191.46', 'login', '26428043110290', NULL, NULL),
(132, '2018-02-06 13:49:07', '191.45', 'game bet, no win', '26428043110290', 'BeautyDolphins', '1.00'),
(133, '2018-02-06 13:49:09', '191.44', 'game bet, no win', '26428043110290', 'BeautyDolphins', '1.00'),
(134, '2018-02-06 13:49:11', '191.47', 'game bet, win', '26428043110290', 'BeautyDolphins', '1.00'),
(135, '2018-02-06 13:49:15', '191.46', 'game bet, no win', '26428043110290', 'BeautyDolphins', '1.00'),
(136, '2018-02-06 13:50:36', '191.46', 'logout', '26428043110290', NULL, NULL),
(137, '2018-02-06 17:06:35', '191.46', 'login', '26428043110290', NULL, NULL),
(138, '2018-02-06 17:09:50', '193.51', 'game bet, win', '26428043110290', 'KingOfJewels', '20.00'),
(139, '2018-02-06 17:10:14', '193.41', 'game bet, no win', '26428043110290', 'BookOfWinner', '10.00'),
(140, '2018-02-06 17:10:38', '193.41', 'logout', '26428043110290', NULL, NULL),
(141, '2018-02-06 17:30:39', '193.41', 'login', '26428043110290', NULL, NULL),
(142, '2018-02-06 17:32:33', '193.40', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(143, '2018-02-06 17:32:39', '193.39', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(144, '2018-02-06 17:32:48', '193.38', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(145, '2018-02-06 17:33:38', '193.37', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(146, '2018-02-06 17:33:46', '195.46', 'game bet, win', '26428043110290', 'BookOfRa', '1.00'),
(147, '2018-02-06 17:34:56', '195.50', 'game bet, win', '26428043110290', 'BookOfRa', '1.00'),
(148, '2018-02-06 17:34:59', '195.49', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(149, '2018-02-06 17:35:02', '195.48', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(150, '2018-02-06 17:35:09', '195.47', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(151, '2018-02-06 17:35:18', '195.56', 'game bet, win', '26428043110290', 'BookOfRa', '1.00'),
(152, '2018-02-06 17:35:51', '195.55', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(153, '2018-02-06 17:35:53', '195.54', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(154, '2018-02-06 17:35:56', '195.53', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(155, '2018-02-06 17:35:58', '195.62', 'game bet, win', '26428043110290', 'BookOfRa', '1.00'),
(156, '2018-02-06 17:36:05', '195.61', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(157, '2018-02-06 17:36:49', '195.60', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(158, '2018-02-06 17:36:51', '195.61', 'game bet, win', '26428043110290', 'GoldenHarvest', '1.00'),
(159, '2018-02-06 17:36:56', '195.60', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(160, '2018-02-06 17:36:58', '195.59', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(161, '2018-02-06 17:37:01', '195.58', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(162, '2018-02-06 17:37:03', '195.57', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(163, '2018-02-06 17:37:06', '195.58', 'game bet, win', '26428043110290', 'GoldenHarvest', '1.00'),
(164, '2018-02-06 17:37:23', '195.57', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(165, '2018-02-06 17:37:26', '195.56', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(166, '2018-02-06 17:37:29', '195.57', 'game bet, win', '26428043110290', 'GoldenHarvest', '1.00'),
(167, '2018-02-06 18:06:45', '195.56', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(168, '2018-02-06 18:07:11', '195.55', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(169, '2018-02-06 18:30:47', '195.54', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(170, '2018-02-06 18:30:50', '195.53', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(171, '2018-02-06 18:30:53', '195.52', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(172, '2018-02-06 18:30:55', '195.51', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(173, '2018-02-06 18:31:04', '195.50', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(174, '2018-02-06 19:17:00', '195.49', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(175, '2018-02-06 21:15:33', '195.48', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(176, '2018-02-06 21:15:35', '195.47', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(177, '2018-02-06 21:15:37', '195.46', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(178, '2018-02-06 21:15:40', '195.45', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(179, '2018-02-06 21:15:42', '195.54', 'game bet, win', '26428043110290', 'BookOfRa', '1.00'),
(180, '2018-02-06 21:16:07', '195.53', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(181, '2018-02-06 21:16:10', '195.52', 'game bet, no win', '26428043110290', 'BookOfRa', '1.00'),
(182, '2018-02-06 21:16:34', '195.51', 'game bet, no win', '26428043110290', 'BeautyDolphins', '1.00'),
(183, '2018-02-06 21:16:36', '195.54', 'game bet, win', '26428043110290', 'BeautyDolphins', '1.00'),
(184, '2018-02-06 21:16:42', '195.53', 'game bet, no win', '26428043110290', 'BeautyDolphins', '1.00'),
(185, '2018-02-06 21:16:58', '195.52', 'game bet, no win', '26428043110290', 'SavannaQueen', '1.00'),
(186, '2018-02-06 21:17:01', '195.55', 'game bet, win', '26428043110290', 'SavannaQueen', '1.00'),
(187, '2018-02-06 21:17:11', '195.54', 'game bet, no win', '26428043110290', 'SavannaQueen', '1.00'),
(188, '2018-02-06 21:17:31', '195.53', 'game bet, no win', '26428043110290', 'BookOfWins', '1.00'),
(189, '2018-02-06 21:17:34', '195.52', 'game bet, no win', '26428043110290', 'BookOfWins', '1.00'),
(190, '2018-02-06 21:17:37', '195.61', 'game bet, win', '26428043110290', 'BookOfWins', '1.00'),
(191, '2018-02-06 21:18:14', '195.60', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(192, '2018-02-06 21:18:23', '195.59', 'game bet, no win', '26428043110290', 'GoldenHarvest', '1.00'),
(193, '2018-02-06 21:18:26', '195.66', 'game bet, win', '26428043110290', 'GoldenHarvest', '1.00'),
(194, '2018-02-06 21:18:52', '195.65', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(195, '2018-02-06 21:18:56', '195.64', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(196, '2018-02-06 21:19:03', '195.63', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(197, '2018-02-06 21:19:06', '195.62', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(198, '2018-02-06 21:20:30', '199.22', 'game bet, win', '26428043110290', 'HitJewels', '40.00'),
(199, '2018-02-06 21:21:05', '199.22', 'logout', '26428043110290', NULL, NULL),
(200, '2018-02-07 08:28:08', '199.22', 'login', '26428043110290', NULL, NULL),
(201, '2018-02-07 08:29:01', '199.12', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(202, '2018-02-07 08:29:05', '199.02', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(203, '2018-02-07 08:29:08', '199.22', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(204, '2018-02-07 08:29:15', '199.42', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(205, '2018-02-07 08:29:45', '199.32', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(206, '2018-02-07 08:30:40', '199.22', 'game bet, no win', '26428043110290', 'TropicalFruit', '10.00'),
(207, '2018-02-07 08:30:42', '199.12', 'game bet, no win', '26428043110290', 'TropicalFruit', '10.00'),
(208, '2018-02-07 08:30:45', '199.02', 'game bet, no win', '26428043110290', 'TropicalFruit', '10.00'),
(209, '2018-02-07 08:30:48', '199.42', 'game bet, win', '26428043110290', 'TropicalFruit', '10.00'),
(210, '2018-02-07 08:32:20', '123.00', 'login', '69614983538117', NULL, NULL),
(211, '2018-02-07 08:32:28', '122.60', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(212, '2018-02-07 08:32:31', '122.20', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(213, '2018-02-07 08:32:33', '121.80', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(214, '2018-02-07 08:32:35', '121.40', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(215, '2018-02-07 08:32:37', '121.00', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(216, '2018-02-07 08:32:48', '120.60', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(217, '2018-02-07 08:32:57', '120.20', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(218, '2018-02-07 08:33:00', '119.80', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(219, '2018-02-07 08:33:05', '119.40', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(220, '2018-02-07 08:33:10', '119.00', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(221, '2018-02-07 08:33:13', '199.57', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(222, '2018-02-07 08:33:19', '200.97', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(223, '2018-02-07 08:33:19', '118.60', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(224, '2018-02-07 08:33:26', '200.87', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(225, '2018-02-07 08:33:29', '200.77', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(226, '2018-02-07 08:33:31', '200.82', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(227, '2018-02-07 08:33:36', '200.82', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(228, '2018-02-07 08:33:42', '200.72', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(229, '2018-02-07 08:33:44', '200.62', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(230, '2018-02-07 08:33:46', '200.52', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(231, '2018-02-07 08:33:49', '200.42', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(232, '2018-02-07 08:33:51', '200.32', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(233, '2018-02-07 08:33:53', '200.72', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(234, '2018-02-07 08:34:20', '200.62', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(235, '2018-02-07 08:34:22', '200.52', 'game bet, no win', '26428043110290', 'KingOfJewels', '10.00'),
(236, '2018-02-07 08:34:24', '201.02', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(237, '2018-02-07 08:34:29', '201.42', 'game bet, win', '26428043110290', 'KingOfJewels', '10.00'),
(238, '2018-02-07 08:35:12', '201.32', 'game bet, no win', '26428043110290', 'BookOfWinner', '10.00'),
(239, '2018-02-07 08:35:29', '118.20', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(240, '2018-02-07 08:35:32', '117.80', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(241, '2018-02-07 08:35:39', '201.32', 'game bet, win', '26428043110290', 'BookOfWinner', '10.00'),
(242, '2018-02-07 08:35:46', '201.22', 'game bet, no win', '26428043110290', 'BookOfWinner', '10.00'),
(243, '2018-02-07 08:41:48', '201.28', 'game bet, win', '26428043110290', 'Bananas', '10.00'),
(244, '2018-02-07 08:41:55', '201.38', 'game bet, win', '26428043110290', 'Bananas', '10.00'),
(245, '2018-02-07 08:56:13', '117.40', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(246, '2018-02-07 08:56:15', '117.00', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(247, '2018-02-07 08:56:18', '116.60', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(248, '2018-02-07 08:56:21', '116.20', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(249, '2018-02-07 08:56:23', '115.80', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(250, '2018-02-07 08:56:26', '121.40', 'game bet, win', '69614983538117', 'KingOfJewels', '40.00'),
(251, '2018-02-07 08:56:36', '121.00', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(252, '2018-02-07 08:56:39', '120.60', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(253, '2018-02-07 08:56:41', '120.20', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(254, '2018-02-07 08:56:44', '119.80', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(255, '2018-02-07 08:56:45', '119.40', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(256, '2018-02-07 08:56:47', '119.00', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(257, '2018-02-07 08:56:48', '118.60', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(258, '2018-02-07 08:56:50', '118.20', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(259, '2018-02-07 08:58:27', '117.80', 'game bet, no win', '69614983538117', 'KingOfJewels', '40.00'),
(260, '2018-02-07 09:10:41', '201.38', 'login', '26428043110290', NULL, NULL),
(261, '2018-02-07 09:10:52', '201.28', 'game bet, no win', '26428043110290', 'ComputerWorld', '10.00'),
(262, '2018-02-07 09:10:55', '201.18', 'game bet, no win', '26428043110290', 'ComputerWorld', '10.00'),
(263, '2018-02-07 09:10:57', '201.18', 'game bet, win', '26428043110290', 'ComputerWorld', '10.00'),
(264, '2018-02-07 09:17:10', '201.18', 'game bet, win', '26428043110290', 'ComputerWorld', '10.00'),
(265, '2018-02-07 09:17:14', '201.13', 'game bet, win', '26428043110290', 'ComputerWorld', '10.00'),
(266, '2018-02-07 09:18:02', '201.38', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(267, '2018-02-07 09:18:13', '201.78', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(268, '2018-02-07 09:18:20', '201.88', 'game bet, win', '26428043110290', 'ComputerWorldOld', '10.00'),
(269, '2018-02-07 09:19:00', '201.83', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(270, '2018-02-07 09:19:02', '201.78', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(271, '2018-02-07 09:19:04', '201.73', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(272, '2018-02-07 09:19:06', '204.88', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(273, '2018-02-07 09:20:26', '204.83', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(274, '2018-02-07 09:20:28', '204.78', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(275, '2018-02-07 09:20:31', '204.73', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(276, '2018-02-07 09:20:33', '204.68', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(277, '2018-02-07 09:20:35', '204.63', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(278, '2018-02-07 09:20:36', '204.63', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(279, '2018-02-07 09:20:45', '204.68', 'game gamble win', '26428043110290', NULL, NULL),
(280, '2018-02-07 09:20:53', '204.78', 'game gamble win', '26428043110290', NULL, NULL),
(281, '2018-02-07 09:21:04', '204.88', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(282, '2018-02-07 09:21:11', '204.83', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(283, '2018-02-07 09:21:14', '205.08', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(284, '2018-02-07 09:21:17', '205.03', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(285, '2018-02-07 09:21:19', '206.98', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(286, '2018-02-07 09:21:25', '206.93', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(287, '2018-02-07 09:21:27', '206.98', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(288, '2018-02-07 09:21:33', '206.93', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(289, '2018-02-07 09:21:36', '206.88', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(290, '2018-02-07 09:21:37', '206.88', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(291, '2018-02-07 09:21:42', '206.83', 'game gamble loose', '26428043110290', NULL, NULL),
(292, '2018-02-07 09:21:44', '206.88', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(293, '2018-02-07 09:22:15', '206.83', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(294, '2018-02-07 09:22:16', '208.98', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(295, '2018-02-07 09:22:24', '208.93', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(296, '2018-02-07 09:22:27', '208.98', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(297, '2018-02-07 09:22:30', '209.03', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(298, '2018-02-07 09:22:42', '208.98', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(299, '2018-02-07 09:22:43', '208.93', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(300, '2018-02-07 09:22:45', '208.88', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(301, '2018-02-07 09:22:47', '208.88', 'game bet, win', '26428043110290', 'BookOfWinner', '5.00'),
(302, '2018-02-07 09:23:37', '208.83', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(303, '2018-02-07 09:23:40', '208.78', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(304, '2018-02-07 09:23:41', '215.43', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(305, '2018-02-07 09:24:47', '222.13', 'game gamble win', '26428043110290', NULL, NULL),
(306, '2018-02-07 09:27:59', '222.28', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(307, '2018-02-07 09:28:07', '222.23', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(308, '2018-02-07 09:28:08', '222.23', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(309, '2018-02-07 09:28:16', '222.18', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(310, '2018-02-07 09:29:35', '222.13', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(311, '2018-02-07 09:29:37', '222.08', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(312, '2018-02-07 09:29:39', '222.13', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(313, '2018-02-07 09:30:18', '222.08', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(314, '2018-02-07 09:30:38', '222.13', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(315, '2018-02-07 09:30:48', '222.18', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(316, '2018-02-07 09:44:28', '222.23', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(317, '2018-02-07 09:44:34', '222.23', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(318, '2018-02-07 09:46:15', '222.18', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(319, '2018-02-07 09:46:17', '222.13', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(320, '2018-02-07 09:46:18', '222.08', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(321, '2018-02-07 09:46:21', '222.03', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(322, '2018-02-07 09:46:25', '223.03', 'game bet, win', '26428043110290', 'BookOfRa', '5.00'),
(323, '2018-02-07 09:46:40', '222.98', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(324, '2018-02-07 09:46:43', '222.93', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(325, '2018-02-07 10:05:58', '222.92', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(326, '2018-02-07 10:06:02', '222.91', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(327, '2018-02-07 10:06:06', '222.90', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(328, '2018-02-07 10:06:09', '222.89', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(329, '2018-02-07 10:06:14', '222.88', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(330, '2018-02-07 10:06:18', '222.87', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(331, '2018-02-07 10:07:14', '222.86', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(332, '2018-02-07 10:07:18', '222.85', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(333, '2018-02-07 10:07:22', '222.84', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(334, '2018-02-07 10:07:24', '222.83', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(335, '2018-02-07 10:25:33', '223.11', 'game bet, win', '26428043110290', 'BookOfWinner', '12.00'),
(336, '2018-02-07 10:41:59', '223.10', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(337, '2018-02-07 10:42:03', '223.09', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(338, '2018-02-07 10:42:06', '223.08', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(339, '2018-02-07 10:42:09', '223.07', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(340, '2018-02-07 10:42:12', '223.06', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(341, '2018-02-07 10:42:15', '223.05', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(342, '2018-02-07 10:42:19', '223.04', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(343, '2018-02-07 10:42:23', '223.03', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(344, '2018-02-07 10:42:25', '223.02', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(345, '2018-02-07 10:42:27', '223.01', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(346, '2018-02-07 10:42:29', '223.00', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(347, '2018-02-07 10:43:06', '222.99', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(348, '2018-02-07 10:43:14', '222.98', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(349, '2018-02-07 10:43:16', '222.97', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(350, '2018-02-07 10:43:18', '223.01', 'game bet, win', '26428043110290', 'BookOfWinner', '1.00'),
(351, '2018-02-07 10:43:24', '223.10', 'game bet, win', '26428043110290', 'BookOfWinner', '1.00'),
(352, '2018-02-07 10:43:32', '223.09', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(353, '2018-02-07 10:43:33', '223.08', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(354, '2018-02-07 10:43:35', '223.07', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(355, '2018-02-07 10:43:36', '223.06', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(356, '2018-02-07 10:43:37', '223.05', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(357, '2018-02-07 10:43:39', '223.04', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(358, '2018-02-07 10:43:45', '223.23', 'game bet, win', '26428043110290', 'BookOfWinner', '1.00'),
(359, '2018-02-07 10:44:22', '223.22', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(360, '2018-02-07 10:47:11', '223.21', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(361, '2018-02-07 10:47:13', '223.20', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(362, '2018-02-07 10:47:15', '223.19', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(363, '2018-02-07 10:47:20', '223.18', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(364, '2018-02-07 10:47:26', '223.17', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(365, '2018-02-07 10:48:46', '223.16', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(366, '2018-02-07 10:48:50', '223.15', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(367, '2018-02-07 10:48:58', '223.14', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(368, '2018-02-07 10:49:00', '223.15', 'game bet, win', '26428043110290', 'TropicalFruit', '1.00'),
(369, '2018-02-07 10:49:13', '223.14', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(370, '2018-02-07 10:49:17', '223.13', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(371, '2018-02-07 10:49:21', '223.12', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(372, '2018-02-07 10:49:25', '223.11', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(373, '2018-02-07 10:49:32', '223.10', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(374, '2018-02-07 10:49:34', '223.11', 'game bet, win', '26428043110290', 'TropicalFruit', '1.00'),
(375, '2018-02-07 10:52:58', '223.10', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(376, '2018-02-07 10:53:07', '223.09', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(377, '2018-02-07 10:53:16', '223.08', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(378, '2018-02-07 10:53:25', '223.09', 'game bet, win', '26428043110290', 'TropicalFruit', '1.00'),
(379, '2018-02-07 10:53:29', '223.08', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(380, '2018-02-07 10:53:36', '223.07', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(381, '2018-02-07 10:53:37', '223.16', 'game bet, win', '26428043110290', 'TropicalFruit', '1.00'),
(382, '2018-02-07 10:54:04', '223.26', 'game gamble win', '26428043110290', NULL, NULL),
(383, '2018-02-07 10:55:18', '223.25', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(384, '2018-02-07 10:55:20', '223.24', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(385, '2018-02-07 10:55:23', '223.23', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(386, '2018-02-07 10:55:31', '223.22', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(387, '2018-02-07 10:55:33', '223.23', 'game bet, win', '26428043110290', 'TropicalFruit', '1.00'),
(388, '2018-02-07 10:55:37', '223.22', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(389, '2018-02-07 10:55:39', '223.21', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(390, '2018-02-07 10:55:41', '223.20', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(391, '2018-02-07 10:55:43', '223.19', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(392, '2018-02-07 10:56:04', '223.18', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(393, '2018-02-07 10:57:14', '223.27', 'game bet, win', '26428043110290', 'BookOfWinner', '1.00'),
(394, '2018-02-07 10:58:27', '223.26', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(395, '2018-02-07 10:58:30', '223.25', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(396, '2018-02-07 10:58:32', '223.34', 'game bet, win', '26428043110290', 'BookOfWinner', '1.00'),
(397, '2018-02-07 10:59:23', '223.24', 'game gamble loose', '26428043110290', NULL, NULL),
(398, '2018-02-07 11:14:06', '223.25', 'game bet, win', '26428043110290', 'TropicalFruit', '1.00'),
(399, '2018-02-07 11:31:35', '117.80', 'login', '69614983538117', NULL, NULL),
(400, '2018-02-07 11:32:55', '118.70', 'game bet, win', '69614983538117', 'ComputerWorldOld', '20.00'),
(401, '2018-02-07 11:41:40', '223.24', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(402, '2018-02-07 11:53:13', '223.23', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(403, '2018-02-07 12:04:12', '118.60', 'game bet, win', '69614983538117', 'ComputerWorldOld', '20.00'),
(404, '2018-02-07 12:04:19', '118.75', 'game bet, win', '69614983538117', 'ComputerWorldOld', '20.00'),
(405, '2018-02-07 12:05:07', '118.55', 'game bet, no win', '69614983538117', 'ComputerWorldOld', '20.00'),
(406, '2018-02-07 12:23:21', '223.22', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(407, '2018-02-07 12:23:23', '223.21', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(408, '2018-02-07 12:23:24', '223.20', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(409, '2018-02-07 12:23:25', '223.19', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(410, '2018-02-07 12:23:27', '223.18', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(411, '2018-02-07 12:23:29', '223.17', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(412, '2018-02-07 12:23:32', '223.16', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(413, '2018-02-07 12:28:49', '119.35', 'game bet, win', '69614983538117', 'ComputerWorldOld', '20.00'),
(414, '2018-02-07 12:32:10', '223.15', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(415, '2018-02-07 12:32:12', '223.14', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(416, '2018-02-07 12:35:55', '223.13', 'game bet, no win', '26428043110290', 'TropicalFruit', '1.00'),
(417, '2018-02-07 12:35:57', '223.22', 'game bet, win', '26428043110290', 'TropicalFruit', '1.00'),
(418, '2018-02-07 12:36:04', '223.12', 'game gamble loose', '26428043110290', NULL, NULL),
(419, '2018-02-07 12:37:03', '223.11', 'game bet, no win', '26428043110290', 'ComputerWorld', '1.00'),
(420, '2018-02-07 12:39:45', '223.10', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(421, '2018-02-07 12:39:47', '223.59', 'game bet, win', '26428043110290', 'HitJewels', '1.00'),
(422, '2018-02-07 12:40:27', '223.58', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(423, '2018-02-07 12:40:30', '223.57', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(424, '2018-02-07 12:40:32', '223.56', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(425, '2018-02-07 12:40:36', '223.55', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(426, '2018-02-07 12:40:38', '223.54', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(427, '2018-02-07 12:40:41', '223.53', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(428, '2018-02-07 12:40:42', '223.52', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(429, '2018-02-07 12:40:44', '223.51', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(430, '2018-02-07 12:40:45', '223.50', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(431, '2018-02-07 12:40:48', '223.49', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(432, '2018-02-07 12:40:50', '223.48', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(433, '2018-02-07 12:40:52', '223.47', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(434, '2018-02-07 12:40:55', '223.46', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(435, '2018-02-07 12:40:57', '223.45', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(436, '2018-02-07 12:41:00', '223.44', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(437, '2018-02-07 12:41:01', '223.43', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(438, '2018-02-07 12:41:03', '243.42', 'game bet, win', '26428043110290', 'BookOfWinner', '1.00'),
(439, '2018-02-07 12:43:07', '243.41', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(440, '2018-02-07 12:43:10', '243.40', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(441, '2018-02-07 12:43:11', '243.39', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(442, '2018-02-07 12:43:13', '243.38', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(443, '2018-02-07 12:43:14', '243.37', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(444, '2018-02-07 12:43:16', '243.36', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(445, '2018-02-07 12:43:18', '243.35', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(446, '2018-02-07 12:43:24', '243.34', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(447, '2018-02-07 12:43:26', '243.63', 'game bet, win', '26428043110290', 'BookOfWinner', '1.00'),
(448, '2018-02-07 12:53:23', '243.62', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(449, '2018-02-07 12:53:33', '243.76', 'game bet, win', '26428043110290', 'HitJewels', '1.00'),
(450, '2018-02-07 12:54:36', '243.61', 'game gamble loose', '26428043110290', NULL, NULL),
(451, '2018-02-07 12:54:49', '243.60', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(452, '2018-02-07 12:54:51', '243.59', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(453, '2018-02-07 12:54:53', '243.58', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(454, '2018-02-07 12:54:54', '243.57', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(455, '2018-02-07 12:54:56', '243.58', 'game bet, win', '26428043110290', 'HitJewels', '1.00'),
(456, '2018-02-07 12:56:00', '243.57', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(457, '2018-02-07 12:56:04', '243.56', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(458, '2018-02-07 12:56:06', '243.55', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(459, '2018-02-07 12:56:08', '243.84', 'game bet, win', '26428043110290', 'HitJewels', '1.00'),
(460, '2018-02-07 13:02:43', '243.83', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(461, '2018-02-07 13:02:46', '243.82', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(462, '2018-02-07 13:02:47', '243.81', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(463, '2018-02-07 13:02:49', '243.80', 'game bet, no win', '26428043110290', 'HitJewels', '1.00'),
(464, '2018-02-07 13:03:03', '243.80', 'game bet, win', '26428043110290', 'HitJewels', '20.00'),
(465, '2018-02-07 13:03:07', '243.90', 'game bet, win', '26428043110290', 'HitJewels', '20.00'),
(466, '2018-02-07 13:03:39', '243.75', 'game bet, win', '26428043110290', 'BookOfWinner', '20.00'),
(467, '2018-02-07 13:03:44', '243.55', 'game bet, no win', '26428043110290', 'BookOfWinner', '20.00'),
(468, '2018-02-07 13:03:46', '243.40', 'game bet, win', '26428043110290', 'BookOfWinner', '20.00'),
(469, '2018-02-07 13:03:49', '307.40', 'game bet, win', '26428043110290', 'BookOfWinner', '20.00'),
(470, '2018-02-07 13:20:52', '307.35', 'game bet, win', '26428043110290', 'KingOfJewels', '20.00'),
(471, '2018-02-07 13:21:00', '307.15', 'game bet, no win', '26428043110290', 'KingOfJewels', '20.00'),
(472, '2018-02-07 13:21:02', '306.95', 'game bet, no win', '26428043110290', 'KingOfJewels', '20.00'),
(473, '2018-02-07 13:21:04', '307.80', 'game bet, win', '26428043110290', 'KingOfJewels', '20.00'),
(474, '2018-02-07 13:21:18', '308.60', 'game bet, win', '26428043110290', 'KingOfJewels', '20.00'),
(475, '2018-02-07 13:21:48', '309.55', 'game bet, win', '26428043110290', 'KingOfJewels', '20.00'),
(476, '2018-02-07 13:22:12', '309.35', 'game bet, no win', '26428043110290', 'KingOfJewels', '20.00'),
(477, '2018-02-07 13:22:14', '309.65', 'game bet, win', '26428043110290', 'KingOfJewels', '20.00'),
(478, '2018-02-07 13:22:17', '309.75', 'game bet, win', '26428043110290', 'KingOfJewels', '20.00'),
(479, '2018-02-07 13:24:24', '309.55', 'game bet, no win', '26428043110290', 'ComputerWorld', '20.00'),
(480, '2018-02-07 13:25:09', '309.80', 'game bet, win', '26428043110290', 'ComputerWorld', '20.00'),
(481, '2018-02-07 13:25:31', '310.20', 'game bet, win', '26428043110290', 'ComputerWorld', '20.00'),
(482, '2018-02-07 13:25:49', '310.00', 'game bet, no win', '26428043110290', 'ComputerWorld', '20.00'),
(483, '2018-02-07 13:25:50', '309.80', 'game bet, no win', '26428043110290', 'ComputerWorld', '20.00'),
(484, '2018-02-07 13:25:52', '309.60', 'game bet, no win', '26428043110290', 'ComputerWorld', '20.00'),
(485, '2018-02-07 13:25:53', '309.40', 'game bet, no win', '26428043110290', 'ComputerWorld', '20.00'),
(486, '2018-02-07 13:25:55', '309.35', 'game bet, win', '26428043110290', 'ComputerWorld', '20.00'),
(487, '2018-02-07 13:26:00', '309.15', 'game bet, no win', '26428043110290', 'ComputerWorld', '20.00'),
(488, '2018-02-07 13:26:02', '308.95', 'game bet, no win', '26428043110290', 'ComputerWorld', '20.00'),
(489, '2018-02-07 13:26:56', '308.85', 'game bet, no win', '26428043110290', 'ComputerWorld', '10.00'),
(490, '2018-02-07 13:26:57', '308.85', 'game bet, win', '26428043110290', 'ComputerWorld', '10.00'),
(491, '2018-02-07 13:27:02', '308.75', 'game bet, no win', '26428043110290', 'ComputerWorld', '10.00'),
(492, '2018-02-07 13:28:34', '308.65', 'game bet, no win', '26428043110290', 'ComputerWorld', '10.00'),
(493, '2018-02-07 13:28:36', '308.55', 'game bet, no win', '26428043110290', 'ComputerWorld', '10.00'),
(494, '2018-02-07 13:28:37', '308.80', 'game bet, win', '26428043110290', 'ComputerWorld', '10.00'),
(495, '2018-02-07 13:29:12', '308.70', 'game bet, no win', '26428043110290', 'BookOfWinner', '10.00'),
(496, '2018-02-07 13:29:14', '309.60', 'game bet, win', '26428043110290', 'BookOfWinner', '10.00'),
(497, '2018-02-07 13:29:36', '310.00', 'game bet, win', '26428043110290', 'TropicalFruit', '10.00'),
(498, '2018-02-07 13:29:40', '309.90', 'game bet, no win', '26428043110290', 'TropicalFruit', '10.00'),
(499, '2018-02-07 13:29:43', '309.80', 'game bet, no win', '26428043110290', 'TropicalFruit', '10.00'),
(500, '2018-02-07 13:29:44', '309.70', 'game bet, no win', '26428043110290', 'TropicalFruit', '10.00'),
(501, '2018-02-07 13:29:47', '309.60', 'game bet, no win', '26428043110290', 'TropicalFruit', '10.00'),
(502, '2018-02-07 13:29:48', '309.90', 'game bet, win', '26428043110290', 'TropicalFruit', '10.00'),
(503, '2018-02-07 13:33:26', '309.90', 'game bet, win', '26428043110290', 'TropicalFruit', '10.00'),
(504, '2018-02-07 13:33:30', '309.95', 'game bet, win', '26428043110290', 'TropicalFruit', '10.00'),
(505, '2018-02-07 13:33:36', '310.10', 'game gamble win', '26428043110290', NULL, NULL),
(506, '2018-02-07 13:33:39', '310.40', 'game gamble win', '26428043110290', NULL, NULL),
(507, '2018-02-07 13:33:42', '311.00', 'game gamble win', '26428043110290', NULL, NULL),
(508, '2018-02-07 13:34:35', '310.90', 'game bet, no win', '26428043110290', 'RollOfRamses', '10.00'),
(509, '2018-02-07 13:34:39', '310.80', 'game bet, no win', '26428043110290', 'RollOfRamses', '10.00'),
(510, '2018-02-07 13:34:41', '310.70', 'game bet, no win', '26428043110290', 'RollOfRamses', '10.00'),
(511, '2018-02-07 13:34:43', '310.60', 'game bet, no win', '26428043110290', 'RollOfRamses', '10.00'),
(512, '2018-02-07 13:34:48', '310.60', 'game bet, win', '26428043110290', 'RollOfRamses', '10.00');
INSERT INTO `stats_pin` (`id`, `data`, `summa`, `sobytie`, `PIN`, `game`, `stav`) VALUES
(513, '2018-02-07 13:34:55', '310.50', 'game bet, no win', '26428043110290', 'RollOfRamses', '10.00'),
(514, '2018-02-07 13:34:56', '310.40', 'game bet, no win', '26428043110290', 'RollOfRamses', '10.00'),
(515, '2018-02-07 13:34:58', '310.40', 'game bet, win', '26428043110290', 'RollOfRamses', '10.00'),
(516, '2018-02-07 13:35:14', '310.60', 'game bet, win', '26428043110290', 'RollOfRamses', '10.00'),
(517, '2018-02-07 13:35:54', '310.70', 'game bet, win', '26428043110290', 'RollOfRamses', '10.00'),
(518, '2018-02-07 14:13:29', '119.15', 'game bet, no win', '69614983538117', 'TropicalFruit', '20.00'),
(519, '2018-02-07 14:13:31', '118.95', 'game bet, no win', '69614983538117', 'TropicalFruit', '20.00'),
(520, '2018-02-07 14:13:33', '119.15', 'game bet, win', '69614983538117', 'TropicalFruit', '20.00'),
(521, '2018-02-07 15:03:01', '119.15', 'login', '69614983538117', NULL, NULL),
(522, '2018-02-07 15:04:08', '119.25', 'game bet, win', '69614983538117', 'BookOfWinner', '20.00'),
(523, '2018-02-07 15:04:48', '118.95', 'game gamble loose', '69614983538117', NULL, NULL),
(524, '2018-02-07 15:08:00', '119.20', 'game bet, win', '69614983538117', 'TropicalFruit', '20.00'),
(525, '2018-02-07 15:09:07', '119.30', 'game bet, win', '69614983538117', 'TropicalFruit', '20.00'),
(526, '2018-02-07 15:09:14', '121.20', 'game bet, win', '69614983538117', 'TropicalFruit', '20.00'),
(527, '2018-02-07 15:09:25', '121.20', 'game bet, win', '69614983538117', 'TropicalFruit', '20.00'),
(528, '2018-02-07 15:10:21', '121.30', 'game bet, win', '69614983538117', 'TropicalFruit', '20.00'),
(529, '2018-02-07 15:10:47', '121.10', 'game bet, no win', '69614983538117', 'TropicalFruit', '20.00'),
(530, '2018-02-07 15:26:57', '120.90', 'game bet, no win', '69614983538117', 'TropicalFruit', '20.00'),
(531, '2018-02-07 15:27:05', '120.85', 'game bet, win', '69614983538117', 'TropicalFruit', '20.00'),
(532, '2018-02-08 09:23:25', '0.00', 'login', '04438815414421', NULL, NULL),
(533, '2018-02-08 09:25:08', '0.00', 'logout', '04438815414421', NULL, NULL),
(534, '2018-02-08 09:26:52', '500.00', 'login', '54680203372338', NULL, NULL),
(535, '2018-02-08 09:28:09', '500.00', 'logout', '54680203372338', NULL, NULL),
(536, '2018-02-08 09:30:34', '310.70', 'login', '26428043110290', NULL, NULL),
(537, '2018-02-08 09:35:52', '310.65', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(538, '2018-02-08 09:35:55', '310.60', 'game bet, no win', '26428043110290', 'BookOfWinner', '5.00'),
(539, '2018-02-08 09:36:11', '310.55', 'game bet, no win', '26428043110290', 'BookOfRa', '5.00'),
(540, '2018-02-08 09:37:44', '500.00', 'login', '54680203372338', NULL, NULL),
(541, '2018-02-08 09:37:58', '495.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(542, '2018-02-08 09:38:00', '491.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(543, '2018-02-08 09:38:02', '491.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(544, '2018-02-08 09:38:08', '502.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(545, '2018-02-08 09:38:17', '497.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(546, '2018-02-08 09:38:19', '493.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(547, '2018-02-08 09:38:21', '488.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(548, '2018-02-08 09:38:23', '484.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(549, '2018-02-08 09:38:25', '482.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(550, '2018-02-08 09:38:30', '482.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(551, '2018-02-08 09:38:35', '480.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(552, '2018-02-08 09:38:39', '496.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(553, '2018-02-08 09:38:47', '491.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(554, '2018-02-08 09:38:49', '497.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(555, '2018-02-08 09:38:56', '492.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(556, '2018-02-08 09:38:58', '495.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(557, '2018-02-08 09:39:06', '498.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(558, '2018-02-08 09:39:14', '494.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(559, '2018-02-08 09:39:16', '489.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(560, '2018-02-08 09:39:18', '487.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(561, '2018-02-08 09:39:22', '488.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(562, '2018-02-08 09:39:28', '486.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(563, '2018-02-08 09:39:33', '486.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(564, '2018-02-08 09:39:39', '482.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(565, '2018-02-08 09:39:41', '480.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(566, '2018-02-08 09:39:45', '485.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(567, '2018-02-08 09:39:52', '486.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(568, '2018-02-08 09:39:57', '481.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(569, '2018-02-08 09:39:59', '492.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(570, '2018-02-08 09:39:59', '310.54', 'game bet, win', '26428043110290', 'GryphonsGold', '5.00'),
(571, '2018-02-08 09:40:06', '487.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(572, '2018-02-08 09:40:08', '483.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(573, '2018-02-08 09:40:10', '478.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(574, '2018-02-08 09:40:13', '494.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(575, '2018-02-08 09:40:19', '489.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(576, '2018-02-08 09:40:21', '485.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(577, '2018-02-08 09:40:23', '683.00', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(578, '2018-02-08 09:40:35', '678.50', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(579, '2018-02-08 09:40:38', '676.50', 'game bet, win', '54680203372338', 'Mariner', '45.00'),
(580, '2018-02-08 09:40:42', '672.00', 'game bet, no win', '54680203372338', 'Mariner', '45.00'),
(581, '2018-02-08 09:41:41', '692.00', 'game bet, win', '54680203372338', 'DolphinsPearl', '72.00'),
(582, '2018-02-08 09:41:48', '684.80', 'game bet, no win', '54680203372338', 'DolphinsPearl', '72.00'),
(583, '2018-02-08 09:41:50', '692.00', 'game bet, win', '54680203372338', 'DolphinsPearl', '72.00'),
(584, '2018-02-08 10:49:43', '310.54', 'login', '26428043110290', NULL, NULL),
(585, '2018-02-08 10:50:06', '318.54', 'game bet, win', '26428043110290', 'BeautyDolphins', '40.00'),
(586, '2018-02-08 10:54:01', '318.14', 'game bet, no win', '26428043110290', 'BeautyDolphins', '40.00'),
(587, '2018-02-08 10:54:05', '317.74', 'game bet, no win', '26428043110290', 'BeautyDolphins', '40.00'),
(588, '2018-02-08 10:54:08', '318.14', 'game bet, win', '26428043110290', 'BeautyDolphins', '40.00'),
(589, '2018-02-08 10:56:03', '317.74', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(590, '2018-02-08 10:56:06', '317.34', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(591, '2018-02-08 10:56:08', '318.94', 'game bet, win', '26428043110290', 'BookOfRa', '40.00'),
(592, '2018-02-08 10:56:19', '318.54', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(593, '2018-02-08 10:56:22', '318.14', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(594, '2018-02-08 10:56:24', '317.74', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(595, '2018-02-08 10:56:27', '321.34', 'game bet, win', '26428043110290', 'BookOfRa', '40.00'),
(596, '2018-02-08 10:56:35', '320.94', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(597, '2018-02-08 10:56:37', '320.54', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(598, '2018-02-08 10:56:40', '320.14', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(599, '2018-02-08 10:56:45', '319.74', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(600, '2018-02-08 10:56:55', '323.34', 'game bet, win', '26428043110290', 'BookOfRa', '40.00'),
(601, '2018-02-08 10:57:03', '322.94', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(602, '2018-02-08 10:57:05', '322.54', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(603, '2018-02-08 10:57:07', '322.14', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(604, '2018-02-08 10:57:09', '321.74', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(605, '2018-02-08 10:57:10', '321.34', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(606, '2018-02-08 10:57:13', '320.94', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(607, '2018-02-08 10:57:18', '320.54', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(608, '2018-02-08 10:57:19', '320.14', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(609, '2018-02-08 10:57:21', '319.74', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(610, '2018-02-08 10:57:23', '319.34', 'game bet, no win', '26428043110290', 'BookOfRa', '40.00'),
(611, '2018-02-08 10:57:51', '318.94', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(612, '2018-02-08 10:57:53', '318.54', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(613, '2018-02-08 10:57:56', '318.94', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(614, '2018-02-08 10:59:08', '318.54', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(615, '2018-02-08 10:59:10', '318.14', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(616, '2018-02-08 10:59:12', '317.74', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(617, '2018-02-08 10:59:13', '317.34', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(618, '2018-02-08 10:59:15', '316.94', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(619, '2018-02-08 10:59:17', '317.34', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(620, '2018-02-08 10:59:25', '318.54', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(621, '2018-02-08 10:59:32', '318.94', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(622, '2018-02-08 10:59:48', '318.54', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(623, '2018-02-08 10:59:50', '318.14', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(624, '2018-02-08 10:59:52', '317.74', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(625, '2018-02-08 11:00:04', '318.14', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(626, '2018-02-08 11:00:09', '317.74', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(627, '2018-02-08 11:00:10', '325.34', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(628, '2018-02-08 11:01:56', '324.94', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(629, '2018-02-08 11:02:02', '324.54', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(630, '2018-02-08 11:02:04', '324.94', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(631, '2018-02-08 11:02:29', '324.54', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(632, '2018-02-08 11:02:32', '324.14', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(633, '2018-02-08 11:02:34', '324.54', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(634, '2018-02-08 11:02:48', '324.52', 'game bet, no win', '26428043110290', 'BeautyDolphins', '2.00'),
(635, '2018-02-08 11:02:52', '324.53', 'game bet, win', '26428043110290', 'BeautyDolphins', '1.00'),
(636, '2018-02-08 11:02:56', '324.52', 'game bet, no win', '26428043110290', 'BeautyDolphins', '1.00'),
(637, '2018-02-08 11:09:05', '324.51', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '1.00'),
(638, '2018-02-08 11:09:17', '324.50', 'game bet, no win', '26428043110290', 'BookOfWinner', '1.00'),
(639, '2018-02-08 11:11:03', '336.10', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(640, '2018-02-08 11:11:11', '375.70', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(641, '2018-02-08 11:11:18', '375.30', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(642, '2018-02-08 11:11:20', '374.90', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(643, '2018-02-08 11:11:23', '374.50', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(644, '2018-02-08 11:11:25', '374.10', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(645, '2018-02-08 11:11:27', '373.70', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(646, '2018-02-08 11:11:28', '373.30', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(647, '2018-02-08 11:11:30', '372.90', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(648, '2018-02-08 11:11:32', '372.50', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(649, '2018-02-08 11:11:33', '372.10', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(650, '2018-02-08 11:11:35', '374.90', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(651, '2018-02-08 11:11:40', '374.50', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(652, '2018-02-08 11:11:41', '374.10', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(653, '2018-02-08 11:11:43', '373.70', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(654, '2018-02-08 11:11:45', '373.30', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(655, '2018-02-08 11:11:46', '372.90', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(656, '2018-02-08 11:11:48', '372.50', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(657, '2018-02-08 11:11:49', '372.10', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(658, '2018-02-08 11:11:51', '373.30', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(659, '2018-02-08 11:11:56', '372.90', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(660, '2018-02-08 11:11:58', '372.50', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(661, '2018-02-08 11:12:00', '372.10', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(662, '2018-02-08 11:12:02', '372.50', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(663, '2018-02-08 11:13:40', '372.90', 'game bet, win', '26428043110290', 'BananasGoBahamas', '40.00'),
(664, '2018-02-08 11:14:29', '372.50', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(665, '2018-02-08 11:14:42', '372.10', 'game bet, no win', '26428043110290', 'BananasGoBahamas', '40.00'),
(666, '2018-02-08 11:17:01', '372.10', 'logout', '26428043110290', NULL, NULL),
(667, '2018-02-08 11:17:20', '200.00', 'login', '94643637426663', NULL, NULL),
(668, '2018-02-08 11:17:52', '199.60', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '40.00'),
(669, '2018-02-08 11:17:54', '199.20', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '40.00'),
(670, '2018-02-08 11:17:56', '198.80', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '40.00'),
(671, '2018-02-08 11:17:58', '198.40', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '40.00'),
(672, '2018-02-08 11:18:00', '198.00', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '40.00'),
(673, '2018-02-08 11:18:01', '197.60', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '40.00'),
(674, '2018-02-08 11:18:03', '206.40', 'game bet, win', '94643637426663', 'ComputerWorldOld', '40.00'),
(675, '2018-02-08 11:18:43', '205.20', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(676, '2018-02-08 11:18:45', '204.00', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(677, '2018-02-08 11:18:47', '202.80', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(678, '2018-02-08 11:18:49', '201.60', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(679, '2018-02-08 11:18:50', '204.40', 'game bet, win', '94643637426663', 'ComputerWorldOld', '120.00'),
(680, '2018-02-08 11:18:56', '203.20', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(681, '2018-02-08 11:18:57', '202.00', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(682, '2018-02-08 11:18:59', '200.80', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(683, '2018-02-08 11:19:01', '199.60', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(684, '2018-02-08 11:19:02', '198.40', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(685, '2018-02-08 11:19:04', '426.80', 'game bet, win', '94643637426663', 'ComputerWorldOld', '120.00'),
(686, '2018-02-08 11:20:07', '425.60', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(687, '2018-02-08 11:20:10', '424.40', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(688, '2018-02-08 11:20:12', '423.20', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(689, '2018-02-08 11:20:13', '424.00', 'game bet, win', '94643637426663', 'ComputerWorldOld', '120.00'),
(690, '2018-02-08 11:20:19', '454.80', 'game bet, win', '94643637426663', 'ComputerWorldOld', '120.00'),
(691, '2018-02-08 11:20:26', '453.60', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(692, '2018-02-08 11:20:28', '452.40', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(693, '2018-02-08 11:20:30', '451.20', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(694, '2018-02-08 11:20:32', '452.00', 'game bet, win', '94643637426663', 'ComputerWorldOld', '120.00'),
(695, '2018-02-08 11:20:37', '454.80', 'game bet, win', '94643637426663', 'ComputerWorldOld', '120.00'),
(696, '2018-02-08 11:20:42', '455.60', 'game bet, win', '94643637426663', 'ComputerWorldOld', '120.00'),
(697, '2018-02-08 11:20:48', '454.40', 'game bet, no win', '94643637426663', 'ComputerWorldOld', '120.00'),
(698, '2018-02-08 11:21:01', '477.20', 'game bet, win', '94643637426663', 'BananasGoBahamas', '120.00'),
(699, '2018-02-08 11:21:12', '501.20', 'game gamble win', '94643637426663', NULL, NULL),
(700, '2018-02-08 11:21:16', '500.00', 'game bet, no win', '94643637426663', 'BananasGoBahamas', '120.00'),
(701, '2018-02-08 11:21:18', '498.80', 'game bet, no win', '94643637426663', 'BananasGoBahamas', '120.00'),
(702, '2018-02-08 11:21:33', '499.20', 'game bet, win', '94643637426663', 'CasinoAndStars', '120.00'),
(703, '2018-02-08 11:21:39', '498.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(704, '2018-02-08 11:21:41', '496.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(705, '2018-02-08 11:21:42', '495.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(706, '2018-02-08 11:21:44', '494.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(707, '2018-02-08 11:21:46', '493.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(708, '2018-02-08 11:21:48', '492.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(709, '2018-02-08 11:21:49', '498.80', 'game bet, win', '94643637426663', 'CasinoAndStars', '120.00'),
(710, '2018-02-08 11:21:57', '517.60', 'game bet, win', '94643637426663', 'CasinoAndStars', '120.00'),
(711, '2018-02-08 11:22:04', '516.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(712, '2018-02-08 11:22:06', '515.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(713, '2018-02-08 11:22:11', '514.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(714, '2018-02-08 11:22:13', '512.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(715, '2018-02-08 11:22:15', '511.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(716, '2018-02-08 11:22:17', '510.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(717, '2018-02-08 11:22:25', '510.80', 'game bet, win', '94643637426663', 'CasinoAndStars', '120.00'),
(718, '2018-02-08 11:22:45', '509.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(719, '2018-02-08 11:22:47', '508.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(720, '2018-02-08 11:22:52', '507.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(721, '2018-02-08 11:22:55', '506.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(722, '2018-02-08 11:22:58', '504.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(723, '2018-02-08 11:23:00', '503.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(724, '2018-02-08 11:23:02', '502.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(725, '2018-02-08 11:23:03', '501.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(726, '2018-02-08 11:23:05', '502.40', 'game bet, win', '94643637426663', 'CasinoAndStars', '120.00'),
(727, '2018-02-08 11:23:14', '500.00', 'game gamble loose', '94643637426663', NULL, NULL),
(728, '2018-02-08 11:23:16', '498.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(729, '2018-02-08 11:23:40', '497.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(730, '2018-02-08 11:23:42', '496.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(731, '2018-02-08 11:23:43', '495.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(732, '2018-02-08 11:23:45', '494.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(733, '2018-02-08 11:23:47', '492.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(734, '2018-02-08 11:23:48', '491.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(735, '2018-02-08 11:23:50', '490.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(736, '2018-02-08 11:23:51', '489.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(737, '2018-02-08 11:23:53', '488.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(738, '2018-02-08 11:23:54', '486.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(739, '2018-02-08 11:23:56', '485.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(740, '2018-02-08 11:23:57', '484.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(741, '2018-02-08 11:23:59', '483.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '120.00'),
(742, '2018-02-08 11:24:19', '3.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '480.00'),
(743, '2018-02-08 11:24:36', '4.50', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(744, '2018-02-08 11:24:42', '4.30', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(745, '2018-02-08 11:24:44', '4.10', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(746, '2018-02-08 11:24:45', '4.00', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(747, '2018-02-08 11:24:50', '3.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(748, '2018-02-08 11:24:52', '3.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(749, '2018-02-08 11:24:53', '3.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(750, '2018-02-08 11:24:55', '3.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(751, '2018-02-08 11:24:57', '3.40', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(752, '2018-02-08 11:25:10', '3.60', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(753, '2018-02-08 11:25:17', '3.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(754, '2018-02-08 11:25:19', '3.40', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(755, '2018-02-08 11:25:22', '3.40', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(756, '2018-02-08 11:25:27', '3.45', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(757, '2018-02-08 11:25:36', '3.35', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(758, '2018-02-08 11:25:40', '3.15', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(759, '2018-02-08 11:25:49', '5.45', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(760, '2018-02-08 11:25:55', '5.25', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(761, '2018-02-08 11:25:57', '5.70', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(762, '2018-02-08 11:26:04', '5.50', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(763, '2018-02-08 11:26:08', '5.30', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(764, '2018-02-08 11:26:10', '5.10', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(765, '2018-02-08 11:26:12', '4.90', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(766, '2018-02-08 11:26:17', '5.30', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(767, '2018-02-08 11:26:23', '5.10', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(768, '2018-02-08 11:26:24', '5.40', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(769, '2018-02-08 11:26:29', '5.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(770, '2018-02-08 11:26:31', '5.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(771, '2018-02-08 11:26:32', '4.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(772, '2018-02-08 11:26:34', '4.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(773, '2018-02-08 11:26:36', '4.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(774, '2018-02-08 11:26:37', '4.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(775, '2018-02-08 11:26:39', '4.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(776, '2018-02-08 11:26:41', '3.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(777, '2018-02-08 11:26:42', '3.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(778, '2018-02-08 11:26:44', '3.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(779, '2018-02-08 11:26:46', '3.60', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(780, '2018-02-08 11:26:50', '3.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(781, '2018-02-08 11:26:52', '3.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(782, '2018-02-08 11:26:54', '3.20', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(783, '2018-02-08 11:26:58', '3.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(784, '2018-02-08 11:27:00', '2.80', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(785, '2018-02-08 11:27:02', '2.60', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(786, '2018-02-08 11:27:03', '2.40', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(787, '2018-02-08 11:27:05', '3.70', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(788, '2018-02-08 11:27:13', '2.20', 'game gamble loose', '94643637426663', NULL, NULL),
(789, '2018-02-08 11:27:17', '2.40', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(790, '2018-02-08 11:27:39', '2.20', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(791, '2018-02-08 11:27:41', '2.00', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(792, '2018-02-08 11:27:43', '4.90', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(793, '2018-02-08 11:27:53', '5.95', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(794, '2018-02-08 11:27:58', '5.75', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(795, '2018-02-08 11:28:00', '5.55', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(796, '2018-02-08 11:28:01', '5.35', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(797, '2018-02-08 11:28:03', '5.25', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(798, '2018-02-08 11:28:07', '5.05', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(799, '2018-02-08 11:28:09', '4.85', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(800, '2018-02-08 11:28:11', '4.65', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(801, '2018-02-08 11:28:13', '4.95', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(802, '2018-02-08 11:28:19', '4.75', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(803, '2018-02-08 11:28:56', '4.55', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(804, '2018-02-08 11:28:58', '4.35', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(805, '2018-02-08 11:29:00', '14.35', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(806, '2018-02-08 11:29:11', '14.55', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(807, '2018-02-08 11:29:15', '14.35', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(808, '2018-02-08 11:29:19', '14.45', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(809, '2018-02-08 11:29:24', '14.35', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(810, '2018-02-08 11:29:32', '14.75', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(811, '2018-02-08 11:29:37', '14.55', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(812, '2018-02-08 11:29:39', '14.55', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(813, '2018-02-08 11:32:32', '14.35', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(814, '2018-02-08 11:32:34', '14.15', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(815, '2018-02-08 11:32:36', '13.95', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(816, '2018-02-08 11:32:37', '13.75', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(817, '2018-02-08 11:32:39', '13.95', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(818, '2018-02-08 11:32:44', '13.85', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(819, '2018-02-08 11:32:47', '13.85', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(820, '2018-02-08 11:32:51', '13.65', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(821, '2018-02-08 11:32:53', '13.65', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(822, '2018-02-08 11:33:01', '13.45', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(823, '2018-02-08 11:33:03', '13.25', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(824, '2018-02-08 11:33:28', '13.05', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(825, '2018-02-08 11:33:30', '12.85', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(826, '2018-02-08 11:33:31', '15.15', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(827, '2018-02-08 11:33:59', '14.95', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(828, '2018-02-08 11:34:01', '14.75', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(829, '2018-02-08 11:34:03', '14.55', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(830, '2018-02-08 11:34:05', '16.05', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(831, '2018-02-08 11:34:11', '16.05', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(832, '2018-02-08 11:34:14', '60.55', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(833, '2018-02-08 11:35:51', '60.35', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(834, '2018-02-08 11:37:24', '60.15', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(835, '2018-02-08 11:37:28', '60.15', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(836, '2018-02-08 11:38:14', '59.95', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(837, '2018-02-08 11:38:19', '59.75', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(838, '2018-02-08 11:38:25', '59.55', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(839, '2018-02-08 11:38:28', '59.35', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(840, '2018-02-08 11:38:30', '59.15', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(841, '2018-02-08 11:39:49', '59.35', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(842, '2018-02-08 11:39:54', '59.55', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(843, '2018-02-08 11:39:58', '59.35', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(844, '2018-02-08 11:40:00', '59.15', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(845, '2018-02-08 11:40:02', '59.15', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(846, '2018-02-08 11:40:07', '58.95', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(847, '2018-02-08 11:40:09', '58.75', 'game bet, no win', '94643637426663', 'CasinoAndStars', '20.00'),
(848, '2018-02-08 11:40:10', '59.05', 'game bet, win', '94643637426663', 'CasinoAndStars', '20.00'),
(849, '2018-02-08 11:40:40', '58.85', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(850, '2018-02-08 11:40:42', '59.15', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(851, '2018-02-08 11:40:46', '58.95', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(852, '2018-02-08 11:40:48', '58.75', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(853, '2018-02-08 11:40:50', '58.65', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(854, '2018-02-08 11:40:54', '58.45', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(855, '2018-02-08 11:40:56', '59.05', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(856, '2018-02-08 11:41:03', '59.35', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(857, '2018-02-08 11:41:08', '59.55', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(858, '2018-02-08 11:41:14', '59.55', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(859, '2018-02-08 11:41:18', '59.95', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(860, '2018-02-08 11:41:26', '59.85', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(861, '2018-02-08 11:41:30', '59.65', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(862, '2018-02-08 11:41:32', '59.45', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(863, '2018-02-08 11:41:35', '61.25', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(864, '2018-02-08 11:41:46', '61.05', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(865, '2018-02-08 11:41:48', '61.35', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(866, '2018-02-08 11:41:54', '61.15', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(867, '2018-02-08 11:41:56', '60.95', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(868, '2018-02-08 11:41:58', '60.95', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(869, '2018-02-08 11:42:02', '60.75', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(870, '2018-02-08 11:42:04', '60.55', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(871, '2018-02-08 11:42:06', '60.85', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(872, '2018-02-08 11:42:35', '60.65', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(873, '2018-02-08 11:42:41', '60.45', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(874, '2018-02-08 11:42:43', '60.45', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(875, '2018-02-08 11:42:49', '61.25', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(876, '2018-02-08 12:06:04', '61.15', 'game bet, win', '94643637426663', 'SavannaQueen', '20.00'),
(877, '2018-02-08 12:06:08', '60.95', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(878, '2018-02-08 12:06:12', '60.75', 'game bet, no win', '94643637426663', 'SavannaQueen', '20.00'),
(879, '2018-02-08 12:08:28', '60.75', 'logout', '94643637426663', NULL, NULL),
(880, '2018-02-08 12:17:53', '120.85', 'login', '69614983538117', NULL, NULL),
(881, '2018-02-08 12:18:33', '120.75', 'game bet, no win', '69614983538117', 'BookOfWinner', '10.00'),
(882, '2018-02-08 12:18:36', '120.75', 'game bet, win', '69614983538117', 'BookOfWinner', '10.00'),
(883, '2018-02-08 12:18:40', '120.75', 'game bet, win', '69614983538117', 'BookOfWinner', '10.00'),
(884, '2018-02-08 12:18:45', '120.70', 'game bet, win', '69614983538117', 'BookOfWinner', '10.00'),
(885, '2018-02-08 12:18:50', '120.70', 'game bet, win', '69614983538117', 'BookOfWinner', '10.00'),
(886, '2018-02-08 12:18:55', '120.60', 'game bet, no win', '69614983538117', 'BookOfWinner', '10.00'),
(887, '2018-02-08 12:18:57', '120.50', 'game bet, no win', '69614983538117', 'BookOfWinner', '10.00'),
(888, '2018-02-08 12:19:16', '120.40', 'game bet, no win', '69614983538117', 'BookOfWinner', '10.00'),
(889, '2018-02-08 12:19:19', '120.30', 'game bet, no win', '69614983538117', 'BookOfWinner', '10.00'),
(890, '2018-02-08 12:19:27', '120.17', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(891, '2018-02-08 12:19:30', '120.14', 'game bet, win', '69614983538117', 'BookOfWinner', '13.00'),
(892, '2018-02-08 12:19:36', '120.01', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(893, '2018-02-08 12:19:39', '119.88', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(894, '2018-02-08 12:19:41', '119.85', 'game bet, win', '69614983538117', 'BookOfWinner', '13.00'),
(895, '2018-02-08 12:19:51', '119.72', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(896, '2018-02-08 12:19:54', '119.59', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(897, '2018-02-08 12:19:56', '119.56', 'game bet, win', '69614983538117', 'BookOfWinner', '13.00'),
(898, '2018-02-08 12:20:02', '119.43', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(899, '2018-02-08 12:20:04', '119.30', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(900, '2018-02-08 12:20:07', '119.17', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(901, '2018-02-08 12:20:09', '119.04', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(902, '2018-02-08 12:20:11', '118.91', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(903, '2018-02-08 12:20:17', '118.78', 'game bet, no win', '69614983538117', 'BookOfWinner', '13.00'),
(904, '2018-02-08 12:20:51', '118.65', 'game bet, no win', '69614983538117', 'TropicalFruit', '13.00'),
(905, '2018-02-08 12:20:53', '118.52', 'game bet, no win', '69614983538117', 'TropicalFruit', '13.00'),
(906, '2018-02-08 12:20:54', '118.39', 'game bet, no win', '69614983538117', 'TropicalFruit', '13.00'),
(907, '2018-02-08 12:20:56', '118.26', 'game bet, no win', '69614983538117', 'TropicalFruit', '13.00'),
(908, '2018-02-08 12:21:04', '118.16', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(909, '2018-02-08 12:21:06', '118.06', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(910, '2018-02-08 12:21:09', '118.06', 'game bet, win', '69614983538117', 'TropicalFruit', '10.00'),
(911, '2018-02-08 12:21:14', '117.96', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(912, '2018-02-08 12:21:16', '117.86', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(913, '2018-02-08 12:21:18', '117.76', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(914, '2018-02-08 12:22:24', '117.66', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(915, '2018-02-08 12:22:26', '117.56', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(916, '2018-02-08 12:22:29', '117.46', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(917, '2018-02-08 12:22:30', '117.36', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(918, '2018-02-08 12:22:36', '117.26', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(919, '2018-02-08 12:22:39', '117.16', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(920, '2018-02-08 12:22:41', '117.06', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(921, '2018-02-08 12:22:43', '116.96', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(922, '2018-02-08 12:22:45', '116.86', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(923, '2018-02-08 12:22:46', '116.76', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(924, '2018-02-08 12:22:49', '116.66', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(925, '2018-02-08 12:22:51', '116.56', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(926, '2018-02-08 12:22:54', '116.46', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(927, '2018-02-08 12:22:56', '116.36', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(928, '2018-02-08 12:23:02', '116.16', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(929, '2018-02-08 12:23:04', '115.96', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(930, '2018-02-08 12:23:06', '115.86', 'game bet, win', '69614983538117', 'HitJewels', '20.00'),
(931, '2018-02-08 12:23:12', '115.66', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(932, '2018-02-08 12:23:14', '115.46', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(933, '2018-02-08 12:23:16', '115.26', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(934, '2018-02-08 12:23:17', '115.06', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(935, '2018-02-08 12:23:19', '114.86', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(936, '2018-02-08 12:23:25', '114.66', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(937, '2018-02-08 12:23:28', '114.46', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(938, '2018-02-08 12:23:40', '114.26', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(939, '2018-02-08 12:23:56', '114.06', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(940, '2018-02-08 12:24:04', '113.86', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(941, '2018-02-08 12:24:06', '113.66', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(942, '2018-02-08 12:24:07', '113.46', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(943, '2018-02-08 12:24:10', '113.26', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(944, '2018-02-08 12:24:13', '113.06', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(945, '2018-02-08 12:24:15', '112.86', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(946, '2018-02-08 12:24:18', '112.66', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(947, '2018-02-08 12:24:20', '112.46', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(948, '2018-02-08 12:24:22', '112.26', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(949, '2018-02-08 12:24:24', '112.06', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(950, '2018-02-08 12:24:26', '111.86', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(951, '2018-02-08 12:24:28', '111.66', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(952, '2018-02-08 12:24:29', '111.46', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(953, '2018-02-08 12:24:31', '111.26', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(954, '2018-02-08 12:24:33', '111.06', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(955, '2018-02-08 12:24:35', '110.86', 'game bet, no win', '69614983538117', 'HitJewels', '20.00'),
(956, '2018-02-08 12:24:38', '110.76', 'game bet, win', '69614983538117', 'HitJewels', '20.00'),
(957, '2018-02-08 12:25:01', '110.56', 'game bet, no win', '69614983538117', 'KingOfJewels', '20.00'),
(958, '2018-02-08 12:25:03', '110.46', 'game bet, win', '69614983538117', 'KingOfJewels', '20.00'),
(959, '2018-02-08 12:25:25', '110.26', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(960, '2018-02-08 12:25:27', '110.06', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(961, '2018-02-08 12:25:29', '109.86', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(962, '2018-02-08 12:25:31', '109.66', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(963, '2018-02-08 12:25:33', '109.46', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(964, '2018-02-08 12:25:36', '109.26', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(965, '2018-02-08 12:25:38', '109.06', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(966, '2018-02-08 12:25:41', '108.86', 'game bet, no win', '69614983538117', 'ComputerWorld', '20.00'),
(967, '2018-02-08 12:28:05', '108.66', 'game bet, no win', '69614983538117', 'RollOfRamses', '20.00'),
(968, '2018-02-08 12:28:07', '108.56', 'game bet, win', '69614983538117', 'RollOfRamses', '20.00'),
(969, '2018-02-08 12:32:36', '108.46', 'game bet, win', '69614983538117', 'RollOfRamses', '20.00'),
(970, '2018-02-08 12:32:41', '108.26', 'game bet, no win', '69614983538117', 'RollOfRamses', '20.00'),
(971, '2018-02-08 12:32:43', '108.06', 'game bet, no win', '69614983538117', 'RollOfRamses', '20.00'),
(972, '2018-02-08 12:38:41', '123.00', 'login', '86868944669647', NULL, NULL),
(973, '2018-02-08 12:38:41', '123.00', 'login', '86868944669647', NULL, NULL),
(974, '2018-02-08 12:43:41', '123.00', 'game bet, win', '86868944669647', 'PepperSeven', '2000.00'),
(975, '2018-02-08 12:43:46', '372.07', 'game bet, win', '26428043110290', 'PepperSeven', '8.00'),
(976, '2018-02-08 12:44:04', '103.00', 'game bet, no win', '86868944669647', 'PepperSeven', '2000.00'),
(977, '2018-02-08 12:44:06', '103.00', 'game bet, win', '86868944669647', 'PepperSeven', '2000.00'),
(978, '2018-02-08 12:47:34', '107.86', 'game bet, no win', '69614983538117', 'BookOfWinner', '20.00'),
(979, '2018-02-08 12:47:37', '107.66', 'game bet, no win', '69614983538117', 'BookOfWinner', '20.00'),
(980, '2018-02-08 12:47:42', '107.46', 'game bet, no win', '69614983538117', 'BookOfWinner', '20.00'),
(981, '2018-02-08 12:47:46', '107.26', 'game bet, no win', '69614983538117', 'BookOfWinner', '20.00'),
(982, '2018-02-08 12:49:25', '107.25', 'game bet, no win', '69614983538117', 'BookOfWinner', '1.00'),
(983, '2018-02-08 12:49:28', '107.24', 'game bet, no win', '69614983538117', 'BookOfWinner', '1.00'),
(984, '2018-02-08 12:49:30', '107.23', 'game bet, no win', '69614983538117', 'BookOfWinner', '1.00'),
(985, '2018-02-08 12:49:31', '107.22', 'game bet, no win', '69614983538117', 'BookOfWinner', '1.00'),
(986, '2018-02-08 12:49:34', '107.21', 'game bet, no win', '69614983538117', 'BookOfWinner', '1.00'),
(987, '2018-02-08 12:52:08', '107.20', 'game bet, no win', '69614983538117', 'BookOfWinner', '1.00'),
(988, '2018-02-08 12:52:15', '107.22', 'game bet, win', '69614983538117', 'BookOfWinner', '3.00'),
(989, '2018-02-08 12:52:20', '107.19', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(990, '2018-02-08 12:52:22', '107.16', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(991, '2018-02-08 12:52:24', '107.13', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(992, '2018-02-08 12:52:26', '107.10', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(993, '2018-02-08 12:52:31', '107.08', 'game bet, no win', '69614983538117', 'BookOfWinner', '2.00'),
(994, '2018-02-08 12:52:33', '107.06', 'game bet, no win', '69614983538117', 'BookOfWinner', '2.00'),
(995, '2018-02-08 12:52:37', '107.03', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(996, '2018-02-08 12:52:40', '107.05', 'game bet, win', '69614983538117', 'BookOfWinner', '3.00'),
(997, '2018-02-08 12:52:54', '107.02', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(998, '2018-02-08 12:52:57', '106.99', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(999, '2018-02-08 12:52:58', '107.06', 'game bet, win', '69614983538117', 'BookOfWinner', '3.00'),
(1000, '2018-02-08 12:53:03', '107.03', 'game bet, no win', '69614983538117', 'BookOfWinner', '3.00'),
(1001, '2018-02-08 12:56:18', '107.02', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1002, '2018-02-08 12:56:20', '107.09', 'game bet, win', '69614983538117', 'BookOfRa', '1.00'),
(1003, '2018-02-08 12:56:57', '107.08', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1004, '2018-02-08 12:56:59', '107.07', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1005, '2018-02-08 12:57:01', '107.06', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1006, '2018-02-08 12:57:04', '107.05', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1007, '2018-02-08 12:57:05', '107.04', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1008, '2018-02-08 12:57:07', '107.11', 'game bet, win', '69614983538117', 'BookOfRa', '1.00'),
(1009, '2018-02-08 12:57:40', '107.20', 'game bet, win', '69614983538117', 'BookOfRa', '1.00'),
(1010, '2018-02-08 12:57:45', '107.19', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1011, '2018-02-08 12:57:48', '107.26', 'game bet, win', '69614983538117', 'BookOfRa', '1.00'),
(1012, '2018-02-08 12:58:22', '107.25', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1013, '2018-02-08 12:58:24', '107.24', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00');
INSERT INTO `stats_pin` (`id`, `data`, `summa`, `sobytie`, `PIN`, `game`, `stav`) VALUES
(1014, '2018-02-08 12:58:26', '107.23', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1015, '2018-02-08 12:58:28', '107.22', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1016, '2018-02-08 12:58:30', '107.21', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1017, '2018-02-08 12:58:32', '107.20', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1018, '2018-02-08 12:58:34', '107.24', 'game bet, win', '69614983538117', 'BookOfRa', '1.00'),
(1019, '2018-02-08 12:58:51', '107.19', 'game gamble loose', '69614983538117', NULL, NULL),
(1020, '2018-02-08 12:58:54', '107.18', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1021, '2018-02-08 12:58:57', '107.17', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1022, '2018-02-08 12:59:01', '107.18', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1023, '2018-02-08 12:59:08', '107.08', 'game gamble loose', '69614983538117', NULL, NULL),
(1024, '2018-02-08 12:59:14', '107.09', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1025, '2018-02-08 12:59:18', '107.10', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1026, '2018-02-08 12:59:22', '107.11', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1027, '2018-02-08 12:59:34', '107.01', 'game gamble loose', '69614983538117', NULL, NULL),
(1028, '2018-02-08 12:59:45', '107.02', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1029, '2018-02-08 12:59:50', '107.03', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1030, '2018-02-08 13:00:08', '106.94', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1031, '2018-02-08 13:00:10', '106.85', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1032, '2018-02-08 13:00:12', '106.76', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1033, '2018-02-08 13:00:13', '106.67', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1034, '2018-02-08 13:00:15', '106.63', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1035, '2018-02-08 13:00:19', '106.54', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1036, '2018-02-08 13:00:21', '106.45', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1037, '2018-02-08 13:00:24', '106.36', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1038, '2018-02-08 13:00:26', '106.37', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1039, '2018-02-08 13:00:36', '106.28', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1040, '2018-02-08 13:01:07', '106.29', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1041, '2018-02-08 13:01:20', '106.30', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1042, '2018-02-08 13:01:24', '106.31', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1043, '2018-02-08 13:01:36', '106.32', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1044, '2018-02-08 13:01:41', '106.23', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1045, '2018-02-08 13:01:43', '106.19', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1046, '2018-02-08 13:01:49', '106.10', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1047, '2018-02-08 13:01:52', '106.06', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1048, '2018-02-08 13:01:56', '105.97', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1049, '2018-02-08 13:01:59', '105.88', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1050, '2018-02-08 13:02:01', '105.84', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1051, '2018-02-08 13:02:05', '105.80', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1052, '2018-02-08 13:02:08', '105.76', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1053, '2018-02-08 13:02:12', '105.67', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1054, '2018-02-08 13:02:25', '105.58', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1055, '2018-02-08 13:02:27', '105.49', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1056, '2018-02-08 13:02:29', '105.50', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1057, '2018-02-08 13:02:48', '105.51', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1058, '2018-02-08 13:02:52', '105.42', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1059, '2018-02-08 13:02:54', '105.33', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1060, '2018-02-08 13:02:57', '105.24', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1061, '2018-02-08 13:02:59', '105.15', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1062, '2018-02-08 13:03:00', '105.06', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1063, '2018-02-08 13:03:26', '104.97', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1064, '2018-02-08 13:03:29', '104.88', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1065, '2018-02-08 13:03:31', '104.84', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1066, '2018-02-08 13:03:45', '104.85', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1067, '2018-02-08 13:03:50', '104.76', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1068, '2018-02-08 13:03:53', '104.67', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1069, '2018-02-08 13:03:55', '104.58', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1070, '2018-02-08 13:03:56', '104.59', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1071, '2018-02-08 13:04:00', '104.50', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1072, '2018-02-08 13:04:02', '104.41', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1073, '2018-02-08 13:04:04', '104.37', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1074, '2018-02-08 13:04:07', '104.38', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1075, '2018-02-08 13:04:11', '104.29', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1076, '2018-02-08 13:04:13', '104.20', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1077, '2018-02-08 13:04:14', '104.16', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1078, '2018-02-08 13:04:17', '104.07', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1079, '2018-02-08 13:04:19', '103.98', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1080, '2018-02-08 13:04:21', '103.89', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1081, '2018-02-08 13:04:23', '103.80', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1082, '2018-02-08 13:04:25', '103.76', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1083, '2018-02-08 13:04:28', '103.67', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1084, '2018-02-08 13:04:30', '103.58', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1085, '2018-02-08 13:04:32', '103.59', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1086, '2018-02-08 13:04:38', '103.55', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1087, '2018-02-08 13:04:42', '103.56', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1088, '2018-02-08 13:04:48', '103.52', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1089, '2018-02-08 13:04:51', '103.43', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1090, '2018-02-08 13:04:56', '103.40', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1091, '2018-02-08 13:04:58', '103.37', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1092, '2018-02-08 13:05:00', '103.34', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1093, '2018-02-08 13:05:02', '103.31', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1094, '2018-02-08 13:05:05', '103.33', 'game bet, win', '69614983538117', 'BookOfRa', '3.00'),
(1095, '2018-02-08 13:05:08', '103.30', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1096, '2018-02-08 13:05:15', '103.27', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1097, '2018-02-08 13:05:18', '103.24', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1098, '2018-02-08 13:05:21', '103.21', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1099, '2018-02-08 13:05:23', '103.18', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1100, '2018-02-08 13:05:26', '103.15', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1101, '2018-02-08 13:05:28', '103.12', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1102, '2018-02-08 13:05:30', '103.14', 'game bet, win', '69614983538117', 'BookOfRa', '3.00'),
(1103, '2018-02-08 13:05:38', '103.11', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1104, '2018-02-08 13:05:46', '103.18', 'game bet, win', '69614983538117', 'BookOfRa', '3.00'),
(1105, '2018-02-08 13:05:50', '103.15', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1106, '2018-02-08 13:05:52', '103.17', 'game bet, win', '69614983538117', 'BookOfRa', '3.00'),
(1107, '2018-02-08 13:05:57', '103.14', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1108, '2018-02-08 13:07:27', '103.11', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1109, '2018-02-08 13:07:29', '103.08', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1110, '2018-02-08 13:07:31', '103.05', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1111, '2018-02-08 13:07:33', '103.02', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1112, '2018-02-08 13:07:35', '102.99', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1113, '2018-02-08 13:07:37', '102.96', 'game bet, no win', '69614983538117', 'BookOfRa', '3.00'),
(1114, '2018-02-08 13:08:06', '102.97', 'game bet, win', '69614983538117', 'NautilusOld', '3.00'),
(1115, '2018-02-08 13:08:09', '102.94', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1116, '2018-02-08 13:08:11', '102.95', 'game bet, win', '69614983538117', 'NautilusOld', '3.00'),
(1117, '2018-02-08 13:08:14', '102.92', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1118, '2018-02-08 13:08:15', '102.89', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1119, '2018-02-08 13:08:17', '102.86', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1120, '2018-02-08 13:08:18', '102.83', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1121, '2018-02-08 13:08:20', '102.90', 'game bet, win', '69614983538117', 'NautilusOld', '3.00'),
(1122, '2018-02-08 13:08:24', '102.87', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1123, '2018-02-08 13:08:27', '102.84', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1124, '2018-02-08 13:08:29', '102.81', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1125, '2018-02-08 13:08:31', '102.82', 'game bet, win', '69614983538117', 'NautilusOld', '3.00'),
(1126, '2018-02-08 13:08:35', '102.79', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1127, '2018-02-08 13:08:38', '102.76', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1128, '2018-02-08 13:08:39', '102.79', 'game bet, win', '69614983538117', 'NautilusOld', '3.00'),
(1129, '2018-02-08 13:08:46', '102.76', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1130, '2018-02-08 13:08:48', '102.73', 'game bet, no win', '69614983538117', 'NautilusOld', '3.00'),
(1131, '2018-02-08 13:08:50', '102.64', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1132, '2018-02-08 13:08:52', '102.55', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1133, '2018-02-08 13:08:54', '102.48', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1134, '2018-02-08 13:09:00', '102.46', 'game gamble loose', '69614983538117', NULL, NULL),
(1135, '2018-02-08 13:09:02', '102.37', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1136, '2018-02-08 13:09:05', '102.28', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1137, '2018-02-08 13:09:07', '102.19', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1138, '2018-02-08 13:09:10', '102.10', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1139, '2018-02-08 13:09:17', '102.01', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1140, '2018-02-08 13:09:20', '101.92', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1141, '2018-02-08 13:09:21', '101.85', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1142, '2018-02-08 13:09:24', '101.76', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1143, '2018-02-08 13:09:25', '101.67', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1144, '2018-02-08 13:09:27', '101.66', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1145, '2018-02-08 13:09:43', '101.59', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1146, '2018-02-08 13:09:46', '371.99', 'game bet, no win', '26428043110290', 'PepperSeven', '8.00'),
(1147, '2018-02-08 13:12:34', '101.50', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1148, '2018-02-08 13:12:36', '101.41', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1149, '2018-02-08 13:12:40', '101.32', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1150, '2018-02-08 13:12:42', '101.25', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1151, '2018-02-08 13:12:47', '101.16', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1152, '2018-02-08 13:12:49', '101.11', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1153, '2018-02-08 13:12:52', '101.02', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1154, '2018-02-08 13:12:54', '100.93', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1155, '2018-02-08 13:12:57', '100.84', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1156, '2018-02-08 13:12:58', '100.75', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1157, '2018-02-08 13:13:00', '100.66', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1158, '2018-02-08 13:13:02', '100.57', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1159, '2018-02-08 13:13:21', '91.57', 'game bet, no win', '69614983538117', 'NautilusOld', '900.00'),
(1160, '2018-02-08 13:13:26', '91.48', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1161, '2018-02-08 13:13:33', '91.39', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1162, '2018-02-08 13:13:35', '91.30', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1163, '2018-02-08 13:13:39', '91.23', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1164, '2018-02-08 13:13:43', '91.14', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1165, '2018-02-08 13:13:46', '91.05', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1166, '2018-02-08 13:13:51', '91.00', 'game bet, win', '69614983538117', 'NautilusOld', '9.00'),
(1167, '2018-02-08 13:14:01', '90.91', 'game bet, no win', '69614983538117', 'NautilusOld', '9.00'),
(1168, '2018-02-08 13:15:11', '90.82', 'game bet, no win', '69614983538117', 'MagicSecret', '9.00'),
(1169, '2018-02-08 13:15:13', '90.73', 'game bet, no win', '69614983538117', 'MagicSecret', '9.00'),
(1170, '2018-02-08 13:15:14', '90.69', 'game bet, win', '69614983538117', 'MagicSecret', '9.00'),
(1171, '2018-02-08 13:15:19', '90.60', 'game bet, no win', '69614983538117', 'MagicSecret', '9.00'),
(1172, '2018-02-08 13:15:20', '90.51', 'game bet, no win', '69614983538117', 'MagicSecret', '9.00'),
(1173, '2018-02-08 13:16:32', '90.46', 'game bet, win', '69614983538117', 'MagicSecret', '10.00'),
(1174, '2018-02-08 13:16:36', '90.36', 'game bet, no win', '69614983538117', 'MagicSecret', '10.00'),
(1175, '2018-02-08 13:17:11', '90.26', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1176, '2018-02-08 13:17:12', '90.16', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1177, '2018-02-08 13:17:14', '90.06', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1178, '2018-02-08 13:17:17', '89.96', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1179, '2018-02-08 13:17:19', '89.86', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1180, '2018-02-08 13:17:21', '89.76', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1181, '2018-02-08 13:18:51', '89.66', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1182, '2018-02-08 13:18:56', '89.56', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1183, '2018-02-08 13:18:58', '89.46', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1184, '2018-02-08 13:19:20', '89.36', 'game bet, no win', '69614983538117', 'BookOfWinner', '10.00'),
(1185, '2018-02-08 13:19:22', '89.31', 'game bet, win', '69614983538117', 'BookOfWinner', '10.00'),
(1186, '2018-02-08 13:19:52', '89.21', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1187, '2018-02-08 13:19:54', '89.11', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1188, '2018-02-08 13:19:56', '89.11', 'game bet, win', '69614983538117', 'TropicalFruit', '10.00'),
(1189, '2018-02-08 13:19:59', '89.01', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1190, '2018-02-08 13:20:11', '88.91', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1191, '2018-02-08 13:20:13', '88.81', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1192, '2018-02-08 13:20:15', '88.71', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1193, '2018-02-08 13:20:17', '88.61', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1194, '2018-02-08 13:20:19', '88.51', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1195, '2018-02-08 13:20:20', '88.41', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1196, '2018-02-08 13:20:22', '88.31', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1197, '2018-02-08 13:20:24', '88.21', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1198, '2018-02-08 13:20:26', '88.11', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1199, '2018-02-08 13:20:28', '88.01', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1200, '2018-02-08 13:20:30', '87.91', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1201, '2018-02-08 13:20:32', '87.81', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1202, '2018-02-08 13:20:34', '87.71', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1203, '2018-02-08 13:20:37', '87.61', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1204, '2018-02-08 13:20:39', '87.51', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1205, '2018-02-08 13:20:41', '87.41', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1206, '2018-02-08 13:20:44', '87.31', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1207, '2018-02-08 13:20:46', '87.21', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1208, '2018-02-08 13:20:48', '87.11', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1209, '2018-02-08 13:20:51', '87.11', 'game bet, win', '69614983538117', 'TropicalFruit', '10.00'),
(1210, '2018-02-08 13:21:00', '87.01', 'game gamble loose', '69614983538117', NULL, NULL),
(1211, '2018-02-08 13:21:15', '86.91', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1212, '2018-02-08 13:21:16', '86.81', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1213, '2018-02-08 13:21:18', '86.71', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1214, '2018-02-08 13:22:19', '86.61', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1215, '2018-02-08 13:22:19', '371.96', 'game bet, win', '26428043110290', 'PepperSeven', '8.00'),
(1216, '2018-02-08 13:22:30', '371.88', 'game bet, no win', '26428043110290', 'PepperSeven', '8.00'),
(1217, '2018-02-08 13:22:32', '371.80', 'game bet, no win', '26428043110290', 'PepperSeven', '8.00'),
(1218, '2018-02-08 13:22:39', '86.51', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1219, '2018-02-08 13:22:41', '86.41', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1220, '2018-02-08 13:22:42', '86.31', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1221, '2018-02-08 13:22:45', '86.21', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1222, '2018-02-08 13:22:48', '86.11', 'game bet, no win', '69614983538117', 'HitJewels', '10.00'),
(1223, '2018-02-08 13:23:16', '371.72', 'game bet, no win', '26428043110290', 'BookOfWinner', '8.00'),
(1224, '2018-02-08 13:23:19', '371.64', 'game bet, no win', '26428043110290', 'BookOfWinner', '8.00'),
(1225, '2018-02-08 13:23:21', '371.61', 'game bet, win', '26428043110290', 'BookOfWinner', '8.00'),
(1226, '2018-02-08 13:23:25', '371.58', 'game bet, win', '26428043110290', 'BookOfWinner', '8.00'),
(1227, '2018-02-08 13:25:53', '86.01', 'game bet, no win', '69614983538117', 'ComputerWorld', '10.00'),
(1228, '2018-02-08 13:25:57', '85.91', 'game bet, no win', '69614983538117', 'ComputerWorld', '10.00'),
(1229, '2018-02-08 13:26:44', '85.81', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1230, '2018-02-08 13:26:56', '85.71', 'game bet, no win', '69614983538117', 'TropicalFruit', '10.00'),
(1231, '2018-02-08 13:28:48', '85.61', 'game bet, no win', '69614983538117', 'PepperSeven', '10.00'),
(1232, '2018-02-08 13:28:50', '85.61', 'game bet, win', '69614983538117', 'PepperSeven', '10.00'),
(1233, '2018-02-08 13:29:22', '85.61', 'game bet, win', '69614983538117', 'PepperSeven', '10.00'),
(1234, '2018-02-08 13:30:34', '85.51', 'game gamble loose', '69614983538117', NULL, NULL),
(1235, '2018-02-08 13:35:17', '85.41', 'game bet, no win', '69614983538117', 'GoldenHarvest', '10.00'),
(1236, '2018-02-08 13:35:21', '85.31', 'game bet, no win', '69614983538117', 'GoldenHarvest', '10.00'),
(1237, '2018-02-08 13:35:25', '85.21', 'game bet, no win', '69614983538117', 'GoldenHarvest', '10.00'),
(1238, '2018-02-08 13:35:28', '85.15', 'game bet, win', '69614983538117', 'GoldenHarvest', '10.00'),
(1239, '2018-02-08 13:36:25', '85.11', 'game gamble loose', '69614983538117', NULL, NULL),
(1240, '2018-02-08 13:36:27', '85.09', 'game bet, win', '69614983538117', 'GoldenHarvest', '10.00'),
(1241, '2018-02-08 13:38:12', '371.55', 'game bet, win', '26428043110290', 'BookOfWinner', '8.00'),
(1242, '2018-02-08 13:38:15', '371.47', 'game bet, no win', '26428043110290', 'BookOfWinner', '8.00'),
(1243, '2018-02-08 13:38:17', '371.39', 'game bet, no win', '26428043110290', 'BookOfWinner', '8.00'),
(1244, '2018-02-08 13:40:23', '84.99', 'game bet, no win', '69614983538117', 'LuckyLadysGlamor', '10.00'),
(1245, '2018-02-08 13:40:40', '84.89', 'game bet, no win', '69614983538117', 'LuckyLadysGlamor', '10.00'),
(1246, '2018-02-08 13:40:43', '84.83', 'game bet, win', '69614983538117', 'LuckyLadysGlamor', '10.00'),
(1247, '2018-02-08 14:16:42', '84.74', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1248, '2018-02-08 14:16:46', '84.65', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1249, '2018-02-08 14:16:48', '84.56', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1250, '2018-02-08 14:17:49', '6994.56', 'game bet, no win', '69614983538117', 'BookOfWinner', '2000.00'),
(1251, '2018-02-08 14:17:52', '4994.56', 'game bet, no win', '69614983538117', 'BookOfWinner', '2000.00'),
(1252, '2018-02-08 14:17:53', '2994.56', 'game bet, no win', '69614983538117', 'BookOfWinner', '2000.00'),
(1253, '2018-02-08 14:17:55', '994.56', 'game bet, no win', '69614983538117', 'BookOfWinner', '2000.00'),
(1254, '2018-02-08 14:18:21', '494.56', 'game bet, no win', '69614983538117', 'BookOfRa', '500.00'),
(1255, '2018-02-08 14:19:35', '494.47', 'game bet, no win', '69614983538117', 'SnowWhite', '9.00'),
(1256, '2018-02-08 14:19:55', '489.47', 'game bet, no win', '69614983538117', 'BookOfRa', '500.00'),
(1257, '2018-02-08 14:19:57', '484.47', 'game bet, no win', '69614983538117', 'BookOfRa', '500.00'),
(1258, '2018-02-08 14:19:59', '475.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1259, '2018-02-08 14:20:01', '466.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1260, '2018-02-08 14:20:03', '457.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1261, '2018-02-08 14:20:07', '448.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1262, '2018-02-08 14:20:09', '439.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1263, '2018-02-08 14:20:10', '430.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1264, '2018-02-08 14:20:12', '421.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1265, '2018-02-08 14:20:13', '412.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1266, '2018-02-08 14:20:15', '403.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1267, '2018-02-08 14:20:16', '394.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1268, '2018-02-08 14:20:18', '385.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1269, '2018-02-08 14:20:45', '1.47', 'game bet, no win', '69614983538117', 'BookOfRa', '900.00'),
(1270, '2018-02-08 14:20:56', '1.38', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1271, '2018-02-08 14:21:00', '1.29', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1272, '2018-02-08 14:21:02', '1.30', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1273, '2018-02-08 14:21:07', '1.21', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1274, '2018-02-08 14:21:09', '1.12', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1275, '2018-02-08 14:21:12', '1.03', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1276, '2018-02-08 14:21:14', '0.94', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1277, '2018-02-08 14:21:16', '0.85', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1278, '2018-02-08 14:21:17', '0.81', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1279, '2018-02-08 14:21:48', '0.77', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1280, '2018-02-08 14:23:38', '0.68', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1281, '2018-02-08 14:24:21', '0.59', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1282, '2018-02-08 14:24:23', '0.60', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1283, '2018-02-08 14:26:06', '0.51', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1284, '2018-02-08 14:44:08', '0.42', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1285, '2018-02-08 14:44:10', '0.33', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1286, '2018-02-08 14:44:12', '0.24', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1287, '2018-02-08 14:44:14', '0.15', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1288, '2018-02-08 14:44:17', '0.11', 'game bet, win', '69614983538117', 'BookOfRa', '9.00'),
(1289, '2018-02-08 15:01:48', '0.02', 'game bet, no win', '69614983538117', 'BookOfRa', '9.00'),
(1290, '2018-02-08 15:02:12', '0.01', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1291, '2018-02-08 15:02:51', '0.00', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1292, '2018-02-08 15:08:30', '12.29', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1293, '2018-02-08 15:09:09', '12.28', 'game bet, no win', '69614983538117', 'BookOfRa', '1.00'),
(1294, '2018-02-08 15:10:03', '102.99', 'game bet, no win', '86868944669647', 'BookOfRa', '1.00'),
(1295, '2018-02-08 15:10:06', '102.98', 'game bet, no win', '86868944669647', 'BookOfRa', '1.00'),
(1296, '2018-02-08 15:10:33', '102.97', 'game bet, no win', '86868944669647', 'BookOfRa', '1.00'),
(1297, '2018-02-08 15:10:35', '102.96', 'game bet, no win', '86868944669647', 'BookOfRa', '1.00'),
(1298, '2018-02-08 15:10:38', '102.87', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1299, '2018-02-08 15:10:39', '102.83', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1300, '2018-02-08 15:10:43', '109.09', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1301, '2018-02-08 15:10:58', '109.00', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1302, '2018-02-08 15:11:00', '109.41', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1303, '2018-02-08 15:11:24', '109.57', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1304, '2018-02-08 15:11:30', '110.28', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1305, '2018-02-08 15:11:35', '110.19', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1306, '2018-02-08 15:11:36', '110.10', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1307, '2018-02-08 15:11:38', '110.01', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1308, '2018-02-08 15:11:40', '109.97', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1309, '2018-02-08 15:11:43', '109.98', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1310, '2018-02-08 15:11:46', '109.89', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1311, '2018-02-08 15:11:48', '110.20', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1312, '2018-02-08 15:11:53', '110.21', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1313, '2018-02-08 15:11:57', '110.22', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1314, '2018-02-08 15:12:00', '110.43', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1315, '2018-02-08 15:12:06', '110.54', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1316, '2018-02-08 15:12:10', '110.50', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1317, '2018-02-08 15:12:13', '110.61', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1318, '2018-02-08 15:12:18', '111.62', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1319, '2018-02-08 15:12:23', '111.53', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1320, '2018-02-08 15:12:25', '111.44', 'game bet, no win', '86868944669647', 'BookOfRa', '9.00'),
(1321, '2018-02-08 15:12:27', '112.15', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1322, '2018-02-08 15:12:34', '115.56', 'game bet, win', '86868944669647', 'BookOfRa', '9.00'),
(1323, '2018-02-09 09:35:59', '115.72', 'game bet, win', '86868944669647', 'BookOfWinner', '9.00'),
(1324, '2018-02-09 09:41:10', '116.53', 'game bet, win', '86868944669647', 'BookOfWinner', '9.00'),
(1325, '2018-02-09 09:41:17', '117.43', 'game gamble win', '86868944669647', NULL, NULL),
(1326, '2018-02-09 09:45:34', '117.44', 'game bet, win', '86868944669647', 'BookOfWinner', '9.00'),
(1327, '2018-02-09 09:45:59', '117.54', 'game gamble win', '86868944669647', NULL, NULL),
(1328, '2018-02-09 09:46:19', '117.55', 'game bet, win', '86868944669647', 'BookOfWinner', '9.00'),
(1329, '2018-02-09 09:46:24', '117.45', 'game gamble loose', '86868944669647', NULL, NULL),
(1330, '2018-02-09 09:47:16', '117.36', 'game bet, no win', '86868944669647', 'Bananas', '9.00'),
(1331, '2018-02-09 09:47:18', '117.31', 'game bet, win', '86868944669647', 'Bananas', '9.00'),
(1332, '2018-02-09 09:47:23', '117.35', 'game gamble win', '86868944669647', NULL, NULL),
(1333, '2018-02-09 09:47:27', '117.26', 'game bet, no win', '86868944669647', 'Bananas', '9.00'),
(1334, '2018-02-09 10:55:18', '118.17', 'game bet, win', '86868944669647', 'BookOfWinner', '9.00'),
(1335, '2018-02-09 10:55:29', '117.17', 'game gamble loose', '86868944669647', NULL, NULL),
(1336, '2018-02-09 10:58:15', '117.08', 'game bet, no win', '86868944669647', 'ScatterWins', '9.00'),
(1337, '2018-02-09 11:12:45', '117.99', 'game bet, win', '86868944669647', 'ScatterWins', '9.00'),
(1338, '2018-02-09 11:23:04', '117.94', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1339, '2018-02-09 11:23:27', '117.89', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1340, '2018-02-09 11:23:28', '117.84', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1341, '2018-02-09 11:23:30', '117.79', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1342, '2018-02-09 11:23:32', '117.74', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1343, '2018-02-09 11:23:33', '117.69', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1344, '2018-02-09 11:23:35', '117.64', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1345, '2018-02-09 11:23:37', '117.59', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1346, '2018-02-09 11:23:38', '117.54', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1347, '2018-02-09 11:23:40', '117.69', 'game bet, win', '86868944669647', 'ScatterWins', '5.00'),
(1348, '2018-02-09 11:23:44', '118.64', 'game bet, win', '86868944669647', 'ScatterWins', '5.00'),
(1349, '2018-02-09 11:23:48', '118.59', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1350, '2018-02-09 11:23:50', '118.54', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1351, '2018-02-09 11:23:51', '118.49', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1352, '2018-02-09 11:23:53', '118.44', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1353, '2018-02-09 11:23:54', '118.39', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1354, '2018-02-09 11:23:56', '118.34', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1355, '2018-02-09 11:23:57', '118.29', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1356, '2018-02-09 11:23:59', '118.24', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1357, '2018-02-09 11:24:01', '118.29', 'game bet, win', '86868944669647', 'ScatterWins', '5.00'),
(1358, '2018-02-09 11:24:04', '118.24', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1359, '2018-02-09 11:24:05', '118.19', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1360, '2018-02-09 11:24:07', '118.14', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1361, '2018-02-09 11:24:09', '118.09', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1362, '2018-02-09 11:24:10', '118.04', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1363, '2018-02-09 11:24:12', '117.99', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1364, '2018-02-09 11:24:14', '117.94', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1365, '2018-02-09 11:24:16', '117.99', 'game bet, win', '86868944669647', 'ScatterWins', '5.00'),
(1366, '2018-02-09 11:24:19', '117.94', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1367, '2018-02-09 11:26:35', '117.89', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1368, '2018-02-09 11:26:38', '117.84', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1369, '2018-02-09 11:26:40', '117.79', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1370, '2018-02-09 11:26:42', '117.74', 'game bet, no win', '86868944669647', 'ScatterWins', '5.00'),
(1371, '2018-02-09 11:28:25', '137.49', 'game bet, win', '86868944669647', 'ScatterWins', '5.00'),
(1372, '2018-02-09 11:31:05', '155.94', 'game bet, win', '86868944669647', 'ScatterWins', '5.00'),
(1373, '2018-02-09 11:40:48', '156.18', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1374, '2018-02-09 11:42:27', '162.27', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1375, '2018-02-09 11:43:52', '163.06', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1376, '2018-02-09 11:45:11', '163.85', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1377, '2018-02-09 11:46:13', '164.54', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1378, '2018-02-09 11:47:37', '164.73', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1379, '2018-02-09 11:50:23', '164.92', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1380, '2018-02-09 11:50:41', '165.31', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1381, '2018-02-09 11:51:15', '165.30', 'game bet, no win', '86868944669647', 'ScatterWins', '1.00'),
(1382, '2018-02-09 11:51:29', '80.30', 'game bet, no win', '86868944669647', 'ScatterWins', '85.00'),
(1383, '2018-02-09 11:51:36', '91.19', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1384, '2018-02-09 11:51:41', '97.18', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1385, '2018-02-09 11:52:21', '104.67', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1386, '2018-02-09 11:52:34', '107.46', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1387, '2018-02-09 11:53:18', '117.75', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1388, '2018-02-09 11:53:42', '118.14', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1389, '2018-02-09 11:53:56', '118.43', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1390, '2018-02-09 11:54:29', '118.67', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1391, '2018-02-09 11:55:04', '124.46', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1392, '2018-02-09 12:00:39', '130.30', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1393, '2018-02-09 12:04:11', '132.69', 'game bet, win', '86868944669647', 'ScatterWins', '1.00'),
(1394, '2018-02-09 12:43:12', '132.69', 'logout', '86868944669647', NULL, NULL),
(1395, '2018-02-09 12:46:09', '132.69', 'logout', '86868944669647', NULL, NULL),
(1396, '2018-02-09 12:46:35', '132.69', 'logout', '86868944669647', NULL, NULL),
(1397, '2018-02-09 12:47:59', '132.69', 'logout', '86868944669647', NULL, NULL),
(1398, '2018-02-09 12:51:16', '132.69', 'logout', '86868944669647', NULL, NULL),
(1399, '2018-02-09 12:52:16', '132.69', 'logout', '86868944669647', NULL, NULL),
(1400, '2018-02-09 12:53:15', '132.69', 'logout', '86868944669647', NULL, NULL),
(1401, '2018-02-09 12:53:32', '132.69', 'logout', '86868944669647', NULL, NULL),
(1402, '2018-02-09 12:54:11', '132.69', 'logout', '86868944669647', NULL, NULL),
(1403, '2018-02-09 12:54:42', '132.69', 'logout', '86868944669647', NULL, NULL),
(1404, '2018-02-09 12:55:46', '132.69', 'logout', '86868944669647', NULL, NULL),
(1405, '2018-02-09 13:14:42', '132.64', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1406, '2018-02-09 13:14:44', '132.61', 'game bet, win', '86868944669647', 'CasinoWorld', '5.00'),
(1407, '2018-02-09 13:16:15', '132.56', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1408, '2018-02-09 13:16:17', '132.51', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1409, '2018-02-09 13:16:19', '132.48', 'game bet, win', '86868944669647', 'CasinoWorld', '5.00'),
(1410, '2018-02-09 13:17:16', '132.43', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1411, '2018-02-09 13:17:18', '132.38', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1412, '2018-02-09 13:17:19', '132.37', 'game bet, win', '86868944669647', 'CasinoWorld', '5.00'),
(1413, '2018-02-09 13:17:43', '132.36', 'game bet, win', '86868944669647', 'BananasGoBahamas', '5.00'),
(1414, '2018-02-09 13:19:33', '132.31', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1415, '2018-02-09 13:19:35', '132.26', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1416, '2018-02-09 13:19:38', '132.25', 'game bet, win', '86868944669647', 'CasinoWorld', '5.00'),
(1417, '2018-02-09 13:21:26', '132.20', 'game bet, no win', '86868944669647', 'CasinoWorld', '5.00'),
(1418, '2018-02-09 13:21:30', '132.18', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1419, '2018-02-09 13:34:12', '131.98', 'game bet, no win', '86868944669647', 'CasinoWorld', '20.00'),
(1420, '2018-02-09 13:34:14', '131.78', 'game bet, no win', '86868944669647', 'CasinoWorld', '20.00'),
(1421, '2018-02-09 13:34:16', '131.58', 'game bet, no win', '86868944669647', 'CasinoWorld', '20.00'),
(1422, '2018-02-09 13:34:17', '131.44', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1423, '2018-02-09 13:37:02', '131.30', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1424, '2018-02-09 13:43:13', '131.74', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1425, '2018-02-09 13:44:49', '131.72', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1426, '2018-02-09 13:44:58', '131.52', 'game bet, no win', '86868944669647', 'CasinoWorld', '20.00'),
(1427, '2018-02-09 13:45:01', '131.72', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1428, '2018-02-09 14:10:45', '131.67', 'game bet, no win', '86868944669647', 'BananasGoBahamas', '5.00'),
(1429, '2018-02-09 14:10:54', '131.67', 'game bet, win', '86868944669647', 'BookOfWinner', '5.00'),
(1430, '2018-02-09 14:11:12', '131.62', 'game bet, no win', '86868944669647', 'Gulliver', '5.00'),
(1431, '2018-02-09 14:11:14', '131.72', 'game bet, win', '86868944669647', 'Gulliver', '5.00'),
(1432, '2018-02-09 14:11:18', '131.67', 'game bet, no win', '86868944669647', 'Gulliver', '5.00'),
(1433, '2018-02-09 14:11:28', '131.66', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1434, '2018-02-09 14:11:30', '131.65', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1435, '2018-02-09 14:11:33', '131.64', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1436, '2018-02-09 14:11:35', '131.63', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1437, '2018-02-09 14:11:37', '131.62', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1438, '2018-02-09 14:11:39', '132.31', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1439, '2018-02-09 14:44:42', '131.61', 'game gamble loose', '86868944669647', NULL, NULL),
(1440, '2018-02-09 21:13:14', '131.60', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1441, '2018-02-09 21:13:16', '131.59', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1442, '2018-02-09 21:13:18', '132.08', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1443, '2018-02-09 21:13:22', '132.07', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1444, '2018-02-09 21:13:23', '132.06', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1445, '2018-02-09 21:13:25', '132.05', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1446, '2018-02-09 21:13:27', '132.04', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1447, '2018-02-09 21:13:28', '132.03', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1448, '2018-02-09 21:13:30', '132.02', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1449, '2018-02-09 21:13:32', '132.01', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1450, '2018-02-09 21:13:33', '132.00', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1451, '2018-02-09 21:13:35', '131.99', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1452, '2018-02-09 21:13:37', '131.98', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1453, '2018-02-09 21:13:38', '131.97', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1454, '2018-02-09 21:13:40', '131.96', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1455, '2018-02-09 21:13:42', '131.95', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1456, '2018-02-09 21:13:44', '131.94', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1457, '2018-02-09 21:13:45', '131.93', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1458, '2018-02-09 21:13:47', '131.92', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1459, '2018-02-09 21:13:48', '131.91', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1460, '2018-02-09 21:13:50', '131.95', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1461, '2018-02-09 21:13:53', '131.94', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1462, '2018-02-09 21:13:55', '134.03', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1463, '2018-02-09 21:15:46', '134.02', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1464, '2018-02-09 21:15:48', '134.06', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1465, '2018-02-09 21:16:08', '134.05', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1466, '2018-02-09 21:16:10', '134.04', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1467, '2018-02-09 21:16:12', '134.08', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1468, '2018-02-09 21:16:16', '134.07', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1469, '2018-02-09 21:16:18', '134.06', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1470, '2018-02-09 21:16:20', '134.10', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1471, '2018-02-09 21:16:23', '134.09', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1472, '2018-02-09 21:16:25', '134.08', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1473, '2018-02-09 21:16:27', '134.12', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1474, '2018-02-09 21:16:31', '134.11', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1475, '2018-02-09 21:16:33', '134.10', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1476, '2018-02-09 21:16:35', '134.09', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1477, '2018-02-09 21:16:37', '134.08', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1478, '2018-02-09 21:16:39', '134.07', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1479, '2018-02-09 21:16:42', '134.06', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1480, '2018-02-09 21:16:44', '134.05', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1481, '2018-02-09 21:16:46', '134.04', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1482, '2018-02-09 21:16:48', '134.08', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1483, '2018-02-09 21:16:51', '134.07', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1484, '2018-02-09 21:16:53', '134.11', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1485, '2018-02-09 21:16:57', '134.10', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1486, '2018-02-09 21:16:59', '134.09', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1487, '2018-02-09 21:17:01', '134.58', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1488, '2018-02-09 21:17:06', '136.07', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1489, '2018-02-09 21:17:13', '136.06', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1490, '2018-02-09 21:17:15', '136.10', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1491, '2018-02-09 21:17:19', '136.09', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1492, '2018-02-09 21:17:21', '136.08', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1493, '2018-02-09 21:17:23', '136.12', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1494, '2018-02-09 21:17:26', '136.11', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1495, '2018-02-09 21:17:28', '136.15', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1496, '2018-02-09 21:19:44', '136.14', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1497, '2018-02-09 21:19:46', '136.18', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1498, '2018-02-09 21:19:52', '136.17', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1499, '2018-02-09 21:19:54', '136.16', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1500, '2018-02-09 21:19:56', '136.15', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1501, '2018-02-09 21:19:59', '136.19', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1502, '2018-02-09 21:20:02', '136.18', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1503, '2018-02-09 21:20:04', '136.17', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1504, '2018-02-09 21:20:06', '136.16', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1505, '2018-02-09 21:20:08', '136.15', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1506, '2018-02-09 21:20:11', '136.14', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1507, '2018-02-09 21:20:13', '136.18', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1508, '2018-02-09 21:20:16', '136.17', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1509, '2018-02-09 21:20:18', '136.16', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1510, '2018-02-09 21:20:20', '136.15', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1511, '2018-02-09 21:20:23', '136.14', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1512, '2018-02-09 21:20:25', '136.13', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1513, '2018-02-09 21:20:27', '136.92', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1514, '2018-02-09 21:20:33', '136.91', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1515, '2018-02-09 21:20:35', '136.90', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1516, '2018-02-09 21:20:38', '136.89', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1517, '2018-02-09 21:20:40', '136.88', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1518, '2018-02-09 21:20:42', '136.97', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1519, '2018-02-09 21:20:46', '136.96', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1520, '2018-02-09 21:20:48', '136.95', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1521, '2018-02-09 21:20:50', '136.94', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1522, '2018-02-09 21:20:52', '136.93', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1523, '2018-02-09 21:20:54', '136.92', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1524, '2018-02-09 21:20:56', '136.91', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1525, '2018-02-09 21:20:59', '136.95', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1526, '2018-02-09 21:21:02', '137.44', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1527, '2018-02-09 21:21:07', '137.43', 'game bet, no win', '86868944669647', 'Gulliver', '1.00');
INSERT INTO `stats_pin` (`id`, `data`, `summa`, `sobytie`, `PIN`, `game`, `stav`) VALUES
(1528, '2018-02-09 21:21:09', '137.42', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1529, '2018-02-09 21:21:11', '137.41', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1530, '2018-02-09 21:21:13', '137.40', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1531, '2018-02-09 21:21:15', '137.39', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1532, '2018-02-09 21:21:17', '137.38', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1533, '2018-02-09 21:21:20', '137.37', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1534, '2018-02-09 21:21:22', '137.36', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1535, '2018-02-09 21:21:24', '137.35', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1536, '2018-02-09 21:21:26', '137.34', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1537, '2018-02-09 21:21:28', '137.33', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1538, '2018-02-09 21:21:30', '137.32', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1539, '2018-02-09 21:21:32', '137.31', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1540, '2018-02-09 21:21:35', '137.35', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1541, '2018-02-09 21:21:38', '137.39', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1542, '2018-02-09 21:21:41', '137.38', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1543, '2018-02-09 21:21:44', '137.37', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1544, '2018-02-09 21:21:46', '137.36', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1545, '2018-02-09 21:21:48', '137.35', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1546, '2018-02-09 21:21:50', '137.49', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1547, '2018-02-09 21:21:54', '137.48', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1548, '2018-02-09 21:21:56', '137.57', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1549, '2018-02-09 21:22:00', '137.56', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1550, '2018-02-09 21:22:02', '137.55', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1551, '2018-02-09 21:22:04', '137.59', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1552, '2018-02-09 21:22:08', '137.58', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1553, '2018-02-09 21:22:10', '137.57', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1554, '2018-02-09 21:22:12', '137.56', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1555, '2018-02-09 21:22:14', '137.55', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1556, '2018-02-09 21:22:16', '137.54', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1557, '2018-02-09 21:22:18', '142.83', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1558, '2018-02-10 06:55:00', '142.82', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1559, '2018-02-10 06:55:03', '142.81', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1560, '2018-02-10 06:55:05', '142.80', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1561, '2018-02-10 06:55:07', '142.79', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1562, '2018-02-10 06:55:09', '147.13', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1563, '2018-02-10 06:58:04', '147.12', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1564, '2018-02-10 06:58:06', '147.11', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1565, '2018-02-10 06:58:08', '147.15', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1566, '2018-02-10 06:58:11', '147.14', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1567, '2018-02-10 06:58:13', '147.13', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1568, '2018-02-10 06:58:16', '147.12', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1569, '2018-02-10 06:58:18', '147.11', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1570, '2018-02-10 06:58:20', '147.10', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1571, '2018-02-10 06:58:22', '147.09', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1572, '2018-02-10 06:58:24', '147.08', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1573, '2018-02-10 06:58:26', '147.07', 'game bet, no win', '86868944669647', 'Gulliver', '1.00'),
(1574, '2018-02-10 06:58:29', '155.06', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1575, '2018-02-10 07:06:14', '155.05', 'game bet, no win', '86868944669647', 'BookOfWinner', '1.00'),
(1576, '2018-02-10 10:54:41', '155.09', 'game bet, win', '86868944669647', 'Gulliver', '1.00'),
(1577, '2018-02-12 08:59:26', '155.14', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1578, '2018-02-12 09:15:55', '155.09', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1579, '2018-02-12 09:15:57', '155.14', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1580, '2018-02-12 09:17:00', '155.09', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1581, '2018-02-12 09:17:02', '155.09', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1582, '2018-02-12 09:18:54', '155.14', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1583, '2018-02-12 09:20:22', '155.19', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1584, '2018-02-12 09:25:39', '155.14', 'game bet, no win', '86868944669647', 'CasinoAndStars', '5.00'),
(1585, '2018-02-12 09:25:42', '155.09', 'game bet, no win', '86868944669647', 'CasinoAndStars', '5.00'),
(1586, '2018-02-12 09:25:45', '155.14', 'game bet, win', '86868944669647', 'CasinoAndStars', '5.00'),
(1587, '2018-02-12 09:27:18', '155.09', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1588, '2018-02-12 09:27:20', '155.04', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1589, '2018-02-12 09:27:22', '154.99', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1590, '2018-02-12 09:27:25', '154.94', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1591, '2018-02-12 09:27:50', '154.89', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1592, '2018-02-12 09:27:54', '154.84', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1593, '2018-02-12 09:27:56', '154.79', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1594, '2018-02-12 09:27:59', '154.84', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1595, '2018-02-12 09:49:11', '154.79', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1596, '2018-02-12 09:49:13', '154.84', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1597, '2018-02-12 09:49:46', '154.89', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1598, '2018-02-12 09:49:51', '154.84', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1599, '2018-02-12 09:49:53', '154.89', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1600, '2018-02-12 09:52:56', '154.89', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1601, '2018-02-12 09:53:48', '154.84', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1602, '2018-02-12 09:54:28', '154.79', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1603, '2018-02-12 09:54:30', '154.79', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1604, '2018-02-12 09:55:14', '154.74', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1605, '2018-02-12 09:55:17', '154.74', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1606, '2018-02-12 09:55:38', '154.79', 'game gamble win', '86868944669647', NULL, NULL),
(1607, '2018-02-12 09:55:46', '154.89', 'game gamble win', '86868944669647', NULL, NULL),
(1608, '2018-02-12 09:55:49', '155.09', 'game gamble win', '86868944669647', NULL, NULL),
(1609, '2018-02-12 09:55:52', '155.49', 'game gamble win', '86868944669647', NULL, NULL),
(1610, '2018-02-12 09:55:54', '154.69', 'game gamble loose', '86868944669647', NULL, NULL),
(1611, '2018-02-12 11:02:16', '154.64', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1612, '2018-02-12 11:02:20', '154.59', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1613, '2018-02-12 11:04:17', '154.54', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1614, '2018-02-12 11:04:19', '154.49', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1615, '2018-02-12 11:04:21', '154.44', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1616, '2018-02-12 11:04:23', '154.39', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1617, '2018-02-12 11:04:25', '154.34', 'game bet, no win', '86868944669647', 'BookOfWins', '5.00'),
(1618, '2018-02-12 11:04:30', '154.34', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1619, '2018-02-12 11:11:12', '154.54', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1620, '2018-02-12 11:13:03', '154.54', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1621, '2018-02-12 11:14:46', '154.74', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1622, '2018-02-12 11:16:56', '154.64', 'game bet, no win', '86868944669647', 'BookOfWins', '10.00'),
(1623, '2018-02-12 11:16:59', '162.74', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1624, '2018-02-12 11:17:52', '162.74', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1625, '2018-02-12 11:18:02', '164.94', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1626, '2018-02-12 11:18:56', '165.09', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1627, '2018-02-12 11:24:15', '165.04', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1628, '2018-02-12 11:26:21', '165.09', 'game gamble win', '86868944669647', NULL, NULL),
(1629, '2018-02-12 11:26:38', '165.19', 'game gamble win', '86868944669647', NULL, NULL),
(1630, '2018-02-12 11:26:48', '164.99', 'game gamble loose', '86868944669647', NULL, NULL),
(1631, '2018-02-12 11:26:53', '164.89', 'game bet, no win', '86868944669647', 'BookOfWins', '10.00'),
(1632, '2018-02-12 11:27:27', '164.99', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1633, '2018-02-12 11:29:46', '164.89', 'game bet, no win', '86868944669647', 'BookOfWins', '10.00'),
(1634, '2018-02-12 11:30:30', '164.79', 'game bet, no win', '86868944669647', 'BookOfWins', '10.00'),
(1635, '2018-02-12 11:30:32', '164.69', 'game bet, no win', '86868944669647', 'BookOfWins', '10.00'),
(1636, '2018-02-12 11:30:34', '164.69', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1637, '2018-02-12 11:30:54', '164.64', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1638, '2018-02-12 11:37:48', '164.69', 'game bet, win', '86868944669647', 'BookOfWins', '10.00'),
(1639, '2018-02-12 12:31:16', '164.64', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1640, '2018-02-12 12:31:19', '164.89', 'game bet, win', '86868944669647', 'BookOfWinner', '5.00'),
(1641, '2018-02-12 12:32:06', '164.84', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1642, '2018-02-12 12:32:11', '164.79', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1643, '2018-02-12 12:32:16', '165.14', 'game bet, win', '86868944669647', 'BookOfWinner', '5.00'),
(1644, '2018-02-12 12:32:25', '164.74', 'game gamble loose', '86868944669647', NULL, NULL),
(1645, '2018-02-12 12:41:27', '164.74', 'game bet, win', '86868944669647', 'BookOfWinner', '5.00'),
(1646, '2018-02-12 12:41:31', '164.69', 'game gamble loose', '86868944669647', NULL, NULL),
(1647, '2018-02-12 12:41:34', '164.64', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1648, '2018-02-12 12:41:36', '164.59', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1649, '2018-02-12 12:41:38', '164.54', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1650, '2018-02-12 12:41:40', '164.49', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1651, '2018-02-12 12:41:42', '164.44', 'game bet, no win', '86868944669647', 'BookOfWinner', '5.00'),
(1652, '2018-02-12 12:41:45', '164.44', 'game bet, win', '86868944669647', 'BookOfWinner', '5.00'),
(1653, '2018-02-12 12:41:49', '164.49', 'game gamble win', '86868944669647', NULL, NULL),
(1654, '2018-02-12 12:42:00', '164.49', 'game bet, win', '86868944669647', 'BookOfWins', '5.00'),
(1655, '2018-02-12 12:42:04', '164.54', 'game gamble win', '86868944669647', NULL, NULL),
(1656, '2018-02-12 12:42:07', '164.64', 'game gamble win', '86868944669647', NULL, NULL),
(1657, '2018-02-12 12:59:43', '164.59', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1658, '2018-02-12 12:59:47', '164.54', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1659, '2018-02-12 12:59:49', '164.49', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1660, '2018-02-12 12:59:51', '164.44', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1661, '2018-02-12 12:59:53', '164.39', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1662, '2018-02-12 12:59:55', '164.34', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1663, '2018-02-12 12:59:57', '164.39', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1664, '2018-02-12 13:05:00', '164.44', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1665, '2018-02-12 13:05:04', '164.39', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1666, '2018-02-12 13:05:07', '164.34', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1667, '2018-02-12 13:05:09', '165.29', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1668, '2018-02-12 13:08:20', '165.24', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1669, '2018-02-12 13:08:23', '165.19', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1670, '2018-02-12 13:08:25', '165.24', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1671, '2018-02-12 13:08:29', '165.19', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1672, '2018-02-12 13:08:32', '165.14', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1673, '2018-02-12 13:08:34', '165.19', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1674, '2018-02-12 13:08:38', '165.14', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1675, '2018-02-12 13:08:40', '165.09', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1676, '2018-02-12 13:08:43', '165.04', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1677, '2018-02-12 13:08:45', '164.99', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1678, '2018-02-12 13:08:48', '164.94', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1679, '2018-02-12 13:08:50', '164.89', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1680, '2018-02-12 13:08:52', '164.84', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1681, '2018-02-12 13:08:55', '164.79', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1682, '2018-02-12 13:08:57', '164.74', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1683, '2018-02-12 13:09:00', '164.69', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1684, '2018-02-12 13:09:02', '164.64', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1685, '2018-02-12 13:09:04', '164.59', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1686, '2018-02-12 13:09:07', '164.54', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1687, '2018-02-12 13:09:09', '164.49', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1688, '2018-02-12 13:09:11', '164.44', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1689, '2018-02-12 13:09:14', '164.39', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1690, '2018-02-12 13:09:16', '164.44', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1691, '2018-02-12 13:09:20', '164.49', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1692, '2018-02-12 13:09:24', '164.54', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1693, '2018-02-12 13:09:29', '164.49', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1694, '2018-02-12 13:09:31', '164.44', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1695, '2018-02-12 13:09:33', '164.39', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1696, '2018-02-12 13:09:36', '164.34', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1697, '2018-02-12 13:09:38', '164.29', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1698, '2018-02-12 13:09:41', '164.39', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1699, '2018-02-12 13:09:45', '164.34', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1700, '2018-02-12 13:09:47', '164.29', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1701, '2018-02-12 13:09:50', '164.29', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1702, '2018-02-12 13:09:53', '164.24', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1703, '2018-02-12 13:09:56', '164.19', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1704, '2018-02-12 13:09:58', '164.14', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1705, '2018-02-12 13:10:00', '164.09', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1706, '2018-02-12 13:10:03', '164.04', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1707, '2018-02-12 13:10:05', '163.99', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1708, '2018-02-12 13:10:08', '163.94', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1709, '2018-02-12 13:10:10', '163.89', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1710, '2018-02-12 13:10:12', '163.84', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1711, '2018-02-12 13:10:15', '163.89', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1712, '2018-02-12 13:10:19', '163.84', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1713, '2018-02-12 13:10:21', '163.79', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1714, '2018-02-12 13:10:24', '163.74', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1715, '2018-02-12 13:10:26', '163.69', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1716, '2018-02-12 13:10:29', '163.69', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1717, '2018-02-12 13:10:32', '163.79', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1718, '2018-02-12 13:10:36', '163.74', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1719, '2018-02-12 13:10:39', '163.79', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1720, '2018-02-12 13:10:43', '163.74', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1721, '2018-02-12 13:10:45', '163.69', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1722, '2018-02-12 13:10:48', '163.64', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1723, '2018-02-12 13:10:50', '163.69', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1724, '2018-02-12 13:10:54', '163.64', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1725, '2018-02-12 13:10:57', '163.59', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1726, '2018-02-12 13:10:59', '163.54', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1727, '2018-02-12 13:11:01', '163.49', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1728, '2018-02-12 13:11:04', '163.44', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1729, '2018-02-12 13:11:06', '163.89', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1730, '2018-02-12 13:11:11', '163.94', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1731, '2018-02-12 13:11:15', '163.89', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1732, '2018-02-12 13:11:18', '163.84', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1733, '2018-02-12 13:11:20', '165.23', 'game bet, win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1734, '2018-02-12 13:26:17', '165.18', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '5.00'),
(1735, '2018-02-12 13:26:24', '165.17', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1736, '2018-02-12 13:26:27', '165.18', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1737, '2018-02-12 13:26:30', '165.17', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1738, '2018-02-12 13:26:33', '165.16', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1739, '2018-02-12 13:26:35', '165.15', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1740, '2018-02-12 13:26:37', '165.14', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1741, '2018-02-12 13:26:40', '165.15', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1742, '2018-02-12 13:26:43', '165.16', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1743, '2018-02-12 13:26:47', '165.15', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1744, '2018-02-12 13:26:49', '165.14', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1745, '2018-02-12 13:26:52', '165.13', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1746, '2018-02-12 13:26:54', '165.12', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1747, '2018-02-12 13:26:56', '165.13', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1748, '2018-02-12 13:27:00', '165.12', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1749, '2018-02-12 13:27:02', '165.11', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1750, '2018-02-12 13:27:05', '165.12', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1751, '2018-02-12 13:27:08', '165.11', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1752, '2018-02-12 13:27:11', '165.10', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1753, '2018-02-12 13:27:13', '165.09', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1754, '2018-02-12 13:27:15', '165.08', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1755, '2018-02-12 13:27:18', '165.07', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1756, '2018-02-12 13:27:20', '165.06', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1757, '2018-02-12 13:27:23', '165.05', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1758, '2018-02-12 13:27:25', '165.04', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1759, '2018-02-12 13:27:27', '165.03', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1760, '2018-02-12 13:27:30', '165.04', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1761, '2018-02-12 13:27:33', '165.03', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1762, '2018-02-12 13:27:36', '165.02', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1763, '2018-02-12 13:27:38', '165.01', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1764, '2018-02-12 13:27:40', '165.00', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1765, '2018-02-12 13:27:43', '164.99', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1766, '2018-02-12 13:27:45', '165.00', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1767, '2018-02-12 13:27:49', '164.99', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1768, '2018-02-12 13:27:51', '165.29', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1769, '2018-02-12 13:30:28', '165.28', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1770, '2018-02-12 13:30:31', '165.29', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1771, '2018-02-12 13:30:34', '165.30', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1772, '2018-02-12 13:30:38', '165.29', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1773, '2018-02-12 13:30:40', '165.28', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1774, '2018-02-12 13:30:43', '165.27', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1775, '2018-02-12 13:30:45', '165.26', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1776, '2018-02-12 13:30:47', '165.25', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1777, '2018-02-12 13:30:50', '165.24', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1778, '2018-02-12 13:30:52', '165.23', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1779, '2018-02-12 13:30:55', '165.22', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1780, '2018-02-12 13:32:15', '165.21', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1781, '2018-02-12 13:32:17', '165.20', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1782, '2018-02-12 13:32:19', '165.19', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1783, '2018-02-12 13:32:22', '165.18', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1784, '2018-02-12 13:32:24', '165.17', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1785, '2018-02-12 13:32:27', '165.16', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1786, '2018-02-12 13:32:29', '165.15', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1787, '2018-02-12 13:32:31', '165.14', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1788, '2018-02-12 13:32:34', '165.13', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1789, '2018-02-12 13:32:36', '165.12', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1790, '2018-02-12 15:29:14', '165.11', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1791, '2018-02-12 15:29:21', '165.12', 'game bet, win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1792, '2018-02-12 15:29:26', '165.11', 'game bet, no win', '86868944669647', 'GatesOfAvalon', '1.00'),
(1793, '2018-02-12 15:33:18', '165.10', 'game bet, no win', '86868944669647', 'CasinoAndStars', '1.00'),
(1794, '2018-02-12 15:33:22', '164.90', 'game bet, no win', '86868944669647', 'CasinoAndStars', '20.00'),
(1795, '2018-02-12 15:33:24', '164.70', 'game bet, no win', '86868944669647', 'CasinoAndStars', '20.00'),
(1796, '2018-02-12 15:33:26', '164.90', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1797, '2018-02-12 15:35:31', '164.90', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1798, '2018-02-12 15:40:09', '164.74', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1799, '2018-02-12 15:41:24', '164.54', 'game bet, no win', '86868944669647', 'CasinoAndStars', '20.00'),
(1800, '2018-02-12 15:41:26', '164.34', 'game bet, no win', '86868944669647', 'CasinoAndStars', '20.00'),
(1801, '2018-02-12 15:41:28', '164.26', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1802, '2018-02-12 15:44:06', '164.30', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1803, '2018-02-12 15:44:42', '164.10', 'game bet, no win', '86868944669647', 'CasinoAndStars', '20.00'),
(1804, '2018-02-12 15:44:45', '163.90', 'game bet, no win', '86868944669647', 'CasinoAndStars', '20.00'),
(1805, '2018-02-12 15:44:47', '163.76', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1806, '2018-02-12 15:50:46', '163.66', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1807, '2018-02-12 15:51:07', '163.76', 'game gamble win', '86868944669647', NULL, NULL),
(1808, '2018-02-12 15:51:18', '164.08', 'game bet, win', '86868944669647', 'CasinoAndStars', '20.00'),
(1809, '2018-02-12 15:51:26', '164.60', 'game gamble win', '86868944669647', NULL, NULL),
(1810, '2018-02-12 15:52:47', '164.50', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1811, '2018-02-12 15:53:34', '164.30', 'game bet, no win', '86868944669647', 'CasinoWorld', '20.00'),
(1812, '2018-02-12 15:53:37', '164.10', 'game bet, no win', '86868944669647', 'CasinoWorld', '20.00'),
(1813, '2018-02-12 15:53:39', '163.98', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1814, '2018-02-12 15:55:53', '163.78', 'game bet, no win', '86868944669647', 'CasinoWorld', '20.00'),
(1815, '2018-02-12 15:55:55', '164.38', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00'),
(1816, '2018-02-12 15:57:39', '164.58', 'game bet, win', '86868944669647', 'CasinoWorld', '20.00');

-- --------------------------------------------------------

--
-- Table structure for table `stat_pay`
--

CREATE TABLE `stat_pay` (
  `user` varchar(20) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `data` datetime NOT NULL,
  `vremya` time NOT NULL DEFAULT '00:00:00',
  `inm` varchar(12) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `outm` varchar(12) CHARACTER SET utf8 NOT NULL DEFAULT '',
  `subdiler` varchar(200) CHARACTER SET utf8 NOT NULL,
  `id_manager` int(10) NOT NULL,
  `id_agent` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

--
-- Dumping data for table `stat_pay`
--

INSERT INTO `stat_pay` (`user`, `data`, `vremya`, `inm`, `outm`, `subdiler`, `id_manager`, `id_agent`) VALUES
('26428043110290', '2018-02-05 19:06:26', '19:06:26', '12  (k)', '0.00', '2', 0, 1),
('69614983538117', '2018-02-07 09:30:08', '09:30:08', '123  (k)', '0.00', '2', 0, 1),
('04438815414421', '2018-02-07 13:31:16', '13:31:16', '500  (k)', '0.00', '47', 0, 2),
('54680203372338', '2018-02-08 10:26:32', '10:26:32', '500  (k)', '0.00', '47', 0, 2),
('94643637426663', '2018-02-08 12:16:52', '12:16:52', '200  (k)', '0.00', '48', 0, 2),
('86868944669647', '2018-02-08 13:37:59', '13:37:59', '123  (k)', '0.00', '48', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `subdiler`
--

CREATE TABLE `subdiler` (
  `sub_id` int(11) NOT NULL,
  `sub_name` varchar(100) CHARACTER SET cp1251 NOT NULL,
  `sub_code` varchar(20) CHARACTER SET cp1251 NOT NULL,
  `sub_login` varchar(20) CHARACTER SET cp1251 NOT NULL,
  `sub_pass` varchar(20) CHARACTER SET cp1251 NOT NULL,
  `sub_balance` decimal(12,2) NOT NULL DEFAULT '0.00',
  `sub_cashin` decimal(12,2) NOT NULL DEFAULT '0.00',
  `sub_ip` varchar(15) CHARACTER SET cp1251 NOT NULL,
  `sub_ip2` varchar(15) CHARACTER SET cp1251 NOT NULL,
  `id_manager` int(12) NOT NULL,
  `pers` int(3) NOT NULL,
  `max_win` int(20) NOT NULL,
  `denom` varchar(50) CHARACTER SET cp1251 NOT NULL,
  `id_agent` int(20) NOT NULL DEFAULT '0',
  `css` int(2) NOT NULL DEFAULT '1',
  `role` int(1) NOT NULL DEFAULT '0',
  `sub_email` varchar(255) NOT NULL,
  `block` int(1) NOT NULL,
  `game_cash_pool` decimal(12,2) NOT NULL,
  `game_current_cash_pool` decimal(12,0) NOT NULL,
  `adress` text NOT NULL,
  `diller` text NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subdiler`
--

INSERT INTO `subdiler` (`sub_id`, `sub_name`, `sub_code`, `sub_login`, `sub_pass`, `sub_balance`, `sub_cashin`, `sub_ip`, `sub_ip2`, `id_manager`, `pers`, `max_win`, `denom`, `id_agent`, `css`, `role`, `sub_email`, `block`, `game_cash_pool`, `game_current_cash_pool`, `adress`, `diller`, `updated_at`, `created_at`) VALUES
(2, 'maindiller', 'maindiller', 'maindiller', '50y7lh9gh3', '9999998.00', '999999.00', 'all', 'all', 0, 0, 0, '0.01 0.05 0.10 0.25 0.50 1.00', 1, 1, 2, 'NULL', 0, '1997.97', '0', '', '0', '2018-02-08 14:19:27', '0000-00-00 00:00:00'),
(47, 'diller', 'diller', 'diller', 'diller2018', '9497.00', '0.00', 'all', 'all', 0, 0, 0, '0.01 0.05 0.10 0.25 0.50 1.00', 2, 1, 0, 'NULL', 0, '200.00', '0', '', '0', '2018-02-08 09:26:32', '0000-00-00 00:00:00'),
(48, '601160', '601160', '601160', '601160', '4677.00', '0.00', 'all', 'all', 0, 0, 0, '0.01 0.05 0.10 0.25 0.50 1.00', 2, 1, 0, 'NULL', 0, '200.00', '0', '', '0', '2018-02-08 12:37:59', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `id` int(10) NOT NULL,
  `data` datetime NOT NULL,
  `summa` decimal(20,2) NOT NULL,
  `inm` decimal(20,2) NOT NULL,
  `outm` decimal(20,2) NOT NULL,
  `IP` varchar(50) NOT NULL,
  `fromuser` int(11) NOT NULL,
  `touser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Dumping data for table `transfers`
--

INSERT INTO `transfers` (`id`, `data`, `summa`, `inm`, `outm`, `IP`, `fromuser`, `touser`) VALUES
(1, '2018-02-05 19:02:07', '10000.00', '10000.00', '0.00', '93.75.9.205', 2, 47),
(2, '2018-02-08 12:02:16', '5000.00', '5000.00', '0.00', '93.75.25.102', 2, 48);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(14) DEFAULT NULL,
  `pass` varchar(14) DEFAULT NULL,
  `cash` decimal(12,2) DEFAULT '0.00',
  `cashin` decimal(12,2) DEFAULT '0.00',
  `cashout` decimal(12,2) DEFAULT '0.00',
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `fam` varchar(50) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `pcash` decimal(12,2) DEFAULT '0.00',
  `subdiler` varchar(255) DEFAULT NULL,
  `primechanie` varchar(400) NOT NULL,
  `status` varchar(200) NOT NULL,
  `id_agent` int(20) NOT NULL COMMENT 'can be kassir, manager, agent, subdiller, diller. subdiller.sub_id',
  `lock_str` int(2) NOT NULL DEFAULT '0',
  `user_max_win_cash` decimal(20,2) NOT NULL DEFAULT '35000.00',
  `user_last_win_cash` decimal(12,2) NOT NULL DEFAULT '0.00',
  `user_cash_lost` decimal(12,2) NOT NULL,
  `total_paid_pcash` decimal(12,0) NOT NULL,
  `auth` tinyint(1) NOT NULL COMMENT 'if user authed and session created => true',
  `sessions_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `pass`, `cash`, `cashin`, `cashout`, `email`, `name`, `fam`, `date`, `pcash`, `subdiler`, `primechanie`, `status`, `id_agent`, `lock_str`, `user_max_win_cash`, `user_last_win_cash`, `user_cash_lost`, `total_paid_pcash`, `auth`, `sessions_at`, `created_at`, `updated_at`) VALUES
(1, '26428043110290', '26428043110290', '1.39', '12.00', '0.00', NULL, NULL, NULL, '2018-02-05 18:06:26', '1.20', 'maindiller', '', '0', 2, 0, '19500.79', '0.00', '0.00', '0', 0, '2018-02-08 12:38:17', '0000-00-00 00:00:00', '2018-02-08 14:25:58'),
(2, '69614983538117', '69614983538117', '12.28', '123.00', '0.00', NULL, NULL, NULL, '2018-02-07 08:30:08', '0.00', 'maindiller', '', '0', 2, 0, '28603.46', '0.00', '0.00', '0', 0, '2018-02-08 13:09:09', '0000-00-00 00:00:00', '2018-02-08 15:09:09'),
(3, '04438815414421', '04438815414421', '0.00', '500.00', '0.00', NULL, NULL, NULL, '2018-02-07 12:31:16', '0.00', 'diller', '', '0', 47, 0, '20000.00', '0.00', '0.00', '0', 0, '2018-02-08 08:24:46', '0000-00-00 00:00:00', '2018-02-08 09:24:46'),
(4, '54680203372338', '54680203372338', '692.00', '500.00', '0.00', NULL, NULL, NULL, '2018-02-08 09:26:32', '50.00', 'diller', '', '0', 47, 0, '19610.90', '14.40', '0.00', '0', 0, '2018-02-08 08:41:50', '0000-00-00 00:00:00', '2018-02-08 09:41:50'),
(5, '94643637426663', '94643637426663', '60.75', '200.00', '0.00', NULL, NULL, NULL, '2018-02-08 11:16:52', '20.00', '601160', '', '0', 48, 0, '19523.55', '0.00', '0.00', '0', 0, '2018-02-08 11:08:24', '0000-00-00 00:00:00', '2018-02-08 12:08:24'),
(6, '86868944669647', '86868944669647', '164.58', '123.00', '0.00', NULL, NULL, NULL, '2018-02-08 12:37:59', '12.30', '601160', '', '0', 48, 0, '19892.41', '0.40', '0.00', '0', 0, '2018-02-12 13:57:39', '0000-00-00 00:00:00', '2018-02-12 15:57:39');

-- --------------------------------------------------------

--
-- Table structure for table `users_sessions`
--

CREATE TABLE `users_sessions` (
  `id` int(15) NOT NULL,
  `login` varchar(15) CHARACTER SET utf8 NOT NULL,
  `sid` varchar(128) CHARACTER SET utf8 NOT NULL,
  `upd_t` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=cp1251;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_history`
--
ALTER TABLE `admin_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id_agent`);

--
-- Indexes for table `authorizations`
--
ALTER TABLE `authorizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bonus_and_jackpot`
--
ALTER TABLE `bonus_and_jackpot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `datenow`
--
ALTER TABLE `datenow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `historysch`
--
ALTER TABLE `historysch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history_user`
--
ALTER TABLE `history_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meneger_history`
--
ALTER TABLE `meneger_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pay_stat`
--
ALTER TABLE `pay_stat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pers`
--
ALTER TABLE `pers`
  ADD PRIMARY KEY (`id_manager`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stats_pin`
--
ALTER TABLE `stats_pin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subdiler`
--
ALTER TABLE `subdiler`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_sessions`
--
ALTER TABLE `users_sessions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `admin_history`
--
ALTER TABLE `admin_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `id_agent` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `authorizations`
--
ALTER TABLE `authorizations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `bonus_and_jackpot`
--
ALTER TABLE `bonus_and_jackpot`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `datenow`
--
ALTER TABLE `datenow`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `historysch`
--
ALTER TABLE `historysch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `history_user`
--
ALTER TABLE `history_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `meneger_history`
--
ALTER TABLE `meneger_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pay_stat`
--
ALTER TABLE `pay_stat`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;
--
-- AUTO_INCREMENT for table `stats_pin`
--
ALTER TABLE `stats_pin`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1817;
--
-- AUTO_INCREMENT for table `subdiler`
--
ALTER TABLE `subdiler`
  MODIFY `sub_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
--
-- AUTO_INCREMENT for table `transfers`
--
ALTER TABLE `transfers`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users_sessions`
--
ALTER TABLE `users_sessions`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
