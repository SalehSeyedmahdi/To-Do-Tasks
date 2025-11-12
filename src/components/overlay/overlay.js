import { El } from "../../utils/el.js";
import { AddList } from "../add-list/add-list.js";

export function ModalOverlay() {
	// Preventing scrolling when modal is open
	const prevOverflow = document.body.style.overflow;
	document.body.style.overflow = "hidden";

	// Create overlay & modal
	const overlay = El({
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
						innerText: "Add your Task",
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
									}),
									El({
										element: "option",
										innerText: "Medium",
									}),
									El({
										element: "option",
										innerText: "High",
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
									}),
									El({
										element: "option",
										innerText: "Doing",
									}),
									El({
										element: "option",
										innerText: "Done",
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
								},
							}),
						],
					}),
					El({
						element: "textarea",
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

	app.append(overlay);

	// Function to handle overlay click
	function onOverlayClick(ev) {
		if (ev.target === overlay) close();
	}

	// Function to close the modal
	function close() {
		overlay.remove();
		document.body.style.overflow = prevOverflow || "";
		overlay.removeEventListener("click", onOverlayClick);
	}

	overlay.addEventListener("click", onOverlayClick);

	const submitBtn = document.getElementById("submit-btn");
	submitBtn.addEventListener("click", AddList);
}
