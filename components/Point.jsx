import React from 'react';

function Point(props) {

    /*
    Disgusting, overly verbose switch statements to
    purgecss being a pain
    */

    let bg;
    switch(props.background){
        case "slate":
            bg = "bg-slate"
            break;
        case "purple":
            bg = "bg-purple"
            break;
        case "red":
            bg = "bg-red"
            break;
        case "yellow":
            bg = "bg-yellow"
            break;
        case "grey":
            bg = "bg-grey"
            break;
        case "blue":
            bg = "bg-blue"
            break;
        case "white":
            bg = "bg-white"
            break;
        case "black":
            bg = "bg-black"
            break;
    }

    let text;
    let text70;
    let text15;
    switch(props.text){
        case "white":
            text = "text-white"
            text70 = "text-white70"
            text15 = "text-white15"
            break;
        case "black":
            text = "text-black"
            text70 = "text-black70"
            text15 = "text-black15"
            break;
    }

    return (
        <section 
            id={props.title}
            className={`${bg} min-h-screen flex justify-center items-center relative overflow-hidden`}    
        >
            <div className="w-5/6 lg:w-4/6 h-full py-10 my-10 flex justify-center items-center relative flex-col">
                <h1 className={`${text} font-title text-3xl lg:text-4xl 2xl:text-6xl text-center mb-8`}>{props.title}</h1>
                <p className={`${text70} text-xl lg:text-2xl 2xl:text-3xl`}>{props.children}</p>
                <span className={`number ${text15} absolute font-slab left-0`}>{props.number}</span>
            </div>
        </section>
    )
}

export default Point;