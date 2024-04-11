-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2024 at 02:34 PM
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
  `startdate` varchar(255) NOT NULL,
  `enddate` varchar(255) NOT NULL,
  `registrationfees` varchar(255) NOT NULL,
  `totalround` varchar(255) NOT NULL,
  `completedround` varchar(255) NOT NULL,
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

INSERT INTO `add_contests` (`id`, `title`, `startdate`, `enddate`, `registrationfees`, `totalround`, `completedround`, `totalprice`, `totalspin`, `thumbnail`, `joinmembers`, `status`, `created_at`, `updated_at`) VALUES
(1, 'dummy', '2024-04-15', '2024-04-24', '', '00', '00', '00', '00', '1712301170.jpg', '00', '0', '2024-04-05 01:42:50', '2024-04-05 07:28:09'),
(2, 'dummy2', '2024-05-02', '2024-04-26', '', '00', '12', '21', '21', '1712303273.jpg', '33', '0', '2024-04-05 02:17:53', '2024-04-05 02:17:53'),
(3, 'dummy 23', '2024-04-17', '2024-04-20', '', '3', '14', '215', '2', '1712561465.jpg', '36', '0', '2024-04-08 02:01:05', '2024-04-08 02:01:05'),
(5, 'New Contest', '2024-04-17', '2024-04-19', '200', '2', '56', '455', '4', '1712815816.jpg', '477', '0', '2024-04-11 00:40:16', '2024-04-11 00:40:16');

-- --------------------------------------------------------

--
-- Table structure for table `add_shows`
--

CREATE TABLE `add_shows` (
  `id` int(11) NOT NULL,
  `adstitle` varchar(255) NOT NULL,
  `displayshow` varchar(255) NOT NULL,
  `url` text NOT NULL DEFAULT '0',
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
(1, 'dummy title', 'home', '0', 'https://optireachdigital.in/', 'image', '1712389148.jpg', '0', '0', '2024-04-06 02:09:08', '2024-04-06 02:09:08'),
(2, 'dummy title 2', 'about', '0', 'www.google.com', 'video', NULL, 'https://www.youtube.com/watch?v=XtFI7SNtVpY', '1', '2024-04-06 02:26:47', '2024-04-06 07:57:06'),
(3, 'dummy title 3', 'about', '0', 'https://optireachdigital.in/', 'image', '1712390341.jpg', '0', '0', '2024-04-06 02:29:01', '2024-04-06 02:29:01'),
(4, 'dummy title 4', 'listings', '0', 'www.google.com', 'video', NULL, 'https://www.youtube.com/watch?v=XtFI7SNtVpY', '0', '2024-04-06 02:46:08', '2024-04-06 02:46:08'),
(5, 'dummy title 5', 'listings', '0', 'www.google.com', 'image', '1712820808.jpg', '0', '0', '2024-04-11 02:03:28', '2024-04-11 02:03:28');

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
  `referidvendor` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_vendors`
--

INSERT INTO `admin_vendors` (`id`, `vendorname`, `vendorprofile`, `schoolname`, `contactno`, `emailaddress`, `password`, `referidvendor`, `status`, `created_at`, `updated_at`) VALUES
(100001, 'dummy vendor', '1712317356.jpg', 'dummy school', '010000', 'dm@gmail.com', '$2y$12$eTEUba1H5abK8D3cjpCQseMwBeDPS3fr0hLDhfanUC0spjcD4SR.S', '1001', '0', '2024-04-05 06:12:36', '2024-04-05 06:12:36'),
(100002, 'dummy vendor two', '1712317468.jpg', 'dummy school two', '010000', 'dmmm@gmail.com', '$2y$12$NcbbQ69cIlNWuHpNVEj6Bu3kM4tYTUWTqYcrRYiiFAeWxjkVhchXK', '1002', '0', '2024-04-05 06:14:29', '2024-04-05 06:14:29'),
(100003, 'Nitesh', '1712317571.jpg', 'XYZ School', '665464565', 'ans@gmail.com', '$2y$12$Lu7Tk6PJTLquR/xr/MQvC.9HzD1tCreVEkRJo/eqi4I7u.c54c9ge', '1003', '1', '2024-04-05 06:16:11', '2024-04-05 11:48:43');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('b88be67d57e9aca0343f67fc52eda0ec', 'i:1;', 1712814034),
('b88be67d57e9aca0343f67fc52eda0ec:timer', 'i:1712814034;', 1712814034);

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
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_04_04_105604_add_two_factor_columns_to_users_table', 1),
(5, '2024_04_04_105626_create_personal_access_tokens_table', 1);

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
(15, 'App\\Models\\Students', 10010, 'MyApp', 'ea8d172ec65900066519a6c85368f7dcc262f53347328bd82054c383a3e6966c', '[\"*\"]', NULL, NULL, '2024-04-11 00:12:03', '2024-04-11 00:12:03');

-- --------------------------------------------------------

--
-- Table structure for table `player_rounds`
--

CREATE TABLE `player_rounds` (
  `id` int(11) NOT NULL,
  `studentid` varchar(255) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `startdate` varchar(255) NOT NULL,
  `enddate` varchar(255) NOT NULL,
  `starttime` varchar(255) NOT NULL,
  `endtime` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `player_spins`
--

CREATE TABLE `player_spins` (
  `id` int(11) NOT NULL,
  `studentid` varchar(255) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `spinnumber` varchar(255) NOT NULL,
  `spinvalue` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `play_contests`
--

CREATE TABLE `play_contests` (
  `id` int(11) NOT NULL,
  `studentid` varchar(255) NOT NULL,
  `contestid` varchar(255) NOT NULL,
  `conteststatus` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
('0h2Ex9qK2isgSy7K6Wv6SUMTtaqqXelCZuVKbkXr', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiVnN6QnZwdVFUNEhNWXo0eHU5Yk05WVduUW02T3ZhNEtSNTM1SkZ3aSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEyJHdsOWxGLm9xZ0xCZXgudlFaaThJYnUydHBhRC80RkN0a3BMYVVRYUtFMU01ZjR6ZUp2MTA2Ijt9', 1712829957),
('3U1BIofdT0W5SBbXZ4E1qN4EovqSrrz3pCgixAT6', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiYko0ZWFycEtOWVdibmVyTkxJM0ZkOUROVEtucDY3NWV6aXpEemZ5NSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9kYXNoYm9hcmQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEyJHdsOWxGLm9xZ0xCZXgudlFaaThJYnUydHBhRC80RkN0a3BMYVVRYUtFMU01ZjR6ZUp2MTA2Ijt9', 1712731537),
('elQlMsS8BRsaArV2CuDqWdWiloNtzhbWMqyTyjn7', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiRnFGTElqdHFYZWpXc1FNNHlEYzd2cm1FbFlvNFdCeUdiTE1uWHNWayI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC92ZW5kb3JkYXNoYm9hcmR2aWV3Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1NDoibG9naW5fdmVuZG9yc181OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjEwMDAwMzt9', 1712644945),
('JsqxfDN1ZSHrBm9KoUARhhcl9DCeHPDCL6KRVxi3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoieGlKb01IR2d1QUpsVHlmOU1DSnZwYjlBbm50NE1Hbjhza3N1bjhKTCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozMToiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2Rhc2hib2FyZCI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjI3OiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1712740452),
('PtmjxLxj1CU20Ahkz3nu1D6QKuZMitZg0KK52Mrk', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', 'YTo0OntzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czozNzoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL3ZlbmRvcmxvZ2ludmlldyI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NjoiX3Rva2VuIjtzOjQwOiJQeTBFUE45UFlXdW1Mb0ZYbm1NdEVtRmpVdm9IZEdWRHhiTjZoN3ZjIjtzOjU0OiJsb2dpbl92ZW5kb3JzXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTAwMDAzO30=', 1712644121),
('ZMTUi4ydPdol0yefz7HTHFgzF71aKMtbeOuxu95O', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiZ253SG9KWnJGeFZ5QVVjeFpXRHd0SkpiUXBqMFNNdnA3WFJNcXBzdSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9zdHVkZW50c2xpc3QiO31zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MjE6InBhc3N3b3JkX2hhc2hfc2FuY3R1bSI7czo2MDoiJDJ5JDEyJHdsOWxGLm9xZ0xCZXgudlFaaThJYnUydHBhRC80RkN0a3BMYVVRYUtFMU01ZjR6ZUp2MTA2Ijt9', 1712753176);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `studentname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `education` varchar(255) NOT NULL,
  `school_universityname` varchar(255) NOT NULL,
  `studentidimage` varchar(255) NOT NULL,
  `aadharcardnumber` varchar(255) NOT NULL,
  `aadharimage` text NOT NULL,
  `contactnumber` varchar(255) NOT NULL,
  `emailaddress` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `referbyId` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT '0',
  `studentprofile` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `studentname`, `username`, `education`, `school_universityname`, `studentidimage`, `aadharcardnumber`, `aadharimage`, `contactnumber`, `emailaddress`, `city`, `state`, `pin`, `password`, `referbyId`, `status`, `studentprofile`, `created_at`, `updated_at`) VALUES
