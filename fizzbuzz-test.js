// fizzbuzz function with argument 'angka' which is integer
const fizzbuzz = (angka) => {

    // use for-loop
    for (let i = 1; i <= angka; i++) {

        // check if the number is devisible by 5 and 3
        if(i % 5 == 0 && i % 3 == 0){
            console.log('FizzBuzz');

        // check if the number is devisible by 3
        } else if(i % 3 == 0){
            console.log('Fizz');

        // check if the number is devisible by 3
        } else if(i % 5 == 0){
            console.log('Buzz');

        // default if none of the options above is executed
        } else {
            console.log(i);
        }
    }
}

// execute the program by inserting integer that referred by 'angka'
fizzbuzz(100);