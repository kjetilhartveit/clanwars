
/**
 * Generic class used for caching.
 * 
 * Here we expect the cache to be a nullable type, but it could be a number or boolean etc.
 * Might be able to extend this class to support non-nullable types if needed.
 */
export class Cache<T> {
	private innerCache: T;
	
	hasCache(): boolean {
		return this.innerCache != null;
	}
		
	set(data: T) {
		this.innerCache = data;
	}

	clean() {
		this.innerCache = null;
	}
	
	get(): T {
		return this.innerCache;
	}
}