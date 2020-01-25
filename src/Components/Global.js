let picked = [];


class Global{

add(obj){

    picked.push(obj)
    

}
extract(){

    return(picked)

}

}





const Globalinst = new Global()



export default Globalinst;