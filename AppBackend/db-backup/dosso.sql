-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 12:50 PM
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
-- Database: `dosso`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_contests`
--

CREATE TABLE `add_contests` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `startdate` datetime NOT NULL,
  `enddate` datetime NOT NULL,
  `registrationfees` varchar(255) NOT NULL,
  `totalprice` varchar(255) NOT NULL,
  `totalspin` varchar(255) NOT NULL,
  `thumbnail` text NOT NULL,
  `joinmembers` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `add_contests`
--

INSERT INTO `add_contests` (`id`, `title`, `startdate`, `enddate`, `registrationfees`, `totalprice`, `totalspin`, `thumbnail`, `joinmembers`, `status`, `created_at`, `updated_at`) VALUES
(1, 'SHAGUN51-2425001', '2024-05-03 00:00:00', '2024-05-05 00:00:00', '51', '7650000', '7', '1714725337.png', '151000', '2', '2024-05-03 03:05:37', '2024-05-25 13:07:08'),
(2, 'SHAGUN10-2425002', '2024-05-17 17:28:00', '2024-05-18 06:29:00', '10', '2000', '7', '1715947142.png', '2000', '2', '2024-05-17 06:29:02', '2024-05-25 13:05:55');

-- --------------------------------------------------------

--
-- Table structure for table `add_shows`
--

CREATE TABLE `add_shows` (
  `id` int(11) NOT NULL,
  `adstitle` varchar(255) NOT NULL,
  `displayshow` varchar(255) NOT NULL,
  `url` text DEFAULT NULL,
  `redirectlink` text NOT NULL,
  `mediatype` varchar(255) NOT NULL,
  `addimage` text DEFAULT NULL,
  `videourl` text NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `add_shows`
--

INSERT INTO `add_shows` (`id`, `adstitle`, `displayshow`, `url`, `redirectlink`, `mediatype`, `addimage`, `videourl`, `status`, `created_at`, `updated_at`) VALUES
(2, 'Win Price', 'home', '0', 'google.com', 'image', '1714807678.png', '0', '0', '2024-05-04 01:57:58', '2024-05-04 01:57:58'),
(3, 'Mega Contest', 'home', '0', 'google.com', 'image', '1714807762.png', '0', '0', '2024-05-04 01:59:22', '2024-05-04 01:59:22');

-- --------------------------------------------------------

--
-- Table structure for table `admin_vendors`
--

CREATE TABLE `admin_vendors` (
  `id` int(11) NOT NULL,
  `vendorname` varchar(255) NOT NULL,
  `vendorprofile` text NOT NULL,
  `schoolname` varchar(255) NOT NULL,
  `contactno` varchar(255) NOT NULL,
  `emailaddress` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `referidvendor` varchar(255) NOT NULL DEFAULT '0',
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_vendors`
--

