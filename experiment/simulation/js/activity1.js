let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Elliptical equation-Possion equation</h4>
            <p>Objective: </p>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
    //initialize_boundary();
}
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    min = 7;
    max = 12;
    a = Math.floor(Math.random() * (max - min)) + min;
    console.log(a);
    let btn_text = get_collapse_btn_text("Activity", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse center-text divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        $$ l = 3, w = 3$$
        Take h=1, k=1
        $$ \\frac{\\partial^2 T}{\\partial x^2} + \\frac{\\partial^2 T}{\\partial y^2} = -${a}(x^2+y^2+10) = f(x,y) $$
        $$ T_{ij} = \\frac{1}{4} (T_{i+1,j} + T_{i-1,j} + T_{i,j+1} + T_{i,j-1} - h^2 f(x,y)) $$
        Find T1, T2, T3, T4
        <br><br><br>
        <div class="row">
            <div class="col-12">
                <div id='diagram' style='text-align: center; display: flex; direction: column; justify-content: center; align-items: center;'>

                <div style='text-align: right; height: inherit;'>
                    <div>0</div>
                    <br>
                    <br>
                    <br>
                    <div>0</div>
                </div>

                <div style='width: 320px; position: relative;'>
                    <div class='row' style='padding-left: 40px; padding-right: 40px;'>
                        <div class='col-6' style='text-align: center;'>0</div>
                        <div class='col-6' style='text-align: center;'>0</div>
                    </div>

                    <span style="position: relative; top: 100px; right: 50px;">T1</span>
                    <span style="position: relative; top: 245px; right: 70px;">T3</span>
                    
                    <span style="position: relative; top: 100px; left: 70px;">T2</span>
                    <span style="position: relative; top: 245px; left: 45px;">T4</span>

                    <img src="./images/grid.png" alt="could not load" style='width: 100%;'>
                    <div class='row' style='padding-left: 40px; padding-right: 40px;'>
                        <div class='col-6' style='text-align: center;'>0</div>
                        <div class='col-6' style='text-align: center;'>0</div>
                    </div>
                </div>

                <div style='text-align: left; height: inherit;'>
                    <div>0</div>
                    <br>
                    <br>
                    <br>
                    <div>0</div>
                </div>
            </div>
        </div>
        <br><br><br>
        <div id='bs-inp-div' style='text-align: center; font-size: 16px; margin-top: 2%'>
            <span style='font-size: 16px;'>T1</span> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq11-inp' > <span id='eq11-val-sp'></span>(
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq12-inp' > <span id='eq12-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq13-inp' > <span id='eq13-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq14-inp' > <span id='eq14-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq15-inp' ><span id='eq15-val-sp'></span> +
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq16-inp' ><span id='eq16-val-sp'></span>) 
        </div>

        <div id='bs-inp-div' style='text-align: center; font-size: 16px;'>
            <span style='font-size: 16px;'>T2</span> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq21-inp' > <span id='eq21-val-sp'></span>(
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq22-inp' > <span id='eq22-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq23-inp' > <span id='eq23-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq24-inp' > <span id='eq24-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq25-inp' ><span id='eq25-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq26-inp' ><span id='eq26-val-sp'></span>) 
        </div>


        <div id='bs-inp-div' style='text-align: center; font-size: 16px;'>
            <span style='font-size: 16px;'>T3</span> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq31-inp' > <span id='eq31-val-sp'></span>(
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq32-inp' > <span id='eq32-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq33-inp' > <span id='eq33-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq34-inp' > <span id='eq34-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq35-inp' ><span id='eq35-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq36-inp' ><span id='eq36-val-sp'></span>) 
        </div>

        <div id='bs-inp-div' style='text-align: center; font-size: 16px;'>
            <span style='font-size: 16px;'>T4</span> = 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq41-inp' > <span id='eq41-val-sp'></span>(
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq42-inp' > <span id='eq42-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq43-inp' > <span id='eq43-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq44-inp' > <span id='eq44-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq45-inp' ><span id='eq45-val-sp'></span> + 
            <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='eq46-inp' ><span id='eq46-val-sp'></span>) 
        </div>
        <br><br>
        <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation' onclick='verify_equations();' >Verify</button></div>
        

        <div id="t-value-div" style="display:none; margin-top: 2%" class="row">
            <div class='col-12'>
                <div id='bs-inp-div' style='text-align: center; font-size: 16px;'>
                    <p style="text-align: left">Solving 1, 2, 3 &amp; 4 simultaneously</p>
                    <span style='font-size: 18px;'>T1</span> = 
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a21-inp' > <span id='a21-val-sp'></span><br> T2 = 
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a22-inp' > <span id='a22-val-sp'></span><br> T3 =
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a23-inp' > <span id='a23-val-sp'></span><br> T4 =  
                        <input type='text' class='form-control' style='display: inline-block !important; width: 90px;' id='a24-inp' > <span id='a24-val-sp'>
                    </span>
                </div>
                <br>
                <div style='text-align: center;'><button class='btn btn-info std-btn' id='temp-btn-equation2' onclick='verify_t_vals();' >Verify</button></div>
            </div>
        </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify_equations() {
    let btn = document.getElementById('temp-btn-equation');
    console.log(`first equation => `, 0.25, "T2", 0, 0, "T3", f1(a, 1, 2));
    console.log(`second equation => `, 0.25, 0, "T1", 0, "T4", f1(a, 2, 2));
    console.log(`third equation => `, 0.25, "T4", 0, "T1", 0, f1(a, 1, 1));
    console.log(`fourth equation => `, 0.25, 0, "T3", "T2", 0, f1(a, 2, 1));
    let answers = [
        ["1/4", "T2", 0, 0, "T3", f1(a, 1, 2)],
        ["1/4", 0, "T1", 0, "T4", f1(a, 2, 2)],
        ["1/4", "T4", 0, "T1", 0, f1(a, 1, 1)],
        ["1/4", 0, "T3", "T2", 0, f1(a, 2, 1)],
    ];
    console.log(answers);
    let inp_array = [];
    let sp_array = [];
    let inp;
    let sp;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            inp = document.getElementById(`eq${i + 1}${j + 1}-inp`);
            sp = document.getElementById(`eq${i + 1}${j + 1}-val-sp`);
            if (answers[i][j] != inp.value) {
                alert(`input value number ${j + 1} for equation ${i + 1} is incorrect, calculate again.`);
                return;
            }
            inp_array.push(document.getElementById(`eq${i + 1}${j + 1}-inp`));
            sp_array.push(document.getElementById(`eq${i + 1}${j + 1}-val-sp`));
        }
    }
    console.log(inp_array);
    console.log(sp_array);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 6; j++) {
            inp_array[i * 6 + j].remove();
            sp_array[i * 6 + j].innerText = `${answers[i][j]}`;
        }
    }
    btn.remove();
    calculate_t_value();
    let div = (document.getElementById('t-value-div'));
    div.style.display = 'block';
}
function calculate_t_value() {
    for (let i = 0; i <= 100; i++) {
        t1 = 0.25 * (t2 + 0 + 0 + t3 - f1(a, 1, 2));
        t2 = 0.25 * (0 + t1 + 0 + t4 - f1(a, 2, 2));
        t3 = 0.25 * (t4 + 0 + t1 + 0 - f1(a, 1, 1));
        t4 = 0.25 * (0 + t3 + t2 + 0 - f1(a, 2, 1));
    }
    console.log(t1);
    console.log(t2);
    console.log(t3);
    console.log(t4);
}
function verify_t_vals() {
    let btn = document.getElementById('temp-btn-equation2');
    console.log(`t1, t2, t3, t4 => `, t1, t2, t3, t4);
    let inp1 = document.getElementById('a21-inp');
    let sp1 = document.getElementById('a21-val-sp');
    let inp2 = document.getElementById('a22-inp');
    let sp2 = document.getElementById('a22-val-sp');
    let inp3 = document.getElementById('a23-inp');
    let sp3 = document.getElementById('a23-val-sp');
    let inp4 = document.getElementById('a24-inp');
    let sp4 = document.getElementById('a24-val-sp');
    if (!verify_values(parseFloat(inp1.value), t1)) {
        alert('T1 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), t2)) {
        alert('T2 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), t3)) {
        alert('T3 value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), t4)) {
        alert('T4 value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${t1.toFixed(2)}`;
    inp2.remove();
    sp2.innerText = `${t2.toFixed(2)}`;
    inp3.remove();
    sp3.innerText = `${t3.toFixed(2)}`;
    inp4.remove();
    sp4.innerText = `${t4.toFixed(2)}`;
    alert('Experiment Completed !!');
}
activity1();
//# sourceMappingURL=activity1.js.map