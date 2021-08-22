import React, {Fragment} from 'react';

import {Card, Pagination} from 'antd';
import {StarFilled, StarOutlined} from "@ant-design/icons";

import TV from '../../img/tv.jpg'
import SmartPhone from '../../img/smart-phone.jpg';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const productsList = [
            {productName: 'SAMSUNG Galaxy S21 Ultra', rating: 5, noOfRatings: 256, price: 155000, available: 15, image: TV},
            {productName: 'OnePlus 8', rating: 5, noOfRatings: 456, price: 63250, available: 13, image: SmartPhone},
            {productName: 'SAMSUNG 65-Inch Class Crystal UHD', rating: 3, noOfRatings: 865, price: 265500, available: 8, image: TV},
            {productName: 'LG OLED77C1PUB Alexa Built-in C1 Series 77" 4K Smart OLED TV', rating: 4, noOfRatings: 256, price: 321250, available: 25, image: SmartPhone},
            {productName: 'Lenovo IdeaPad 1 14 14.0" Laptop', rating: 5, noOfRatings: 7854, price: 186900, available: 79, image: TV},
            {productName: 'ASUS VivoBook 17 K712EA Laptop', rating: 4, noOfRatings: 45, price: 225000, available: 45, image: SmartPhone}
        ]

        return (
            <div className='row m-2' >
                {productsList.map(product => (<ProductTile productName={product.productName} rating={product.rating} noOfRatings={product.noOfRatings}  price={product.price} available={product.available} image={product.image} />))}
                <Pagination className='my-3' showSizeChanger defaultCurrent={3} total={500}/>
            </div>
        );
    }

}

export function ProductTile(props) {

    const {productName, rating, noOfRatings, price, available, image} = props;

    const stars = []

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<StarFilled style={{color: 'gold'}} />);
        } else {
            stars.push(<StarOutlined style={{color: 'gold'}} />);
        }
    }

    return (
        <Card size='small' className='col-md-4 m-1' hoverable style={{width: '250px'}} cover={<img alt='image' src={image} style={{height: '150px', objectFit: 'cover'}}/>}>
            <h6 className='mb-1'>{ productName }</h6>
            <div className='row d-flex flex-row mb-2'>
                <div className='col-5'>{ stars }</div> <div className='text-info col mx-0 px-0' style={{marginTop: '3px'}}>{noOfRatings} Ratings</div>
            </div>
            <h6 className='text-secondary'>Rs.{ price }/=</h6>
            <p className='text-danger mb-0'>{ available < 20 ? <span>Only {available} left in stock</span> : <></>}</p>
        </Card>
    );
}

export default Content;
