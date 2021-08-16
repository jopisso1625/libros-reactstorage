import './App.css';
import React from 'react';
import List from './List'
import Menu from './Menu'



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: [
        { id: 0, title: 'Harry Potter y el cáliz de fuego', image: 'libro01.jpg', rating: 4 },
        { id: 1, title: 'The shining', image: 'libro02.jpg', rating: 3 },
        { id: 2, title: 'Código Da Vinci', image: 'libro03.jpg', rating: 5 },
        { id: 3, title: 'El principito', image: 'libro04.jpg', rating: 5 },
        { id: 4, title: 'Sobrenatural', image: 'libro05.jpg', rating: 5 },


      ],
      books2: []

    }

  }

  componentDidMount() {

    this.setState({ books2: [...this.state.books] })

    const local = localStorage.getItem("libros");

    if (local) {
      this.setState({ books: JSON.parse(local) })
    }


  }

  componentDidUpdate() {

    localStorage.setItem("libros", JSON.stringify(this.state.books));

  }

  onAdd = (item) => {
    let libros = [...this.state.books];


    // if (libros.findIndex(libro => libro.title === item.title) < 0) {
    //   let id = libros.length;
    //   item["id"] = id;
    //   libros.push(item);
    //   this.setState({ books: [...libros] })
    // }
    // else {
    //   alert("Libro ya ingresado")
    // }

    let id = libros.length;
    item["id"] = id;
    libros.push(item);
    this.setState({ books: [...libros] })


  }


  onDelete = (id) => {

    let libros = [...this.state.books];
    let res = libros.filter(item => (item.id !== id));
    this.setState({ books: [...res] });
    // let libros = [...this.state.books];
    // var ind = libros.findIndex(item => (item.id === id))
    // libros.splice(ind, 1)
    // this.setState({ books: [...libros] });

  }

  onSearch = (query) => {

    if (query === '') {

      this.setState({ books: [...this.state.books2] });


    } else {

      let libros = [...this.state.books];
      let res = [];
      libros.forEach(libro => {
        if (libro.title.toLowerCase().indexOf(query) > -1) {
          res.push(libro)
        }
      })

      this.setState({ books: [...res] });

    }
  }



  render() {
    return (
      <div className="App">
        <Menu title="Biblio" libros={this.state.books} onsearch={this.onSearch} onAddM={this.onAdd} />

        <List className="list"
          items={this.state.books}
          onRemoveL={this.onDelete}
        />


      </div>
    );

  }

}

export default App;
