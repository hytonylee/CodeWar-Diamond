function diamond(n) {
    let diam;

    if (n <= 0 || n % 2 === 0) {
        return null;
    } else {
        // -2 after each line.
        let asteriskAmount = n;

        // +1 after each line.
        let spaces = 0;

        let diamArr = [];

        while (asteriskAmount >= 1) {
            if (asteriskAmount === n) {
                let initialString = "";

                for (i = 0; i < asteriskAmount; i++) {
                    initialString += "*";
                }
                initialString += "\n";

                diamArr.push(initialString);

                asteriskAmount -= 2;
                spaces += 1;
            } else {
                let stringTemp = "";

                for (j = 0; j < spaces; j++) {
                    stringTemp += " ";
                }
                for (l = 0; l < asteriskAmount; l++) {
                    stringTemp += "*";
                }
                stringTemp += "\n";

                diamArr.unshift(stringTemp);
                diamArr.push(stringTemp);

                asteriskAmount -= 2;
                spaces += 1;
            }
        }

        diam = diamArr.join('');
    }

    return diam;
}

diamond(1);
diamond(5);
diamond(0);
diamond(4);
diamond(9);