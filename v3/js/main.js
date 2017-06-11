function el(id){
    return document.getElementById(id);
}

///////////////////////////////////////////////
//// Loading all the sounds in the buttons ////
///////////////////////////////////////////////

var kickbox     = [];                                               //so sound can be played multiple times
var snarebox    = [];
var hihatbox    = [];
var clapbox     = [];
var hitombox    = [];
var lowtombox   = [];

var path = ["sound0", "sound1", "sound2"];                          //different packs
var samplepack = 0;                                                 //What sounds am I using?

init();

function init() {

    for (var i = 0; i < 16; i++) {                                  //so sound can be played multiple times

        var kick    = new Audio();
        var snare   = new Audio();
        var hihat   = new Audio();
        var clap    = new Audio();
        var hitom   = new Audio();
        var lowtom  = new Audio();

        kick.src    = path[samplepack] + "/kick.wav";
        snare.src   = path[samplepack] + "/snare.wav";
        hihat.src   = path[samplepack] + "/hihat.wav";
        clap.src    = path[samplepack] + "/clap.wav";
        hitom.src   = path[samplepack] + "/hitom.wav";
        lowtom.src  = path[samplepack] + "/lowtom.wav";

        kickbox.push(kick);
        snarebox.push(snare);
        hihatbox.push(hihat);
        clapbox.push(clap);
        hitombox.push(hitom);
        lowtombox.push(lowtom);

        kick.load();
        snare.load();
        hihat.load();
        clap.load();
        hitom.load();
        lowtom.load();

        var src1 = document.createElement("source");               //so sounds can be played at the same time
        var src2 = document.createElement("source");
        var src3 = document.createElement("source");
        var src4 = document.createElement("source");
        var src5 = document.createElement("source");
        var src6 = document.createElement("source");

        src1.type = "audio/mpeg";
        src2.type = "audio/mpeg";
        src3.type = "audio/mpeg";
        src4.type = "audio/mpeg";
        src5.type = "audio/mpeg";
        src6.type = "audio/mpeg";

        src1.src = "sound/kick.wav";
        kick.appendChild(src1);

        src2.src = "sound/snare.wav";
        snare.appendChild(src2);

        src3.src = "sound/hihat.wav";
        hihat.appendChild(src3);

        src4.src = "sound/clap.wav";
        clap.appendChild(src4);

        src5.src = "sound/hitom.wav";
        hitom.appendChild(src5);

        src6.src = "sound/lowtom.wav";
        lowtom.appendChild(src6);
    }
}
var activeinstrument = 0;

/*
var active = {

    'kick':false,
    'snare':false,
    'hihat':false,
    'clap':false,
    'tom1':false,
    'tom2':false

};
*/

var index = 0;

el("kick").addEventListener("click",kickplay);
el("snare").addEventListener("click",snareplay);
el("hihat").addEventListener("click",hihatplay);
el("clap").addEventListener("click",clapplay);
el("hitom").addEventListener("click",tom1play);
el("lowtom").addEventListener("click",tom2play);

/*

el("kick").addEventListener("click",active_passive);
el("snare").addEventListener("click",active_passive);
el("hihat").addEventListener("click",active_passive);
el("clap").addEventListener("click",active_passive);
el("hitom").addEventListener("click",active_passive);
el("lowtom").addEventListener("click",active_passive);


function active_passive(){
    var id = this.id;
    active[id] = !active[id];
    console.log(active)

}

var allbuttons = document.getElementsByTagName('button');
for (var i = 0; i < allbuttons.length; i++){

    allbuttons[i].addEventListener('click',check_color);

}
function check_color(){
    var colors = ['red','yellow','lightblue','green','purple','brown'];

    var divs = this.getElementsByTagName('div');
    var index = 0;
    for (var ii in active){


        for (var i = 0; i < divs.length; i++){

            if(active[ii]){
                divs[index].style.background = colors[index];
                break;
            }

        }
        index ++;
    }
}

*/

