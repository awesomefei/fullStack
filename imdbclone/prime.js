function primeCount(input){
    var arr = [];
    var count = 0;
    for(var i = 2; i *i < input; i++){
        if(arr[i] != undifined){
            for(var j = i; i * j < input; j++){
                arr[j*i] = true;
            }
        }
    }
    for(var i = 2; i < input; i++){
        if(arr[i] == undifined){
            count++;
        }
    }
    return count;
}
