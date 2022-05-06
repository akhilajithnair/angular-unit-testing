import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'default'
})

export class DefaultPipe implements PipeTransform {
    transform(value: string, fallBack: string, forceHttps?: boolean): string {
        let image = '';
        if (value.trim().length > 0) {
            image = value;
        } else {
            image = fallBack;
        }
        if (forceHttps) {
            if (image.indexOf('https') === -1) {
                image = image.replace('http', 'https');
            }
        }
        return image;
    }
}