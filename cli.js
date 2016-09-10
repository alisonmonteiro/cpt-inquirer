#!/usr/bin/env node
'use strict';

const inquirer = require('inquirer');
const slugify = require('slugify');
const questions = require('./questions');
const cpt = require('./');

inquirer.prompt(questions).then(responses => {
	responses.slugUnderline = slugify(responses.slug, '_');
	console.log(cpt(responses));
});
