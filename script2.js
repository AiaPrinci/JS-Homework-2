for(let i = -5; i < 41; i++){
    if(i >= 10 && i <= 24){
        console.log(i, 'spring');
    }else if(i >= 25 && i <= 40){
        console.log(i, 'summer');
    }else if (i >= 5 && i <= 16){
        console.log(i, 'autumn');
    }else if (i >= -5 && i <= 10){
        console.log(i, 'winter');
    }
}