import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postEmail(action){
    try{
        yield axios.post(`/api/email`, action.payload);
    } catch (error){
        console.log(error)
    }
}

function* sendEmailSaga() {
    yield takeLatest('SEND_EMAIL', postEmail);
}

export default sendEmailSaga;