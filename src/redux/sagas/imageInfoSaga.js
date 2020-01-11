import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postImageUrl(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        const data = {
            imageUrl: action.payload
        }

        const response = yield axios.post('/api/imageurl', data, config);
        console.log(response);
    } catch (error) {
        console.log('Image URL post failed', error);
    }
}

function* imageInfoSaga() {
    yield takeLatest('POST_IMAGE_URL', postImageUrl);
}

export default imageInfoSaga;