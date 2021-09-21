const express = require('express');
const fs = require('fs');

const Info = require('../models/info');

// récupere toutes les sauces
exports.getAllInfo = (req, res, next) => {
    Info.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({
            error
        }));
}