function findOdd(A) {
    for(i = 0; i < A.length; ++i) {
        var count = 0;
        for(j = 0; j < A.length; ++j){
            if(A[j] == A[i])
                count++;
        }
        if (count%2 == 1) {
            return A[i];
        }
    }
}
