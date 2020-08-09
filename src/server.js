// Dados

const proffys = [ // Objeto que recebe parâmetros do formulario dar aulas
    {
    name: "Diego Fernandes", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"899889989923",
    bio:'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject:"Química",
    cost:"20",
    weekday:[0],
    time_from:[],
    time_to:[]
    },
    {
    name: "Eduardo dadaSilva", 
    avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"899889989923",
    bio:'Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
    subject:"Química",
    cost:"20",
    weekday:[0],
    time_from:[],
    time_to:[]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
    ]

//Funcionalidades

// Função em que o express pede um caminho, e você entrega um /

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}


function pageLanding(req, res){//req pega algo res responde com algo
    return res.render("index.html")
}
// Função em que o executa um pedido 
function pageStudy(req,res){//req pega algo res responde com algo
    const filters = req.query
    return res.render("study.html", {proffys,filters,subjects, weekdays })// Entre o {} é o nunjucks
}
function pageGiveClasses(req, res){//req pega algo res responde com algo
    const data = req.query


    const isNotEmpty = Object.keys(data).length != 0 // Coloca em uma array para facilitar se tem algum elemento
    //se tiver dados, adicionar
    if(isNotEmpty){
        // adicionar dados ao a lista de proffys

        data.subject = getSubject(data.subject)

        proffys.push(data)
        
        return res.redirect("/study")
    }
    //senao, nao adicionar

    return res.render("give-classes.html", {subjects,weekdays})// Aqui entre {} é o nunjucks
}



// Servidor

// Primeiro feito
const express = require('express'); //importa o express
const server = express(); // Deixa o express pronto pra uso
const nunjucks = require('nunjucks') // 

//configurando o nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,   //Desativa o Cache que guardar em memória para devolver mais rápido poŕem menos atualizado

})



server.use(express.static("public"))  //configuração do servidor para linkar a pasta public.... E funcionar os CSS(e todos arquivos da pasta) nos arquivos chamados abaixo 
//não se esqueça que seu HTML tem que estar /nome-do-arquivo, sem sua extensão .html



// quando na navegação pedir um '/', execute a função chamada                                     
.get("/", pageLanding)      

// quando na navegação pedir um '/', execute a função chamada
.get("/study", pageStudy)

// quando na navegação pedir um '/', execute a função chamada
.get("/give-classes", pageGiveClasses)

.listen(5500) // Execute os comandos acima no localhost na porta indicada

//fimPrimeiroFeito


