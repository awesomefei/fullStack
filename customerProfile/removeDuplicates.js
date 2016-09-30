function removieDuplicates(var input){
    input.sort();
    int count = 0;
    for (var i = 0; i < array.length; i++) {
        if(input[count] != input[i]){
            input[++count] = input[i];
        }
    }

}
