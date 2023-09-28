function handleError(error: string){

    switch(error){
        case 'auth/wrong-password':
            return 'Invalid email or password'
            break;
        case 'auth/user-not-found':
            return 'Invalid email or password'
            break;
        default:
            break;
    }

}

export default handleError