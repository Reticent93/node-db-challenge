const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./projects/projects-router');
const resourceRouter = require('./resources/resources-router');
const taskRouter = require('./tasks/tasks-router');

const server = express();
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());

server.use('/projects', projectRouter);
server.use('/resources', resourceRouter);
server.use('/tasks', taskRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong'
	});
});

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
