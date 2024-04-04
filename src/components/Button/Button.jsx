// import React, { useEffect } from 'react';
import clsx from 'clsx';
import css from "./Button.module.css";

export default function Button({variant, children}) {
    // useEffect(() => {
    //     const btn = document.querySelector('#btn');
    //     btn.addEventListener("click",  () => {
    //         alert("hello");
    //     });
    //     return () => {
    //         btn.removeEventListener("click", () => {
    //             alert("hello");
    //         });
    //     };
    // }, []);
    // пустий масив залежностей означає, що ефект буде запущено тільки раз, після монтажу компонента

    const handleClick = () => {
        return (
            alert("Hello from function")
        )
    }
    const buttonNames = clsx(css.button, {
        [css.first]: variant === "first",
        [css.second]: variant === "second",
    })
    
    // or this variant !!!!
    // const buttonNames = clsx(css.button, variant === "first" && css.first,  variant === "second" && css.second)

    return (
        <button className={buttonNames} onClick={(elv) => {
            console.log(elv);
            alert("Hi from return")
        }}>{children}</button>
    );
}
