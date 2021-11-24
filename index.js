const clone = (obj) => {
    let result;
    if (Array.isArray(obj)) {
        result = obj.map(element => {
            if (Array.isArray(element) || typeof element == 'object') {
                return clone(element);
            } else {
                return element;
            }
        });
    } else if (typeof obj == 'object'){
        if (obj instanceof Map) {
            result = new Map(obj);
        } else if (obj instanceof Set) {
            result = new Set(obj);
        } else if (obj instanceof Date) { 
            result = new Date(obj);
        } else if (obj instanceof Object) {
            const clonedObject = {};
            for (let key of Object.keys(obj)) {
                if (Array.isArray(obj[key]) || typeof obj[key] == 'object') {
                    clonedObject[key] = clone(obj[key]);
                } else {
                    clonedObject[key] = obj[key];
                }
            }
    
            result = clonedObject;
        } else {
            result = obj;
        }
    } else {
        result = obj;
    }

    return result;
}

module.exports = clone;