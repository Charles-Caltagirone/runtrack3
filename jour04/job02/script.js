const str = '{"name":"La Plateforme_", "address":"8 rue dhozier", "city":"Marseille", "nb_staff":11, "creation":2019}'

// console.log(strJson.city);
// console.log(strJson);

function jsonValueKey(str, key) {
    const strJson = JSON.parse(str);
    return strJson[key];
}
console.log(jsonValueKey(str, 'city'))
