function isCheckStringNumber(str:string): boolean {
    if (str.length ===0) {
        return false;
    }
    for (let i =0; i< str.length; i++) {
        let check = str[i];
        if(check < '0' || check > '9') {
            return false;
        }
    }
    return true;
}

function isPrime (n:number):boolean {
    if (n<= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i ===0) {
            return false;
        }
    }
    return true;
}

function countABC (str: string): number {
    let count = 0;
    for (let i =0; i< str.length; i++) {
        let c = str[i];
        if ((c >= 'a' && c <='z') || (c >='A' && c <='Z')) {
            count ++;
        }
    }
    return count;
}

function processInput(input: string | number | boolean): void {
    if (typeof input === "string") {
        if(isCheckStringNumber(input)) {
            let num = parseInt(input);
            console.log (num *num);
        } else {
            let count = countABC(input);
            console.log(`${count} ký tự chữ cái`)
        }
    }

    if (typeof input === "number") {
        if (isPrime(input)) {
            console.log ("Là số nguyên tố");
        } else {
            console.log("Không là số nguyên tố.");   
        }
    }

    if (typeof input === "boolean") {
        if (input == true) {
            console.log("Giá trị là true - tiến hành xử lý");
        } else {
            console.log("Giá trị là false - dùng xử lý.");
            
        }
    }
}

processInput("123");
processInput("abc123");
processInput(2);
processInput(true);
processInput("abc123");