function kickplay(){
    kickbox[index].play();                              //play sound from box
    index++;                                            //higher box index
    if(index === kickbox.length){                       //if box reaches end, start again
        index = 0;
    }
    activeinstrument = 1;                               //make variable for correct instrument

    el("kick").className        = "kickactive";         //buttons correct
    el("snare").className       = "buttonsnare";
    el("hihat").className       = "buttonhihat";
    el("clap").className        = "buttonclap";
    el("hitom").className       = "buttonhitom";
    el("lowtom").className      = "buttonlowtom";

}

function snareplay(){
    snarebox[index].play();
    index++;
    if(index === snarebox.length){
        index = 0;
    }
    activeinstrument = 2;

    el("kick").className        = "buttonkick";
    el("snare").className       = "snareactive";
    el("hihat").className       = "buttonhihat";
    el("clap").className        = "buttonclap";
    el("hitom").className       = "buttonhitom";
    el("lowtom").className      = "buttonlowtom";

}

function hihatplay(){
    hihatbox[index].play();
    index++;
    if(index === hihatbox.length){
        index = 0;
    }
    activeinstrument = 3;

    el("kick").className        = "buttonkick";
    el("snare").className       = "buttonsnare";
    el("hihat").className       = "hihatactive";
    el("clap").className        = "buttonclap";
    el("hitom").className       = "buttonhitom";
    el("lowtom").className      = "buttonlowtom";

}

function clapplay(){
    clapbox[index].play();
    index++;
    if(index === clapbox.length){
        index = 0;
    }
    activeinstrument = 4;

    el("kick").className        = "buttonkick";
    el("snare").className       = "buttonsnare";
    el("hihat").className       = "buttonhihat";
    el("clap").className        = "clapactive";
    el("hitom").className       = "buttonhitom";
    el("lowtom").className      = "buttonlowtom";

}

function tom1play(){
    hitombox[index].play();
    index++;
    if(index === hitombox.length){
        index = 0;
    }
    activeinstrument = 5;

    el("kick").className        = "buttonkick";
    el("snare").className       = "buttonsnare";
    el("hihat").className       = "buttonhihat";
    el("clap").className        = "buttonclap";
    el("hitom").className       = "hitomactive";
    el("lowtom").className      = "buttonlowtom";

}

function tom2play(){
    lowtombox[index].play();
    index++;
    if(index === lowtombox.length){
        index = 0;
    }
    activeinstrument = 6;

    el("kick").className        = "buttonkick";
    el("snare").className       = "buttonsnare";
    el("hihat").className       = "buttonhihat";
    el("clap").className        = "buttonclap";
    el("hitom").className       = "buttonhitom";
    el("lowtom").className      = "lowtomactive";

}



///////////////////////////////////////////////
////   Volume sliders of different sounds  ////
///////////////////////////////////////////////

var kickVolumeSlider = document.querySelector("#kickvolume");
kickVolumeSlider.addEventListener("change", changeVolumeKick);                  //Whenever slider is changed

function changeVolumeKick(){

    for (var i = 0; i < 16; i++) {
        var volumeKick = document.querySelector("#kickvolume").value;           //read value slider
        kickbox[i].volume = (volumeKick / 10);                                  //change volume (has to be between 0 and 1)
    }
}                                                                               //copy, paste for all sliders

var snareVolumeSlider = document.querySelector("#snarevolume");
snareVolumeSlider.addEventListener("change", changeVolumeSnare);

function changeVolumeSnare(){

    for (var i = 0; i < 16; i++) {
        var volumeSnare = document.querySelector("#snarevolume").value;
        snarebox[i].volume = (volumeSnare / 10);
    }
}

var hihatVolumeSlider = document.querySelector("#hihatvolume");
hihatVolumeSlider.addEventListener("change", changeVolumeHihat);

function changeVolumeHihat(){

    for (var i = 0; i < 16; i++) {
        var volumeHihat = document.querySelector("#hihatvolume").value;
        hihatbox[i].volume = (volumeHihat / 10);
    }
}

