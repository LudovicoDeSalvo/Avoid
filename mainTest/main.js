class parentTest {
    constructor (a,b,c){
        this.a = a
        this.b = b
        this.c = c 
    }

    print(){
        console.log("A:",this.a,"B:",this.b,"C:",this.c)
    }
}

class childTest extends parentTest{
    constructor(d,e){
        super(d,e)
    }
}

var p = new parentTest("parent 1","parent 2","parent 3")
var c = new childTest("child 1", "child 2")

p.print()
c.print()





