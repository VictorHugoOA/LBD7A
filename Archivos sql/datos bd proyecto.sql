use aulavirtualsep;

insert into profesor (id, nombre, apellido_pat, apellido_mat, correo, teléfono, sexo,contrasena)
Values ("p000001", "Leslie Daniela", "Reyes", "Belmares", "leslieDReyesB@outlook.com", 4491547895, "F","c000001"),
("p000002", "Maria Susana", "Morales", "Gonzales", "MSusana_14@gmail.com", 4491215486, "F","c000002"),
("p000003", "Luis Fernando", "Ambriz", "Salazar", "LuisFAS_147@gmail.com", 4491212570, "M","c000003"),
("p000004", "Carlos", "Avila", "Carmona", "CarlosCarmona15687@gmail.com", 4494125476, "M","c000004"),
("p000005", "Grace", "Valladolid", "Fiesco", "GracieVFedu@gmail.com", 4491195463, "F","c000005"),
("p000006", "Joaquin", "Cruz", "Llamas", "JoaquinLlamasoficial_001@outlook.com", 4651192159, "M","c000006"),
("p000007", "José Luis", "Hernandez", "García", "josesito.hern@outlook.com", 4492345098, "M","c000007"),
("p000008", "María Guadalupe", "Martínez", "Lopez", "guadalupe.ma@gmail.com", 4654312910, "F", "c000008"),
("p000009", "Miguel Angel", "González", "Rodríguez", "miguelangel73@gmail.com", 4495673422, "M","c000009"),
("p000010", "Verónica", "Ramírez", "Flores", "veroflowers2020@gmail.com", 4493468531, "F","c000010"),
("p000011", "Alejandro", "Cruz", "Vazquez", "alex.vazquez@gmail.com", 4653490240, "M","c000011"),
("p000012", "Guillermina", "Mendoza", "Castillo", "guillerminacastle@outlook.com", 4651234890, "F", "c000012");

insert into grupo (id, grado, clase, id_profesor)
values
("g-1", 1, "A", "p000001"),
("g-2", 2, "A", "p000001"),
("g-3", 3, "A", "p000003"),
("g-4", 4, "A", "p000004"),
("g-5", 5, "A", "p000005"),
("g-6", 6, "A", "p000006"),
("g-7", 1, "B", "p000007"),
("g-8", 2, "B", "p000008"),
("g-9", 3, "B", "p000009"),
("g-10", 4, "B", "p000010"),
("g-11", 5, "B", "p000011"),
("g-12", 6, "B", "p000012");