var clapVolumeSlider = document.querySelector("#clapvolume");
clapVolumeSlider.addEventListener("change", changeVolumeClap);

function changeVolumeClap(){

    for (var i = 0; i < 16; i++) {
        var volumeClap = document.querySelector("#clapvolume").value;
        clapbox[i].volume = (volumeClap / 10);
    }
}

var tom1VolumeSlider = document.querySelector("#tom1volume");
tom1VolumeSlider.addEventListener("change", changeVolumeTom1);

function changeVolumeTom1(){

    for (var i = 0; i < 16; i++) {
        var volumeTom1 = document.querySelector("#tom1volume").value;
        hitombox[i].volume = (volumeTom1 / 10);
    }
}

var tom2VolumeSlider = document.querySelector("#tom2volume");
tom2VolumeSlider.addEventListener("change", changeVolumeTom2);

function changeVolumeTom2(){

    for (var i = 0; i < 16; i++) {
        var volumeTom2 = document.querySelector("#tom2volume").value;
        lowtombox[i].volume = (volumeTom2 / 10);
    }
}



///////////////////////////////////////////////
////        Sequencer walking dot          ////
///////////////////////////////////////////////

var position = -8;                                                      //90   Startposition seen from left
var myInterval;                                                         //interval
var switcher = false;                                                   //Start/Stop button
var msread = 1000;                                                      //startvalue of speed in ms
var step = 0;

function movement(){

    position +=95;                                                      //increase position

    step += 1;

    document.querySelector("#sequence").style.left = position + "px";   //move position px

    if(position >= 1500){                                               //if at end > move to start

        position = -8;

    }
    if (step === 17){                                                   //amount of steps possible

        step = 1;

    }

    console.log("step: " + step);                                       //where is sequence

    ///////////////////////////////////////////////
    ////    Play sounds if loaded under slot   ////
    ///////////////////////////////////////////////

    for (var k = 0; k < 16; k++) {

            //console.log(this);

            if (step === (k+1) && alltimes[k].haskick === true) {       //step correct (timing) && haskick true

                kickbox[index].play();                                  //play sound from box
                index++;                                                //make box progress
                if(index === kickbox.length){
                    index = 0;
                }
                flicker("kick");                                        //flicker the button so you can see its being used
            }

    }

    for (var k = 0; k < 16; k++) {

        //console.log(this);

        if (step === (k+1) && alltimes[k].hassnare === true) {       //step correct && haskick true=

            snarebox[index].play();

            index++;
            if(index === snarebox.length){

                index = 0;

            }
            flicker("snare");
        }
    }

    for (var k = 0; k < 16; k++) {

        //console.log(this);

        if (step === (k+1) && alltimes[k].hashihat === true) {       //step correct && haskick true=

            hihatbox[index].play();
            index++;
            if(index === hihatbox.length){
                index = 0;
            }
            flicker("hihat");
        }
    }

    for (var k = 0; k < 16; k++) {

        //console.log(this);

        if (step === (k+1) && alltimes[k].hasclap === true) {       //step correct && haskick true=

            clapbox[index].play();
            index++;
            if(index === clapbox.length){
                index = 0;
            }
            flicker("clap");
        }
    }

    for (var k = 0; k < 16; k++) {

        //console.log(this);

        if (step === (k+1) && alltimes[k].hashitom === true) {       //step correct && haskick true=

            hitombox[index].play();
            index++;
            if(index === hitombox.length){
                index = 0;
            }
            flicker("hitom");
        }
    }

    for (var k = 0; k < 16; k++) {

        //console.log(this);

        if (step === (k+1) && alltimes[k].haslowtom === true) {       //step correct && haslowtom true=

            lowtombox[index].play();
            index++;
            if(index === lowtombox.length){
                index = 0;
            }
            flicker("lowtom");
        }
    }



} /////////////////////////////////// END movement() ////////////////////////////////

var buttonStart = document.querySelector("#start");                         //button to start drummer

