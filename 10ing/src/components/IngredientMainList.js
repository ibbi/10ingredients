import React from 'react';
import IngredientMain from './IngredientMain';
import './styles/IngredientMainList.css';

class IngredientMainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            fullList: [
                'saucepan', 'double boiler', 'dutch oven', 'stock pot', 'pressure cooker',
                'steamer', 'steamer basket', 'couscous kettle', 'dripping pan', 'terrine',
                'roasting pan'
            ],

        }
    }
    render() {
        const allIngredients = this.state.fullList.map((i, j) => <IngredientMain key={j}>{i}</IngredientMain>)
        return (
            <div className='IngredientMainList'>
                {allIngredients}
            </div>

        )
    }

}

export default IngredientMainList;
