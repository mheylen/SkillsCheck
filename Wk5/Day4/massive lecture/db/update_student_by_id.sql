update students
set name = $2, cohort = $3, campus =$4
where student_id = $1;
select * from students;
