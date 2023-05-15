create database node;
 use node;
 
 create table users(
 id int not null primary key AUTO_INCREMENT,
 name varchar(240) not null, 
 email varchar(240) not null unique,
 estatus TINYINT not null default 1);
 
 ALTER TABLE users
ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

 
 select * from users;


INSERT INTO users(id,name,email,estatus) VALUES 
(1, 'Liss', 'liss@ gmail.com', 1),
(2, 'Monse', 'monse@gmail.com', 1),
(3, 'Gina', 'Gina@gmail.com', 1),
(4, 'mundo','mundo@gmail.com', 1);

drop table users;
drop database node;
 
 
 