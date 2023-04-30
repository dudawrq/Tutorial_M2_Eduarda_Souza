BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Curriculo" (
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_curriculo")
);
CREATE TABLE IF NOT EXISTS "Contato" (
	"email"	TEXT,
	"telefone"	INTEGER,
	"id_contato"	INTEGER,
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_contato"),
	FOREIGN KEY("id_curriculo") REFERENCES "Curriculo"("id_curriculo")
);
CREATE TABLE IF NOT EXISTS "Endereço" (
	"rua"	TEXT,
	"numero_rua"	INTEGER,
	"cidade"	TEXT,
	"estado"	INTEGER,
	"id_endereco"	INTEGER,
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_endereco"),
	FOREIGN KEY("id_curriculo") REFERENCES "Curriculo"("id_curriculo")
);
CREATE TABLE IF NOT EXISTS "Experiências" (
	"nome_empresa"	TEXT,
	"cargo"	TEXT,
	"inicio"	INTEGER,
	"termino"	INTEGER,
	"id_experiencia"	INTEGER,
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_experiencia"),
	FOREIGN KEY("id_curriculo") REFERENCES "Curriculo"("id_curriculo")
);
CREATE TABLE IF NOT EXISTS "Formação" (
	"curso"	TEXT,
	"inicio"	INTEGER,
	"termino"	INTEGER,
	"instituicao"	TEXT,
	"id_formacao"	INTEGER,
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_formacao"),
	FOREIGN KEY("id_curriculo") REFERENCES "Curriculo"("id_curriculo")
);
CREATE TABLE IF NOT EXISTS "Habilidades" (
	"id_habilidades"	INTEGER,
	"Ilustrador"	INTEGER,
	"Photoshop"	INTEGER,
	"Corel Draw"	INTEGER,
	"Dreamweaver"	INTEGER,
	"Html/css3"	INTEGER,
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_habilidades"),
	FOREIGN KEY("id_curriculo") REFERENCES "Curriculo"("id_curriculo")
);
CREATE TABLE IF NOT EXISTS "Pessoa" (
	"id_pessoa"	INTEGER,
	"nome"	TEXT,
	"sobrenome"	TEXT,
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_pessoa"),
	FOREIGN KEY("id_curriculo") REFERENCES "Curriculo"("id_curriculo")
);
CREATE TABLE IF NOT EXISTS "Realizações" (
	"certificado"	TEXT,
	"data"	INTEGER,
	"id_realizacoes"	INTEGER,
	"id_curriculo"	INTEGER,
	PRIMARY KEY("id_realizacoes"),
	FOREIGN KEY("id_curriculo") REFERENCES "Curriculo"("id_curriculo")
);
COMMIT;
