
// TODO add polyfill for IE
export class Utility {
    /**
     * Makes a shallow copy
     */
    static shallowCopy<T>(obj: T): T {
        return <T>Object.assign({}, obj);
    }

    /**
     * Extends object(s). Copies object properties from other objects into first object
     */
    static extend<T>(updateNullValues: boolean, ...objects: T[]): T {
        if (!objects || !objects.length) {
            return null;
        }

        let initial = objects[0];
        
        for (let object of objects.slice(1)) {
            for (let prop in object) {
                let value = object[prop];

                // Checks if we should extend property from object into initial
                if (this.shouldExtend(value, updateNullValues)) {
                    initial[prop] = object[prop];
                }
            }
        }

        return initial;
    }

    /**
     * Checks if we should extend property
     */
    private static shouldExtend(value: any, updateNullValues: boolean): boolean {
        if (value === undefined) {
            // Don't extend if value is undefined
            return false;
        }

        if (value === null && !updateNullValues) {
            // Don't update null param is false
            return false;
        }

        return true;
    }
}
