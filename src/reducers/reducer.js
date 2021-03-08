const initalState={
    primeButtons: [],
    secondaryButtons: [],
    content: {
        title: "",
        info: "",
        src: "",
        link: ""
    }
}

const reducer=(state=initalState, action)=>{
    switch(action.type){
        case 'ASSIGN_PRIME_BUTTONS':
            return{
                ...state,
                primeButtons: action.primeButtons
            }
        case "ASSIGN_SECOND_BUTTONS":
            return{
                ...state,
                secondaryButtons: action.secondButtons
            }
        default:
            return initalState;
    }
};

export default reducer;