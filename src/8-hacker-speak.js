// Solution1 using object.entries and map
// export const hackerSpeak = (words) => {
//   const replacements =  {'a':4,'e':3,'i':1,'o':0,'s':5,'A':4,'E':3,'I':1,'O':0,'S':5}
//   const newArr=words.split('')
//   for (const [key, value] of Object.entries(replacements)) {
//     const regex = new RegExp(key, 'gi');
//   newArr.forEach((letter, index)=>{
//    if(regex.test(letter)){
//    newArr.splice(index, 1, value)
//   }
//  })
//  }
//  console.log(newArr.join(''))
//  return newArr.join('')
// }

//Solution2 using map and .toLowerCase
export const hackerSpeak = (words) => {
  const replacements = {'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5'};

  const newArr = words.split('').map((letter) => {
    const replacement = replacements[letter.toLowerCase()];
    return replacement !== undefined ? replacement : letter;
  });

  console.log(newArr.join(''));
  return newArr.join('');
};
