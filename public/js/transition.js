function Transition(parent,slider1,slider2,time){
    this.parent = parent;
    this.slider1=slider1;
    this.slider2=slider2;

    this.composantSelected= document.querySelector('.composant-selected');
    this.composantNoSelected= document.querySelector('.composant-no-selected');


    this.oldClassList={
        parent : parent.className,
        slider1 : slider1.className,
        slider2 : slider2.className,
    };
    this.time = time;
    this.steps=[];
    this.times=[];
    this.calculateTime = function (rapport){
        return this.time  * rapport;
    }
    this.addStep=function(step,time){
        this.steps.push(step);
        this.times.push(time);
        return this;
    }
    this.before = function(){

    }

    this.after=function(){
        return this;
    }
    this.start = async function() {
        this.beforeComposant();
        this.before();
        for (let i = 0; i < this.steps.length; i++) {
            console.log(i);
            this.exe(this.steps[i],this.calculateTime(this.times[i])*1000);
        }
         this.exe(this.after,(this.time * 1000)+2000);
    }
    this.k=0;
    this.exe = function(callback,time){
        setTimeout(function (parent,slider1,slider2) {
            callback(parent,slider1,slider2);
        },time,this);
    }
    this.after = function (ss){

    }

    this.beforeComposant= function () {
        var slider_item_content = this.slider2.querySelector('.slider-item-content');
        this.composantNoSelected.className= slider_item_content.className;
        this.composantNoSelected.classList.add("transitionTop-composant");
        this.composantNoSelected.style.zIndex='0';
        this.composantNoSelected.innerHTML = slider_item_content.innerHTML;
    }

    this.afterComposant = function(){
        this.composantSelected.style.zIndex='0';
        this.reverseComposant(this.composantSelected,'rxrx');
        this.reverseComposant(this.composantSelected,'sxsx');

        this.composantNoSelected.classList.add('composant-selected');
        this.composantNoSelected.classList.remove('composant-no-selected');

        this.composantSelected.classList.remove('composant-selected');
        this.composantSelected.classList.add('composant-no-selected');
    }

    this.normalComposant=function(composant,trans){
        var c= composant.querySelectorAll('*');
        for(const item in c){
            if(c[item].style){
                var classes = c[item].classList;
                for (let i=0;i<classes.length;i++){
                    cc=classes[i]+'';
                    if(cc.indexOf('txtx')>=0){
                        c[item].classList.add(cc.replace("txtx",trans));
                    }
                }
            }

        }
    }
    this.reverseComposant=function(composant,trans){
        var c= composant.querySelectorAll('*');
        for(const item in c){
            if(c[item].style){
                let classes = c[item].classList;
                for (let i=0;i<classes.length;i++){
                    cc=classes[i]+'';
                    if(cc.indexOf(trans)>=0){
                        c[item].classList.remove(cc);
                    }
                }
            }

        }
    }


}





//----------------------------------------------------------------------------------------------------------------------
//                                  TRANSITION TOP
//----------------------------------------------------------------------------------------------------------------------

function TransitionTop(parent, slide1, slide2, time){
    Transition.call(this,parent,slide1,slide2,time);
    this.element= document.createElement('div');
    this.glass1= document.createElement('div');
    this.glass2= document.createElement('div');
    this.before = function(){
        this.element= document.createElement('div');
        this.glass1.classList.add('glass');
        this.glass2.classList.add('glass');

        this.element.classList.add("transitionTop-element");
        this.element.style.backgroundImage = "linear-gradient(to top,rgba(0,0,0,0.5),rgba(0,0,0,0.5))," + this.slider2.style.backgroundImage;
        this.parent.appendChild(this.element);

        this.slider2.classList.add('transitionTop-slider2-pre')
        this.slider2.appendChild(this.glass2);

        this.slider1.classList.add('transitionTop-slider1-pre');
        this.slider1.appendChild(this.glass1);

        var time1=this.calculateTime(0.5);
        this.element.style.transition = 'height '+time1+'s ease-in,background-position '+  (this.time) +'s ease';
        this.slider1.style.transitionDuration = time1+'s';
        this.glass1.style.transition = 'all '+time1+'s ease-in';



        // this.composantNoSelected.style.transitionDelay= '0.1s';

        // this.composantSelected.style.transitionDuration = this.calculateTime(0.5);

    }

    this.addStep( function(ss){

        ss.element.classList.add("transitionTop-element-etape1");
        ss.slider1.classList.add("transitionTop-slider1-etape1");

        ss.glass1.style.backgroundColor = 'rgba(255,255,255,0.5)';


        let time2 = ss.calculateTime(0.5);

        ss.slider2.classList.add("transitionTop-slider2-etape1");
        ss.slider2.style.transitionDuration = time2+'s';
        ss.glass2.style.transition = 'all '+time2+'s ease-in-out';
        ss.glass2.style.backgroundColor = 'rgba(255,255,255,0.5)';

        ss.composantNoSelected.style.zIndex='10';
        ss.normalComposant(ss.composantSelected,'sxsx');
        ss.normalComposant(ss.composantNoSelected,'rxrx');
        ss.slider1.addEventListener('transitionend',function(){

        })

    },0.1);
    this.addStep( function(ss){
        ss.slider2.classList.add('transitionTop-slider2-etape2');
        ss.glass2.style.backgroundColor = 'transparent';


    },0.595);
    this.after =  function(ss){

        ss.element.className='';
        ss.parent.removeChild(ss.element);

        ss.slider1.className = ss.oldClassList.slider2;
        ss.slider2.className = ss.oldClassList.slider1;


        ss.slider1.removeChild(ss.glass1);
        ss.slider2.removeChild(ss.glass2);

        ss.afterComposant();



    };

}
TransitionTop.prototype = Object.create(Transition.prototype);
TransitionTop.prototype.constructor = TransitionTop;



