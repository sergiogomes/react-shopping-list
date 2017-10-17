import _ from 'lodash';
import React from 'react';
import ItemsListHeader from './items-list-header';
import ItemsListItem from './items-list-item';
import ItemsListFooter from './items-list-footer';

export default class ItemsList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'items');

        return _.map(this.props.items, (item, index) => <ItemsListItem key={index} {...item} {...props} />);
    }

    render() {
        return (
            <div class="container">
                <table>
                    <ItemsListHeader />
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                    <br/>                    
                </table>
                <ItemsListFooter />
            </div>
        );
    }
}