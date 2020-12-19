class BasicPlatform{

    constructor(ctx,x,y,width,height){
        this.ctx=ctx
        //Platform position 
        this.x= x
        this.y= y

        //Canvas dimensions
        this.width= width
        this.height=height

        //Platform movement speed
        this.vx= -SPEED
        
        //Platform image
        this.img = new Image()
        this.img.src = './assets/img/Platformer/Ground_02.png'
        this.ready=false;
        this.img.onload = () => {
            this.img.ready = true
        }

        //Platform movement controls
        this.movements = {
            right: false,
            left:false
        }

    }

    isReady(){
        return this.img.ready
    }

    draw(){
        if(this.isReady()){
        
            this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height) 
             
        }
    }

    move(){
 
        if(this.x + this.width<=0){
            this.x=this.x
        }
       //Moving based on keypress
        if(this.movements.right){
            this.x +=this.vx
            ;
        }

        if(this.movements.left){
            this.x -=SPEED
            ;
        }


        

    }

    onKeyEvent(event){
        const status = event.type === 'keydown'

        if(event.keyCode===KEY_RIGHT){
            this.movements.right = status  
        }
    }
    
}