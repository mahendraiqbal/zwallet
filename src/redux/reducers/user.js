import { ACTION_STRING } from "src/redux/actions/actionString";

const initialState = {
    userData: {
        firstName: "",
        lastName: "",
        email: "",
        image: null,
        noTelp: null,
        balance: 0,
    },
    
    // isPending: false,
    // isFulfilled: false,
    // isRejected: false,
    // err: {},
};

const userReducer = (prevState= initialState, action) => {
    const { photoProfile, balanceProfile, contactProfile, dataProfile } = ACTION_STRING;
    // switch (action.type) {
    //     case dataProfile + pending:
    //         return {
    //             ...prevState,
    //             isPending: true,
    //             isFulfilled: false,
    //             isRejected: false,
    //         };

    //         case dataProfile + fulfilled:
    //             const data = action.payload.data;
    //             const userData = {
    //                 ...prevState,
    //                 firstName: data.data.firstName,
    //                 lastName: data.data.lastName,
    //                 email: data.data.email,
    //                 image: data.data.image,
    //                 noTelp: data.data.noTelp,
    //                 balance: data.data.balance,
    //             }
    //             return {
    //                 ...prevState,
    //                 isPending: false,
    //                 isFulfilled: true,
    //                 userData,
    //             };

    //             case dataProfile + rejected:
    //             const err = action.payload;
    //             return {
    //                 ...prevState,
    //                 isPending: false,
    //                 isRejected: true,
    //                 err,
    //             };

    //             case photoProfile:
    //                 const newPhoto = action.payload;
    //                 return {
    //                     ...prevState,
    //                     userData: {
    //                         ...prevState.userData,
    //                         image: newPhoto
    //                     },
    //                 };

    //             case balanceProfile:
    //                 const newBalance = action.payload;
    //                 return {
    //                     ...prevState,
    //                     userData: {
    //                         balance: newBalance,
    //                     },
    //                 };
                
    //             case contactProfile:
    //                 const newNumber = action.payload;
    //                 return {
    //                     ...prevState,
    //                     userData: {
    //                         ...prevState.userData,
    //                         noTelp: newNumber,
    //                     },
    //                 };
    //             default:
    //                 return prevState;
    // }
    switch(action.type){
        case ACTION_STRING.dataProfile:
            const userData = actiosn.payload;
            console.log(data);
            return {
                ...data,
            };
            default:
                return prevState;
    }
};

export default userReducer;

