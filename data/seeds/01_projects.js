exports.seed = async function(knex) {
	await knex('projects').insert([
		{ name: 'build a deck', description: 'build a deck for the house', completed: 'false' },
		{ name: 'clean the house', description: 'wash the dishes and mop the floor', completed: 'true' },
		{ name: 'World domination', description: 'take over the world', completed: 'false' }
	]);
};
