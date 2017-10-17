import React from 'react';

export default class ItemsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }
    
    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: '#f05f40' }}>{this.state.error}</div>;
    }
    
    render() {
        return (
            <div id="divCreateItem">
                <br/>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="What do I need to buy?" ref="createInput" />
                    <button id="createButton">Create</button>
                    {this.renderError()}
                </form>
                <br/>
            </div>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const product = createInput.value;
        const validateInput = this.validateInput(product, this.props.items);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createProduct(product);
        this.refs.createInput.value = '';
    }

    validateInput(product, itemsArray) {
        if (!product) {
            return 'Please enter a product.';        
        } else if (_.find(itemsArray, item => item.product === product)) {
            return 'Product already exists.';
        } else {
            return null;
        }
    }
}