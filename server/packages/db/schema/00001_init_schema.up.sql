CREATE TABLE IF NOT EXISTS `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255),
  `created_at` timestamp
);

CREATE TABLE IF NOT EXISTS `channels` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `created_by` int,
  `created_at` timestamp
);

CREATE TABLE IF NOT EXISTS `channel_user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `channel_id` int
);

CREATE TABLE if NOT EXISTS `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `channel_id` int,
  `message` varchar(255),
  `created_at` timestamp
);

ALTER TABLE `channels` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `channel_user` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `channel_user` ADD FOREIGN KEY (`channel_id`) REFERENCES `channels` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`channel_id`) REFERENCES `channels` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
