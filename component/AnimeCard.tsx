"use client";

import Image from "next/image";
import { useState } from "react";

export default function AnimeCard(props: { data: AnimeItem }) {

    const [count, setCount] = useState(0);

    function addLike() {
        setCount(count + 1);
    }

    function handleClick() {
        alert('You clicked image!');
    }

    return (
        <>
            <Image src={props.data.mainKeyVisualPath} width={640 / 2} height={360 / 2} alt={props.data.mainKeyVisualAlt} onClick={handleClick} />
            <p>{props.data.workTitle}</p>
            <button onClick={addLike}>Like it!</button>
            <p>{"" + count} </p>
        </>
    );
}