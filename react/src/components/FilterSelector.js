import React from 'react';

export default function FilterSelector({filters, activeFilter, loading, onChange}) {
    return (
        <select defaultValue={activeFilter} onChange={(e) => onChange(e.target.value)}>
    			<option value={null}>{loading ? "Loading..." : "Select One"}</option>
    		    {filters.map(f =>
    		        <option
    		        	key={f}
    		        	value={f}
    		        >{f}</option>)}
    			}
        	}
        </select>
    );
};