(10007, 'XYZ', 'xyz_456789', 'null', 'null', 'null', 'null', 'null', '0000000000', 'xyz@gmail.com', 'null', 'null', 'null', '$2y$12$/98IBEn9LB0dhGshbjPEaOvNqHGKBdAgCR.MHQJJfgfdeGJQwv7tG', 'null', '0', 'null', '2024-04-10 04:21:55', '2024-04-11 00:11:18'),
(10008, 'null', 'noizy_123', 'null', 'null', 'null', 'null', 'null', '0000000000', 'noizy@gmail.com', 'null', 'null', 'null', '$2y$12$OLrtDaOZPZiGaMhJkmlY7uGRGySE6EJ9pDRQlJvfKmp5gL.Ywm5fa', 'null', '0', 'null', '2024-04-10 06:37:19', '2024-04-10 06:37:19'),
(10010, 'XYZ', 'xyz_11', 'null', 'null', 'null', 'null', 'null', '0000000000', 'xyz@gmail.com', 'null', 'null', 'null', '$2y$12$PKjat7ob02.gpYCo7KYQ8OtL3cdA6Pa/FPecpG2HLBlewqHFrTCQG', 'null', '0', 'null', '2024-04-11 00:09:46', '2024-04-11 00:12:03');

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
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `player_rounds`
--
ALTER TABLE `player_rounds`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_contests`
--
ALTER TABLE `add_contests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `add_shows`
--
ALTER TABLE `add_shows`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `admin_vendors`
--
ALTER TABLE `admin_vendors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100004;

--
-- AUTO_INCREMENT for table `create_rounds`
--
ALTER TABLE `create_rounds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `player_rounds`
--
ALTER TABLE `player_rounds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `player_spins`
--
ALTER TABLE `player_spins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `play_contests`
--
ALTER TABLE `play_contests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10011;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
