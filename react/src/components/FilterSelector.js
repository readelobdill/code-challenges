import React from 'react';

export default function FilterSelector({filters, activeFilter, onChange}) {
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            {filters.map(f =>
                <option
                    selected={f == activeFilter}
                >{f}</option>)}
        </select>
    );
};
