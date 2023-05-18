var flatDictionary;
function flattenDictionary(dict) {
  flatDictionary = {};
  flattenDictionaryHelper("", dict, flatDictionary);

  return flatDictionary
}

function flattenDictionaryHelper(initialKey, dict, flatDictioinary) {
  for (let key in dict) {
    let value = dict[key];

    if (typeof value != 'object') {
      if (key === "" || initialKey === "") {
        flatDictionary[initialKey + key] = value;
      } else {
        flatDictionary[initialKey + "." + key] = value;
      }
    }
    else {
      if (key === "" || initialKey === "") {
        flattenDictionaryHelper(initialKey + key, value, flatDictionary);
      } else {
        flattenDictionaryHelper(initialKey + "." + key, value, flatDictionary);
      }
    }
  }
}