exports.seed = async function(knex) {
	await knex('resources').insert([
		{ name: 'tape measure' },
		{ name: 'skill saw', description: 'used for cutting wood' },
		{ name: 'wood' },
		{ name: 'hammer' },
		{ name: 'nails' },
		{ name: 'broom', description: 'used for sweeping the floor' },
		{ name: 'dust pan' },
		{ name: 'trash can' },
		{ name: 'mop', description: 'used for mopping the floor' },
		{ name: ' water' },
		{ name: 'Pinky' },
		{ name: 'Brain' },
		{ name: 'computer', description: 'used for taking over the world' }
	]);
};
