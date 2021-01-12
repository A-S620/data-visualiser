import React from 'react';
import { makeStyles } from '@material-ui/core';

import ImportFilesComponent from '../ImportFileHandling/ImportFilesComponent';

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
        <main id={'home-page'}>
            {/*<ImportFileComponent />*/}
            <ImportFilesComponent />
        </main>
    );
}
