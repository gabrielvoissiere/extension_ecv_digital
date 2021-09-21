require('dotenv').config();
const express = require('express') // importation de express
const mongoose = require('mongoose'); // importation de mongoose

const helmet = require("helmet"); // importation de helmet pour sécuriser les en-tête des requette
const bodyParser = require('body-parser'); // importation de body parser

const cors = require("cors") // importation de cors pour l'origine des requettes

const infoRoutes = require('./routes/info'); // importation de la routes des sauces


const app = express() // création de l'app express

// connexion de maniere sécuriser a mongoose via le fichier .env
mongoose.connect(process.env.MONGODB_LINK, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors())

// reponse en JSON
app.use(helmet());
app.use(express.json());

app.use('/api/info', infoRoutes);

// exportation de l'app
module.exports = app