import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'removeWhiteSpace',
})
export class RemoveWhiteSpacePipe implements PipeTransform {
    /*
     * Removes white space from the given string
     * Usage:
     *   value | removeWhiteSpace
     * Example:
     *   {{ "Test String 1" | removeWhiteSpace }}
     *   formats to: TestString1
     */
    transform(value: string): string {
        return value.replace(/\s/g, '')
    }
}
