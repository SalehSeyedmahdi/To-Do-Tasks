import './style.css'
import { Header } from "../src/components/header/header";
import { TableTitle } from "../src/components/table-title/table-title";

const app = document.getElementById("app");

app.append(Header(), TableTitle());