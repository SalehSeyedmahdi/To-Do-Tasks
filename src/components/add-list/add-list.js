import { El } from "../../utils/el.js";
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
				innerText: localStorage.getItem("deadline"),
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

	table.append(newRow);

	const deleteBtn = newRow.querySelector(".delete-row");
	deleteBtn.addEventListener("click", () => {
		clearRow(newRow);
	});
}
