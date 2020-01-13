
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR(80) NOT NULL
);

CREATE TABLE "image" (
	"id" SERIAL PRIMARY KEY,
	"image_url" VARCHAR (100),
	"user_id" INT
);