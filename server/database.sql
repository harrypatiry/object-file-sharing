CREATE DATABASE ofs;

CREATE TABLE users (
    id serial PRIMARY KEY,
    email varchar(255) unique not null,
    username varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date
);

-- store files in zip file

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(255),
    description varchar(255),
    image_url varchar(255),
    file_url varchar(255),
    user_id INT,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id) 
            REFERENCES "users"(id)
);

-- SELECT * FROM posts WHERE user_id = 0;