import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item';
import { withStateAndDispatch } from '../store/container';

export class List extends Component {
  static propTypes = {
    visibleTodos: PropTypes.array.isRequired,
    areAllCompleted: PropTypes.bool.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onCompleteAll: PropTypes.func.isRequired
  };

  render() {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={this.props.areAllCompleted} readOnly />
        <label htmlFor="toggle-all" onClick={this.props.onCompleteAll}></label>

        <ul className="todo-list">
          {this.props.visibleTodos.map(todo =>
            <Item
              key={todo.id}
              todo={todo}
              onUpdate={this.props.onUpdate}
              onRemove={this.props.onRemove}
            />
          )}
        </ul>
      </section>
    );
  }
}

export const ListContainer = withStateAndDispatch(List);
