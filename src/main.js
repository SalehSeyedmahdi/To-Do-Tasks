import './style.css'
import { Header } from "../src/components/header/header";
import { TableTitle } from "../src/components/table-title/table-title";
import { ModalOverlay } from "../src/components/overlay/overlay";

const app = document.getElementById("app");

app.append(Header(), TableTitle());

const plus = document.getElementById("plus");
plus.addEventListener("click", ModalOverlay);