exports.up = async function(knex) {
	await knex.schema.createTable('projects', (tbl) => {
		tbl.increments('id');
		tbl.text('name').notNull();
		tbl.string('description');
		tbl.boolean('completed').notNull().defaultTo(0);
	});

	await knex.schema.createTable('tasks', (tbl) => {
		tbl.increments('id');
		tbl.string('description').notNull();
		tbl.string('notes');
		tbl.boolean('completed').notNull().defaultTo(0);
		tbl
			.integer('project_id')
			.notNull()
			.references('id')
			.inTable('projects')
			.onUpdate('CASCADE')
			.onDelete('CASCADE');
	});
	await knex.schema.createTable('resources', (tbl) => {
		tbl.increments('id');
		tbl.text('name').notNull().unique();
		tbl.string('description');
	});
	await knex.schema.createTable('projects_resources', (tbl) => {
		tbl.integer('project_id').references('id').inTable('projects').onUpdate('CASCADE').onDelete('CASCADE');
		tbl.integer('resource_id').references('id').inTable('resources').onUpdate('CASCADE').onDelete('CASCADE');
		tbl.primary([ 'project_id', 'resource_id' ]);
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('projects_resources');
	await knex.schema.dropTableIfExists('resources');
	await knex.schema.dropTableIfExists('tasks');
	await knex.schema.dropTableIfExists('projects');
};
