function TransitionBottom(parent,slide1,slide2,time){
    Transition.call(this,parent,slide1,slide2,time);
    this.element= document.createElement('div');
    this.glass1= document.createElement('div');
    this.glass2= document.createElement('div');
    this.before = function(){
        this.element= document.createElement('div');
        this.glass1.classList.add('glass');
        this.glass2.classList.add('glass');

        this.element.setAttribute("id","transition-bottom");
        this.element.classList.add("transitionBottom-element");
        this.element.style.backgroundImage = "linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5))," + this.slider2.style.backgroundImage;
        this.parent.appendChild(this.element);

        this.slider2.classList.add('transitionBottom-slider2-pre')
        this.slider2.appendChild(this.glass2);

        this.slider1.classList.add('transitionBottom-slider1-pre');
        this.slider1.classList.add('transitionBottom-element');
        this.slider1.appendChild(this.glass1);

        var time1=this.calculateTime(0.5);
        this.element.style.transition = 'height '+time1+'s ease-in,background-position '+  this.time +'s ease';
        this.slider1.style.transitionDuration = time1+'s';
        this.glass1.style.transition = 'all '+time1+'s ease-in';



        // this.composantNoSelected.style.transitionDelay= '0.1s';

        // this.composantSelected.style.transitionDuration = this.calculateTime(0.5);

    }

    this.addStep( function(ss){

        ss.element.classList.add("transitionBottom-element-etape1");
        ss.slider1.classList.add("transitionBottom-slider1-etape1");

        ss.glass1.style.backgroundColor = 'rgba(255,255,255,0.5)';


        let time2 = ss.calculateTime(0.5);

        ss.slider2.classList.add("transitionBottom-slider2-etape1");
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

        ss. slider2.classList.add('transitionBottom-slider2-etape2');
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
TransitionBottom.prototype = Object.create(Transition.prototype);
TransitionBottom.prototype.constructor = TransitionBottom;