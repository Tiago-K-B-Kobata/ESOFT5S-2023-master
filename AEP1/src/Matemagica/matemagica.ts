import { ErrorMessages } from "./errorMessage.enum"

class matemagica {
    x:number
    y:number

    private sum() {
        return this.x + this.y
    }

    private subXY(){
        return this.x - this.y
    }

    private subYX(){
        return this.y - this.x
    }

    private divXY(){
        return this.x / this.y
    }

    private divYX(){
        return this.y / this.x
    }

    private mult(){
        return this.x * this.y
    }

    public setX(x) {
        if(typeof x !== 'number'){
            return ErrorMessages.INVALID_TYPE
        }
        this.x = x
    }

    public setY(y){
        if(typeof y !== 'number'){
            return ErrorMessages.INVALID_TYPE
        }
        this.y = y
    }

    public getX(){
        return this.x
    }

    public getY(){
        return this.y
    }

    public getSum(){
        return this.sum()
    }

    public getSubXY(){
        return this.subXY()
    }
    
    public getSubYX(){
        return this.subYX()
    }

    public getDivXY(){
        return this.divXY()
    }
    
    public getDivYX(){
        return this.divYX()
    }

    public getMult(){
        return this.mult()
    }

}

export default new matemagica