const express = require('express');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await db('projects'));
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const projects = await (await db('projects')).where('id', req.params.id).first;

		if (!projects) {
			return res.status(404).json({
				message: 'No projects found'
			});
		}
		res.json(projects);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const [ id ] = await db('projects').insert(req.body);
		const project = await db('projects').where({ id }).first();

		res.status(201).json(project);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
