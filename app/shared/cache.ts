
/**
 * Generic class used for caching.
 * 
 * Here we expect the cache to be a nullable type, but it could be a number or boolean etc.
 * Might be able to extend this class to support non-nullable types if needed.
 */
export class Cache<T> {
	
	private _cache: T;
	
	hasCache(): boolean {
		return this._cache != null;
	}
		
	add(data: T) {
		this._cache = data;
	}

	clean() {
		this._cache = null;
	}
	
	get(): T {
		return this._cache;
	}
}