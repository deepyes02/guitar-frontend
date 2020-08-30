import api from './api';

export default {
    register(credentials){
        return api().post('register', credentials)
    }
}

// authenticationService.register({
//     email: 'deepyes@outlook.com',
//     password: 'apple4dinner1234',
//     name: 'Deepesh'
// })