
export function FormatData(data) {
    let arrayResult = data.split('T');
    let arrayData = arrayResult[0].split('-');
    let arrayTime = arrayResult[1].split(':');
    // console.log(arrayTime);
    return (
        arrayData[2] +
        '/' +
        arrayData[1] +
        '/' +
        arrayData[0] 
        // ' ' +
        // arrayTime[0] +
        // ':' +
        // arrayTime[1]
    );
}
