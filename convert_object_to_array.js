function toArray(obj) {
    return Object.entries(obj).map(el => typeof el[1] === 'object' ? [el[0], toArray(el[1])] : el);

}