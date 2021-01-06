import React from 'react';
import { makeStyles } from '@material-ui/core';

import ImportFileComponent from '../ImportFileHandling/ImportFileComponent';
import ImportFiles from "../ImportFileHandling/Import/ImportFiles";

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
            <ImportFiles />
        </main>

    );
}
