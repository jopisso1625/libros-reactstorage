import React from 'react'


class Search extends React.Component {


    onChangeEvent = (e) => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query)

    }


    render() {
        return (
            <div className="Search">

                <input type="text" onChange={this.onChangeEvent} />

            </div>

        );

    }

}


export default Search;