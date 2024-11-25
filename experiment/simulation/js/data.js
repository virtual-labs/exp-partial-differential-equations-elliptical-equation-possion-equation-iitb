let h = 1;
let a;
let max;
let min;
let t1 = 50;
let t2 = 50;
let t3 = 50;
let t4 = 50;
let top1 = 0;
let top2 = 0;
let right1 = 0;
let right2 = 0;
let bottom1 = 0;
let bottom2 = 0;
let left1 = 0;
let left2 = 0;
function initialize_boundary() {
    let vals = [];
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    vals.push(parseInt((Math.random() * 100).toFixed(0)));
    top1 = vals[0];
    top2 = vals[1];
    right1 = vals[2];
    right2 = vals[3];
    bottom1 = vals[4];
    bottom2 = vals[5];
    left1 = vals[6];
    left2 = vals[7];
}
//# sourceMappingURL=data.js.map