import { El } from "../../utils/el.js";
import { clearErrors } from "../clear-error/clear-error.js";
import { DetailsModal } from "../details-modal/details-modal.js";
import { EditModalOverlay } from "../edit-list/edit-list.js";
import { clearRow } from "../remove-list/remove-list.js";

export function AddList() {
	const taskName = document.getElementById("task-name");
	localStorage.setItem("taskName", taskName.value);

	const priority = document.getElementById("priority");
	localStorage.setItem("priority", priority.value);

	const status = document.getElementById("status");
	localStorage.setItem("status", status.value);

	const date = document.getElementById("date");
	localStorage.setItem("date", date.value);

	const description = document.getElementById("description");
	localStorage.setItem("description", description.value);

	if (
		taskName.value === "" ||
		priority.value === "Priority" ||
		status.value === "Status" ||
		date.value === "" ||
		description.value === ""
	) {
		clearErrors();
		if (taskName.value === "") {
			const inputError = El({
				element: "p",
				className:
					"text-[12px] text-[red] absolute top-30 right-98 field-error",
				innerText: "this field is required",
			});

			// Inserting error message after the title input field
			taskName.insertAdjacentElement("afterend", inputError);
		}
		if (priority.value === "Priority") {
			const inputError = El({
				element: "p",
				className:
					"text-[12px] text-[red] absolute top-52 right-98 field-error",
				innerText: "this field is required",
			});

			// Inserting error message after the description input field
			priority.insertAdjacentElement("afterend", inputError);
		}
		if (status.value === "Status") {
			const inputError = El({
				element: "p",
				className:
					"text-[12px] text-[red] absolute top-52 right-56 field-error",
				innerText: "this field is required",
			});

			// Inserting error message after the details input field
			status.insertAdjacentElement("afterend", inputError);
		}
		if (date.value === "") {
			const inputError = El({
				element: "p",
				className:
					"text-[12px] text-[red] absolute top-52 right-15 field-error",
				innerText: "this field is required",
			});

			// Inserting error message after the details input field
			date.insertAdjacentElement("afterend", inputError);
		}
		if (description.value === "") {
			const inputError = El({
				element: "p",
				className:
					"text-[12px] text-[red] absolute top-82 right-98 field-error",
				innerText: "this field is required",
			});

			// Inserting error message after the details input field
			description.insertAdjacentElement("afterend", inputError);
		}
	} else {
		clearErrors();
		const overlay = document.getElementById("modal-overlay");
		const prevOverflow = document.body.style.overflow;

		overlay.remove();
		document.body.style.overflow = prevOverflow || "";

		const newRow = El({
			element: "tr",
			className: "new-row",
			children: [
				El({
					element: "td",
					innerText: localStorage.getItem("taskName"),
					className: "text-md text-left border border-[#dddddd] p-5",
					restAttrs: {
						id: "task-name-cell",
					},
				}),
				El({
					element: "td",
					innerText: localStorage.getItem("priority"),
					className: "text-md text-center border border-[#dddddd] p-5",
					restAttrs: {
						id: "priority-cell",
					},
				}),
				El({
					element: "td",
					innerText: localStorage.getItem("status"),
					className: "text-md text-center border border-[#dddddd] p-5",
					restAttrs: {
						id: "status-cell",
					},
				}),
				El({
					element: "td",
					innerText: localStorage.getItem("date"),
					className: "text-md text-center border border-[#dddddd] p-5",
					restAttrs: {
						id: "date-cell",
					},
				}),
				El({
					element: "td",
					className: "border border-[#dddddd] p-5",
					children: [
						El({
							element: "div",
							className: "flex justify-center items-center gap-1",
							children: [
								El({
									element: "div",
									className:
										"bg-[#dc3545] cursor-pointer rounded-md p-1 pr-2 pl-2 delete-row",
									children: [
										El({
											element: "img",
											className: "w-5 h-5",
											restAttrs: {
												src: "../../../public/SVG/delete.svg",
											},
										}),
									],
								}),
								El({
									element: "div",
									className:
										"bg-[#0c66ea] cursor-pointer rounded-md p-1 pr-2 pl-2",
									children: [
										El({
											element: "img",
											className: "w-5 h-5",
											restAttrs: {
												src: "../../../public/SVG/edit.svg",
												id: "edit-icon",
											},
										}),
									],
								}),
								El({
									element: "div",
									className:
										"bg-[#6c757d] cursor-pointer rounded-md p-1 pr-2 pl-2",
									children: [
										El({
											element: "img",
											className: "w-5 h-5",
											restAttrs: {
												src: "../../../public/SVG/eye.svg",
												id: "eye-icon",
											},
										}),
									],
								}),
							],
						}),
					],
				}),
			],
		});
		newRow.dataset.taskName = taskName.value;
		newRow.dataset.priority = priority.value;
		newRow.dataset.status = status.value;
		newRow.dataset.date = date.value;
		newRow.dataset.description = description.value;

		table.append(newRow);

		const eyeIcon = newRow.querySelector("#eye-icon");
		eyeIcon.addEventListener("click", (e) => {
			DetailsModal(e);
		});

		const deleteBtn = newRow.querySelector(".delete-row");
		deleteBtn.addEventListener("click", () => {
			clearRow(newRow);
		});

		const editIcon = newRow.querySelector("#edit-icon");
		editIcon.addEventListener("click", (e) => {
			EditModalOverlay(e);
		});
	}
}
