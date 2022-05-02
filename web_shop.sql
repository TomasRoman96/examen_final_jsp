-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema web_shop
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `web_shop` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci ;
USE `web_shop` ;

-- -----------------------------------------------------
-- Table `web_shop`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `web_shop`.`items` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(50) NULL DEFAULT NULL,
  `PRICE` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `web_shop`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `web_shop`.`users` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `NAME` VARCHAR(50) NULL DEFAULT NULL,
  `USERNAME` VARCHAR(50) NULL DEFAULT NULL,
  `PASSWORD` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `web_shop`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `web_shop`.`orders` (
  `ID` VARCHAR(50) NOT NULL,
  `USER_ID` INT(11) NULL DEFAULT NULL,
  `TOTAL_PRICE` INT(11) NULL DEFAULT NULL,
  `STATE` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `FK_USER_ID_idx` (`USER_ID` ASC),
  CONSTRAINT `FK_USER_ID`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `web_shop`.`users` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;


-- -----------------------------------------------------
-- Table `web_shop`.`order_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `web_shop`.`order_items` (
  `ID` VARCHAR(50) NOT NULL,
  `QUANTITY` INT(11) NULL DEFAULT NULL,
  `ITEM_ID` INT(11) NOT NULL,
  PRIMARY KEY (`ID`),
  INDEX `fk_order_items_orders1_idx` (`ID` ASC) ,
  INDEX `fk_order_items_items1_idx` (`ITEM_ID` ASC) ,
  CONSTRAINT `fk_order_items_items1`
    FOREIGN KEY (`ITEM_ID`)
    REFERENCES `web_shop`.`items` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_items_orders1`
    FOREIGN KEY (`ID`)
    REFERENCES `web_shop`.`orders` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_spanish_ci;

USE `web_shop` ;

-- -----------------------------------------------------
-- procedure getAllProducts
-- -----------------------------------------------------

DELIMITER $$
USE `web_shop`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllProducts`()
BEGIN
select * from items;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure getAllUsers
-- -----------------------------------------------------

DELIMITER $$
USE `web_shop`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllUsers`()
BEGIN
SELECT * FROM users;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure getOrderInfo
-- -----------------------------------------------------

DELIMITER $$
USE `web_shop`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getOrderInfo`(IN IDO VARCHAR(50))
BEGIN
SELECT order_items.ID, QUANTITY, NAME, PRICE FROM order_items INNER JOIN items on order_items.ITEM_ID = items.ID WHERE order_items.ID = IDO;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure getSpecificUser
-- -----------------------------------------------------

DELIMITER $$
USE `web_shop`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getSpecificUser`(in U VARCHAR(50), P VARCHAR(50))
BEGIN
SELECT * FROM users where USERNAME = U and PASSWORD = P;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure getUserOrders
-- -----------------------------------------------------

DELIMITER $$
USE `web_shop`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserOrders`(in N VARCHAR(50))
BEGIN
SELECT orders.ID,orders.TOTAL_PRICE,orders.STATE FROM orders INNER JOIN users ON users.ID = orders.USER_ID WHERE users.USERNAME = N;
END$$

DELIMITER ;

-- -----------------------------------------------------
-- procedure insertUser
-- -----------------------------------------------------

DELIMITER $$
USE `web_shop`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUser`(IN N varchar(50),IN U Varchar(50), IN P Varchar(50))
BEGIN
insert into users(NAME, USERNAME, PASSWORD) values (N,U,P);
END$$

DELIMITER ;

call insertUser("PRUEBA","TEST123","12345");
INSERT INTO items (NAME,PRICE) values ("CUCHILLA",2000);
INSERT INTO items (NAME,PRICE) values ("TENEDOR",1000);
INSERT INTO items (NAME,PRICE) values ("CUCHARA",3000);
INSERT INTO orders (ID,USER_ID,TOTAL_PRICE,STATE) values ("RA00001",1,1000,"PROCESANDO");
INSERT INTO order_items (ID,QUANTITY,ITEM_ID) values ("RA00001",1,2);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
