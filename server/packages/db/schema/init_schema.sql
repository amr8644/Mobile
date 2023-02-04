CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `channels` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `created_by` int,
  `created_at` timestamp
);

CREATE TABLE `chanel_user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `chanel_id` int
);

CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `chanel_id` int
);

ALTER TABLE `channels` ADD FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

ALTER TABLE `chanel_user` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `chanel_user` ADD FOREIGN KEY (`chanel_id`) REFERENCES `channels` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`chanel_id`) REFERENCES `channels` (`id`);

ALTER TABLE `messages` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
