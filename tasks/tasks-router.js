const express = require('express');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await db('tasks'));
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const [ id ] = await db('tasks').insert(req.body);
		const task = await db('tasks').where({ id }).first();

		res.status(201).json(task);
	} catch (err) {
		next(err);
	}
});
