main(85)
main(44)
main(98)

function main(grade) {
    if (grade < 60) {
        console.log('F');
    } else {
        if (grade < 70) {
            console.log('D');
        } else {
            if (grade < 80) {
                console.log('C');
            } else {
                if (grade < 90) {
                    console.log('B');
                } else {
                    console.log('A');
                }
            }
        }
    }
}