INSERT INTO `admin_vendors` (`id`, `vendorname`, `vendorprofile`, `schoolname`, `contactno`, `emailaddress`, `password`, `referidvendor`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Kishan', '1714808062.png', 'digitals', '5895645896', 'ans@gmail.com', '$2y$12$68HlP8PCTPQx1V5UsFBmI.Tm/AadmnPDlW2TlGm.xjXpslCax5Qf6', '0', '0', '2024-05-04 02:04:23', '2024-05-04 02:04:23'),
(2, 'Anshul', '1714808148.png', 'digitals', '5895645856', 'admin@gmail.com', '$2y$12$mhpv4qeKOYvFZxtLAQ3DZ.Ix9c1SCzyMYBU5vEGqS4HFXxxAiTtXW', '0', '0', '2024-05-04 02:05:48', '2024-05-04 02:05:48');

-- --------------------------------------------------------

--
-- Table structure for table `balance_sheets`
--

CREATE TABLE `balance_sheets` (
  `id` int(11) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `paymode` varchar(255) NOT NULL,
  `paymentid` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `balance_sheets`
--

INSERT INTO `balance_sheets` (`id`, `contestid`, `userid`, `username`, `date`, `amount`, `paymode`, `paymentid`, `status`, `created_at`, `updated_at`) VALUES
(1, '1', '101', 'dummy', '15th-May-2024', '20000', 'online', 'ABC12', '0', '2024-05-15 10:26:38', '2024-05-15 10:26:38'),
(2, '1', '101', 'dummy', '15th-May-2024', '50000', 'online', 'ABC12', '0', '2024-05-15 10:26:38', '2024-05-15 10:26:38'),
(3, '4', '101', 'dummy', '15th-May-2024', '50000', 'online', 'ABC12', '0', '2024-05-15 10:26:38', '2024-05-15 10:26:38'),
(6, '1', '0', 'megatrons', '2nd July', '4000', 'Cash', '0001AD', '0', '2024-05-15 06:56:53', '2024-05-15 06:56:53'),
(7, '2', '10', 'autobots', '7nd July', '40800', 'Online', '0001AD', '0', '2024-05-15 07:03:36', '2024-05-15 07:03:36');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contest_spins`
--

CREATE TABLE `contest_spins` (
  `id` int(11) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `spin` varchar(255) NOT NULL,
  `spindur` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contest_spins`
--

INSERT INTO `contest_spins` (`id`, `contestid`, `userid`, `spin`, `spindur`, `status`, `created_at`, `updated_at`) VALUES
(1, '1', '10', '5', '10s', '0', '2024-05-15 07:51:57', '2024-05-15 07:51:57'),
(2, '2', '105', '10', '110s', '0', '2024-05-15 07:57:12', '2024-05-15 07:57:12');

-- --------------------------------------------------------

--
-- Table structure for table `create_rounds`
--

CREATE TABLE `create_rounds` (
  `id` int(11) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `roundstage` varchar(255) NOT NULL,
  `totalspins` varchar(255) NOT NULL,
  `winners` varchar(255) NOT NULL,
  `wonby` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `create_rounds`
--

INSERT INTO `create_rounds` (`id`, `contestid`, `roundstage`, `totalspins`, `winners`, `wonby`, `created_at`, `updated_at`) VALUES
(20, '1', '2', '5', '300', NULL, '2024-04-08 07:38:03', '2024-04-08 07:38:03'),
(21, '3', '2', '7', '4000', NULL, '2024-04-08 23:16:17', '2024-04-08 23:16:17'),
(22, '4', '1', '7', '200', NULL, '2024-04-10 07:03:08', '2024-04-10 07:03:08'),
(23, '1', '3', '3', '500', NULL, '2024-04-10 07:13:56', '2024-04-10 07:13:56');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kycs`
--

CREATE TABLE `kycs` (
  `id` int(11) NOT NULL,
  `studentid` varchar(255) DEFAULT NULL,
  `playerid` varchar(255) DEFAULT NULL,
  `studentimg` text DEFAULT NULL,
  `aadhaar` varchar(255) DEFAULT NULL,
  `pannumber` varchar(255) DEFAULT NULL,
  `gstnumber` varchar(255) DEFAULT NULL,
  `accnumber` varchar(255) DEFAULT NULL,
  `ifsccode` varchar(255) DEFAULT NULL,
  `playertype` varchar(255) DEFAULT NULL,
  `accname` varchar(255) DEFAULT NULL,
  `aadhaarimg` text DEFAULT NULL,
  `panimg` text DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kycs`
--

INSERT INTO `kycs` (`id`, `studentid`, `playerid`, `studentimg`, `aadhaar`, `pannumber`, `gstnumber`, `accnumber`, `ifsccode`, `playertype`, `accname`, `aadhaarimg`, `panimg`, `status`, `created_at`, `updated_at`) VALUES
(8, NULL, '10014', NULL, '25452525252', '573554354354', NULL, 'fgfdgd52345354', '52896', 'individual', 'dummy', '[\"uploads\\/kyc\\/495dabfd0ca768a3c3abd672079f48b6.png\",\"uploads\\/kyc\\/8133415ea4647b6345849fb38311cf32.png\",\"uploads\\/kyc\\/488c1e0332065eb80e1129139a67d6e0.png\"]', '[\"uploads\\/kyc\\/95e62984b87e90645a5cf77037395959.jpg\"]', '1', '2024-05-21 04:06:18', '2024-05-21 04:06:18'),
(9, NULL, '10014', NULL, '25452525252', '573554354354', NULL, 'fgfdgd52345354', '52896', 'individual', 'dummy', '[\"uploads\\/kyc\\/a2fe8c05877ec786290dd1450c3385cd.png\",\"uploads\\/kyc\\/c2937f3a1b3a177d2408574da0245a19.png\"]', '[\"uploads\\/kyc\\/dccb1c3a558c50d389c24d69a9856730.jpg\"]', '1', '2024-05-21 04:07:16', '2024-05-21 04:07:16');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2024_05_03_060326_create_sessions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nortifications`
--

CREATE TABLE `nortifications` (
  `id` int(11) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nortifications`
--

INSERT INTO `nortifications` (`id`, `message`, `created_at`, `updated_at`) VALUES
(4, 'this is my second message', '2024-05-28 09:44:03', '2024-05-28 09:44:03'),
(5, 'this is my third message updated new', '2024-05-28 09:44:12', '2024-05-28 10:03:28'),
(6, 'this is my new message', '2024-05-28 10:04:39', '2024-05-28 10:04:39');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_requests`
--

CREATE TABLE `payment_requests` (
  `id` int(11) NOT NULL,
  `playerId` varchar(255) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `rank` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` int(11) NOT NULL DEFAULT 1,
  `playcontestid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment_requests`
--

INSERT INTO `payment_requests` (`id`, `playerId`, `contestid`, `amount`, `rank`, `message`, `created_at`, `updated_at`, `status`, `playcontestid`) VALUES
(15, '10014', '1', 3243254, 2, NULL, '2024-05-27 12:45:09', '2024-05-28 06:23:40', 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'MyApp', '301e756dd8dfe71846551878ac3cc3182034e42f0850ac8971509b3273f87986', '[\"*\"]', NULL, NULL, '2024-04-10 02:21:07', '2024-04-10 02:21:07'),
(2, 'App\\Models\\User', 2, 'MyApp', 'fa26c5a558cfaf6ebbd8934b8930d87998d77e8ad80cd7cf6608300d7df9a088', '[\"*\"]', NULL, NULL, '2024-04-10 02:22:38', '2024-04-10 02:22:38'),
(3, 'App\\Models\\User', 4, 'MyApp', '76b2caa094032baf86049ab0efb3ab91b85b43c9e9fc66f312965348b36d9c94', '[\"*\"]', NULL, NULL, '2024-04-10 02:28:11', '2024-04-10 02:28:11'),
(4, 'App\\Models\\User', 6, 'MyApp', 'ee6c69b7daeffc1594b5569a3e347192efa13a01e511a0e667c61d40fd2e2b11', '[\"*\"]', NULL, NULL, '2024-04-10 02:44:01', '2024-04-10 02:44:01'),
(5, 'App\\Models\\User', 9, 'MyApp', '8321f742ccf6e55038ea95b05d84ae99d53c57489bc7a385c31bad2abd3661c0', '[\"*\"]', NULL, NULL, '2024-04-10 03:47:15', '2024-04-10 03:47:15'),
(6, 'App\\Models\\Students', 10006, 'MyApp', '562ee5ed98d465a08ebd6f2d34f145551f3c697233d1f9b21b98de512537e95e', '[\"*\"]', NULL, NULL, '2024-04-10 04:19:26', '2024-04-10 04:19:26'),
(7, 'App\\Models\\Students', 10007, 'MyApp', '300e9f721f416cc7eef9b70a3c31ac157c038a75241dfde94ce84b141938191a', '[\"*\"]', NULL, NULL, '2024-04-10 04:21:55', '2024-04-10 04:21:55'),
(8, 'App\\Models\\Students', 10007, 'MyApp', '79b3147632d7bda8b51fb45829395e43c9c0a7af86aa42323ce7040b5fa6e054', '[\"*\"]', NULL, NULL, '2024-04-10 05:27:22', '2024-04-10 05:27:22'),
(9, 'App\\Models\\Students', 10008, 'MyApp', '8da87bba1e2687fcaeb2eb8db45898d5e26ce8abfc766f07e074d2230ec4d896', '[\"*\"]', NULL, NULL, '2024-04-10 06:37:19', '2024-04-10 06:37:19'),
(10, 'App\\Models\\Students', 10007, 'MyApp', '7998c71fac38f466cfcac96c0cd6236e267e6c9f07a0ae8d62d92b52c2b72a7a', '[\"*\"]', NULL, NULL, '2024-04-10 06:52:23', '2024-04-10 06:52:23'),
(11, 'App\\Models\\Students', 10007, 'MyApp', 'd6d9e573e17b8e4b93ce9b81f83ce017ef4f0639f29330a777e5a277c98febb4', '[\"*\"]', NULL, NULL, '2024-04-10 06:53:06', '2024-04-10 06:53:06'),
(12, 'App\\Models\\Students', 10007, 'MyApp', '954b57dde2b7783447686cfa76c812ef41cb651ada2f3514b20ea6b769c7e861', '[\"*\"]', NULL, NULL, '2024-04-10 06:53:44', '2024-04-10 06:53:44'),
(13, 'App\\Models\\Students', 10010, 'MyApp', '31bdddcd56cdb0e4cac373a64699087b406d11150c49445f30387826801513b3', '[\"*\"]', NULL, NULL, '2024-04-11 00:09:46', '2024-04-11 00:09:46'),
(14, 'App\\Models\\Students', 10007, 'MyApp', '0dee144eff7f0a5d5637cca91d67fd8aa067b4da72edce77902082fdd7f62710', '[\"*\"]', NULL, NULL, '2024-04-11 00:11:18', '2024-04-11 00:11:18'),
(15, 'App\\Models\\Students', 10010, 'MyApp', 'ea8d172ec65900066519a6c85368f7dcc262f53347328bd82054c383a3e6966c', '[\"*\"]', NULL, NULL, '2024-04-11 00:12:03', '2024-04-11 00:12:03'),
(16, 'App\\Models\\Students', 10011, 'MyApp', 'c763fcdb891fa2dca739ec89a19ce66cce074ee578e6cda7d74223d16cf9cead', '[\"*\"]', NULL, NULL, '2024-04-14 23:54:26', '2024-04-14 23:54:26'),
(17, 'App\\Models\\Students', 10012, 'MyApp', '38053979312bc7830a37ed1c2577e5b46ea30e2c5ffe34f55f1e623d2a1cf5b2', '[\"*\"]', NULL, NULL, '2024-05-07 05:14:24', '2024-05-07 05:14:24'),
(18, 'App\\Models\\Students', 10013, 'MyApp', 'c4baf3c8b52984026c2dd5692056cb8fee9800a42fbda2ec512a747c1e8e7884', '[\"*\"]', NULL, NULL, '2024-05-07 05:18:57', '2024-05-07 05:18:57'),
(19, 'App\\Models\\Students', 10014, 'MyApp', 'bc5163a50abece22e43f5863f3c9e77de171b52aa93671f2fe4f7e743e3f8dc6', '[\"*\"]', NULL, NULL, '2024-05-19 23:33:14', '2024-05-19 23:33:14'),
(20, 'App\\Models\\Students', 10014, 'MyApp', '79de69c51fdf9fe2b5a6026991b50d197c72007c2227159276e744c3ffdd5c27', '[\"*\"]', NULL, NULL, '2024-05-19 23:44:08', '2024-05-19 23:44:08'),
(21, 'App\\Models\\Students', 10014, 'MyApp', '6ce9bd3213b313673d85b0ea290726d18263c5aeaa4831c06a80c8282fe844c3', '[\"*\"]', NULL, NULL, '2024-05-20 00:09:35', '2024-05-20 00:09:35'),
(22, 'App\\Models\\Students', 10014, 'MyApp', 'e720b212581cf308e6197d19f3cb0afacc8f55b7f671a64bc040449ac2e6c98d', '[\"*\"]', NULL, NULL, '2024-05-20 00:12:00', '2024-05-20 00:12:00'),
(23, 'App\\Models\\Students', 10014, 'MyApp', '1479b8c5d323c86e43c7758af5b2bed108ec206fd266e29aba96147769862578', '[\"*\"]', NULL, NULL, '2024-05-20 00:15:27', '2024-05-20 00:15:27'),
(24, 'App\\Models\\Students', 10014, 'MyApp', '20f521fbf62e2838ef8f3ca15f0ff76eb9d9138ad95aaae1f24035c2aaaafc4f', '[\"*\"]', NULL, NULL, '2024-05-20 00:17:02', '2024-05-20 00:17:02'),
(25, 'App\\Models\\Students', 10014, 'MyApp', '43b7cf72594b8da0bf70419cab5a73b23c44ac0cdd39f6adaa43b1187b4d9189', '[\"*\"]', NULL, NULL, '2024-05-20 00:18:45', '2024-05-20 00:18:45'),
(26, 'App\\Models\\Students', 10014, 'MyApp', '174b8d649091d32c8130ae34bc423653289418699915c608ec710ca0a7538fd6', '[\"*\"]', NULL, NULL, '2024-05-20 00:19:52', '2024-05-20 00:19:52'),
(27, 'App\\Models\\Students', 10014, 'MyApp', '023aa2d63b6a01895a0aaf47028f75e0f87829afdb4fecb1faff8b533a1cf184', '[\"*\"]', NULL, NULL, '2024-05-20 01:05:02', '2024-05-20 01:05:02'),
(28, 'App\\Models\\Students', 10014, 'MyApp', '2d6d79e3a1261a19185ddb7f13967e6d2ebc2391aaf5f4ea2c2dc141ace77439', '[\"*\"]', NULL, NULL, '2024-05-20 01:05:46', '2024-05-20 01:05:46'),
(29, 'App\\Models\\Students', 10014, 'MyApp', 'dee5f3062ca623727735cfdefdfaee81297ac3b3dfe24309c0fde523289ce6d0', '[\"*\"]', NULL, NULL, '2024-05-20 01:15:23', '2024-05-20 01:15:23'),
(30, 'App\\Models\\Students', 10014, 'MyApp', '8a39c42d5a6d15e69185388198216df79ad82925ae0e3afc38c74a77c3a11294', '[\"*\"]', NULL, NULL, '2024-05-20 01:19:39', '2024-05-20 01:19:39'),
(31, 'App\\Models\\Students', 10014, 'MyApp', '3fea1431d8531ec5d90ec5dcb124b86b98298018c4f593ed364a6500f418292e', '[\"*\"]', NULL, NULL, '2024-05-20 01:28:11', '2024-05-20 01:28:11'),
(32, 'App\\Models\\Students', 10014, 'MyApp', 'dd56932e2d935b9e9cad05cf5d01fcdbb8359254499d0c84b959a3371d6dec7a', '[\"*\"]', NULL, NULL, '2024-05-20 05:46:33', '2024-05-20 05:46:33'),
(33, 'App\\Models\\Students', 10014, 'MyApp', 'e6430765326451f07c87524a8882e191df1a672f8ab0fba2522322a240bf53a2', '[\"*\"]', NULL, NULL, '2024-05-20 05:51:41', '2024-05-20 05:51:41'),
(34, 'App\\Models\\Students', 10014, 'MyApp', 'f6dfaee547c3de05256409bbb7f7c5a92bfa23e129e7171a5b1d5d9fec9f7b42', '[\"*\"]', NULL, NULL, '2024-05-20 06:36:30', '2024-05-20 06:36:30'),
(35, 'App\\Models\\Students', 10014, 'MyApp', 'cb0a447b660b6a637cee01734fb6cc3d3c2a37324dd5b6f09e0ad7041424249c', '[\"*\"]', NULL, NULL, '2024-05-21 04:10:56', '2024-05-21 04:10:56'),
(36, 'App\\Models\\Students', 10014, 'MyApp', '32201088f39b1b816fef2d3650e35fd9cd959f070551b63771fa12bc5c946691', '[\"*\"]', NULL, NULL, '2024-05-21 04:24:36', '2024-05-21 04:24:36'),
(37, 'App\\Models\\Students', 10014, 'MyApp', 'cdeed41e0353d4165f2034d9080944148f7cb5721d983cf1b5971c0ef63bd182', '[\"*\"]', NULL, NULL, '2024-05-21 04:26:19', '2024-05-21 04:26:19'),
(38, 'App\\Models\\Students', 10014, 'MyApp', 'd41609271538f9089a79211d16140331d1c31590b88863f1f6109ddf03dfeffa', '[\"*\"]', NULL, NULL, '2024-05-21 04:27:24', '2024-05-21 04:27:24'),
(39, 'App\\Models\\Students', 10014, 'MyApp', '7c302edd7ba68fdf616dafe11b8969516f68af5a0617d056ec3e43ac4ba25f68', '[\"*\"]', NULL, NULL, '2024-05-22 00:32:17', '2024-05-22 00:32:17'),
(40, 'App\\Models\\Students', 10014, 'MyApp', '20ba8fe564f0c9d15a93de5c8df7f0aa239968bee5552d2edc5a8886d4c82ed3', '[\"*\"]', NULL, NULL, '2024-05-27 00:38:13', '2024-05-27 00:38:13'),
(41, 'App\\Models\\Students', 10014, 'MyApp', '635c947c36a40e245cbe68aba7c2b5a169ac5e2e31fefa1cd1d37119069c0e3e', '[\"*\"]', NULL, NULL, '2024-05-27 01:48:20', '2024-05-27 01:48:20');

-- --------------------------------------------------------

--
-- Table structure for table `player_spins`
--

CREATE TABLE `player_spins` (
  `id` int(11) NOT NULL,
  `studentid` varchar(255) DEFAULT NULL,
  `contestid` varchar(255) DEFAULT NULL,
  `spinnumber` varchar(255) DEFAULT NULL,
  `spinvalue` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `player_spins`
--

INSERT INTO `player_spins` (`id`, `studentid`, `contestid`, `spinnumber`, `spinvalue`, `status`, `created_at`, `updated_at`) VALUES
(1, '1', '102', '5', '2345', '0', '2024-05-18 06:10:53', '2024-05-18 06:10:53');

-- --------------------------------------------------------

--
-- Table structure for table `play_contests`
--

CREATE TABLE `play_contests` (
  `id` int(11) NOT NULL,
  `studentid` varchar(255) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `conteststatus` varchar(255) NOT NULL,
  `rank` varchar(255) DEFAULT NULL,
  `winningprice` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `play_contests`
--

INSERT INTO `play_contests` (`id`, `studentid`, `contestid`, `conteststatus`, `rank`, `winningprice`, `status`, `created_at`, `updated_at`) VALUES
(7, '10014', '1', '2', '5', '2000', '1', '2024-05-28 04:42:42', '2024-05-28 06:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `points`
--

CREATE TABLE `points` (
  `id` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `studentId` varchar(255) NOT NULL,
  `contestId` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `points`
--

INSERT INTO `points` (`id`, `point`, `studentId`, `contestId`, `created_at`, `updated_at`) VALUES
(10, 2765219, '10014', '1', '2024-05-18 06:31:27', '2024-05-18 06:31:27'),
(11, 48934353, '10012', '1', '2024-05-18 06:34:58', '2024-05-18 06:34:58'),
(12, 48353, '10013', '1', '2024-05-18 06:34:58', '2024-05-18 06:34:58'),
(13, 47055370, '10014', '1', '2024-05-24 23:47:23', '2024-05-24 23:47:23'),
(14, 39084750, '10014', '1', '2024-05-25 02:46:02', '2024-05-25 02:46:02'),
(15, 33999389, '10014', '1', '2024-05-27 12:10:31', '2024-05-27 12:10:31'),
(16, 49932528, '10014', '1', '2024-05-28 05:53:15', '2024-05-28 05:53:15'),
(17, 29735135, '10014', '1', '2024-05-28 06:13:42', '2024-05-28 06:13:42'),
(18, 40167514, '10014', '1', '2024-05-28 06:21:56', '2024-05-28 06:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('0GdRRLpuyNPsYAQ8R3p9Vdwiou4GF2soqYrjAyZ6', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'YTo2OntzOjY6Il90b2tlbiI7czo0MDoiYlMydkV0QTdpZXVDTU9kbnhaUlZJQkM4UlpaNHlFVjJCZmdpY3RHUyI7czozOiJ1cmwiO2E6MDp7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjM2OiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYWRkY29udGVzdHZpZXciO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEyJHdsOWxGLm9xZ0xCZXgudlFaaThJYnUydHBhRC80RkN0a3BMYVVRYUtFMU01ZjR6ZUp2MTA2Ijt9', 1716893395);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `studentname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `school_universityname` varchar(255) DEFAULT NULL,
  `studentidimage` varchar(255) DEFAULT NULL,
  `aadharcardnumber` varchar(255) DEFAULT NULL,
  `aadharimage` text DEFAULT NULL,
  `contactnumber` varchar(255) DEFAULT NULL,
  `emailaddress` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `pin` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `referbyId` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `studentprofile` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `studentname`, `username`, `education`, `school_universityname`, `studentidimage`, `aadharcardnumber`, `aadharimage`, `contactnumber`, `emailaddress`, `city`, `state`, `pin`, `password`, `referbyId`, `status`, `studentprofile`, `created_at`, `updated_at`) VALUES
(10007, 'XYZ', 'xyz_456789', 'null', 'null', 'null', 'null', 'null', '0000000000', 'xyz@gmail.com', 'null', 'null', 'null', '$2y$12$/98IBEn9LB0dhGshbjPEaOvNqHGKBdAgCR.MHQJJfgfdeGJQwv7tG', 'null', '0', NULL, '2024-04-10 04:21:55', '2024-05-18 07:21:54'),
(10008, 'null', 'noizy_123', 'null', 'null', 'null', 'null', 'null', '0000000000', 'noizy@gmail.com', 'null', 'null', 'null', '$2y$12$OLrtDaOZPZiGaMhJkmlY7uGRGySE6EJ9pDRQlJvfKmp5gL.Ywm5fa', 'null', '0', NULL, '2024-04-10 06:37:19', '2024-05-18 07:21:59'),
(10010, 'XYZ', 'xyz_11', 'null', 'null', 'null', 'null', 'null', '0000000000', 'xyz@gmail.com', 'null', 'null', 'null', '$2y$12$PKjat7ob02.gpYCo7KYQ8OtL3cdA6Pa/FPecpG2HLBlewqHFrTCQG', 'null', '0', NULL, '2024-04-11 00:09:46', '2024-05-18 07:22:01'),
(10011, 'aaajubhaaju', 'noizy_12378895645', 'null', 'null', 'null', '555555555555', 'null', '6522525948', 'uuu@gmail.com', 'null', 'null', 'null', '$2y$12$Wopg7YlJhRa2/S1Ob6peVOXL7hn0JetjIDOZoiJQdsZP6Rh8dSdG6', 'null', '0', NULL, '2024-04-14 23:54:26', '2024-05-18 07:22:04'),
(10012, 'Anshhhhh', 'ansh_88', NULL, NULL, NULL, NULL, NULL, '548554548', 'dosso@gmail.com', NULL, NULL, NULL, '$2y$12$EKZ0MgfjS6FGVEoWmOiy0.x9mz7RFyANFY1IlJydGm5IrreYySIWG', '0001ADMIN', '0', NULL, '2024-05-07 05:14:24', '2024-05-07 05:14:24'),
(10013, 'Anshhhhh', 'ansh_88666', NULL, NULL, NULL, NULL, NULL, '5485548', 'dosso22@gmail.com', NULL, NULL, NULL, '$2y$12$UvbP6Pyazk9NZCGSUp/8BuWw5giwRt4pGiKOJkZUeUI/BL/8Vg.hm', '0001ADMIN', '0', NULL, '2024-05-07 05:18:57', '2024-05-07 05:18:57'),
(10014, 'rajesh', '1234567899', NULL, NULL, NULL, NULL, NULL, '1234567899', 'dossoAA22@gmail.com', NULL, NULL, NULL, '$2y$12$ZyAgZUNMLlE7uNBwsqcbsOEcW5qNW7il0/EsDh7dSr3bO5d87wr.C', '0001A', '0', NULL, '2024-05-16 02:36:06', '2024-05-20 12:37:04');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'ans@gmail.com', NULL, '$2y$12$wl9lF.oqgLBex.vQZi8Ibu2tpaD/4FCtkpLaUQaKE1M5f4zeJv106', NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-04 05:31:05', '2024-04-04 05:31:05');

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int(11) NOT NULL,
  `userid` varchar(255) NOT NULL,
  `transactionid` varchar(255) NOT NULL,
  `amount` float NOT NULL,
  `paymenttype` varchar(255) NOT NULL DEFAULT '"credit","debit"',
  `transactiontype` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `userid`, `transactionid`, `amount`, `paymenttype`, `transactiontype`, `status`, `created_at`, `updated_at`) VALUES
(10, '10014', '15', 5, 'Credit', 'PhonePe', '0', '2024-05-27 00:13:12', '2024-05-27 07:46:36'),
(11, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-27 00:24:16', '2024-05-27 00:24:16'),
(12, '10014', '15', 500, 'Credit', 'PhonePe', '0', '2024-05-27 03:10:38', '2024-05-27 03:10:38'),
(13, '10014', '15', 500, 'Credit', 'PhonePe', '0', '2024-05-27 03:12:42', '2024-05-27 03:12:42'),
(14, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-27 04:02:45', '2024-05-27 04:02:45'),
(15, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-27 04:52:55', '2024-05-27 04:52:55'),
(16, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-27 04:53:35', '2024-05-27 04:53:35'),
(17, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-27 04:54:20', '2024-05-27 04:54:20'),
(18, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-27 04:55:12', '2024-05-27 04:55:12'),
(19, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-27 12:08:34', '2024-05-27 12:08:34'),
(20, '10014', '15', 51, 'Debit', 'Wallet', '0', '2024-05-28 04:42:42', '2024-05-28 04:42:42'),
(21, '10014', '15', 8000, 'Credit', 'PhonePe', '0', '2024-05-28 05:04:46', '2024-05-28 05:04:46');

-- --------------------------------------------------------

--
-- Table structure for table `winzones`
--

CREATE TABLE `winzones` (
  `id` int(11) NOT NULL,
  `start` int(11) NOT NULL,
  `end` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `update_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `winzones`
--

INSERT INTO `winzones` (`id`, `start`, `end`, `title`, `price`, `status`, `created_at`, `update_at`) VALUES
(1, 1, 1, 'RANK WINNER', 500000, 1, '2024-05-03 08:40:56', '2024-05-03 08:40:56'),
(2, 2, 2, 'RANK WINNER', 300000, 1, '2024-05-03 08:41:30', '2024-05-03 08:41:30'),
(3, 3, 3, 'RANK WINNER', 100000, 1, '2024-05-03 08:41:56', '2024-05-03 08:41:56'),
(4, 4, 10, 'RANK WINNER', 21000, 1, '2024-05-03 08:42:31', '2024-05-03 08:42:31'),
(5, 11, 221, 'RANK WINNER', 2100, 1, '2024-05-03 08:54:31', '2024-05-03 08:54:31'),
(6, 222, 40000, 'RANK WINNER', 51, 1, '2024-05-03 09:01:23', '2024-05-03 09:01:23'),
(7, 151000, 151000, 'RANK WINNER', 100000, 1, '2024-05-03 09:03:36', '2024-05-03 09:03:36'),
(8, 4001, 15999, 'GIFT COUPON', 0, 1, '2024-05-03 09:03:36', '2024-05-03 09:03:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_contests`
--
ALTER TABLE `add_contests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `add_shows`
--
ALTER TABLE `add_shows`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_vendors`
--
ALTER TABLE `admin_vendors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `balance_sheets`
--
ALTER TABLE `balance_sheets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `contest_spins`
--
ALTER TABLE `contest_spins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `create_rounds`
--
ALTER TABLE `create_rounds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kycs`
--
ALTER TABLE `kycs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nortifications`
--
ALTER TABLE `nortifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payment_requests`
--
ALTER TABLE `payment_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `player_spins`
--
ALTER TABLE `player_spins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `play_contests`
--
ALTER TABLE `play_contests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `points`
--
ALTER TABLE `points`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `winzones`
--
ALTER TABLE `winzones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_contests`
--
ALTER TABLE `add_contests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `add_shows`
--
ALTER TABLE `add_shows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `admin_vendors`
--
ALTER TABLE `admin_vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `balance_sheets`
--
ALTER TABLE `balance_sheets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contest_spins`
--
ALTER TABLE `contest_spins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kycs`
--
ALTER TABLE `kycs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `nortifications`
--
ALTER TABLE `nortifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payment_requests`
--
ALTER TABLE `payment_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `player_spins`
--
ALTER TABLE `player_spins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `play_contests`
--
ALTER TABLE `play_contests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `points`
--
ALTER TABLE `points`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10015;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `winzones`
--
ALTER TABLE `winzones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
