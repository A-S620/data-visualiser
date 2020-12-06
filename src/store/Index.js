import Store from './Store';

const unsubscribe = Store.subscribe(() => {
    console.log('Store changed', Store.getState());
});
