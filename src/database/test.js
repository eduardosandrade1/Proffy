const Database = require('./db.js')
const  createProffy = require('./createProffy')


Database.then((db) => {
    //inserir dados

    proffyValue = {    
        name: "Eduardo da Silva", 
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"899889989923",
        bio:'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',

    }

    classValue = {
        subject:"Química",
        cost:"20",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        //class_id virá pelo banco de dados após cadastrarmos a aula
        {
            weekday: 1,
            time_from:720,
            time_to:1220
        },
        {
            weekday: 1,
            time_from:720,
            time_to:1220
        }
    ]
    // createProffy(db, {proffyValue, classValue, classScheduleValue})

    //Consultar os dados inseridos

})