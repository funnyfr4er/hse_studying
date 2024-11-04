function checkResult() {
    let d = parseFloat(document.getElementById('d').value);
    let a = parseFloat(document.getElementById('a').value);

    if (d <= 0 || a <= 0) {
        alert("Бревно или брус не могут быть такими!");
        return;
    }

    if (isNaN(d) || isNaN(a)) {
        alert("Ошибка: Введите корректные числовые значения для D и A!");
        return;
    }

    let diagonal = Math.sqrt(2) * a;

    if (d >= diagonal){
        document.getElementById('result').innerText = `Ответ: Да, из бревна с диматером ${d} можно выпилить брус шириной ${a}!`;
    }
    else {
        document.getElementById('result').innerText = `Ответ: Нет, из бревна с диматером ${d} нельзя выпилить брус шириной ${a}!`;
    }
}

function sendToBing() {
    let d = parseFloat(document.getElementById('d').value);
    let a = parseFloat(document.getElementById('a').value);

    if (d === 0 || isNaN(d) || isNaN(a)) {
        alert("Ошибка: Убедитесь, что D и A корректны и D не равен нулю.");
        return;
    }

    let diagonal = Math.sqrt(2) * a;
    let ans=''
    
    if (d >= diagonal) {
        ans = 'Да, может';
    }
    else {
        ans = 'Нет, нельзя';
    }

    let query = `https://www.bing.com/search?q=Задача: Можно ли из бревна, имеющего диаметр поперечного сечения D = ${d}, выпилить квадратный брус шириной A = ${a}? Ответ: ${ans}`;

    window.open(query, '_blank');
}

function clearFields() {
    document.getElementById('d').value = '';
    document.getElementById('a').value = '';
    document.getElementById('result').innerText = 'Ответ: ';
}

document.getElementById('checkButton').addEventListener('click', checkResult);
document.getElementById('sendButton').addEventListener('click', sendToBing);
document.getElementById('clearButton').addEventListener('click', clearFields);
