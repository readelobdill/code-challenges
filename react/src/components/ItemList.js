import React from 'react';
import Item from './Item';

export default function ItemList({items, onItemClick}) {
    return (
        <ul>
            {items.map(item => <Item
                key={item.id} {...item}
                onClick={e => onItemClick(item)}
            />)}
        </ul>
    );
};
