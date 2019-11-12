import React, { Component } from 'react'
import AsyncSelect from 'react-select/async';
import './style.scss';
export default class SearchShop extends Component {
    render() {
        return (
            <React.Fragment>
                <AsyncSelect
                className='search-shop-container'
                classNamePrefix="search-shop"
                placeholder="Search your favorite shop"
                components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                }}
                />
            </React.Fragment>
        )
    }
}
