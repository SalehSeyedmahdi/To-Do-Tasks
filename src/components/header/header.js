import { El } from "../../utils/el.js";

export function Header() {
	return El({
		element: "header",
		className:
			"w-full h-15 flex justify-between items-center bg-[#6200ea] pr-5 pl-5",
		children: [
			El({
				element: "div",
				className: "flex justify-center items-center gap-3",
				children: [
					El({
						element: "img",
						restAttrs: {
							src: "../../../public/SVG/todo.svg",
						},
					}),
					El({
						element: "p",
						innerText: "My To-Do Tasks",
						className: "text-[#ffffff] text-2xl",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex justify-center items-center gap-6",
				children: [
					El({
						element: "lable",
						className: "relative text-[#ffffff]",
						children: [
							El({
								element: "img",
								className:
									"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-90",
								restAttrs: {
									src: "../../../public/SVG/magnifying-glass.svg",
								},
							}),
							El({
								element: "input",
								className:
									"w-60 h-9 text-[#ffffff] bg-[#7926ed] rounded-sm pl-10",
								restAttrs: {
									placeholder: "Search",
								},
							}),
						],
					}),
					El({
						element: "img",
						className: "w-8 h-8",
						restAttrs: {
							src: "../../../public/SVG/filter.svg",
						},
					}),
					El({
						element: "img",
						className: "w-6 h-6 cursor-pointer",
						restAttrs: {
							src: "../../../public/SVG/plus.svg",
							id: "plus",
						},
					}),
				],
			}),
		],
	});
}