buttonStart.addEventListener("click",function(){                            //click on start

    if (switcher === false) {                                               //start sequence

        clearInterval(myInterval);                                          //Current interval stoppen

        myInterval = setInterval(movement, msread);                         //Interval starten
        this.innerHTML = "Stop!";                                           //change button to stop
        this.className = "buttonstop";                                      //change layout button

        switcher = true;                                                    //possible to turn sequence off

    } else {

        clearInterval(myInterval);
        this.innerHTML = "Start!";
        this.className = "buttonstart";
        switcher = false;

    }

});


///////////////////////////////////////////////
////    BPM slider & Speed sequencer       ////
///////////////////////////////////////////////

var bpm;

window.addEventListener("load", function(){
    bpmstart();                                         //Read BPM slider for start value

});

function bpmread(){
    bpmstart();                                         //check current value and put it in DIV
    if (switcher === true) {                            //is sequencer already active?
        clearInterval(myInterval);
        myInterval = setInterval(movement, msread);
    } else {                                            //if not
        clearInterval(myInterval);
    }

}

function bpmstart(){
    msread = document.querySelector("#tempo").value;    //check BPM slider value for MS
    //console.log(msread);
    bpm = 60000 / msread;                               //calculate BPM from MS
    //console.log(Math.round(bpm));
    document.getElementById("bpmdisplay").innerHTML = "BPM: " + Math.round(bpm);
}

var bpmButtonSlider = document.querySelector("#tempo");
bpmButtonSlider.addEventListener("change", bpmread);     //whenever value changes


///////////////////////////////////////////////
////     Assigning sounds to slots         ////
///////////////////////////////////////////////

var alltimes = document.querySelectorAll("#time1, #time2, #time3, #time4, #time5, #time6, #time7, #time8, #time9, #time10, #time11, #time12, #time13, #time14, #time15, #time16");

var soundarray = ["url('img/red.png')", "url('img/yellow.png')", "url('img/blue.png')", "url('img/brown.png')", "url('img/green.png')", "url('img/purple.png')"];


for (var j = 0; j < 16; j++) {                                              //to go past all timebuttons

    //console.log(alltimes[j]);

        (alltimes[j]).addEventListener("click", function () {               //add function to each of timeslots

            //console.log(this);

            if (activeinstrument === 1 && this.haskick === true) {

                this.haskick = false;                                       //remove kick from slot
                console.log(this.haskick);

            } else if (activeinstrument === 1) {                            //if kick is "active"

                this.haskick = true;                                        //save kick to slot
                console.log(this.haskick);

            }

    });
}

for (var j = 0; j < 16; j++) {                                              //to go past all timebuttons

    //console.log(alltimes[j]);

    (alltimes[j]).addEventListener("click", function () {                   //add function to each of timeslots

        //console.log(this);

        if (activeinstrument === 2 && this.hassnare === true) {

            this.hassnare = false;                                          //remove kick from slot
            console.log(this.hassnare);


        } else if (activeinstrument === 2) {                                //if kick is "active"

            this.hassnare = true;                                           //save kick to slot
            console.log(this.hassnare);

        }

    });
}

for (var j = 0; j < 16; j++) {                                              //to go past all timebuttons

    //console.log(alltimes[j]);

    (alltimes[j]).addEventListener("click", function () {               //add function to each of timeslots

        //console.log(this);

        if (activeinstrument === 3 && this.hashihat === true) {

            this.hashihat = false;                                       //remove kick from slot
            console.log(this.hashihat);

        } else if (activeinstrument === 3) {                            //if kick is "active"

            this.hashihat = true;                                        //save kick to slot
            console.log(this.hashihat);


        }

    });
}

for (var j = 0; j < 16; j++) {                                              //to go past all timebuttons

    //console.log(alltimes[j]);

    (alltimes[j]).addEventListener("click", function () {               //add function to each of timeslots

        //console.log(this);

        if (activeinstrument === 4 && this.hasclap === true) {

            this.hasclap = false;                                       //remove kick from slot
            console.log(this.hasclap);

        } else if (activeinstrument === 4) {                            //if kick is "active"

            this.hasclap = true;                                        //save kick to slot
            console.log(this.hasclap);

        }

    });
}

