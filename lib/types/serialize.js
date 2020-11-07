import "reflect-metadata";
const apiMap = "api:map:";
const apiMapSerializable = `${apiMap}serializable`;
const designType = "design:type";
const designParamTypes = "design:paramtypes";
// Enums
var Type;
(function (Type) {
    Type["Array"] = "array";
    Type["Boolean"] = "boolean";
    Type["Date"] = "date";
    Type["Number"] = "number";
    Type["Object"] = "object";
    Type["String"] = "string";
})(Type || (Type = {}));
/**
 * Function to get all base class names recursively
 *
 * @param {Object} target The target class from which the parent classes are extracted
 * @returns {Array<string>} All the base class names
 */
function getBaseClassNames(target) {
    const names = [];
    const baseClass = Reflect.getPrototypeOf(target);
    if (!baseClass || !baseClass["name"]) {
        return names;
    }
    names.push(baseClass["name"]);
    return [...names, ...getBaseClassNames(baseClass)];
}
/**
 * Function to find the name of function properties
 *
 * @param {object} ctor The constructor from which the properties are extracted
 * @returns {Array<string>} All the property names
 */
function getPropertyNames(ctor) {
    // Remove all kind of comments
    const ctorWithoutComments = ctor
        .toString()
        .replace(/(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, "");
    const ctorOnSingleLine = ctorWithoutComments.replace(/[\r\t\n\v\f]/g, "");
    const ctorWithoutSuccessiveWhiteSpaces = ctorOnSingleLine.replace(/( +)/g, " ");
    // Parse function body
    const constructorParamPattern = /(?:.*(?:constructor|function).*?(?=\())(?:\()(.+?(?=\)))/m;
    const propertyPattern = /(?:this\.)([^\n\r\t\f\v;]+)([\s;])/gm;
    const propertyNames = new Map();
    const paramsExecArray = constructorParamPattern.exec(ctorWithoutSuccessiveWhiteSpaces);
    if (!paramsExecArray || !paramsExecArray.length) {
        return propertyNames;
    }
    const params = paramsExecArray[1].replace(/ /g, "").split(",");
    let match;
    // Get params
    while ((match = propertyPattern.exec(ctorWithoutSuccessiveWhiteSpaces))) {
        const matchResult = match[1].replace(/ /g, "").split("=");
        const index = params.findIndex((param) => param === matchResult[1]);
        if (index > -1) {
            propertyNames.set(index, matchResult[0]);
        }
    }
    return propertyNames;
}
/**
 * Decorator to take the property in account during the serialize and deserialize function
 * @param {Args} args Arguments to describe the property
 */
export function JsonProperty(args) {
    return (target, key, index) => {
        if (key === undefined && target["prototype"]) {
            const type = Reflect.getMetadata(designParamTypes, target)[index];
            const keys = getPropertyNames(target["prototype"].constructor);
            key = keys.get(index);
            target = target["prototype"];
            Reflect.defineMetadata(designType, type, target, key);
        }
        let map = {};
        const targetName = target.constructor.name;
        const apiMapTargetName = `${apiMap}${targetName}`;
        if (Reflect.hasMetadata(apiMapTargetName, target)) {
            map = Reflect.getMetadata(apiMapTargetName, target);
        }
        map[key] = getJsonPropertyValue(key, args);
        Reflect.defineMetadata(apiMapTargetName, map, target);
    };
}
/**
 * Decorator to make a class Serializable
 *
 * BREAKING CHANGE: Since version 2.0.0 the parameter `baseClassName` is not needed anymore
 */
export function Serializable() {
    return (target) => {
        const baseClassNames = getBaseClassNames(target);
        Reflect.defineMetadata(apiMapSerializable, baseClassNames, target);
    };
}
/**
 * Function to retrieve and merge all base class properties
 *
 * @param baseClassNames The base classe names of the instance provided
 * @param {any} instance The instance target from which the parents metadata are extracted
 * @returns {{ [id: string]: Metadata }} All base class metadata properties
 */
function getBaseClassMaps(baseClassNames, instance) {
    let baseClassMaps = {};
    baseClassNames.forEach((baseClassName) => {
        baseClassMaps = Object.assign(Object.assign({}, baseClassMaps), Reflect.getMetadata(`${apiMap}${baseClassName}`, instance));
    });
    return baseClassMaps;
}
/**
 * Function to deserialize json into a class
 *
 * @param {object} json The json to deserialize
 * @param {new (...params: Array<any>) => T} type The class in which we want to deserialize
 * @returns {T} The instance of the specified type containing all deserialized properties
 */
export function deserialize(json, type) {
    if ([null, undefined].includes(json)) {
        return json;
    }
    if (type === undefined) {
        return castSimpleData(typeof json, json);
    }
    const instance = new type();
    const instanceName = instance.constructor.name;
    const baseClassNames = Reflect.getMetadata(apiMapSerializable, type);
    const apiMapInstanceName = `${apiMap}${instanceName}`;
    const hasMap = Reflect.hasMetadata(apiMapInstanceName, instance);
    let instanceMap = {};
    if (!hasMap && (!baseClassNames || !baseClassNames.length)) {
        return instance;
    }
    instanceMap = Reflect.getMetadata(apiMapInstanceName, instance);
    if (baseClassNames && baseClassNames.length) {
        instanceMap = Object.assign(Object.assign({}, instanceMap), getBaseClassMaps(baseClassNames, instance));
    }
    Object.keys(instanceMap).forEach((key) => {
        const property = convertDataToProperty(instance, key, instanceMap[key], json);
        if (property !== undefined) {
            instance[key] = property;
        }
    });
    return instance;
}
/**
 * Function to serialize a class into json
 *
 * @param {any} instance Instance of the object to deserialize
 * @param {boolean} removeUndefined Indicates if you want to keep or remove undefined values
 * @returns {any} The json object
 */
export function serialize(instance, removeUndefined = true) {
    if ([undefined, null].includes(instance) || typeof instance !== Type.Object) {
        return instance;
    }
    const instanceName = instance.constructor.name;
    const apiMapInstanceName = `${apiMap}${instanceName}`;
    const baseClassNames = Reflect.getMetadata(apiMapSerializable, instance.constructor);
    const hasBaseClasses = baseClassNames && baseClassNames.length;
    const hasMap = Reflect.hasMetadata(apiMapInstanceName, instance);
    let instanceMap = {};
    if (!hasMap && !hasBaseClasses) {
        return instance;
    }
    instanceMap = Reflect.getMetadata(apiMapInstanceName, instance);
    if (hasBaseClasses) {
        instanceMap = Object.assign(Object.assign({}, instanceMap), getBaseClassMaps(baseClassNames, instance));
    }
    const json = {};
    const instanceKeys = Object.keys(instance);
    Object.keys(instanceMap).forEach((key) => {
        const onSerialize = instanceMap[key]["onSerialize"];
        if (instanceKeys.includes(key)) {
            let data = convertPropertyToData(instance, key, instanceMap[key], removeUndefined);
            if (onSerialize) {
                data = onSerialize(data, instance);
            }
            if (instanceMap[key]["names"]) {
                instanceMap[key]["names"].forEach((name) => {
                    if (!removeUndefined ||
                        (removeUndefined && data[name] !== undefined)) {
                        json[name] = data[name];
                    }
                });
            }
            else {
                if (!removeUndefined || (removeUndefined && data !== undefined)) {
                    json[instanceMap[key]["name"]] = data;
                }
            }
        }
    });
    return json;
}
/**
 * Function to convert class property to json data
 *
 * @param {Function} instance The instance containing the property to convert
 * @param {string} key The name of the property to convert
 * @param {Metadata} metadata The metadata of the property to convert
 * @param {boolean} removeUndefined Indicates if you want to keep or remove undefined value
 * @returns {any} The converted property
 */
function convertPropertyToData(instance, key, metadata, removeUndefined) {
    const property = instance[key];
    const type = Reflect.getMetadata(designType, instance, key);
    const isArray = type.name.toLocaleLowerCase() === Type.Array;
    const predicate = metadata["predicate"];
    const propertyType = metadata["type"] || type;
    const isSerializableProperty = isSerializable(propertyType);
    if (property && (isSerializableProperty || predicate)) {
        if (isArray) {
            const array = [];
            property.forEach((d) => {
                array.push(serialize(d, removeUndefined));
            });
            return array;
        }
        if (metadata["isDictionary"]) {
            const obj = {};
            Object.keys(property).forEach((k) => {
                obj[k] = serialize(property[k], removeUndefined);
            });
            return obj;
        }
        return serialize(property, removeUndefined);
    }
    if (propertyType.name.toLocaleLowerCase() === Type.Date) {
        return property ? property.toISOString() : property;
    }
    return property;
}
/**
 * Function to convert json data to the class property
 * @param {Function} instance The instance containing the property to convert
 * @param {string} key The name of the property to convert
 * @param {Metadata} metadata The metadata of the property to convert
 * @param {any} json Json containing the values
 */
function convertDataToProperty(instance, key, metadata, json) {
    let data;
    if ([null, undefined].includes(json)) {
        return json;
    }
    if (metadata["names"]) {
        const object = {};
        metadata["names"].forEach((name) => (object[name] = json[name]));
        data = object;
    }
    else {
        data = json[metadata["name"]];
    }
    if ([null, undefined].includes(data)) {
        return data;
    }
    const type = Reflect.getMetadata(designType, instance, key);
    const isArray = type.name.toLowerCase() === Type.Array;
    const isDictionary = metadata["isDictionary"];
    const predicate = metadata["predicate"];
    const onDeserialize = metadata["onDeserialize"];
    const postDeserialize = metadata["postDeserialize"];
    let propertyType = metadata["type"] || type;
    const isSerializableProperty = isSerializable(propertyType);
    let result;
    if (onDeserialize) {
        data = onDeserialize(data, instance);
    }
    if (!isSerializableProperty && !predicate) {
        result = castSimpleData(propertyType.name, data);
    }
    else if (isArray) {
        const array = [];
        if (!Array.isArray(data)) {
            console.error(`${data} is not an array.`);
            result = undefined;
        }
        else {
            data.forEach((d) => {
                if (predicate) {
                    propertyType = predicate(d);
                }
                array.push(deserialize(d, propertyType));
            });
            result = array;
        }
    }
    else if (isDictionary) {
        const obj = {};
        if (typeof data !== Type.Object) {
            console.error(`${data} is not an object.`);
            result = undefined;
        }
        else {
            Object.keys(data).forEach((k) => {
                if (predicate) {
                    propertyType = predicate(data[k]);
                }
                obj[k] = deserialize(data[k], propertyType);
            });
            result = obj;
        }
    }
    else {
        propertyType = predicate ? predicate(data) : propertyType;
        result = deserialize(data, propertyType);
    }
    if (postDeserialize) {
        result = postDeserialize(result, instance);
    }
    return result;
}
/**
 * Function to test if a class is serializable
 *
 * @param {any} type The type to test
 * @returns {boolean} If the type is serializable or not
 */
function isSerializable(type) {
    return Reflect.hasOwnMetadata(apiMapSerializable, type);
}
/**
 * Function to transform the JsonProperty value into Metadata
 *
 * @param {string} key The property name
 * @param {Args} args Arguments to describe the property
 * @returns {Metadata} The metadata object
 */
function getJsonPropertyValue(key, args) {
    if (!args) {
        return {
            name: key.toString(),
            type: undefined,
            onDeserialize: undefined,
            onSerialize: undefined,
            postDeserialize: undefined,
            isDictionary: false,
        };
    }
    let metadata;
    if (typeof args === Type.String) {
        metadata = { name: args };
    }
    else if (args["name"]) {
        metadata = { name: args["name"] };
    }
    else if (args["names"] && args["names"].length) {
        metadata = { names: args["names"] };
    }
    else {
        metadata = { name: key.toString() };
    }
    return args["predicate"]
        ? Object.assign(Object.assign({}, metadata), { predicate: args["predicate"], onDeserialize: args["onDeserialize"], onSerialize: args["onSerialize"], postDeserialize: args["postDeserialize"], isDictionary: !!args["isDictionary"] }) : Object.assign(Object.assign({}, metadata), { type: args["type"], onDeserialize: args["onDeserialize"], onSerialize: args["onSerialize"], postDeserialize: args["postDeserialize"], isDictionary: !!args["isDictionary"] });
}
/**
 * Function to cast simple type data into the real class property type
 *
 * @param {string} type The type to cast data into
 * @param {any} data The data to cast
 * @returns {any} The casted data
 */
function castSimpleData(type, data) {
    type = type.toLowerCase();
    if ((typeof data).toLowerCase() === type) {
        return data;
    }
    switch (type) {
        case Type.String:
            return data ? data.toString() : data;
        case Type.Number:
            const number = +data;
            if (isNaN(number)) {
                console.error(`${data}: Type ${typeof data} is not assignable to type ${type}.`);
                return undefined;
            }
            return number;
        case Type.Boolean:
            console.error(`${data}: Type ${typeof data} is not assignable to type ${type}.`);
            return undefined;
        case Type.Date:
            if (isNaN(Date.parse(data))) {
                console.error(`${data}: Type ${typeof data} is not assignable to type ${type}.`);
                return undefined;
            }
            return new Date(data);
        default:
            return data;
    }
}
//# sourceMappingURL=serialize.js.map