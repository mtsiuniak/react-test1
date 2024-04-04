import clsx from "clsx";
import css from "./UserClick.module.css";
import { useState } from "react";

export default function UserClick({ value, onUpdate, children}) {
   
    
    return <button className={css.button} onClick={onUpdate}>{ children}Current: {value}</button>
}