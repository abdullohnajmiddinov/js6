let Man = +prompt(`Iltimos raqamlardan birini tanglang \n 0)Qog'oz \n 1)Quduq \n 2)Qaychi `)
let Kompyuter = Math.floor(Math.random() * 3)
console.log(Kompyuter);

if(Kompyuter === 0) {
alert('Komputer Qogoz tanladi')
}


else if(Kompyuter === 1) {
alert('Komputer Quduq tanladi')
}

else if(Kompyuter === 2) {
alert('Komputer Qaychi tanladi')
}




if(Man === 0 && Kompyuter === 0) {
    alert('Durang boldi')
}

else if(Man === 0 && Kompyuter === 1) {
    alert('Komputer galaba qozondi ')
}

else if(Man === 0 && Kompyuter === 2) {
    alert('Komputer galaba qozondi ')
}

else if(Man === 1 && Kompyuter === 0) {
    alert('Komputer galaba qozondi')
}

else if(Man === 1 && Kompyuter === 1) {
    alert('Durang boldi')
}
else if(Man === 1 && Kompyuter === 2) {
    alert('Komputer galaba qozondi')
}

else if(Man === 2 && Kompyuter === 0) {
    alert('Siz galaba qozondingiz')
}
else if(Man === 2 && Kompyuter === 1) {
    alert('Siz galaba qozondingiz')
}
else if(Man === 2 && Kompyuter === 2) {
    alert('Durang boldi')
}