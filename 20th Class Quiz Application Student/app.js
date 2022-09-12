function checkv() {
    var score = 0;
    var rightanswer_1 = document.getElementById('q1-a4')
    if (rightanswer_1.checked == true) {
        score = score + 10
        alert('Q1. Correct')
    } else {
        alert('Q1. Incorrect')
    }

    var rightanswer_2 = document.getElementById('q2-a3')
    if (rightanswer_2.checked == true) {
        score = score + 10
        alert('Q2. Correct')
    } else {
        alert('Q2. Incorrect')
    }
    var rightanswer_3 = document.getElementById('q3-a2')
    if (rightanswer_3.checked == true) {
        score = score + 10
        alert('Q3. Correct')
    } else {
        alert('Q3. Incorrect')
    }
    alert('Your Score is ' + score +'/30')
}




// Part2

// var questionsArray = [
//     {
//         question: 'Full Form of RAM is?',
//         answer: 'random access memory',
//         option: [
//             'random access memory',
//             'random actual memory',
//             'right access memory',
//             'none of the above',
//         ]
//     },
//     {
//         question: 'Full Form of CPU is?',
//         answer: 'central processing unit',
//         option: [
//             'central program unit',
//             'central processing unit',
//             'control panel unit',
//             'none of the above',
//         ]
//     },
//     {
//         question: 'Full Form of E-MAIL is?',
//         answer: 'electronic mail',
//         option: [
//             'electric mail',
//             'easy mail',
//             'electronic mail',
//             'none of the above',
//         ]
//     },
//     {
//         question:'Full Form of LCD is?',
//         answer:'liquaid crystal display',
//         option 
//     }
// ]














