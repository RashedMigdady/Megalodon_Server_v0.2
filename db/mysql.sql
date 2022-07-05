

USE ajtraiz4_MERAKI_Academy_Project_5;


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  age INT(3) ,
  password VARCHAR(255) NOT NULL,
  phoneNumber INT(14) ,
  country VARCHAR(50) ,
  is_deleted INT DEFAULT 0,
  role VARCHAR(255)  DEFAULT 'user',
  image LONGBLOB ,
  weight INT(11),
  height INT(11) ,
  diseases VARCHAR(255),
  PRIMARY KEY (id));



  -- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`trainers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS trainers (
  id INT(11) NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  phoneNumber INT(11) NOT NULL,
  location VARCHAR(255) ,
  image LONGBLOB ,
  sport VARCHAR(255) NOT NULL,
  priceMonthly INT(11) ,
  description VARCHAR(255) NOT NULL,
  experience INT NOT NULL,
  PRIMARY KEY (id));



  -- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`gym`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS gym (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  phoneNumber INT(11) NOT NULL,
  location VARCHAR(255),
  image LONGBLOB ,
  priceMonthly INT(11) ,
  description VARCHAR(255) NOT NULL,
   is_delete INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (id));


-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS products (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price INT(11) NOT NULL,
  description LONGBLOB NOT NULL,
  image LONGBLOB NOT NULL,
  is_deleted INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (id));



-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`resturant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS resturant (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  image LONGBLOB NOT NULL,
  monthlyPrice INT(11) NOT NULL,
  rate INT(11) NOT NULL,
  is_deleted INT(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (id));



  -- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`dateTrainer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS dateTrainer (
  id INT(11) NOT NULL AUTO_INCREMENT,
  description VARCHAR(255),
  trainerId INT NOT NULL,
  FOREIGN KEY (trainerId) REFERENCES trainers(id),
  PRIMARY KEY (id));

-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS cart(
  id INT(11) NOT NULL AUTO_INCREMENT,
  productId INT(11) NOT NULL,
  userId INT(11) NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (productId) REFERENCES products(id),
  PRIMARY KEY (id)
  );



-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS feedback (
  id INT(11) NOT NULL AUTO_INCREMENT,
  comment LONGBLOB NOT NULL,
  is_delete INT(11) NOT NULL DEFAULT 0,
  userId INT NOT NULL UNIQUE,
  FOREIGN KEY (userId) REFERENCES users(id),
  PRIMARY KEY (id));
 

-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`rate_gym`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS rate_gym(
  id INT(11) NOT NULL AUTO_INCREMENT,
  rate INT NOT NULL,
  userId INT NOT NULL,
  gymId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (gymId) REFERENCES gym(id),
  PRIMARY KEY (id));
  

-- -----------------------------------------------------
-- Table `ajtraiz4_MERAKI_Academy_Project_5`.`rate_resturant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS rate_resturant(
  id INT(11) NOT NULL AUTO_INCREMENT,
  rate INT NOT NULL,
  userId INT NOT NULL,
  resturantId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (resturantId) REFERENCES resturant(id),
  PRIMARY KEY (id));
 


-- -----------------------------------------------------
-- Table `rate_trainer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS rate_trainer(
  id INT(11) NOT NULL AUTO_INCREMENT,
  rate INT NOT NULL,
  userId INT NOT NULL,
  trainerId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (trainerId) REFERENCES trainers(id),
  PRIMARY KEY (id));


-- -----------------------------------------------------
-- Table subscriptions
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS subscriptionsRestaurant (
  userId INT  NOT NULL,
  restaurantId INT ,
  date_to DATETIME ,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (restaurantId) REFERENCES resturant(id),
  PRIMARY KEY (userid,restaurantId)
  );


CREATE TABLE IF NOT EXISTS subscriptionsGym (
  userId INT  NOT NULL,
  gymId INT NOT NULL ,
  date_to DATETIME ,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (gymId) REFERENCES gym(id),
  PRIMARY KEY (userid,gymId)
  );



  CREATE TABLE IF NOT EXISTS subscriptionsTrainers (
  userId INT  NOT NULL,
  trainerId INT NOT NULL ,
  date_to DATETIME ,
   FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (trainerId) REFERENCES trainers(id),
  PRIMARY KEY (userid,trainerId)
  );
