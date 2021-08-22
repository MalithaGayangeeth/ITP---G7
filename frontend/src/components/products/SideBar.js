import React, {Fragment} from 'react';

import 'antd/dist/antd.css';
import {Checkbox, List, Card, Radio, Input, Tooltip, Button} from 'antd';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {min: '', max: ''};
        this.categoryChange = this.categoryChange.bind(this);
        this.sort = this.sort.bind(this);
        this.filter = this.filter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    categoryChange(event) {
        console.log(event);
    }

    sort(event) {
        console.log(event.target.value);
    }

    filter() {
        console.log(this.state.min, this.state.max);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {

        const categories = [
            {label: 'Mobile Phone', value: '0'},
            {label: 'Television', value: '1'},
            {label: 'Laptop', value: '2'}
        ];

        return (
            <Fragment>
                <List>

                    <List.Item>
                        <Card size='small' title='Categories' className='py-0 my-0 w-100'>
                            <Checkbox.Group onChange={this.categoryChange}>
                                {categories.map(category => (<Fragment><Checkbox key={category.value} value={category.value}>{category.label}</Checkbox><br/></Fragment>))}
                            </Checkbox.Group>
                        </Card>
                    </List.Item>

                    <List.Item>
                        <Card size='small' title='Price Range' className='py-0 my-0 w-100'>
                            <Radio.Group className='mb-3' onChange={this.sort}>
                                <Radio value='asc'>Lowest to Highest</Radio>
                                <Radio value='desc'>Highest to Lowest</Radio>
                            </Radio.Group>
                            <div className='row px-1'>
                                <div className="col-4 px-0 mx-0">
                                    <Tooltip placement='bottom' title='Minimum Price'>
                                        <Input name='min' onChange={this.handleChange} prefix='Rs.' placeholder='Min'/>
                                    </Tooltip>
                                </div>
                                <div className="col-1 px-1" style={{marginTop: '3px'}}>
                                    to
                                </div>
                                <div className="col-4 px-0">
                                    <Tooltip placement='bottom' title='Maximum Price'>
                                        <Input name='max' onChange={this.handleChange} prefix='Rs.' placeholder='Max'/>
                                    </Tooltip>
                                </div>
                                <div className="col-2 px-1">
                                    <Button type='primary' onClick={this.filter}>Go</Button>
                                </div>
                            </div>
                        </Card>

                    </List.Item>
                </List>
            </Fragment>
        )
    }

}

export default SideBar;
