import React from 'react';
import { storeProducts, detailProduct } from '../database/data';
const Prouctcontext = React.createContext();
const ProductProvider = ({ children }) => {
    const [products, setProducts] = React.useState([])
    const [detailProductItem, setDetailProduct] = React.useState({})
    const [cart, setCart] = React.useState([]);
    const [productModal, setProductModal] = React.useState({});
    const [modalOpen, setModalOpen] = React.useState(false);
    const[cartSubTotal,setCartSubTotal]=React.useState(0)
    const[cartTax,setCartTax]=React.useState(0)
    const[cartTotal,setCartTotal]=React.useState(0)
    // component didMount
    React.useEffect(() => {
        // call api
        setProducts(storeProducts)
        // console.log(storeProducts)
        setDetailProduct(detailProduct);
    }, [])
    

    // add totals callback
    const addTotals = React.useCallback(() => {
        let tempSubTotal = 0
     cart.map(pro=>tempSubTotal+=pro.total)
        setCartSubTotal(tempSubTotal)
        let tax = tempSubTotal * 0.1
        tax=parseFloat(tax.toFixed(2))
        setCartTax(tax)
        setCartTotal(tempSubTotal+tax)
     
    }, [cart])
    
    // component didupdate
    React.useEffect(() => {
        addTotals()
    },[cart,addTotals])
    const handelDetail = (id) => {

        // console.log()
        setDetailProduct(getProduct(id))
    }

    const addToCart = (id) => {
        const product = getProduct(id)
        openModal(id)
        if (product) {
            product.inCart = true;
            product.count = 1;
            product.total = product.count * product.price;
            setProducts([...products]);
            setCart([...cart, product])
        }
    }
    const openModal = (id) => {
        const tempProduct = getProduct(id);
        setProductModal(tempProduct)
        setModalOpen(true)
    }
    const closeModal = () => setModalOpen(false);
    const getProduct = (id) => {
        const product = products.find(product => product.id === id)
        return product
    }
    const increment = (id) => {
        const product = getProduct(id);
        product.count += 1
        product.total=product.price*product.count
        const index = cart.indexOf(product);
        cart[index] = product;
        setCart([...cart])
    }
    const decrement = (id) => {
        const product = getProduct(id);
        product.count -= 1
        const index = cart.indexOf(product);
        if (product.count === 0) {
           // remove product from cart if its count is zero
            cart.splice(index, 1)
            updatProuctsData(product)
        }
        else {
            //re updata product in array of index
            product.total=product.price*product.count
            cart[index] = product;
        }
        setCart([...cart])
        addTotals()
    }
    const removeItem = (id) => {
        const product = getProduct(id);
        const index = cart.indexOf(product);
        cart.splice(index, 1)
        setCart([...cart])
        updatProuctsData(product)
        
    }
    const updatProuctsData=(product) => {
        const index = products.indexOf(product)
        product.inCart = false
        products[index] = product
        setProducts([...products])
    }
    const clearCart = () => {
        setCart([])
        const tempProducts = products.map(product => {
            if (product.inCart)
                product.inCart = false
            return product
        })
        setProducts([...tempProducts])
    }
   
    return (<Prouctcontext.Provider value={{
        products, detailProductItem, handelDetail, addToCart, cart, modalOpen, openModal, closeModal, productModal, increment, decrement, removeItem, clearCart,cartSubTotal,cartTax,cartTotal

    }}>
        {children}
    </Prouctcontext.Provider>)

}
const ProductConsumer = Prouctcontext.Consumer;
export { ProductProvider, ProductConsumer };