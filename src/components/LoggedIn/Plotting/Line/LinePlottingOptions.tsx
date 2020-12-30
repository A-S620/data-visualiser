import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, FormControl, FormHelperText, InputLabel, Paper, Select, TextField, Typography } from '@material-ui/core';
import {
    CurveType,
    ILinePlottingOptions,
    LineStyle,
} from '../../../../domain/interfaces/plotting/ILinePlottingOptions';

const useStyles = makeStyles((theme) => ({
    paper: {
        flexGrow: 1,
        padding: theme.spacing(10),
        width: '100%',
    },
    root: {
        // width: '100%',
    },
    formControl: {
        minWidth: 180,
    },
    curveFormControl: {
        minWidth: 380,
    },
}));

export default function LinePlottingOptions() {
    const classes = useStyles();
    const [state, setState] = React.useState<{ options: ILinePlottingOptions }>({
        options: {
            xValues: '',
            yValues: '',
            height: 0,
            width: 0,
            colour: '',
            opacity: 0,
            curveType: null,
            lineStyle: undefined,
            lineWidth: 0,
        },
    });
    return (
        <Paper className={classes.paper}>
            <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                className={classes.root}
                id={'line-plotting-options'}
            >
                <Typography>Line Series Plotting Options</Typography>
                <Box my={15} display="flex" flexDirection="row" justifyContent="center">
                    <FormControl required className={classes.formControl}>
                        <InputLabel id={'x-values-select'}>X Values</InputLabel>
                        <Select value={state.options.xValues} onChange={(event) => {}} name="X Values">
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Data on X-Axis</FormHelperText>
                    </FormControl>
                    <Box mx={5} />
                    <FormControl required className={classes.formControl}>
                        <InputLabel id={'y-values-select'}>Y Values</InputLabel>
                        <Select
                            value={state.options.yValues}
                            // onChange={}
                            name="Y Values"
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Data on Y-Axis</FormHelperText>
                    </FormControl>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="center">
                    <TextField id="colour-textfield" label="Height" variant="outlined" helperText="Default 500" />
                    <Box mx={5} />
                    <TextField id="colour-textfield" label="Width" variant="outlined" helperText="Default 500" />
                </Box>
                <Box my={15} display="flex" flexDirection="row" justifyContent="center">
                    <TextField id="colour-textfield" label="Colour" variant="outlined" helperText="Hex Value" />
                    <Box mx={5} />
                    <TextField
                        id="colour-textfield"
                        label="Opacity"
                        variant="outlined"
                        helperText="Value must be between 0 and 1"
                    />
                </Box>
                <Box>
                    <FormControl className={classes.curveFormControl}>
                        <InputLabel id={'curve-select'}>Curve</InputLabel>
                        <Select
                            value={state.options.curveType}
                            // onChange={}
                            name="Y Values"
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Function used to create curve</FormHelperText>
                    </FormControl>
                </Box>
                <Box my={15} display="flex" flexDirection="row" justifyContent="center">
                    <FormControl className={classes.formControl}>
                        <InputLabel id={'line-style-select'}>Line Style</InputLabel>
                        <Select
                            value={state.options.lineStyle}
                            // onChange={}
                            name="Y Values"
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                    <Box mx={5} />
                    <TextField
                        id="line-width-textfield"
                        label="Line Width"
                        variant="outlined"
                        helperText="Default: 2px"
                    />
                </Box>
            </Box>
        </Paper>
    );
}
