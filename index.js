// define object "recipes"
var recipes = {
  'bread slices': 2,
  'peanut butter': 'lots',
  jelly: 'some'
};

// return a new object with original key value pairs and new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {key: value});
}
