drop database if exists portfolio;

create database portfolio;

use portfolio;

create table
    accounts (
        id char(36) default (uuid ()) not null unique,
        email varchar(100) not null unique,
        password TEXT not null,
        first_name varchar(100) not null,
        last_name varchar(100) not null,
        created_at timestamp not null,
        primary key (id)
    );

create table
    static_content (
        id char(36) default (uuid ()) not null unique,
        `key` varchar(100) not null unique,
        value text not null,
        created_at timestamp not null,
        primary key (id)
    );

create table
    technical_skills (
        id char(36) default (uuid ()) not null unique,
        type enum ('tool_stack', 'technologes', 'general_skills') not null unique,
        name varchar(100) not null unique,
        image_url TEXT default null,
        proficiency TINYINT not null,
        created_at timestamp not null,
        check (
            proficiency >= 0
            and proficiency <= 100
        )
    );

create table
    languages (
        id char(36) default (uuid ()) not null unique,
        name varchar(100) not null unique,
        proficiency TINYINT not null,
        created_at timestamp not null,
        check (
            proficiency >= 0
            and proficiency <= 100
        )
    );

create table
    practices (
        id char(36) default (uuid ()) not null unique,
        name varchar(100) not null unique,
        description text not null,
        is_following boolean default false not null,
        created_at timestamp not null
    );

create table
    services (
        id char(36) default (uuid ()) not null unique,
        name varchar(100) not null unique,
        description text not null,
        image_url text not null,
        blog_id char(36) null,
        created_at timestamp not null
    );

create table
    blogs (
        id char(36) default (uuid ()) not null unique,
        title varchar(255) not null unique,
        image_url TEXT default null,
        content text not null,
        _date datetime default null,
        created_by char(36) not null,
        created_at timestamp not null,
        foreign key (created_by) references accounts (id)
    );

alter table services add foreign key (blog_id) references blogs (id);

create table
    categories (
        id char(36) default (uuid ()) not null unique,
        name varchar(100) not null unique,
        created_at timestamp not null
    );

create table
    blog_categories (
        blog_id char(36) not null,
        category_id char(36) not null,
        created_at timestamp not null,
        primary key (blog_id, category_id),
        foreign key (blog_id) references blogs (id),
        foreign key (category_id) references categories (id)
    );

create table
    comments (
        id char(36) default (uuid ()) not null unique,
        blog_id char(36) not null,
        content text not null,
        name char(100) not null,
        email varchar(200) not null,
        created_at timestamp not null,
        created_by char(36) default null,
        primary key (id),
        foreign key (blog_id) references blogs (id),
        foreign key (created_by) references accounts (id)
    );

create table
    messages (
        id char(36) default (uuid ()) not null unique,
        name varchar(100) not null,
        email varchar(200) not null,
        message text not null,
        created_at timestamp not null,
        primary key (id)
    );

create table
    testimonials (
        id char(36) default (uuid ()) not null unique,
        star_count TINYINT not null,
        name varchar(100) not null,
        designation varchar(100) not null,
        company varchar(100) not null,
        content text not null,
        image_url text default null,
        created_at timestamp not null,
        primary key (id),
        check (
            star_count >= 0
            and star_count <= 5
        )
    );