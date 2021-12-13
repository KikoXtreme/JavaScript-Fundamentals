// function cutAndReverse(string) {
//     let index = string.length / 2;

//     let first = string.substring(0, index);
//     let second = string.substring(index);

//     let firstResult = '';
//     let secondResult = '';

//     for (let i = first.length - 1; i >= 0; i--) {
//         firstResult += first[i];
//     }

//     for (let i = second.length - 1; i >= 0; i--) {
//         secondResult += second[i];
//     }

//     console.log(firstResult);
//     console.log(secondResult);
// }

function cutAndReverse(string) {
    let index = string.length / 2;

    let first = string
        .substring(0, index)
        .split('')
        .reverse()
        .join('');
    let second = string
        .substring(index)
        .split('')
        .reverse()
        .join('');

    console.log(first);
    console.log(second);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');