function toArray(obj) {
    let res = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if ((typeof obj[i]) === 'object') {
                res.push([i, toArray(obj[i])]);
            } else {
                res.push([i, obj[i]]);
            }
        }
    }
    console.log(res);
    return res;
}
