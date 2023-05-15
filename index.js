function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        collection.forEach(callback);
    } else if (typeof collection === 'object') {
        Object.values(collection).forEach(callback);
    }
    return collection;
}

function myMap(collection, callback) {
    let newCollection = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newCollection.push(callback(collection[i], i, collection));
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            if (collection.hasOwnProperty(key)) {
                newCollection.push(callback(collection[key], key, collection));
            }
        }
    }
    return newCollection;
}

function myReduce(collection, callback, acc) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

    if (acc === undefined) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const arr = (collection instanceof Array) ? collection : Object.values(collection);

    for (const element of arr) {
        if (predicate(element)) {
            return element;
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let newCollection = [];
    const arr = (collection instanceof Array) ? collection : Object.values(collection);

    for (const element of arr) {
        if (predicate(element)) {
            newCollection.push(element);
        }
    }
    return newCollection;
}

function mySize(collection) {
    if (collection instanceof Array) {
        return collection.length
    } else {
        return Object.keys(collection).length;
    }
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    let keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(object) {
    let values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key])
        }
    }
    return values;
}