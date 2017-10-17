import React from 'react';

export default class ItemsListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderProductSection() {
        const { product, isCompleted } = this.props;

        const productStyle = {
            color: isCompleted ? 'lightgreen' : '#f05f40',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={product} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={productStyle}
                onClick={this.props.toggleProduct.bind(this, product)}
            >
                {product}
            </td>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteProduct.bind(this, this.props.product)}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.renderProductSection()}
                    {this.renderActionsSection()}
                </tr>
            </thead>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true});
    }

    onCancelClick() {
        this.setState({ isEditing: false});
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldProduct = this.props.product;
        const newProduct = this.refs.editInput.value;
        this.props.saveProduct(oldProduct, newProduct);
        this.setState({ isEditing: false});
    }
}