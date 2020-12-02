create database aulavirtualsep;
use aulavirtualsep;

create table profesor(
	id varchar(10) not null,
    nombre varchar(50) not null,
    apellido_pat varchar(25) not null,
    apellido_mat varchar(25) not null,
    correo varchar(50) not null,
    teléfono numeric(10) not null,
    sexo char not null,
    contrasena varchar(15) not null,
    primary key(id)
);


create table grupo(
	id varchar(10) not null,
    grado int not null,
    clase char not null,
    id_profesor varchar(10),
    primary key(id),
    foreign key(id_profesor) references profesor(id)
    
);

create table alumno(
	id varchar(10) not null,
    nombre varchar(50) not null,
    apellido_pat varchar(25) not null,
    apellido_mat varchar(25) not null,
    sexo char not null,
    id_grupo varchar(10) not null,
    primary key(id),
	contrasena varchar(15) not null,
    foreign key(id_grupo) references grupo(id)
);

create table materia(
	id varchar(10) not null,
    nombre varchar(50) not null,
    campo varchar(100) not null,
    primary key(id)
);

create table clases_de(
	id_grupo varchar(10) not null,
    id_materia varchar(10) not null,
    primary key(id_grupo, id_materia),
    foreign key(id_grupo) references grupo(id),
    foreign key(id_materia) references materia(id)
);

create table actividad(
	id  int not null auto_increment,
    titulo varchar(30) not null,
    fecha_limite date not null,
    hora_limite time not null,
    descripción text not null,
	estado int default 0,
    retraso int not null,
    id_materia varchar(10) not null,
    primary key(id),
    foreign key(id_materia) references materia(id)
);

create table realiza
(
	id_alumno varchar(10) not null,
    id_actividad int not null,
    fecha_entrega date,
    hora_entrega time,
    calificacion float,
	estado_entrega int default 0,
    primary key(id_alumno, id_actividad),
    foreign key(id_alumno) references alumno(id),
    foreign key(id_actividad) references actividad(id)
);


create table libro (
	id varchar(10) not null,
    año int not null,
	archivo text,
    editorial varchar(50) not null,
    título varchar(50) not null,
    id_materia varchar(10) not null,
    primary key(id),
    foreign key(id_materia) references materia(id)
);

create table tutoría(
	id int not null auto_increment,
    titulo varchar(30) not null,
    descripción text not null,
    primary key(id)
);

create table pide(
	id_tutoría int not null,
	id_alumno varchar(10) not null,
	fecha date not null,
    primary key(id_tutoría, id_alumno),
    foreign key(id_tutoría) references tutoría(id),
    foreign key(id_alumno) references alumno(id)
);


create table imparte(
	id_tutoría int not null,
    id_profesor varchar(10),
    primary key(id_tutoría, id_profesor),
    foreign key(id_tutoría) references tutoría(id),
    foreign key(id_profesor) references profesor(id)
);
create table tarea
(
	id int not null auto_increment,
	id_alumno varchar(10) not null,
    id_actividad int not null,
    archivo text,
    primary key(id),
    foreign key(id_alumno) references alumno(id),
    foreign key(id_actividad) references actividad(id)
);

create table Material
(
	id int not null auto_increment,
	id_alumno varchar(10) not null,
    id_actividad int not null,
    archivo text,
    primary key(id),
    foreign key(id_alumno) references alumno(id),
    foreign key(id_actividad) references actividad(id)
);

/*vistas*/

create view alumnosact as select R.*, A.titulo, A.fecha_limite, A.hora_limite, A.descripción,
A.estado,A.retraso,A.id_materia from realiza R left join actividad A on R.id_actividad=A.id;
create view LoginA as select id,contrasena from alumno;
create view LoginP as select id,contrasena from profesor;
create view listaalumnos as select A.id, A.nombre, A.apellido_pat, A.apellido_mat, A.id_grupo, G.id_profesor from 
alumno A left join grupo G on A.id_grupo=G.id;
create view grupoAl as select A.id, A.nombre, A.apellido_pat, A.apellido_mat, G.grado, G.clase from
alumno A left join grupo G on A.id_grupo=G.id;
create view grupoMat as select C.id_materia, G.id, G.id_profesor from
clases_de C left join grupo G on C.id_grupo=G.id;


/*Creación del procedimiento para login_alumno*/
DELIMITER //
create procedure aulavirtualsep.login_alumno (in userid varchar(10), in pass varchar(15))
begin
	select id from logina where id = userid and contrasena = pass;
end//
DELIMITER ;

/*Creación del procedimiento para login_profesor*/
DELIMITER //
create procedure aulavirtualsep.login_profesor (in userid varchar(10), in pass varchar(15))
begin
	select id from loginp where id = userid and contrasena = pass;
end//
DELIMITER ;

/*Ejemplos para ejecutar los procedimientos para el login
call login_alumno("a000001", "c000003");
call login_profesor("p000001", "c000001");*/

/*Creación de procedimiento para los avances de los alumnos*/
DELIMITER //
create procedure aulavirtualsep.avances (in id varchar(10))
begin
	declare a float default 0;
    declare b float default 0;
    declare total float default 0;
	set a = (select count(id_actividad) from realiza where id_alumno = id group by(id_alumno));
    set b = (select count(id_actividad) from realiza where id_alumno = id and fecha_entrega is not null group by(id_alumno));
	set total = @a/@b;
    select total;
end//
DELIMITER ;

select * from grupoMat;
select * from libro where id_materia in (select id_materia from grupoMat where id_profesor = "p000001");

/*Ejemplo para ejecutar el procedimiento para avances
call avances("a000001", @out); select @out;*/


