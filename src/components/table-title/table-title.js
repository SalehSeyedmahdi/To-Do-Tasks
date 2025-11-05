import { El } from "../../utils/el";

export function TableTitle() {
    return El({
        element: "table",
        className: "w-full",
        children: [
            El({
                element: "tr",
                className: "",
                children: [
                    El({
                        element: "th",
                        innerText: "Task Name",
                        className: "font-semibold text-md text-left border border-[#dddddd] p-5",
                    }),
                    El({
                        element: "th",
                        innerText: "Priority",
                        className: "font-semibold text-md text-center border border-[#dddddd] p-5",
                    }),
                    El({
                        element: "th",
                        innerText: "Status",
                        className: "font-semibold text-md text-center border border-[#dddddd] p-5",
                    }),
                    El({
                        element: "th",
                        innerText: "Deadline",
                        className: "font-semibold text-md text-center border border-[#dddddd] p-5",
                    }),
                    El({
                        element: "th",
                        innerText: "Actions",
                        className: "font-semibold text-md text-center border border-[#dddddd] p-5",
                    }),
                ],
            }),
        ],
    });
}