create table campus_data (
    campus_id serial primary key,
    campus text not null,
    program varchar(64),
    campus_phone text not null
);

insert into campus_data (campus, program, campus_phone)
values ('phoenix', 'web', '867-5309'), ('provo', 'web', '801-666-6666'), ('dallas', 'ios', '555-5555');

-- show all program that = web
select campus, program from campus_data
where program = 'web';

create table students (
    student_id serial primary key,
    name text not null,
    cohort integer,
    campus integer references campus_data(campus_id)
);

insert into students (name, cohort, campus)
values ('bob', 1, 1), ('hank', 2, 2), ('shannon', 3, 3), ('Uphria', 2,1), ('Dorothy', 3, 2), ('Jaxtomas',1,3)

--return all students from Phoenix campus
select * from students
where campus = 1;

--<, >. =, !=

--return all cohorts above 2
select * from students
where cohort > 2;

--return all cohorts that dont equal 3
select * from students
where cohort != 3

--return all phoenix campusm and cohort of 2
select * from students
where cohort > 2 and campus = 1

--aggregate function
-- max, min, sum, avg
select count(*) from students;

--count of students on the Provo campus
select count(*) from students
where campus = 1;

--select unique values
select distinct campus from students;

--order by ascending
select * from students
order by cohort asc;

--order by descending
select * from students
order by cohort desc;

-- pagination, limits, offset
select * from students
where campus = 1
limit 10 offset 10;

-- ilike filters out the letters that are in
select * from students
where name ilike '%k%';

-- updating name in the student list
update students
set name = 'hankie'
where student_id = 2;

-- delete student from the list
delete from students
where students_id = 2;

select * from students;

-- join two tables together
select * from students
join campus_data
on(students.campus = campus_data.campus_id);


select cohort, name, campus_data.campus, program, campus_phone from students
join campus_data
on(students.campus = campus_data.campus_id);