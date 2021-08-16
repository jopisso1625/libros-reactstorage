import React from 'react'

class PanelAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            reting: 0,
            libros: []
        };
    }

    componentDidMount() {

        this.setState({ libros: [...this.props.libros] })


    }


    onChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    onChangeImagen = (e) => {
        this.setState({ image: e.target.value });
    }

    onChangeRating = (e) => {
        this.setState({ rating: e.target.value });
    }

    //onSubmit(e) {
    onSubmit = (e) => {

        e.preventDefault();
        const id = 0;
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        const libros = [...this.state.libros]



        if (title === "") {
            alert("Ingrese titulo")

        }
        else {
            if (libros.findIndex(libro => libro.title === title) > 0) {
                alert("Libro ya registrado")

            } else {
                this.props.onAddP({ id, title, image, rating })
                this.props.oncancel()

            }
        }


        // if (title !== "" && libros.findIndex(libro => libro.title === title) < 0) {
        //     this.props.onAddP({ id, title, image, rating })
        //     this.props.oncancel()

        // }





        // if (title !== "") {
        //     this.props.onAddP({ id, title, image, rating })
        //     this.props.oncancel()

        // }
        // else {
        //     alert("Ingrese titulo")
        // }


    }


    render() {

        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <div className="header-agregar">
                            <h2>Agregar Libro</h2>

                        </div>

                        <label>Título del libro</label>
                        <input onChange={this.onChangeTitle} type="text" name="title" className="input" />

                        <label>Nombre de imagen</label>
                        <input onChange={this.onChangeImagen} type="text" name="image" className="input" />


                        <label>Calificación</label>
                        <select onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select><br />

                        <div className="acciones-agregar">
                            <input type="submit" className="btn btn-registrar" value="Registrar" />
                            <button onClick={this.props.oncancel} className="btn btn-cancelar">Cancelar</button>
                        </div>

                    </form>
                </div>
            </div>



        );

    }
}

export default PanelAdd;