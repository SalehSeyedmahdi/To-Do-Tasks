import { Header } from "../src/components/header/header.js";
import { ModalOverlay } from "../src/components/overlay/overlay.js";
import { TableTitle } from "../src/components/table-title/table-title.js";
import "./style.css";

const app = document.getElementById("app");

app.append(Header(), TableTitle());

const plus = document.getElementById("plus");
plus.addEventListener("click", ModalOverlay);