//----------------------------------------------------------------------------------------------------------------------
//                                  TRANSITION BOTTOM
//----------------------------------------------------------------------------------------------------------------------

function TransitionBottom(parent, slide1, slide2, time){
    Transition.call(this,parent,slide1,slide2,time);
    this.element= document.createElement('div');
    this.glass1= document.createElement('div');
    this.glass2= document.createElement('div');
    this.before = function(){
        this.element= document.createElement('div');
        this.glass1.classList.add('glass');
        this.glass2.classList.add('glass');

        this.element.classList.add("transitionBottom-element");
        this.element.style.backgroundImage = "linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3))," + this.slider2.style.backgroundImage;
        this.parent.appendChild(this.element);

        this.slider2.classList.add('transitionBottom-slider2-pre')
        this.slider2.appendChild(this.glass2);

        this.slider1.classList.add('transitionBottom-slider1-pre');
        this.slider1.appendChild(this.glass1);

        var time1=this.calculateTime(0.5);
        this.element.style.transition = 'height '+time1+'s ease-in,background-position '+ this.calculateTime(1.0)+'s ease-in';
        this.slider1.style.transitionDuration = time1+'s';
        this.glass1.style.transition = 'all '+time1+'s ease-in';



        // this.composantNoSelected.style.transitionDelay= '0.1s';

        // this.composantSelected.style.transitionDuration = this.calculateTime(0.5);

    }

    this.addStep( function(ss){

        ss.element.classList.add("transitionBottom-element-etape1");
        ss.slider1.classList.add("transitionBottom-slider1-etape1");

        ss.glass1.style.backgroundColor = 'rgba(255,255,255,0.3)';


        let time2 = ss.calculateTime(0.5);

        ss.slider2.classList.add("transitionBottom-slider2-etape1");
        ss.slider2.style.transitionDuration = time2+'s';
        ss.glass2.style.transition = 'all '+time2+'s ease-in-out';
        ss.glass2.style.backgroundColor = 'rgba(255,255,255,0.3)';

        ss.composantNoSelected.style.zIndex='10';
        ss.normalComposant(ss.composantSelected,'sxsx');
        ss.normalComposant(ss.composantNoSelected,'rxrx');
        ss.slider1.addEventListener('transitionend',function(){

        })

    },0.1);
    this.addStep( function(ss){
        ss.slider2.classList.add('transitionBottom-slider2-etape2');
        ss.element.classList.add('transitionBottom-element-etape2');
        ss.slider1.classList.add('transitionBottom-slider1-etape2');
        ss.glass2.style.backgroundColor = 'transparent';


    },0.52);
    this.after =  function(ss){

        ss.element.className='';
        ss.parent.removeChild(ss.element);

        ss.slider2.className = ss.oldClassList.slider1;
        ss.slider1.className = ss.oldClassList.slider2;



        ss.slider1.removeChild(ss.glass1);
        ss.slider2.removeChild(ss.glass2);

        ss.afterComposant();



    };

}
TransitionBottom.prototype = Object.create(Transition.prototype);
TransitionBottom.prototype.constructor = TransitionBottom;



function TransitionFactory(){
    var tab= [];
    tab['transitionTop'] = function(parent,slider1,slider2,time){return new TransitionTop(parent,slider1,slider2,time)};
    tab['transitionBottom'] = function(parent,slider1,slider2,time){return new TransitionBottom(parent,slider1,slider2,time)};

    return tab;
}