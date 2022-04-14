-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2022 at 08:37 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `freelancingscape`
--

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `bid_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `bid_date` datetime NOT NULL,
  `delivery_time` int(11) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(20) NOT NULL,
  `state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`, `state_id`) VALUES
(1, 'surat', 1),
(2, 'Ahemdabad', 1),
(3, 'durbon', 2),
(4, 'pretoria', 2),
(5, 'aaa', 9);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(20) NOT NULL,
  `coumtry_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_name`, `coumtry_name`) VALUES
(1, 'india', NULL),
(2, 'south africa', NULL),
(3, 'usa', NULL),
(4, 'japan', NULL),
(5, 'canada', NULL),
(6, 'uk', NULL),
(7, 'aaa', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

CREATE TABLE `currency` (
  `currency_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `currency_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `currency`
--

INSERT INTO `currency` (`currency_id`, `country_id`, `currency_name`) VALUES
(1, 1, 'rupee'),
(2, 2, 'rand'),
(3, 3, 'dollar'),
(4, 4, 'yen'),
(5, 5, 'canadian dollar'),
(6, 6, 'pound');

-- --------------------------------------------------------

--
-- Table structure for table `freelancerskills`
--

CREATE TABLE `freelancerskills` (
  `skill_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `skill_level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `logininfo`
--

CREATE TABLE `logininfo` (
  `login_id` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(40) NOT NULL,
  `registration_date` datetime NOT NULL,
  `status_id` int(11) NOT NULL,
  `verification_code` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `membership`
--

CREATE TABLE `membership` (
  `plan_id` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `plan_name` varchar(30) NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `post_limit` int(11) NOT NULL,
  `bid_limit` int(11) NOT NULL,
  `user_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `membership`
--

