import { El } from "../../utils/el.js";
import { DetailsModal } from "../details-modal/details-modal.js";
import { clearRow } from "../remove-list/remove-list.js";

export function AddList() {
	const overlay = document.getElementById("modal-overlay");
	const prevOverflow = document.body.style.overflow;

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
			}),
			El({
				element: "td",
				innerText: localStorage.getItem("priority"),
				className: "text-md text-center border border-[#dddddd] p-5",
			}),
			El({
				element: "td",
				innerText: localStorage.getItem("status"),
				className: "text-md text-center border border-[#dddddd] p-5",
			}),
			El({
				element: "td",
				innerText: localStorage.getItem("date"),
				className: "text-md text-center border border-[#dddddd] p-5",
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
	console.log(newRow.dataset.taskName);
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
}
