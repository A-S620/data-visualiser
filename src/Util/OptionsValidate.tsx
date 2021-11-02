export class OptionsValidate {
    static lengthIsValid(length: number): boolean {
        return !(length > 800 || length < 100);
    }
    static opacityIsValid(opacity: number): boolean {
        return !(opacity > 1 || opacity < 0);
    }
    static lineWidthIsValid(width: number): boolean {
        return !(width > 10 || width < 1);
    }
    static barWidthIsValid(barWidth: number): boolean {
        return !(barWidth > 1 || barWidth < 0);
    }
}
