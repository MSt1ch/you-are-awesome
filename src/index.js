// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return {propertyName: 'value'}};
const createNotEnumerableProperty = (propName) => {
	var notNumber = Symbol(propName);
	return notNumber;
};
const createProtoMagicObject = () => {return Function};
var count = 0;
const incrementor = () => {
	count++;
	// чтото написал
 	return incrementor;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => { return null};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
