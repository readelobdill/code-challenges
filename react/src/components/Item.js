import React from 'react';

export default function Item({title, source, active, onClick}) {
    let className = active ? "item-active" : null;
    return (
        <li className={className} onClick={e => onClick(e)}>
            {title} ({source})
        </li>
    );
};
