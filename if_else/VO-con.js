let alpha = 'H';

if(alpha === 'a' || alpha === 'e' || alpha === 'i' || alpha === 'o' || alpha === 'u' || alpha === 'A' || alpha === 'E' || alpha === 'I' || alpha === 'O' || alpha === 'U'){
    console.log(`${alpha} is a vowel`);
} else if((alpha >= 'a' && alpha <= 'z') || (alpha >= 'A' && alpha <= 'Z')) {
    console.log(`${alpha} is a consonant`)
} else{
    console.log('Not a vowel nor consonant')
}