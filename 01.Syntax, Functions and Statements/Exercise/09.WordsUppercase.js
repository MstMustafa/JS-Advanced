function wordsUppercase(input) {
  
    const words = input.match(/\b\w+\b/g);
    
    const upperCaseWords = words.map(word => word.toUpperCase());

    console.log(upperCaseWords.join(', '));
}
