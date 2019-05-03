update videos set title = $1, description = $2, tag = $3
where video_id = $4;

select * from videos;