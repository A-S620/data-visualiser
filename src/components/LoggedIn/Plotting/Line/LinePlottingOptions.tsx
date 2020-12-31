import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, FormControl, FormHelperText, InputLabel, Paper, Select, TextField, Typography } from '@material-ui/core';
import {
    CurveType,
    ILinePlottingOptions,
    LineStyle,
} from '../../../../domain/interfaces/plotting/ILinePlottingOptions';

interface IState {
    options: ILinePlottingOptions;
}
export default class LinePlottingOptions extends React.Component<{}, IState> {
    private classes: any = makeStyles((theme) => ({
        paper: {
            flexGrow: 1,
            width: '100%',
        },
        root: {
            // width: '100%',
        },
    }));
    constructor(props: object) {
        super(props);
        this.state = {
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
        };
    }
    private getLineStyle(lineStyle: string): LineStyle {
        if (lineStyle === 'dashed') {
            return LineStyle.DASHED;
        }
        return LineStyle.SOLID;
    }
    public render() {
        return (
            <Paper className={this.classes.paper}>
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    className={this.classes.root}
                    id={'line-plotting-options'}
                    px={20}
                    py={20}
                >
                    <Typography id={'line-plotting-title'}>Line Series Plotting Options</Typography>
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center">
                        <FormControl required style={{ minWidth: 200 }} id={'x-values-select'}>
                            <InputLabel>X Values</InputLabel>
                            <Select
                                value={this.state.options.xValues}
                                onChange={(event) => {
                                    this.setState({
                                        options: {
                                            ...this.state.options,
                                            xValues: event.target.value as string,
                                        },
                                    });
                                }}
                                name="X Values"
                            >
                                <option aria-label="None" value="" />
                                <option value={'test'}>Ten</option>
                                <option value={'test2'}>Twenty</option>
                                <option value={'test3'}>Thirty</option>
                            </Select>
                            <FormHelperText>Data on X-Axis</FormHelperText>
                        </FormControl>
                        <Box mx={5} />
                        <FormControl required style={{ minWidth: 200 }} id={'y-values-select'}>
                            <InputLabel>Y Values</InputLabel>
                            <Select
                                value={this.state.options.yValues}
                                onChange={(event) => {
                                    this.setState({
                                        options: {
                                            ...this.state.options,
                                            yValues: event.target.value as string,
                                        },
                                    });
                                }}
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
                    <Box display="flex" flexDirection="row" justifyContent="center" id={'size-textfields'}>
                        <TextField id="height-textfield" label="Height" variant="outlined" helperText="Default 500" />
                        <Box mx={5} />
                        <TextField id="width-textfield" label="Width" variant="outlined" helperText="Default 500" />
                    </Box>
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'colour-textfields'}>
                        <TextField id="colour-textfield" label="Colour" variant="outlined" helperText="Hex Value" />
                        <Box mx={5} />
                        <TextField
                            id="opacity-textfield"
                            label="Opacity"
                            variant="outlined"
                            helperText="Value must be between 0 and 1"
                        />
                    </Box>
                    <Box>
                        <FormControl required style={{ minWidth: 400 }} id={'curve-select'}>
                            <InputLabel>Curve</InputLabel>
                            <Select
                                value={this.state.options.curveType}
                                onChange={(event) => {
                                    this.setState({
                                        options: {
                                            ...this.state.options,
                                            curveType: event.target.value as CurveType,
                                        },
                                    });
                                }}
                                name="Y Values"
                            >
                                <option aria-label="None" value={undefined} />
                                <option value={CurveType.curveBasis}>Basis</option>
                                <option value={CurveType.curveBasisClosed}>Basis Closed</option>
                                <option value={CurveType.curveBasisOpen}>Basis Open</option>
                                <option value={CurveType.curveBundle}>Bundle</option>
                                <option value={CurveType.curveCardinal}>Cardinal</option>
                                <option value={CurveType.curveCardinalClosed}>Cardinal Closed</option>
                                <option value={CurveType.curveCardinalOpen}>Cardinal Open</option>
                                <option value={CurveType.curveCatmullRom}>Catmull Rom</option>
                                <option value={CurveType.curveCatmullRomClosed}>Catmull Rom Closed</option>
                                <option value={CurveType.curveCatmullRomOpen}>Catmull Rom Open</option>
                                <option value={CurveType.curveLinear}>Linear</option>
                                <option value={CurveType.curveLinearClosed}>Linear Closed</option>
                                <option value={CurveType.curveMonotoneX}>Monotone X</option>
                                <option value={CurveType.curveMonotoneY}>Monotone Y</option>
                                <option value={CurveType.curveNatural}>Natural</option>
                                <option value={CurveType.curveStep}>Step</option>
                                <option value={CurveType.curveStepAfter}>Step After</option>
                                <option value={CurveType.curveStepBefore}>Step Before</option>
                            </Select>
                            <FormHelperText>Function used to create curve</FormHelperText>
                        </FormControl>
                    </Box>
                    <Box my={15} display="flex" flexDirection="row" justifyContent="center" id={'line-options'}>
                        <FormControl style={{ minWidth: 200 }} id={'line-style-select'}>
                            <InputLabel >Line Style</InputLabel>
                            <Select
                                value={this.state.options.lineStyle}
                                onChange={(event) => {
                                    this.setState({
                                        options: {
                                            ...this.state.options,
                                            lineStyle: event.target.value as LineStyle,
                                        },
                                    });
                                }}
                                name="Y Values"
                            >
                                <option aria-label="None" value={undefined} />
                                <option value={LineStyle.SOLID}>Solid</option>
                                <option value={LineStyle.DASHED}>Dashed</option>
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
}