INSERT INTO `membership` (`plan_id`, `duration`, `plan_name`, `amount`, `post_limit`, `bid_limit`, `user_type_id`) VALUES
(1, 90, 'premium', '300.00', 15, 0, 3),
(2, 90, 'pro', '200.00', 10, 0, 3),
(3, 90, 'basic', '200.00', 5, 0, 3),
(4, 90, 'premium', '300.00', 0, 15, 2),
(5, 90, 'pro', '200.00', 0, 10, 2),
(6, 90, 'basic', '100.00', 0, 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `paymentdetails`
--

CREATE TABLE `paymentdetails` (
  `payment_id` int(11) NOT NULL,
  `txn_date` datetime NOT NULL,
  `txn_no` varchar(20) NOT NULL,
  `amount` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paymentdetails`
--

INSERT INTO `paymentdetails` (`payment_id`, `txn_date`, `txn_no`, `amount`) VALUES
(1, '2022-01-01 00:00:00', '206219230113', '100.00'),
(2, '2022-01-01 00:00:00', '206219230115', '200.00'),
(3, '2022-01-01 00:00:00', '206216540113', '300.00');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `duration` int(11) NOT NULL,
  `project_description` varchar(250) NOT NULL,
  `attachment` varchar(100) DEFAULT NULL,
  `post_date` datetime NOT NULL,
  `completion_date` datetime NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `projectskills`
--

CREATE TABLE `projectskills` (
  `skill_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `skill_level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projectskills`
--

INSERT INTO `projectskills` (`skill_id`, `project_id`, `skill_level_id`) VALUES
(1, 1, 1),
(1, 2, 3),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `skilllevel`
--

CREATE TABLE `skilllevel` (
  `skill_level_id` int(11) NOT NULL,
  `skill_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skilllevel`
--

INSERT INTO `skilllevel` (`skill_level_id`, `skill_name`) VALUES
(1, 'beginer'),
(2, 'intermediate'),
(3, 'expert');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `skill_id` int(11) NOT NULL,
  `skill_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`skill_id`, `skill_name`) VALUES
(1, 'PHP'),
(2, 'JAVA'),
(3, 'COREJAVA'),
(4, 'ANGULAR'),
(5, 'REACTJS');

-- --------------------------------------------------------

--
-- Table structure for table `statedetails`
--

CREATE TABLE `statedetails` (
  `state_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `state_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `statedetails`
--

INSERT INTO `statedetails` (`state_id`, `country_id`, `state_name`) VALUES
(1, 1, 'gujarat'),
(2, 1, 'UP'),
(3, 2, 'johannesburg'),
(4, 2, 'capetown'),
(5, 3, 'callifornia'),
(6, 3, 'virginia'),
(7, 4, 'hokkaido'),
(8, 4, 'nara'),
(9, 7, 'aaa');

-- --------------------------------------------------------

--
-- Table structure for table `statusdetails`
--

CREATE TABLE `statusdetails` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `statusdetails`
--

INSERT INTO `statusdetails` (`status_id`, `status_name`) VALUES
(1, 'complete'),
(2, 'partial'),
(3, 'cancelled'),
(4, 'failed'),
(5, 'active'),
(6, 'placed'),
(7, 'accepted'),
(8, 'rejected'),
(9, 'inactive'),
(10, 'verified'),
(11, 'not verified'),
(12, 'terminated');

-- --------------------------------------------------------

--
-- Table structure for table `subscribersdetails`
--

CREATE TABLE `subscribersdetails` (
  `sub_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL,
  `start_date` datetime NOT NULL,
  `payment_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `task_name` varchar(50) NOT NULL,
  `task_description` varchar(250) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `attachment` varchar(100) DEFAULT NULL,
  `post_date` datetime NOT NULL,
  `payment_status` int(11) NOT NULL,
  `min_budget` decimal(5,2) NOT NULL,
  `max_budget` decimal(5,2) NOT NULL,
  `status_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userprofile`
--

CREATE TABLE `userprofile` (
  `user_id` int(11) NOT NULL,
  `login_id` int(11) NOT NULL,
  `profile_image` varchar(100) DEFAULT NULL,
  `company_name` varchar(30) DEFAULT NULL,
  `hourly_rate` decimal(5,2) DEFAULT NULL,
  `tag_line` varchar(50) DEFAULT NULL,
  `city_id` int(11) NOT NULL,
  `mobile_no` decimal(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usertype`
--

CREATE TABLE `usertype` (
  `user_type_id` int(11) NOT NULL,
  `user_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usertype`
--

INSERT INTO `usertype` (`user_type_id`, `user_type`) VALUES
(1, 'Admin'),
(2, 'Freelancer'),
(3, 'Employer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`bid_id`),
  ADD KEY `FK_user_Bids` (`user_id`),
  ADD KEY `Fk_Statsu_bids` (`status_id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`),
  ADD KEY `FKntlpwbmwrq8i862uemiiulsic` (`state_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`currency_id`);

--
-- Indexes for table `freelancerskills`
--
ALTER TABLE `freelancerskills`
  ADD PRIMARY KEY (`skill_id`,`user_id`),
  ADD KEY `FU_user_Skills` (`user_id`);

--
-- Indexes for table `logininfo`
--
ALTER TABLE `logininfo`
  ADD PRIMARY KEY (`login_id`),
  ADD KEY `FK_user_Type` (`user_type_id`),
  ADD KEY `FK_Status` (`status_id`);

--
-- Indexes for table `membership`
--
ALTER TABLE `membership`
  ADD PRIMARY KEY (`plan_id`);

--
-- Indexes for table `paymentdetails`
--
ALTER TABLE `paymentdetails`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`),
  ADD KEY `FK_user` (`user_id`);

--
-- Indexes for table `projectskills`
--
ALTER TABLE `projectskills`
  ADD PRIMARY KEY (`skill_id`,`project_id`);

--
-- Indexes for table `skilllevel`
--
ALTER TABLE `skilllevel`
  ADD PRIMARY KEY (`skill_level_id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`skill_id`);

--
-- Indexes for table `statedetails`
--
ALTER TABLE `statedetails`
  ADD PRIMARY KEY (`state_id`),
  ADD KEY `FKk5exvtcsmjgt82c8i2gnp0163` (`country_id`);

--
-- Indexes for table `statusdetails`
--
ALTER TABLE `statusdetails`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `subscribersdetails`
--
ALTER TABLE `subscribersdetails`
  ADD PRIMARY KEY (`sub_id`),
  ADD KEY `FK_user_plan` (`user_id`),
  ADD KEY `FK_plan_sub` (`plan_id`),
  ADD KEY `FK_payment` (`payment_id`),
  ADD KEY `FK_Status_plan` (`status_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`),
  ADD KEY `FK_project_task` (`project_id`),
  ADD KEY `FK_status_taks` (`status_id`);

--
-- Indexes for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `FK_LoginId` (`login_id`),
  ADD KEY `FK_city` (`city_id`);

--
-- Indexes for table `usertype`
--
ALTER TABLE `usertype`
  ADD PRIMARY KEY (`user_type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `bid_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `currency`
--
ALTER TABLE `currency`
  MODIFY `currency_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `logininfo`
--
ALTER TABLE `logininfo`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `membership`
--
ALTER TABLE `membership`
  MODIFY `plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `paymentdetails`
--
ALTER TABLE `paymentdetails`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skilllevel`
--
ALTER TABLE `skilllevel`
  MODIFY `skill_level_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `statedetails`
--
ALTER TABLE `statedetails`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `statusdetails`
--
ALTER TABLE `statusdetails`
  MODIFY `status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `subscribersdetails`
--
ALTER TABLE `subscribersdetails`
  MODIFY `sub_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userprofile`
--
ALTER TABLE `userprofile`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usertype`
--
ALTER TABLE `usertype`
  MODIFY `user_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bids`
--
ALTER TABLE `bids`
  ADD CONSTRAINT `FK_user_Bids` FOREIGN KEY (`user_id`) REFERENCES `userprofile` (`user_id`),
  ADD CONSTRAINT `Fk_Statsu_bids` FOREIGN KEY (`status_id`) REFERENCES `statusdetails` (`status_id`);

--
-- Constraints for table `city`
--
ALTER TABLE `city`
  ADD CONSTRAINT `FKntlpwbmwrq8i862uemiiulsic` FOREIGN KEY (`state_id`) REFERENCES `statedetails` (`state_id`);

--
-- Constraints for table `freelancerskills`
--
ALTER TABLE `freelancerskills`
  ADD CONSTRAINT `FU_user_Skills` FOREIGN KEY (`user_id`) REFERENCES `userprofile` (`user_id`);

--
-- Constraints for table `logininfo`
--
ALTER TABLE `logininfo`
  ADD CONSTRAINT `FK_Status` FOREIGN KEY (`status_id`) REFERENCES `statusdetails` (`status_id`),
  ADD CONSTRAINT `FK_user_Type` FOREIGN KEY (`user_type_id`) REFERENCES `usertype` (`user_type_id`);

--
-- Constraints for table `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `FK_user` FOREIGN KEY (`user_id`) REFERENCES `userprofile` (`user_id`);

--
-- Constraints for table `statedetails`
--
ALTER TABLE `statedetails`
  ADD CONSTRAINT `FKk5exvtcsmjgt82c8i2gnp0163` FOREIGN KEY (`country_id`) REFERENCES `country` (`country_id`);

--
-- Constraints for table `subscribersdetails`
--
ALTER TABLE `subscribersdetails`
  ADD CONSTRAINT `FK_Status_plan` FOREIGN KEY (`status_id`) REFERENCES `statusdetails` (`status_id`),
  ADD CONSTRAINT `FK_payment` FOREIGN KEY (`payment_id`) REFERENCES `paymentdetails` (`payment_id`),
  ADD CONSTRAINT `FK_plan_sub` FOREIGN KEY (`plan_id`) REFERENCES `membership` (`plan_id`),
  ADD CONSTRAINT `FK_user_plan` FOREIGN KEY (`user_id`) REFERENCES `userprofile` (`user_id`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `FK_project_task` FOREIGN KEY (`project_id`) REFERENCES `projects` (`project_id`),
  ADD CONSTRAINT `FK_status_taks` FOREIGN KEY (`status_id`) REFERENCES `statusdetails` (`status_id`);

--
-- Constraints for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD CONSTRAINT `FK_LoginId` FOREIGN KEY (`login_id`) REFERENCES `logininfo` (`login_id`),
  ADD CONSTRAINT `FK_city` FOREIGN KEY (`city_id`) REFERENCES `city` (`city_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
