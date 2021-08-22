import React, {Component, Fragment} from 'react';
import Navbar from "../layout/Navbar";
import Cart from "../layout/Cart";
import Boxes from "../layout/Boxes";
import Footer from "../layout/Footer";
import SideBar from "./SideBar";
import Content from "./Content";

class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Navbar />
                <Cart />
                <div style={{display: 'flex', justifyContent: 'space-around', alignContent: 'stretch'}}>
                    <div style={{width: '240px', flex: '0 0 240px', borderRight: '1px solid lightgray'}}>
                        <SideBar />
                    </div>
                    <div className='mx-0 px-0' >
                        <Content />
                    </div>
                </div>
                <Boxes />
                <Footer />
            </Fragment>
        );
    }
}

Products.propTypes = {};

export default Products;


