import React from 'react'
import './Item.css'

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            title: "",
            image: "",
            rating: 1,
            stars: [],
            // value: 1

        }
    }

    componentDidMount() {

        this.setState(
            {
                id: this.props.id,
                title: this.props.title,
                image: this.props.image,
                rating: this.props.rating,
                stars: Array(this.props.rating).fill(1)

            }

        )

    }

    onChangeRating = (e) => {

        const rating = parseInt(e.target.value);
        this.setState({
            rating: rating,
            stars: Array(rating).fill(1)

        })
    }

    onRemove = (e) => {
        this.props.onRemoveI(this.state.id);
    }



    render() {
        return (

            <div className="item">
                <div className="image"><img src={"img/" + this.state.image} alt={this.state.title} /></div>
                <div className="title">{this.state.title}</div>
                <div className="rating">

                    <p>
                        {this.state.stars.map((star, index) => <img key={index} src={"img/star.png"} width="32" alt="star" />)}

                    </p>

                Calificacion:
                    <select value={this.state.rating} onChange={this.onChangeRating} required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select>
                </div>

                <div>
                    <button className="btn btn-eliminar" onClick={this.onRemove}>Eliminar </button>

                </div>


            </div>

        );

    }


}

export default Item
