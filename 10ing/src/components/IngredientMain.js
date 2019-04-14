import React from 'react';
import './styles/IngredientMain.css';

class IngredientMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: true,

        }
        this.toggleSelected = this.toggleSelected.bind(this);
    }
    toggleSelected() {
        this.setState({
            selected: !this.state.selected
        });
        console.log(this.state)
    }
    render() {
        return (
            <div className='IngredientMainButton' onClick={this.toggleSelected}>{this.props.children}</div>
        )
    }
}

export default IngredientMain;
