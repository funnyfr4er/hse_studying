
document.getElementById('translateButton').addEventListener('click', function() {
    const issuedText1 = document.getElementById('vidanstr1');
    const issuedText2 = document.getElementById('vidanstr2');
    const surnameText = document.getElementById('surname');
    const nameText = document.getElementById('name');
    const patronymicText = document.getElementById('secondname');
    const genderText = document.getElementById('sex');
    const birthplaceText = document.getElementById('born');

    if (issuedText1.innerText === 'ГУ МВД РОССИИ ПО') {
        issuedText1.innerText = 'SAINT-PETERSBURG AND';
        issuedText2.innerText = 'LENINGRAGRSKAYA AREA GU MVD';
        surnameText.innerText = 'PANCHEKHA';
        nameText.innerText = 'LEONID';
        patronymicText.innerText = 'DENISOVICH';
        genderText.innerText = 'MALE';
        birthplaceText.innerText = 'SAINT-PETERSBURG';
    } else {
        issuedText1.innerText = 'ГУ МВД РОССИИ ПО';
        issuedText2.innerText = 'Г. САНКТ-ПЕТЕРБУРГУ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ';
        surnameText.innerText = 'ПАНЧЁХА';
        nameText.innerText = 'ЛЕОНИД';
        patronymicText.innerText = 'ДЕНИСОВИЧ';
        genderText.innerText = 'МУЖ';
        birthplaceText.innerText = 'г. САНКТ-ПЕТЕРБУРГ';
    }
});
