import React, {Fragment} from 'react'
import {Typography, Image, Upload} from "antd";

import PreviewImage from '../../img/smart-phone.jpg';
import FallbackImage from '../../img/fallback-image.png';
import UploadButton from '../../img/upload-button.png'

const {Title} = Typography


const Products = (props) => {
    return (
        <Fragment>
            <Title level={3}>Add New Products</Title>
            <div className="row mx-0 px-0">
                <div className="ant-col-md-6 mx-0 px-0">
                    <div className="row mx-0 px-0 my-1">
                        <ImagePreview image={PreviewImage}/>
                    </div>
                    <div className="row mx-0 px-0 my-1">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                        >
                            <img src={UploadButton} alt="avatar" style={{ objectFit: "cover", width: "100%" }} />
                        </Upload>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export function ImagePreview(props) {

    const image = props.image;

    return (
        <Image width={400} height={400} style={{objectFit: "cover"}} src={image} fallback={FallbackImage}/>
    );

}

export default Products
