import React from 'react';
import Item from './Item';

export default function ItemList({items, loading, onItemClick}) {
	//TODO: add state if there are no items after filtering
	return (
	    <ul>
	        {loading ? 'Loading...' : items.map(item => <Item
	            key={item.id}
	            title={item.title}
	            source={item.source.name}
	            onClick={e => onItemClick(item)}
	        />)}
	    </ul>
	);
};
