import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import './style.scss'
import Category from './Category';

class ShopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuName: [
                {
                    id: 1,
                    name: 'Trai Cay Viet Nam',
                    
                },
                {
                    id: 2,
                    name: 'Trai Cay USA',
                    
                },
                {
                    id: 3,
                    name: 'Trai Cay Nhat Ban',
                    
                },
            ]

        };
    }
   
    render() {
        let elements = this.state.MenuName.map((category, index) => {
            return <Category
                        key={category.id}
                        name={category.name}
                      >
                    </Category>
        });
        return (
          
                <Card className="panel panel-primary">
                    <Card.Header className="panel-heading">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <h5 className="panel-title">Menu</h5>
                            </div>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        {elements}
                    </Card.Body>
                </Card>
           
        );
    }
}

export default ShopMenu;