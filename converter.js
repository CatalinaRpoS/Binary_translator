"use strict"

let n, x, m, z, y, w, result_e, result_d,result;

let list1 = [], list2 = [], list3 = [1], list4 = [], list5 = [];

function convert(){

    // Tomamos el número
    n = parseFloat(document.getElementById("num1").value);

    // Tomamos la parte entera del número
    x = Math.floor(n);

    // Tomamos la parte decimal del número
    m = n - x;

    // Estas variables se necesitarán en el futuro
    z = x;
    y = 1;
    w = 1;

    // Vamos a descomponer el número :D
    while (x > 0) {
        while (y <= x) {
            y = y * 2;
        }
        y = y - (y / 2);
        x = x - y;
        list1.push(y);
        y = 1;
    }

    // Vamos a ajustar la cantidad de cifras del número
    while (z > 1) {
        z = z / 2;
        list2.push(z);
    }

    list2.forEach(element => {
        w = w * 2;
        list3.push(w); 
    });
    
    // Vamos a hallar el número binario y a imprimirlo
   
    list3.forEach(element => {
        if (list1.includes(element)) {
            list4.push(1);
        } else{
            list4.push(0);
        }
    });

    // Vamos a evaluar la parte decimal del número
    for (let i = 0; i < 10; i++) {
        m = m * 2;
        if (m < 1) {
            list5.push(0);
        } else {
            if (m >= 1) {
                list5.push(1);
                m = m - 1;
            }
        }
    }

    // Vamos a organizar el número para imprimirlo
    list4.reverse();
    result_e = list4.join("");
    result_d = list5.join("");
    console.log(result_d);
    result = result_e + "." + result_d;
    
    // Vamos a evaluar si el resultado es decimal o entero
    if (n % 1 == 0) {
        result = parseInt(result);
    } else{
        result = parseFloat(result);
    }

    // Vamos a mostrar el resultado en pantalla
    
    document.getElementById("result").innerHTML = result;

   // Vamos a reiniciar las variables
    n, x, m, z, y, w, result;
    list1 = [], list2 = [], list3 = [1], list4 = [], list5 = [];
}

