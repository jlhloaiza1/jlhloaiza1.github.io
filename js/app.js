let boton = document.getElementById('calcular')

boton.addEventListener('click' ,hacercalculo);

function hacercalculo(){
    
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3=parseFloat(document.getElementById('n3').value);

    if (document.getElementById('radio2').checked) {
        let iva=n1*(0.1);
        let not=n1*(0.03);
        let tot=n1+iva+not;
        let iva2=(n2*(0.1));
        let est=(1500)
        let arq=(n2*(0.075));
        let imp=(n2*(0.045));
        let esc=(n2*(0.01));
        let not2=(n2*(0.015));
        let cer=(250);
        let seg=(4000);
        let sum=(6000);
        let tot2=n2+iva2+arq+imp+esc+not2+(250)+(4000)+(6000)+(1500);
        let tot3=(tot+tot2)-n3;

        t1.innerHTML=iva;
        t3.innerHTML=not;
        t4.innerHTML=tot;
        t5.innerHTML=iva2;
        t6.innerHTML=arq;
        t7.innerHTML=imp;
        t8.innerHTML=esc;
        t9.innerHTML=not2;
        t10.innerHTML=cer;
        t11.innerHTML=seg;
        t12.innerHTML=sum;
        t13.innerHTML=tot2;
        t14.innerHTML=tot3;
        t15.innerHTML=est
    }
    else {
        let iva=(0.00);
        let not=(0.00);
        let tot=n1+iva+not;
        let iva2=(n2*(0.1));
        let est=(1500)
        let arq=(n2*(0.075));
        let imp=(n2*(0.045));
        let esc=(n2*(0.01));
        let not2=(n2*(0.015));
        let cer=(250);
        let seg=(4000);
        let sum=(6000);
        let tot2=n2+iva2+arq+imp+esc+not2+(250)+(4000)+(6000)+(1500);
        let tot3=(tot+tot2)-(n3+n1);
        t1.innerHTML=iva;
        t3.innerHTML=not;
        t4.innerHTML=tot;
        t5.innerHTML=iva2;
        t6.innerHTML=arq;
        t7.innerHTML=imp;
        t8.innerHTML=esc;
        t9.innerHTML=not2;
        t10.innerHTML=cer;
        t11.innerHTML=seg;
        t12.innerHTML=sum;
        t13.innerHTML=tot2;
        t14.innerHTML=tot3;
        t15.innerHTML=est
    }
}