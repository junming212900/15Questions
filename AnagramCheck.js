function areAnagrams(str1, str2) {
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
  
    // Remove all non-alphanumeric characters and convert to lowercase
    str1 = str1.replace(/\W/g, '').toLowerCase();
    str2 = str2.replace(/\W/g, '').toLowerCase();
  
    // Return false if length mismatch
    if (str1.length !== str2.length) {
      return false;
    }

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];

        if (frequencyCounter1.hasOwnProperty(char)) {
            frequencyCounter1[char] += 1;
        } else {
            frequencyCounter1[char] = 1;
        }
    }

    for (let j = 0; j < str2.length; j++) {
        let char = str2[j];

        if (frequencyCounter2.hasOwnProperty(char)) {
            frequencyCounter2[char] += 1;
        } else {
            frequencyCounter2[char] = 1;
        }
    }
  
    for (let key in frequencyCounter1) {
      if (frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(areAnagrams('listen', 'silent'));  // Output: true
  console.log(areAnagrams('triangle', 'integral'));  // Output: true
  console.log(areAnagrams('hello', 'world'));  // Output: false
  