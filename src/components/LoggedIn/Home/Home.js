import React from 'react';
import { makeStyles } from '@material-ui/core';

import ImportFileComponent from '../ImportFileHandling/ImportFileComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    alignItemsAndJustifyContent: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
    },
}));

export default function Home() {
    return (
        <main>
            <ImportFileComponent />
        </main>
    );
}
