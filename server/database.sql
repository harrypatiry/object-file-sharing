CREATE DATABASE ofs;

CREATE TABLE users (
<<<<<<< HEAD
    id serial PRIMARY KEY,
=======
    user_id serial primary key,
>>>>>>> bd632035e9abfeb0b02fbc95ce5221b4f7c17caa
    email varchar(255) unique not null,
    username varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date
<<<<<<< HEAD
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
=======
);
>>>>>>> bd632035e9abfeb0b02fbc95ce5221b4f7c17caa
