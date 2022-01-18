import '../styles/HomeScreen.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';
import discount from'../images/Medicinediscount.jpg';
// Components
import Product from '../components/Product';
import Footer from '../components/Footer';

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sideToggle, setSideToggle] = useState(false);
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
    
        <div className='home-page'>
            <Navbar click={() => setSideToggle(true)} />
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
            <img src={discount} alt=""></img>
            <input type='text' placeholder='Search...' style={{width:'100%',borderColor:'black',padding:'.6%'}} onChange={(e) => { setSearchTerm(e.target.value);
            }}
            />
            <h2 className='homescreen__title' style={{textAlign:'center'}}>Available Medicines</h2>
            <div className="homescreen__products">
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.filter((val) =>{
                        if (searchTerm == ''){
                            return val;
                        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((product) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />
                    ))
                )}
            </div>
            <Footer/>
        </div>
    );
};


export default HomeScreen;
