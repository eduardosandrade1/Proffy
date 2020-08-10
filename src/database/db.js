//fazendo nosso banco de dados
const Database = require('sqlite-async')
//abrir o banco de dados

function execute(db){
    // console.log('Cheguei aqui')

    //aqui dentro coloco as códigos sql
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER  PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
