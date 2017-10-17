import React from 'react';
import CreateItem from './create-item';
import ItemsList from './items-list';

const items = [
    {
        product: 'Apple',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Bread',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Banana',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Tea',
        price: 5.00,
        isCompleted: true
    },
    {
        product: 'French Fries',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Cheese',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Hamburguer',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Bacon',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Coffe',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Chocolate',
        price: 5.00,
        isCompleted: true
    },
    {
        product: 'Wine',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Egg',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Milk',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Condensed Milk',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Sugar',
        price: 5.00,
        isCompleted: true
    },
    {
        product: 'Tomatoe',
        price: 5.00,
        isCompleted: true
    },
    {
        product: 'Popcorn',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Cookies',
        price: 5.00,
        isCompleted: true
    },
    {
        product: 'Carrots',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Chicken',
        price: 5.00,
        isCompleted: false
    },
    {
        product: 'Stake',
        price: 5.00,
        isCompleted: false
    }
];

var CreateItemFunctions = new CreateItem();

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items
        };
    }

    render() {
        return (
            <div>
                <h1>Shopping List App</h1>
                <CreateItem items={this.state.items} createProduct={this.createProduct.bind(this)}/>
                <ItemsList 
                    items={this.state.items}
                    toggleProduct={this.toggleProduct.bind(this)}
                    saveProduct={this.saveProduct.bind(this)}
                    deleteProduct={this.deleteProduct.bind(this)}
                />
            </div>
        );
    }

    toggleProduct(product) {
        const foundItem = _.find(this.state.items, item => item.product === product);
        foundItem.isCompleted = !foundItem.isCompleted;
        this.setState({ items: this.state.items });
    }

    createProduct(product) {
        this.state.items.push({
            product,
            isCompleted: false
        });
        this.setState({ items: this.state.items });
    }

    saveProduct(oldProduct, newProduct) {
        const foundItem = _.find(this.state.items, item => item.product === oldProduct);
        const validateInput = CreateItemFunctions.validateInput(newProduct, this.state.items);
        
        if (validateInput) {
            //show error message;
            return;
        }

        foundItem.product = newProduct;
        this.setState({ items: this.state.items });
    }

    deleteProduct(productToDelete) {
        _.remove(this.state.items, item => item.product === productToDelete);
        this.setState({ items: this.state.items });
    }
}