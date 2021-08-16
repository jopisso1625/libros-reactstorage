import React from 'react'
import PanelAdd from './PanelAdd'
import Search from './Search'

import './Menu.css';


class Menu extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            showPanelAdd: false,
            libros: []
        };
    }

    componentDidMount() {

        this.setState({ libros: [...this.props.libros] })


    }


    onShow = () => {
        this.setState({ showPanelAdd: true });

    }


    onCancel = () => {
        this.setState({ showPanelAdd: false });

    }



    render() {

        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}

                    </div>

                    <div className="search">
                        <Search onsearch={this.props.onsearch} />

                    </div>

                    <div className="menu-agregar">
                        <button onClick={this.onShow} className="btn btn-agregar">+ Añadir libro</button>
                    </div>


                </div>

                {(this.state.showPanelAdd) ? <PanelAdd libros={this.props.libros} onAddP={this.props.onAddM} oncancel={this.onCancel} /> : ""}

            </div>


        );

    }
}

export default Menu;