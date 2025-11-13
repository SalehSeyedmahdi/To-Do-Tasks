export function applyEdit(e) {
	const taskName = document.getElementById("task-name");
	console.log(taskName.value);
	const priority = document.getElementById("priority");
	console.log(priority.value);
	const status = document.getElementById("status");
	console.log(status.value);

	const date = document.getElementById("date");
	console.log(date.value);
	const description = document.getElementById("description");
	console.log(description.value);

	const newRow = e.target.closest(".new-row");

	const editModal = document.getElementById("modal-overlay");

	newRow.dataset.taskName = taskName.value;
	newRow.dataset.priority = priority.value;
	newRow.dataset.status = status.value;
	newRow.dataset.date = date.value;
	newRow.dataset.description = description.value;

	const prevOverflow = document.body.style.overflow;

	editModal.remove();
	document.body.style.overflow = prevOverflow || "";
}
