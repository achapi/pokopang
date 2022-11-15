const calc = () => {
    var isevolution = radio('isevolution');
    var b_power = +document.getElementById('before_power').value;
    if (b_power == '') {
        out('進化前の初期パワーを半角数字で入力してください。');
        return;
    }
    var b_yo = +document.getElementById('before_yo').value;
    if (b_yo == '') {
        out('進化前の年齢を半角数字で入力してください。 ');
        return;
    }
    var a_power = +document.getElementById('after_power').value;
    if (a_power == '' && isevolution === 'yes') {
        out('進化後の初期パワーを半角数字で入力してください。');
        return;
    }
    var a_yo = +document.getElementById('after_yo').value;
    if (a_yo == '' && isevolution === 'yes') {
        out('進化後の年齢を半角数字で入力してください。');
        return;
    }
    var takeover = +document.getElementById('takeover').value;
    if (takeover == '' && isevolution === 'yes') {
        out('引継いだ割合を半角数字で入力してください。');
        return;
    }
    if ((takeover > 25 || takeover < 6) && isevolution === 'yes') {
        out('引継いだ割合を25以下または6以上で入力してください。');
        return;
    }
    var b_spot = +radio('before_spot');
    var a_spot = +radio('after_spot');
    var increasing = 30;
    var yo = 2;
    var power = 0;
    for (var i = b_yo - 1; i--;) {
        power += increasing;
        increasing = increasing / yo * (yo - 1);
        yo++;
    }
    var before = Math.floor(b_power * (power / 100 + 1))
    switch (b_spot) {
        case 0:
            before += 0;
            break;
        case 1:
            before += 700;
            break;
        case 2:
            before += 1330;
            break;
        case 3:
            before += 1834;
            break;
        case 4:
            before += 2187;
            break;
        case 5:
            before += 2363;
            break;
    }
    if (isevolution === 'no') {
        document.getElementById('result').innerHTML = before;
        return;
    }
    var increasing = 2;
    var yo = 2;
    var power = 0;
    for (var i = a_yo - 1; i--;) {
        power += 100 / increasing;
        increasing += 2;
        yo++;
    }
    var after = Math.floor(before * (takeover / 100) + a_power * (power / 100 + 1))
    switch (a_spot) {
        case 0:
            after += 0;
            break;
        case 1:
            after += 700;
            break;
        case 2:
            after += 1330;
            break;
        case 3:
            after += 1897;
            break;
        case 4:
            after += 2407;
            break;
        case 5:
            after += 2866;
            break;
        case 6:
            after += 3279;
            break;
        case 7:
            after += 3651;
            break;
        case 8:
            after += 3986;
            break;
        case 9:
            after += 4287;
            break;
        case 10:
            after += 4558;
            break;
    }
    document.getElementById('result').innerHTML = after;
}
const out = (text) => {
    document.getElementById('result').innerHTML = text;
}
const radio = (id) => {
    let elements = document.getElementsByName(id);
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++) {
        if (elements.item(i).checked) {
            checkValue = elements.item(i).value;
        }
    }
    return checkValue;
}