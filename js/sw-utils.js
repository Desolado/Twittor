function actualizaCacheDinamico(dynamicCache, request, resp) {
    if (resp.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(request, resp.clone());
            return resp.clone();
        });
    } else {
        return resp;
    }
}