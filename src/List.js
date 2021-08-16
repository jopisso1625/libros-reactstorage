import React from 'react'
import './List.css';
import Item from './Item'


function List(props) {
    return (
        <div className="List">
            {props.items.map(item =>
                <Item
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                    onRemoveI={props.onRemoveL}

                />
            )}


        </div>

    );
}


export default List;