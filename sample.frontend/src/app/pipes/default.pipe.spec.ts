import { TestBed } from '@angular/core/testing';
import { DefaultPipe } from './default.pipe';

describe('DefaultPipe', () => {
    let defaultPipe: DefaultPipe;
    let httpImagePath = 'http://www.example.com/image.png';
    let httpsImagePath = 'https://www.example.com/image.png';
    beforeEach(() => {
        TestBed.configureTestingModule({});
        defaultPipe = new DefaultPipe();
    });

    afterEach(() => {

    });

    it('should return the fallBackValue when no value is provided.', () => {
        expect(defaultPipe.transform('', httpImagePath, false)).toBe(httpImagePath);
    });

    it('should return the https when no value is provided with forceHttps to be true.', () => {
        expect(defaultPipe.transform('', httpImagePath, true)).toBe(httpsImagePath);
    });

    it('should return https when value is provided and forceHttps is enabled.', () => {
        var result = defaultPipe.transform(httpImagePath
            , '', true);
            expect(result).toBe(httpsImagePath);
    });

    it('should return the same value when httpsForceEnabled is false.', () => {
        var result = defaultPipe.transform(httpImagePath, httpImagePath, false);
        expect(result).toBe(httpImagePath);
    });
});