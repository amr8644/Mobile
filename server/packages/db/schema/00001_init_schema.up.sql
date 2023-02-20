CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `channel` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `created_by` int,
  `created_at` timestamp
);

CREATE TABLE `channel_user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `channel_id` int
);

CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `channel_id` int,
  `messages` varchar(255),
  `created_at` timestamp
);

ALTER TABLE `channel` ADD FOREIGN KEY (`created_by`) REFERENCES `user` (`id`);

ALTER TABLE `channel_user` ADD FOREIGN KEY (`channel_id`) REFERENCES `channel` (`id`);

ALTER TABLE `channel_user` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`channel_id`) REFERENCES `channel` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
