import { setupEventListeners } from "./setupEventListeners";
import { setDate } from "./setDate";


export const init = () => {
    setupEventListeners();
    setDate();
};