
/**
 * Array extensions
 */
interface Array<T> {
    delete(index: number): T[];
}

/**
 * Deletes an array item and re-arranges indexes.
 * Returns deleted items.
 *
 * Shorthand for splice(index, 1);
 */
Array.prototype.delete = function (index: number): any[] {
    return this.splice(index, 1);
}
