import React, {Component} from 'react';
import {connect} from 'react-redux';

class ImageDisplay extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_IMAGE'});
    }


    render() {
        return (
            <>
            
            {this.props.imageReducer.map((item, i) => {
                return (
                <img key={item.id} src={item.image_url} alt={item.id} width="25%" height="25%" />
                )})
            }
            
            {/* {JSON.stringify(this.props.imageReducer)} */}
            </>
        )
    }
}

const putReduxStateOnProps = (reduxStore) => ({
    imageReducer: reduxStore.imageReducer
})

export default connect(putReduxStateOnProps)(ImageDisplay);