import { El } from "../../utils/el.js";

export function DetailsModal(e) {
	const app = document.getElementById("app");

	const taskName = e.target.closest(".new-row").dataset.taskName;
	const priority = e.target.closest(".new-row").dataset.priority;
	const status = e.target.closest(".new-row").dataset.status;
	const date = e.target.closest(".new-row").dataset.date;
	const description = e.target.closest(".new-row").dataset.description;

	// Preventing scrolling when modal is open
	const prevOverflow = document.body.style.overflow;
	document.body.style.overflow = "hidden";

	// Create overlay & modal
	const modal = El({
		element: "div",
		className:
			"flex justify-center items-center fixed bg-[#d1ced1]/95 z-999 inset-0 box-border p-10",
		restAttrs: {
			id: "details-modal",
		},
		children: [
			El({
				element: "div",
				className:
					"w-130 h-125 flex flex-col items-center gap-6 relative bg-[#f2e8fe] rounded-md shadow-2xl p-3",
				children: [
					El({
						element: "div",
						innerText: "Task Details",
						className:
							"w-full flex items-center absolute top-0 left-0 right-0 font-semibold text-[#ffffff] bg-[#6200ea] rounded-t-md p-3",
					}),
					El({
						element: "p",
						innerText: taskName,
						className:
							"w-full bg-[#ffffff] mt-15 outline-hidden rounded-xl p-3",
					}),
					El({
						element: "div",
						className: "w-full flex gap-2",
						children: [
							El({
								element: "div",
								innerText: priority,
								className:
									"w-1/3 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
							}),
							El({
								element: "p",
								innerText: "Priority",
								className:
									"absolute top-33 left-7 font-semibold text-xs text-[#6200ea]",
							}),
							El({
								element: "div",
								innerText: status,
								className:
									"w-1/3 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
							}),
							El({
								element: "p",
								innerText: "Status",
								className:
									"absolute top-33 left-49 font-semibold text-xs text-[#6200ea]",
							}),
							El({
								element: "div",
								innerText: date,
								className:
									"w-1/3 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
							}),
							El({
								element: "p",
								innerText: "Date",
								className:
									"absolute top-33 left-91 font-semibold text-xs text-[#6200ea]",
							}),
						],
					}),
					El({
						element: "div",
						innerText: description,
						className:
							"w-full h-20 text-[#6200ea] bg-[#ffffff] outline-hidden rounded-xl p-3",
					}),
					El({
						element: "p",
						innerText: "Description",
						className:
							"absolute top-51 left-7 font-semibold text-xs text-[#6200ea]",
					}),
				],
			}),
		],
	});

	app.append(modal);

	// Function to handle overlay click
	function onOverlayClick(ev) {
		if (ev.target === modal) close();
	}

	// Function to close the modal
	function close() {
		modal.remove();
		document.body.style.overflow = prevOverflow || "";
		modal.removeEventListener("click", onOverlayClick);
	}

	modal.addEventListener("click", onOverlayClick);
}
