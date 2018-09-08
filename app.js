let friends = ["John", "Matt", "Jacob", "Madison", "Autumn"];
let count = 0;

for (i = 0; i < friends.length; i++) {
    console.log(friends[i] + ":");

    count = 99;

    while (count > 0) {
        if (count == 1) {
            console.log(count + " line of code in the file, " + count + " line of code; ");
        } else if (count > 1) {
            console.log(count + " lines of code in the file, " + count + " lines of code; ");
        }

        console.log(friends[i] + " strikes one out, clears it all out, ");

        if (count == 2) {
            console.log(count-1 + " line of code in the file");
        } else if (count == 1) {
            count = 0;
            console.log("no more lines of code in the file");
        } else {
            console.log(count-1 + " lines of code in the file");
        }

        count--;
    }
}