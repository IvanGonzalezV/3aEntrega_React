import React from "react";
import "./App.css";
import "./components/UserCard/UserCard.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios"; // Axios se utiliza para hacer solicitudes HTTP
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import styled from "@emotion/styled";
import { db } from "./firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

// COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage/Home";

import CategoriesPage from "./Pages/CategoriesPage/Categories";
import ContactPage from "./Pages/ContactPage/Contact";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";


const theme = createTheme();

export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // inicializara el estado con un array vacío
      darkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  }

  componentDidMount() {
    // Este va a obtener datos de la API y ademas actualizara el estado
    axios.get("https://fakestoreapi.com/products").then((response) => {
      const products = response.data;
      this.setState({ products });
    });
  }

  render() {
    // divide el array de productos en subconjuntos de 4 elementos
    const { darkMode } = this.state;
    const theme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });

    const rows = this.state.products.reduce((rows, product, index) => {
      return (index % 4 === 0 ? rows.push([product]) : rows[rows.length - 1].push(product)) && rows;
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
            <Header title="" subtitle="" />
            <NavBar onToggleDarkMode={this.toggleDarkMode} darkMode={darkMode} />

            {/* con este mapeo cada fila de productos */}
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className={rowIndex === 0 ? "UserSectionA" : "UserSection"}>
                {/* con este mapea cada producto en la fila */}
                {row.map((product) => (
                  <UserCard
                    key={product.id}
                    img={product.image}
                    name={product.title}
                    offer={`$${product.price}`}
                    date={product.category}
                  />
                ))}
              </div>
            ))}

            <Routes className="App">
              <Route path="/" element={<HomePage />} />
              <Route path="/Categories" element={<CategoriesPage />} />
              <Route path="/Contact" element={<ContactPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}


export default App;
