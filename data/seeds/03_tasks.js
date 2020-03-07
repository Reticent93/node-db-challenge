exports.seed = async function(knex) {
	await knex('tasks').insert([
		{ description: 'use tape measure to measure wood', completed: 'true', project_id: 1 },
		{ description: 'cut wood with saw', completed: 'true', project_id: 1 },
		{ description: 'use hammer to nail together', completed: 'true', project_id: 1 },
		{ description: 'use broom to sweep floor', completed: 'true', project_id: 2 },
		{ description: 'use dust pan to pick up trash', completed: 'true', project_id: 2 },
		{ description: 'place swept trash in trash can', completed: 'true', project_id: 2 },
		{ description: 'place mop in water', completed: 'false', project_id: 2 },
		{ description: 'hire Pinky', completed: 'true', project_id: 3 },
		{ description: 'hire Brain', completed: 'true', project_id: 3 },
		{ description: 'give them computer to figure out taking over the world', completed: 'false', project_id: 3 }
	]);
};
