create database aulavirtualsep;
use aulavirtualsep;

create table profesor(
	id varchar(10) not null,
    nombre varchar(50) not null,
    apellido_pat varchar(25) not null,
    apellido_mat varchar(25) not null,
    correo varchar(50) not null,
    telefono numeric(10) not null,
    sexo char not null,
    contrasena varchar(15) not null,
    primary key(id)
);


create table grupo(
	id varchar(10) not null,
    grado int not null,
    clase char not null,
    id_profesor varchar(10),
    ciclo_inicio int not null,
    ciclo_final int not null,
    primary key(id),
    foreign key(id_profesor) references profesor(id)
    
);

create table alumno(
	id varchar(10) not null,
    nombre varchar(50) not null,
    apellido_pat varchar(25) not null,
    apellido_mat varchar(25) not null,
    sexo char not null,
    id_grupo varchar(10),
    primary key(id),
	contrasena varchar(15) not null,
    foreign key(id_grupo) references grupo(id)
);

create table materia(
	id varchar(10) not null,
    nombre varchar(50) not null,
    campo varchar(100) not null,
    nivel int not null,
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
    titulo text not null,
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
    calificacion float ,
    comentario text,
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

select * from libro;

create table tutoría(
	id int not null auto_increment,
    id_profesor varchar(10),
    id_alumno varchar(10) not null,
    pregunta text not null,
    respuesta text,
    fecha date not null,
    primary key(id),
    foreign key(id_profesor) references profesor(id),
    foreign key(id_alumno) references alumno(id)
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
create table Recurso
(
	id int not null auto_increment,
    titulo varchar(10) not null,
    id_materia varchar(10) not null,
    id_profesor varchar(10) not null,
    archivo text,
    primary key(id),
    foreign key(id_materia) references materia(id),
	foreign key(id_profesor) references profesor(id)
);

create table Material
(
	id int not null auto_increment,
    id_actividad int,
    archivo text,
    primary key(id),
    foreign key(id_actividad) references actividad(id)
);

create table MaterialTutoria(
	id int not null auto_increment,
    id_tutoria int not null,
    archivo text not null,
    primary key(id),
    foreign key(id_tutoria) references tutoría(id)
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

create view alumnos as select A.id, A.nombre, A.apellido_pat, A.apellido_mat, A.sexo, A.id_grupo, G.grado, G.clase from
alumno A left join grupo G on A.id_grupo=G.id;
create view profesores as select G.id_profesor,P.nombre, P.apellido_pat, P.apellido_mat, P.correo, P.telefono, P.sexo, G.id, G.grado, G.clase from 
profesor P left join grupo G on P.id=G.id_profesor;
create view grupos as select G.id_profesor,P.nombre, P.apellido_pat, P.apellido_mat, G.id, G.grado, G.clase from 
profesor P left join grupo G on P.id=G.id_profesor;
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

DELIMITER //
create procedure aulavirtualsep.actividad_template (in materia varchar(10))
begin
	declare tempID int;
	insert into actividad (titulo, fecha_limite, hora_limite, descripción, retraso, id_materia) values ( "Título por defecto", curdate(), curtime(), "Descripción por defecto", 0, materia);
    set tempID = last_insert_id();
    select * from actividad where id = tempID;
end//
DELIMITER ;

DELIMITER //
create procedure aulavirtualsep.actividad_alumnos(in id_act int, in titulo text, in fecha date, in descri text, in hora time, in retraso int, in id_prof varchar(10))
begin
	/*Variable de la tupla*/
	declare idAl varchar(10);
    
	/*Declarar variable de paro*/
    declare done int default 0;
    
    /*Declarar cursor*/
	declare cursor_i cursor for select id from listaalumnos where id_profesor = id_prof;
    
    /*Condición de paro para el cursor*/
    declare continue handler for not found set done = 1;
    
    update actividad set titulo = titulo, fecha_limite=fecha, hora_limite=hora, descripción = descri, retraso = retraso where id = id_act;
    
	/*abrimos nuestro cursor*/
    open cursor_i;
    
    /*Iniciamos nuestro ciclo*/
    alumnos: LOOP
		/*obtenemos los datos de la tupla de nuestro cursor*/
		fetch cursor_i into idAl;
        
        /*checamos si nuestra condición de paro ya se ejecuto*/
        if done then
			leave alumnos;
		end if;
        
        /*Instrucciones del ciclo*/
		insert into realiza(id_alumno, id_actividad) values(idAl, id_act);
        /*Cerramos ciclo*/
	end loop alumnos;    
    /*Cerramos cursor*/
    close cursor_i;
end//
DELIMITER ;

DELIMITER //
create trigger tr_del_actividad before delete on actividad
for each row
begin
	delete from Material where id_actividad = old.id;
	delete from tarea where id_actividad = old.id;
	delete from realiza where id_actividad = old.id;
end//
DELIMITER ;

DELIMITER //
create trigger tr_in_grupo after insert on grupo
for each row
begin

    declare idMat varchar(10);
	declare done int default 0;
	declare cursor_i cursor for (select id from materia where nivel = new.grado);
    declare continue handler for not found set done = 1;
    
    open cursor_i;
    materias: loop
	fetch cursor_i into idMat;
    if done then
		leave materias;
	end if;
    insert into clases_de (id_grupo, id_materia) values(new.id, idMat);
    end loop materias;
    close cursor_i;

end//
DELIMITER ;

DELIMITER //
create trigger tr_del_grupo before delete on grupo
for each row
begin
	declare idG varchar(10);
    declare idM varchar(10);
    declare idA varchar(10);
    declare done int default 0;
    declare cursor_i cursor for select id_grupo, id_materia from clases_de where id_grupo = old.id;
    declare cursor_j cursor for select id from alumno where id_grupo = old.id;
    declare continue handler for not found set done = 1;
    
    open cursor_i;
    materias: loop
		fetch cursor_i into idG, idM;
		if done then
			leave materias;
		end if;
		delete from clases_de where id_grupo = idG and id_materia = idM;
    end loop materias;

	set done = 0;
	open cursor_j;
    alumnos: loop
		fetch cursor_j into idA;
        if done then
			leave alumnos;
		end if;
        update alumno set id_grupo = null where id = idA;
	end loop alumnos;

end//
DELIMITER ;

DELIMITER //
create trigger tr_del_profesor before delete on profesor
for each row
begin
    declare idRec int;
    declare done int default 0;
    declare cursor_i cursor for select id from Recurso where id_profesor = old.id;
    declare continue handler for not found set done = 1;
    open cursor_i;
    recursos: loop
		fetch cursor_i into idRec;
        if done then
			leave recursos;
		end if;
		delete from Recurso where id = idRec;
	end loop recursos;
    
    update tutoría set id_profesor = null, respuesta = null where id_profesor = old.id;
    update grupo set id_profesor = null where id_profesor = old.id;
    
end//
DELIMITER ;

DELIMITER //
create trigger tr_up_grupo before update on grupo
for each row
begin
	declare idMat varchar(10);
    declare done int default 0;
    declare cursor_i cursor for select id from materia where nivel = new.grado;
    declare continue handler for not found set done = 1;
    
    delete from clases_de where id_grupo = new.id;
    
    open cursor_i;
    materias: loop
		fetch cursor_i into idMat;
        if done then
			leave materias;
        end if;
        insert into clases_de (id_grupo, id_materia) values(new.id, idMat);
    end loop materias;
    
end//
DELIMITER ;

DELIMITER //
create trigger tr_in_materia after insert on materia 
for each row
begin

	declare idG varchar(10);
    declare done int default 0;
    declare cursor_i cursor for select id from grupo where grado = new.nivel;
    declare continue handler for not found set done = 1;
    
    open cursor_i;
    clases: loop
		fetch cursor_i into idG; 
		if done then
			leave clases;
		end if;
        insert into clases_de (id_grupo, id_materia) values(idG, new.id);
    end loop clases;

end//
DELIMITER ;

/*Ejemplo para ejecutar el procedimiento para avances
call avances("a000001", @out); select @out;*/
