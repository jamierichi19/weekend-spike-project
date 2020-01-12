const getImage = (state=[], action)=>{
    if(action.type === `SET_IMAGE`){
        return action.payload;
    }
    return state;
}

export default getImage;