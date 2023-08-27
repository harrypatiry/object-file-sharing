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
    author int FOREIGN KEY,
    description VARCHAR(255),
    cover varchar(255),
    media text[] 
)


-- FROM posts INNER JOIN users ON posts.author = users.id;