for (var j = 0; j < 16; j++) {                                              //to go past all timebuttons

    //console.log(alltimes[j]);

    (alltimes[j]).addEventListener("click", function () {               //add function to each of timeslots

        //console.log(this);

        if (activeinstrument === 5 && this.hashitom === true) {

            this.hashitom = false;                                       //remove kick from slot
            console.log(this.hashitom);

        } else if (activeinstrument === 5) {                            //if kick is "active"

            this.hashitom = true;                                        //save kick to slot
            console.log(this.hashitom);

        }

    });
}

for (var j = 0; j < 16; j++) {                                              //to go past all timebuttons

    //console.log(alltimes[j]);

    (alltimes[j]).addEventListener("click", function () {               //add function to each of timeslots

        //console.log(this);

        if (activeinstrument === 6 && this.haslowtom === true) {

            this.haslowtom = false;                                       //remove kick from slot
            console.log(this.haslowtom);


        } else if (activeinstrument === 6) {                            //if kick is "active"

            this.haslowtom = true;                                        //save kick to slot
            console.log(this.haslowtom);

        }

    });
}

/*
for (var j = 0; j < 16; j++) {                                      //to go past all timebuttons

    (alltimes[j]).addEventListener("click", function () {           //add function to each of timeslots

        if (activeinstrument === 6) {                               //if kick is "active"

            this.haslowtom = true;                                  //save kick to slot

            this.addEventListener("click", function () {            //click on same button

                console.log(this.haslowtom);

                console.log(this);

                if (this.haslowtom === false) {

                    this.haslowtom = true;

                } else if (this.haslowtom === true) {               //if there is already a kick

                    this.haslowtom = false;                         //remove kick from slot

                }
            });

        }
    });
}
*/


///////////////////////////////////////////////
////              Clearbutton              ////
///////////////////////////////////////////////

var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){

    for (var j = 0; j < 16; j++) {                                  //go through all time buttons

        alltimes[j].haskick     = false;                            //set instrument on false
        alltimes[j].hassnare    = false;
        alltimes[j].hashihat    = false;
        alltimes[j].hasclap     = false;
        alltimes[j].haslowtom   = false;
        alltimes[j].hashitom    = false;

        alltimes[j].className   = "buttontime";                     //go to startclass

        console.log(alltimes[j]);

    }
});

///////////////////////////////////////////////
////            Change samplepack          ////
///////////////////////////////////////////////

var nextsample = document.getElementById("next");                   //+ button

nextsample.addEventListener("click", function(){

    samplepack++;                                                   //Next pack

    if (samplepack >= path.length){                                 //if no next go to start
        samplepack = 0;

    }
    document.getElementById("sample").innerHTML = "Samplepack: " + samplepack;

    kickbox     = [];                                   //clear arrays
    snarebox    = [];
    hihatbox    = [];
    clapbox     = [];
    hitombox    = [];
    lowtombox   = [];

    init();                                             //reload soundboxes with new samples

    console.log("Next soundpack")

});

var previoussample = document.getElementById("previous");

previoussample.addEventListener("click", function(){

    samplepack--;

    if (samplepack < 0){
        samplepack = (path.length-1);
    }
    document.getElementById("sample").innerHTML = "Samplepack: " + samplepack;

    kickbox     = [];                                   //clear arrays
    snarebox    = [];
    hihatbox    = [];
    clapbox     = [];
    hitombox    = [];
    lowtombox   = [];

    init()                                              //reload soundboxes with new samples

    console.log("Previous soundpack")

});

//////////////////////////////////////////////////
////  Button lights up when sample is played  ////
//////////////////////////////////////////////////

function flicker(a){
    el(a).className    = a + "active";              //change class to activebutton
    setTimeout(function(){                          //small timeout so you can see the light burning
        el(a).className    = "button" + a;
        }, 200);                                    //timeout in ms
}
