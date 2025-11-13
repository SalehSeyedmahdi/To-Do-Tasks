import { El } from "../../utils/el.js";
import { applyEdit } from "../apply-changes/apply-changes.js";

export function EditModalOverlay(e) {
	const app = document.getElementById("app");

	const taskName = e.target.closest(".new-row").dataset.taskName;
	const priority = e.target.closest(".new-row").dataset.priority;
	const status = e.target.closest(".new-row").dataset.status;
	const date = e.target.closest(".new-row").dataset.date;
	const description = e.target.closest(".new-row").dataset.description;

	// Preventing scrolling when modal is open
	const prevOverflow = document.body.style.overflow;
	document.body.style.overflow = "hidden";

	const editModal = El({
		element: "div",
		className:
			"flex justify-center items-center fixed bg-[#d1ced1]/95 z-999 inset-0 box-border p-10",
		restAttrs: {
			id: "modal-overlay",
		},
		children: [
			El({
				element: "div",
				className:
					"w-130 h-125 flex flex-col items-center gap-10 relative bg-[#f2e8fe] rounded-md shadow-2xl p-3",
				children: [
					El({
						element: "div",
						innerText: "Edit your Task",
						className:
							"w-full flex items-center absolute top-0 left-0 right-0 font-semibold text-[#ffffff] bg-[#6200ea] rounded-t-md p-3",
					}),
					El({
						element: "input",
						className:
							"w-full bg-[#ffffff] mt-15 outline-hidden rounded-xl p-3",
						restAttrs: {
							placeholder: "Task Name",
							id: "task-name",
							value: taskName,
						},
					}),
					El({
						element: "div",
						className: "w-full flex gap-2",
						children: [
							El({
								element: "select",
								className:
									"w-1/3 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
								restAttrs: {
									id: "priority",
								},
								children: [
									El({
										element: "option",
										innerText: "Priority",
									}),
									El({
										element: "option",
										innerText: "Low",
										restAttrs: {
											selected: priority === "Low" ? "selected" : undefined,
										},
									}),
									El({
										element: "option",
										innerText: "Medium",
										restAttrs: {
											selected: priority === "Medium" ? "selected" : undefined,
										},
									}),
									El({
										element: "option",
										innerText: "High",
										restAttrs: {
											selected: priority === "High" ? "selected" : undefined,
										},
									}),
								],
							}),
							El({
								element: "select",
								className:
									"w-1/3 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
								restAttrs: {
									id: "status",
								},
								children: [
									El({
										element: "option",
										innerText: "Status",
									}),
									El({
										element: "option",
										innerText: "Todo",
										restAttrs: {
											selected: status === "Todo" ? "selected" : undefined,
										},
									}),
									El({
										element: "option",
										innerText: "Doing",
										restAttrs: {
											selected: status === "Doing" ? "selected" : undefined,
										},
									}),
									El({
										element: "option",
										innerText: "Done",
										restAttrs: {
											selected: status === "Done" ? "selected" : undefined,
										},
									}),
								],
							}),
							El({
								element: "input",
								className:
									"w-1/3 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
								restAttrs: {
									type: "date",
									id: "date",
									value: date,
								},
							}),
						],
					}),
					El({
						element: "textarea",
						innerText: description,
						className:
							"w-full h-20 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
						restAttrs: {
							id: "description",
							placeholder: "Description",
						},
					}),
					El({
						element: "button",
						innerText: "Submit",
						className:
							"w-25 font-semibold text-sm text-[#6200ea] border border-[#6200ea] hover:bg-[#6200ea] hover:text-[#ffffff] rounded-xl p-2",
						restAttrs: {
							id: "submit-btn",
							type: "button",
						},
					}),
				],
			}),
		],
	});

	app.append(editModal);

	// Function to handle overlay click
	function onOverlayClick(ev) {
		if (ev.target === editModal) close();
	}

	// Function to close the modal
	function close() {
		editModal.remove();
		document.body.style.overflow = prevOverflow || "";
		editModal.removeEventListener("click", onOverlayClick);
	}

	editModal.addEventListener("click", onOverlayClick);

	const submitBtn = document.getElementById("submit-btn");
	submitBtn.addEventListener("click", applyEdit);
}
