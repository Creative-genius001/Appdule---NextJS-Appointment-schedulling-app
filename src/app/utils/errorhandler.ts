function handleError(errorMessage: string){
    const match = errorMessage.match(/\(auth\/(.*?)\)/);
    if(match){
        const errorType = match[1];
        switch(errorType){
        case 'wrong-password':
            return 'Invalid email or password'
            break;
        case 'user-not-found':
            return 'User not found'
            break;
        default:
            break;
    }        

    }
}





export default handleError