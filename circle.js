function circle(r){
    let area;
    area = Math.PI * r * r;
    return area;
}
let r = prompt("enter radius")
alert(circle(r).toFixed(2))
