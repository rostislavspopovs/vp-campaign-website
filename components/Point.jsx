import React from 'react';

function Point(props) {
    return (
        <section 
            id={props.title}
            className={`${props.background} min-h-screen flex justify-center items-center relative overflow-hidden`}    
        >
            <div className="w-5/6 lg:w-4/6 h-full py-10 my-10 flex justify-center items-center relative flex-col">
                <h1 className={`text-${props.text} font-title text-3xl lg:text-4xl text-center mb-8`}>{props.title}</h1>
                <p className={`text-${props.text}70`}>{props.children}</p>
                <span className={`number text-${props.text}15 absolute font-slab left-0`}>{props.number}</span>
            </div>
        </section>
    )
}

export default Point;