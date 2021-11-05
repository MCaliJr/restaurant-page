import "./style.css";
import { generateHomePage } from "./home";
import { createHeader } from "./header";
import { createSwitchableContent } from "./switchableContent";

createHeader();

createSwitchableContent();

generateHomePage();
