'use strict';

const slugify = require('slugify');

module.exports = [
	{
		type: 'input',
		name: 'name',
		message: 'Singular name:',
		default: 'Vídeo'
	},
	{
		name: 'pluralName',
		message: 'Plural name:',
		default: response => {
			const lastChar = response.name.length - 1;

			return response.name[lastChar] === 's' ? response.name : response.name + 's';
		}
	},
	{
		type: 'input',
		name: 'slug',
		message: 'Slug:',
		default: response => slugify(response.name.toLowerCase())
	},
	{
		type: 'input',
		name: 'icon',
		message: 'Icon:',
		default: 'dashicons-admin-post'
	},
	{
		type: 'input',
		name: 'capabilityType',
		message: 'Capability type:',
		default: 'post'
	},
	{
		type: 'checkbox',
		name: 'supports',
		message: 'Supports:',
		choices: [
			'title',
			'excerpt',
			'editor',
			'revisions',
			'thumbnail'
		],
		default: [
			'title',
			'thumbnail'
		]
	},
	{
		type: 'confirm',
		name: 'hasArchive',
		message: 'Has archive?',
		default: true
	}
];
