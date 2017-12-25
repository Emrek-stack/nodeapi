'use strict';

module.exports = function(app) {
	var players = require('../controllers/players');

	// todoList Routes
	app.route('/
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);

	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);
};