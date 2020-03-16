function averageWordLngth(text) {
    let words = removePunctuation(text).split(' ').filter(el => el.length > 0);
    // as map and reduce cannot be used
    let totalLen = 0;
    for (let word of words) {
        totalLen += word.length;
    }
    return totalLen / words.length;
}

function removePunctuation(str) {
    return str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, " ")
}