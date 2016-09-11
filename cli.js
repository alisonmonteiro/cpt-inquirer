#!/usr/bin/env node
'use strict';

const fs = require('fs');
const inquirer = require('inquirer');
const slugify = require('slugify');
const questions = require('./questions');
const cpt = require('./');

inquirer.prompt(questions).then(responses => {
	responses.slugUnderline = slugify(responses.slug, '_');

	const cptString = cpt(responses);
	const file = responses.saveOn + '/' + responses.slug + '.php';

	if (responses.saveOn === 'c') {
		console.log(cptString);
	} else {
		console.log('Saving on ' + file + '.');

		fs.writeFile(file, cptString, {overwrite: true}, error => {
			if (error) {
				throw error;
			}
		});
	}
});
