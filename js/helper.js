function convertCurrency(val) {
    // replace comma
    val = val.replace(/,/g, '');

    // str to int
    val = parseInt(val);

    return val;
}