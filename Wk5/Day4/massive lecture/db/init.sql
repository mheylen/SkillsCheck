drop table if exists students;
drop table if exists campus_data;

create table campus_data (
    campus_id serial primary key,
    campus text not null,
    program varchar(64),
    campus_phone text not null
);

insert into campus_data (campus, program, campus_phone)
values ('phoenix', 'web', '867-5309'), ('provo', 'web', '801-666-6666'), ('dallas', 'ios', '555-5555');


create table students (
    student_id serial primary key,
    name text not null,
    cohort integer,
    campus integer references campus_data(campus_id)
);

insert into students (name, cohort, campus)
values ('bob', 1, 1), ('hank', 2, 2), ('shannon', 3, 3), ('Uphria', 2,1), ('Dorothy', 3, 2), ('Jaxtomas',1,3)