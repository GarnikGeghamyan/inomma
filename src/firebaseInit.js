import firebase from 'firebase';
import { firebaseConfig } from "./constants";

function initConfigs(store) {
    const rrfConfig = {
        userProfile: 'users'
    };
    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch
    };

    firebase.initializeApp(firebaseConfig);

    return rrfProps;
}

export default initConfigs;
