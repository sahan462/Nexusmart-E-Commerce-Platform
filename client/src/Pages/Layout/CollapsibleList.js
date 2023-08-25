import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const CollapsibleList = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    const renderedItems = [];

    for (let index = 0; index < items.length; index++) {
        const item = items[index][0];
        renderedItems.push(
            <li key={index} className="flex">
                <Link
                    to={items[index][1]}
                    className="text-primary font-medium"
                    id={`item-${index}`}
                >
                    <span className='text-orange-100'>{item}</span>
                </Link>
            </li>
        );
    }

    return (
        <div className="">
            <h2 className="cursor-pointer bg-orange-500 p-2" onClick={toggleList}>
                {title}
            </h2>
            <div
                className={`transition-max-height overflow-hidden`}
                style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
                ref={contentRef}
            >
                <ul className="flex flex-col space-y-1.5 items-stretch">
                    {renderedItems}
                </ul>
            </div>
        </div>
    );
};

export default CollapsibleList;
