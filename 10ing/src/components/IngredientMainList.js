import React from 'react';
import IngredientMain from './IngredientMain';

class IngredientMainList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            fullList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

        }
    }
    render() {
        const allIngredients = this.state.fullList.map((i) => <IngredientMain> {i} </IngredientMain>)
        return (
            <div>
                {allIngredients}
            </div>

        )
    }

}

export default IngredientMainList;
