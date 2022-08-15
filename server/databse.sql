create TABLE user_role(id SERIAL PRIMARY KEY, name VARCHAR(255));

create TABLE customer (
  id SERIAL PRIMARY KEY,
  login VARCHAR(255),
  password VARCHAR(255),
  first_name VARCHAR(255),
  surname VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(30),
  user_role_id INT references user_role(id),
  reg_date TIMESTAMP
);

create TABLE product_category (id SERIAL PRIMARY KEY, name VARCHAR(255));

create TABLE product_size (
  id SERIAL PRIMARY KEY,
  gender VARCHAR(10),
  rus_size SMALLINT,
  bust_girth SMALLINT,
  waist_size SMALLINT,
  hip_measurement SMALLINT,
  international_size VARCHAR(10)
);

create TABLE product (
  id SERIAL PRIMARY KEY,
  article VARCHAR(50),
  name VARCHAR(255),
  price FLOAT(3),
  available BOOLEAN,
  description TEXT,
  product_size INT references product_size(id),
  product_category_id INT references product_category(id)
);

create TABLE product_photo (
  id SERIAL PRIMARY KEY,
  product_id INT references product(id),
  url VARCHAR(255)
);

create TABLE comment (
  id SERIAL PRIMARY KEY,
  customer_id INT references customer(id),
  product_id INT references product(id),
  rating SMALLINT,
  comment TEXT
);

create TABLE delivery (
  id SERIAL PRIMARY KEY,
  customer_id INT references customer(id),
  adress VARCHAR(255),
  order_date TIMESTAMP,
  delivery_date TIMESTAMP
);

create TABLE delivery_list (
  order_id INT references delivery(id),
  product_id INT references product(id),
  quantity SMALLINT
);

insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 40, '74-80', '60-65', '84-90', 'XS');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 42, '82-85', '66-69', '92-95', 'XS');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 44, '86-89', '70-73', '96-98', 'S');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 46, '90-93', '74-77', '99-101', 'M');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 48, '94-97', '78-81', '102-104', 'M');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 50, '98-102', '82-85', '105-108', 'L');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 52, '103-107', '86-90', '109-112', 'XL');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 54, '108-113', '91-95', '113-116', 'XL');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 56, '114-119', '96-102', '117-121', 'XXL');
insert into product_size (gender, rus_size, bust_girth, waist_size, hip_measurement, international_size) values (1, 58, '120-125', '103-108', '122-126', 'XXXL');

insert into product (article, name, price, available, description, product_size, product_category_id) values ('T1', 'Футболка 1', 3000, true, 'Описание футболки 1', 7, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T2', 'Футболка 1', 2000, false, 'Описание футболки 2', 1, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T3', 'Футболка 1', 15000, true, 'Описание футболки 3', 2, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T4', 'Футболка 1', 3000, false, 'Описание футболки 4', 8, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T5', 'Футболка 1', 6990.90, true, 'Описание футболки 5', 1, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T6', 'Футболка 6', 3000, true, 'Описание футболки 6', 10, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T7', 'Футболка 7', 3500, true, 'Описание футболки 7', 1, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T8', 'Футболка 8', 3000, true, 'Описание футболки 8', 9, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T9', 'Футболка 9', 3000.90, false, 'Описание футболки 9', 6, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T10', 'Футболка 10', 3000, true, 'Описание футболки 10', 5, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T11', 'Футболка 11', 3000, true, 'Описание футболки 11', 3, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T12', 'Футболка 12', 1500, true, 'Описание футболки 12', 5, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T13', 'Футболка 13', 1990, false, 'Описание футболки 13', 4, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T14', 'Футболка 14', 3000, true, 'Описание футболки 14', 10, 1);
insert into product (article, name, price, available, description, product_size, product_category_id) values ('T15', 'Футболка 15', 8990.90, true, 'Описание футболки 15', 2, 1);

insert into product_photo (product_id, url) values (1, 'tshirts/1.jpg');
insert into product_photo (product_id, url) values (2, 'tshirts/2.jpg');
insert into product_photo (product_id, url) values (3, 'tshirts/3.jpg');
insert into product_photo (product_id, url) values (4, 'tshirts/4.jpg');
insert into product_photo (product_id, url) values (5, 'tshirts/5.jpg');
insert into product_photo (product_id, url) values (6, 'tshirts/6.jpg');
insert into product_photo (product_id, url) values (7, 'tshirts/7.jpg');
insert into product_photo (product_id, url) values (8, 'tshirts/8.jpg');
insert into product_photo (product_id, url) values (9, 'tshirts/9.jpg');
insert into product_photo (product_id, url) values (10, 'tshirts/10.jpg');
insert into product_photo (product_id, url) values (11, 'tshirts/11.jpg');
insert into product_photo (product_id, url) values (12, 'tshirts/12.jpg');
insert into product_photo (product_id, url) values (13, 'tshirts/13.jpg');
insert into product_photo (product_id, url) values (14, 'tshirts/14.jpg');
insert into product_photo (product_id, url) values (15, 'tshirts/15.jpg');
