node
    const express = require('express'); 
    const app = express();

    const hostname = '127.0.0.1';
    const port = 3000;
    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = 'curriculo.db';

    app.use(express.json());

    // Endpoint para recuperar os dados pessoais
    app.get('/pessoa', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); //Abre o banco de dados
    var sql = 'SELECT * FROM pessoa';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); //Fecha o banco de dados
    });

    // Endpoint para recuperar os dados de contato
    app.get('/contato', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); //Abre o banco de dados
    var sql = 'SELECT pessoa.nome, pessoa.sobrenome, contato.telefone, contato.email FROM pessoa INNER JOIN contato ON pessoa.id_pessoa = contato.id_contato';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); //Fecha o banco de dados
    });

    // Endpoint para recuperar os dados de endereço
    app.get('/endereco', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); //Abre o banco de dados
    var sql = 'SELECT pessoa.nome, pessoa.sobrenome, endereco.rua, endereco.numero_rua, endereco.cidade, endereco.estado FROM pessoa INNER JOIN endereco ON pessoa.id_pessoa = endereco.id_endereco';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); //Fecha o banco de dados
    });

    // Endpoint para recuperar os dados do currículo
    app.get('/curriculo', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); //Abre o banco de dados
    var sql = 'SELECT * FROM curriculo';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); //Fecha o banco de dados
    });

    // Endpoint para recuperar as habilidades
    app.get('/habilidades', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); //Abre o banco de dados
    var sql = 'SELECT * FROM habilidades';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); //Fecha o banco de dados
    });

    // Endpoint para recuperar as realizações
    app.get('/realizacoes', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH); //Abre o banco de dados
    var sql = 'SELECT * FROM realizacoes';
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); //Fecha o banco de dados
    });

    // Endpoint para recuperar os dados da tabela 'formacao'
    app.get('/formacao', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const db = new sqlite3.Database(DBPATH);
        const sql = 'SELECT id_formacao, curso, inicio, termino, instituicao, id_curriculo FROM formacao';
        db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
        });
        db.close();
    });
    
     


