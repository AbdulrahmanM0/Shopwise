import { createStore } from "@reduxjs/toolkit";
import Reducer from "./Reducers/cake";

export const store = createStore(Reducer)