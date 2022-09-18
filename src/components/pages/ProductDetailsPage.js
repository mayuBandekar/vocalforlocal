import React from 'react';
import Topnavigation from '../navbar/Navbar';
import Content from '../product_listing/ProductDetails';

const ProductDetailsPage = () => {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <main className="body-content" style={{paddingRight:"0%"}}>
                    <Topnavigation />
                    <Content />
                </main>
                {/* <Quickbar /> */}
            </div>
        );
}

export default ProductDetailsPage;