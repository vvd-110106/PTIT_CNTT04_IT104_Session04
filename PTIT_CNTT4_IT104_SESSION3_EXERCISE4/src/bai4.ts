function unionType (input: string | number) {
    if (typeof input === "string") {
        console.log(input.length)
    } else if (typeof input === "number") {
        if (input %2 == 0) {
            console.log("Đây là số chẵn.");
        } else {
            console.log ("Đây là số lẻ.")
        }
    }
}

unionType("demo123");
unionType(10);