insert into materia (id, nombre, Campo) 
Values 
("m-001", "Español 1", "Lenguaje y Comunicación"),
("m-002", "Español 2","Lenguaje y Comunicación"),
("m-003", "Español 3","Lenguaje y Comunicación"),
("m-004", "Español 4","Lenguaje y Comunicación"),
("m-005", "Español 5","Lenguaje y Comunicación"),
("m-006", "Español 6","Lenguaje y Comunicación"),
("m-013", "Inglés 1",  "Lenguaje y Comunicación"),
("m-014", "Inglés 2",  "Lenguaje y Comunicación"),
("m-015", "Inglés 3",  "Lenguaje y Comunicación"),
("m-016", "Inglés 4",  "Lenguaje y Comunicación"),
("m-017", "Inglés 5", "Lenguaje y Comunicación"),
("m-018", "Inglés 6", "Lenguaje y Comunicación"),
("m-019", "Matemáticas 1",  "Pensamiento Matemático"),
("m-020", "Matemáticas 2", "Pensamiento Matemático"),
("m-021", "Matemáticas 3", "Pensamiento Matemático"),
("m-022", "Matemáticas 4", "Pensamiento Matemático"),
("m-023", "Matemáticas 5",  "Pensamiento Matemático"),
("m-024", "Matemáticas 6",  "Pensamiento Matemático"),
("m-025", "Conocimiento del Medio 1", "Exploración y Comprensión del Mundo Natural y Social"),
("m-026", "Conocimiento del Medio 2",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-027", "Ciencias Naturales 1", "Exploración y Comprensión del Mundo Natural y Social"),
("m-028", "Ciencias Naturales 2", "Exploración y Comprensión del Mundo Natural y Social"),
("m-029", "Ciencias Naturales 3",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-030", "Ciencias Naturales 4",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-032", "Historias, Paisajes y Convivencia en mi Localidad",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-033", "Historia 1",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-034", "Historia 2",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-035", "Historia 3",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-036", "Geografía 1",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-037", "Geografía 2",  "Exploración y Comprensión del Mundo Natural y Social"),
("m-038", "Geografía 3", "Exploración y Comprensión del Mundo Natural y Social"),
("m-039", "Formación Cívica y Ética 1", "Exploración y Comprensión del Mundo Natural"),
("m-040", "Formación Cívica y Ética 2",  "Exploración y Comprensión del Mundo Natural"),
("m-041", "Formación Cívica y Ética 3", "Exploración y Comprensión del Mundo Natural"),
("m-042", "Artes 1",  "Artes"),
("m-043", "Artes 2",  "Artes"),
("m-044", "Artes 3",  "Artes"),
("m-045", "Artes 4", "Artes"),
("m-046", "Artes 5",  "Artes"),
("m-047", "Artes 6",  "Artes"),
("m-048", "Educación Socioemocional", "Educación Socioemocional"),
("m-054", "Educación Física",  "Educación Física");

insert into clases_de(id_grupo, id_materia)
values ("g-1", "m-001"),
("g-1", "m-013"),
("g-1", "m-019"),
("g-1", "m-025"),
("g-1", "m-042"),
("g-1", "m-048"),
("g-1", "m-054"),
("g-7", "m-001"),
("g-7", "m-013"),
("g-7", "m-019"),
("g-7", "m-025"),
("g-7", "m-042"),
("g-7", "m-048"),
("g-7", "m-054"),
("g-2", "m-002"),
("g-2", "m-014"),
("g-2", "m-020"),
("g-2", "m-026"),
("g-2", "m-043"),
("g-2", "m-048"),
("g-2", "m-054"),
("g-8", "m-002"),
("g-8", "m-014"),
("g-8", "m-020"),
("g-8", "m-026"),
("g-8", "m-043"),
("g-8", "m-048"),
("g-8", "m-054"),
("g-3", "m-003"),
("g-3", "m-015"),
("g-3", "m-021"),
("g-3", "m-027"),
("g-3", "m-032"),
("g-3", "m-044"),
("g-3", "m-048"),
("g-3", "m-054"),
("g-9", "m-003"),
("g-9", "m-015"),
("g-9", "m-021"),
("g-9", "m-027"),
("g-9", "m-032"),
("g-9", "m-044"),
("g-9", "m-048"),
("g-9", "m-054"),
("g-4", "m-004"),
("g-4", "m-016"),
("g-4", "m-022"),
("g-4", "m-028"),
("g-4", "m-033"),
("g-4", "m-036"),
("g-4", "m-041"),
("g-4", "m-045"),
("g-4", "m-048"),
("g-4", "m-054"),
("g-10", "m-004"),
("g-10", "m-016"),
("g-10", "m-022"),
("g-10", "m-028"),
("g-10", "m-033"),
("g-10", "m-036"),
("g-10", "m-041"),
("g-10", "m-045"),
("g-10", "m-048"),
("g-10", "m-054"),
("g-5", "m-005"),
("g-5", "m-017"),
("g-5", "m-023"),
("g-5", "m-029"),
("g-5", "m-034"),
("g-5", "m-037"),
("g-5", "m-040"),
("g-5", "m-046"),
("g-5", "m-048"),
("g-5", "m-054"),
("g-11", "m-005"),
("g-11", "m-017"),
("g-11", "m-023"),
("g-11", "m-029"),
("g-11", "m-034"),
("g-11", "m-037"),
("g-11", "m-040"),
("g-11", "m-046"),
("g-11", "m-048"),
("g-11", "m-054"),
("g-6", "m-006"),
("g-6", "m-018"),
("g-6", "m-024"),
("g-6", "m-030"),
("g-6", "m-035"),
("g-6", "m-038"),
("g-6", "m-041"),
("g-6", "m-047"),
("g-6", "m-048"),
("g-6", "m-054"),
("g-12", "m-006"),
("g-12", "m-018"),
("g-12", "m-024"),
("g-12", "m-030"),
("g-12", "m-035"),
("g-12", "m-038"),
("g-12", "m-041"),
("g-12", "m-047"),
("g-12", "m-048"),
("g-12", "m-054");


insert into libro (id, título, año, editorial, id_materia)
Values ("l-001", "Español I", 2020, "SEP", "m-001"),
("l-002", "Español II", 2020, "SEP","m-002"),
("l-003", "Español III", 2020, "SEP","m-003"),
("l-004", "Español IV", 2020, "SEP","m-004"),
("l-005", "Español V", 2020,"SEP", "m-005"),
("l-006", "Español VI", 2020, "SEP","m-006"),
("l-007", "Español - Lecturas I", 2020, "SEP","m-001"),
("l-008", "Español - Lecturas II", 2020,"SEP", "m-002"),
("l-009", "Español - Lecturas III", 2020,"SEP", "m-003"),
("l-010", "Español - Lecturas IV", 2020,"SEP", "m-004"),
("l-011", "Español - Lecturas V", 2020, "SEP","m-005"),
("l-012", "Español - Lecturas VI", 2020,"SEP", "m-006"),
("l-013", "Inglés I", 2020,"SEP","m-013"),
("l-014", "Inglés II", 2020,"SEP", "m-014"),
("l-015", "Inglés III", 2020, "SEP","m-015"),
("l-016", "Inglés VI", 2020,"SEP", "m-016"),
("l-017", "Inglés V", 2020,"SEP", "m-017"),
("l-018", "Inglés VI", 2020,"SEP", "m-018"),
("l-019", "Matemáticas I", 2020, "SEP","m-019"),
("l-020", "Matemáticas II", 2020,"SEP", "m-020"),
("l-021", "Desafíos matemáticos I", 2020, "SEP","m-021"),
("l-022", "Desafíos matemáticos II", 2020,"SEP", "m-022"),
("l-023", "Desafíos matemáticos III", 2020, "SEP","m-023"),
("l-024", "Desafíos matemáticos IV", 2020, "SEP","m-024"),
("l-025", "Conocimiento del Medio I", 2020,"SEP", "m-025"),
("l-026", "Conocimiento del Medio II", 2020,"SEP", "m-026"),
("l-027", "Ciencias Naturales I", 2020,"SEP", "m-027"),
("l-028", "Ciencias Naturales II", 2020,"SEP", "m-028"),
("l-029", "Ciencias Naturales III", 2020,"SEP", "m-029"),
("l-030", "Ciencias Naturales IV", 2020,"SEP", "m-030"),
("l-031", "Historias, Paisajes y Convivencia en mi Localidad", 2020,"SEP", "m-032"),
("l-032", "Historia I", 2020,"SEP", "m-033"),
("l-033", "Historia II", 2020,"SEP", "m-034"),
("l-034", "Historia III", 2020,"SEP", "m-035"),
("l-035", "Geografía I", 2020,"SEP", "m-036"),
("l-036", "Geografía II", 2020,"SEP", "m-037"),
("l-037", "Geografía III", 2020, "SEP","m-038"),
("l-038", "Formación Cívica y Ética I", 2020,"SEP", "m-039"),
("l-039", "Formación Cívica y Ética II", 2020,"SEP", "m-040"),
("l-040", "Formación Cívica y Ética III", 2020, "SEP","m-041");


Insert Into alumno (id, nombre, apellido_pat, apellido_mat, id_grupo, sexo,contrasena)
Values 
("a000001","César","Rodríguez","Ortega","g-1","M", "c000001"),
("a000002","Víctor","Olivetti","Alvares","g-1","M","c000002"),
("a000003","Share Nicole","Flores","Stiker","g-1","F","c000003"),
("a000004","Jesus","Vela","Martines","g-1","M","c000004"),
("a000005","Manuel","Ruvalcaba","Reyes","g-1","M","c000005"),
("a000006","Armando","Rodríguez","Ortega","g-2","M","c000006"),
("a000007","Hugo","Olivetti","Alvares","g-2","M","c000007"),
("a000008","Maria","Solis","Herrera","g-2","F","c000008"),
("a000009","Jorge","Ojeda","Picasso","g-2","M","c000009"),
("a000010","Karen","Velazquez","Herrera","g-2","F","c000010"),
("a000011","Elizabeth","Martinez","Saldivar","g-3","F","c000011"),
("a000012","Miguel","Duenas","Cervantez","g-3","M","c000012"),
("a000013","Manuel","Cruz","Avila","g-3","M","c000013"),
("a000014","Paola","Garcia","Ventura","g-3","F","c000014"),
("a000015","Estefani","Buendia","Baltierra","g-3","F","c000015"),
("a000016","Mariana","Tinajera","Delgadillo","g-4","F","c000016"),
("a000017","Jose","Casta","Pinar","g-4","M","c000017"),
("a000018","Rolando","Aguilar","Herrera","g-4","M","c000018"),
("a000019","Juan","Gonzalez","Alaniz","g-4","M","c000019"),
("a000020","Zaid","Diaz","Salazar","g-4","M","c000020"),
("a000021","Edgar","Sotelo","Acero","g-5","M","c000021"),
("a000022","Sandra","Prieto","Garcia","g-5","F","c000022"),
("a000023","Leonardo","Hernandez","Herrera","g-5","M","c000023"),
("a000024","Julio","Gonzales","Rangel","g-5","M","c000024"),
("a000025","Monserrat","Flores","Garcia","g-5","F","c000025"),
("a000026","Rebeca","Garcia","Herrera","g-6","F","c000026"),
("a000027","David","Vazquez","Serna","g-6","M","c000027"),
("a000028","Jesus","Solis","Rangel","g-6","M","c000028"),
("a000029","Emilio","Mendez","Saldivar","g-6","M","c000029"),
("a000030","Abraham","Mendez","Zavala","g-6","M","c000030"),
("a000031","Amador","Pulido","Ortega","g-7","M", "c000031"),
("a000032","Dimitri","Lopez","Alvares","g-7","M", "c000032"),
("a000033","Josefa","Salguero","Sticker","g-7","F", "c000033"),
("a000034","Ruth","Izquierdo","Martines","g-7","M","c000034"),
("a000035","Teodora","Penalver","Reyes","g-7","M","c000035"),
("a000036","Ibon","Sans","Ortega","g-8","F", "c000036"),
("a000037","Estibaliz","Amores","Alvares","g-8","M","c000037"),
("a000038","Diana","Rial","Herrera","g-8","F", "c000038"),
("a000039","Bonifacio","Mira","Picasso","g-8","M","c000039"),
("a000040","Rosario","Adan","Herrera","g-8","F","c000040"),
("a000041","Ana","Canales","Saldivar","g-9","F","c000041"),
("a000042","Anastacio","Palomino","Cervantez","g-9","M","c000042"),
("a000043","Rodolfo","Lagos","Avila","g-9","M","c000043"),
("a000044","Mariam","Garcia","Quero","g-9","F","c000044"),
("a000045","Monsterrat","Buendia","Bosch","g-9","F","c000045"),
("a000046","Maria","Pino","Delgadillo","g-10","F","c000046"),
("a000047","Josep","Viera","Pinar","g-10","M","c000047"),
("a000048","Gabriel","Murillo","Herrera","g-10","M","c000048"),
("a000049","Francisco","Mesetre","Alaniz","g-10","M","c000049"),
("a000050","Alejandro","Sarmiento","Salazar","g-10","M","c000050"),
("a000051","Ander","Roig","Acero","g-11","M","c000051"),
("a000052","Sara","Diaz","Garcia","g-11","F","c000052"),
("a000053","Juan","Hernandez","Codina","g-11","M","c000053"),
("a000054","Octavio","Montes","Rangel","g-11","M","c000054"),
("a000055","Lia","Bellido","Garcia","g-11","F","c000055"),
("a000056","Angelica","Garcia","Garcia","g-12","F","c000056"),
("a000057","Octavio","Montes","Serna","g-12","M","c000057"),
("a000058","Carlos","Martos","Rangel","g-12","M","c000058"),
("a000059","Samir","Ayala","Saldivar","g-12","M","c000059"),
("a000060","Ibrahim","Garcia","Zavala","g-12","M","c000060");

insert into actividad (id, titulo,  descripción, id_materia, fecha_limite, hora_limite, retraso) 
values (1, "Actividad de prueba 1", "Esto es una sola actividad para probar como se verá todo lo demás" ,"m-002", '2021-4-4', 0,  0);

insert into actividad (id, titulo,  descripción, id_materia, fecha_limite, hora_limite, retraso) 
values (2, "Actividad de prueba 2", "Esto es una sola actividad para probar como se verá todo lo demás" ,"m-002", '2021-4-4', 0,  0);

insert into realiza (id_alumno, id_actividad)
values ("a000036", 1);

update realiza set estado_entrega = 1 where id_actividad = 1;

insert into realiza (id_alumno, id_actividad)
values ("a000036", 2);



