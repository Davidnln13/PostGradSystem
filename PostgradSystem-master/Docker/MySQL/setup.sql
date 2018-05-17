CREATE DATABASE IF NOT EXISTS ProjectOrganiser;
USE ProjectOrganiser;

-- Table `ProjectOrganiser`.`Users`
CREATE TABLE IF NOT EXISTS `ProjectOrganiser`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `supervisorEmail` VARCHAR(255),
  `displayName` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`));

CREATE UNIQUE INDEX `email_UNIQUE` ON `ProjectOrganiser`.`Users` (`email` ASC);
CREATE UNIQUE INDEX `displayName` ON `ProjectOrganiser`.`Users` (`displayName` ASC);
