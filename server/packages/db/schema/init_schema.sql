CREATE TABLE `users` (
  `id` int PRIMARY KEY,
  `fullname` varchar(255),
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255),
  `profile` varchar(255),
  `created_at` timestamp
);
