CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	image VARCHAR(255) NOT NULL,
	synopsis VARCHAR(255),
	hearts INT DEFAULT 0
);

INSERT INTO images (image, synopsis)
VALUES ('/images/family.jpg', 'I am blessed to have a close-knit and loving family.');
INSERT INTO images (image, synopsis)
VALUES ('/images/ky.jpg', 'My best friend and adventure partner.');
INSERT INTO images (image, synopsis)
VALUES ('/images/rose.jpg', 'Rose -- the shared middle name of every woman in my family.');
INSERT INTO images (image, synopsis)
VALUES ('/images/mandi.jpg', 'She''s my big sister, I''m her mini-me.');
INSERT INTO images (image, synopsis)
VALUES ('/images/rae.jpg', 'Can a dog be a girl''s best friend?');
INSERT INTO images (image, synopsis)
VALUES ('/images/bestfriends.jpg', 'Graduating with some of my best friends');

