import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import Header from "./components/Header";
import { ProductList } from "./components/ProductList";
import { Api } from "./services/Api";
import { GlobalStyle } from "./styles/globalStyled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Result } from "./components/Result";
import { Title } from "./styles/typography";

function App() {
  const [menu, setMenu] = useState([]);
  const [saveMenu, setSaveMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    const API = Api();
    const BASE_URL =
      "https://hamburgueria-kenzie-json-serve.herokuapp.com/products";

    async function getData() {
      const GET = await API.get(BASE_URL);

      setSaveMenu(GET);
      setMenu(GET);
    }

    getData();
  }, []);

  const addCart = (product) => {
    const cartProduct = cart?.find((item) => {
      return item.id == product;
    });

    if (cartProduct === undefined) {
      const findProduct = menu.find((item) => {
        return item.id == product;
      });
      setCart([...cart, findProduct]);
    } else {
      toast.error(
        <Title tag="h3" titleSize="title3">
          Produto já no carrinho !!!
        </Title>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    }
  };

  const removeCart = (product) => {
    if (product === "Remover Todos") {
      setCart([]);
    } else {
      const findProduct = cart.filter((item) => {
        return item.id != product;
      });

      setCart([...findProduct]);
    }
  };

  const search = (item) => {
    setTextSearch(item);

    if (item === "") {
      setMenu(saveMenu);
    } else {
      const filteredMenu = saveMenu.filter((product) => {
        return (
          product.name.toLowerCase().includes(item.toLowerCase()) ||
          product.category.toLowerCase().includes(item.toLowerCase())
        );
      });

      setMenu(filteredMenu);
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header search={search} />
      <Result textSearch={textSearch} />
      {<ProductList menu={menu} addCart={addCart} />}
      <Cart cart={cart} removeCart={removeCart} />
      <ToastContainer position="bottom-right" autoClose={3000} closeOnClick />
    </div>
  );
}

export default App;
