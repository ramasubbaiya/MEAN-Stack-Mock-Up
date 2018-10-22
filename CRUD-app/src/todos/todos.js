import _ from 'lodash';

export default function($scope, todosFactory) {
/*	
	!!STATIC DATA!!

	$scope.todos = [
	{
		isCompleted : true,
		task : "walking",
		isEditing : false
	},
	{
		isCompleted : false,
		task : "running",
		isEditing : false
	}
	];
*/
	$scope.onCompletedClick = (todo) => {
		todo.isCompleted = !todo.isCompleted;
	};

	//de-structuring cool ES6 feature
	const { addTask, saveTask, deleteTask, cancelTask, editTask } = todosFactory;

	//BEFORE destructuring ------******

	// $scope.addTask = _.partial(todosFactory.addTask, $scope);
	
	// $scope.deleteTask = _.partial(todosFactory.deleteTask, $scope);

	// $scope.editTask = _.partial(todosFactory.editTask);

	// $scope.saveTask = _.partial(todosFactory.saveTask);
	
	// $scope.cancelTask = _.partial(todosFactory.cancelTask);

	todosFactory.getTasks($scope);

	//AFTER de structuring

	$scope.addTask = _.partial(addTask, $scope);
	
	$scope.deleteTask = _.partial(deleteTask, $scope);

	$scope.editTask = _.partial(editTask);

	$scope.saveTask = _.partial(saveTask, $scope);
	
	$scope.cancelTask = _.partial(cancelTask);
	
}