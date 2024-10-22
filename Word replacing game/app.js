var user_text=prompt("Enter Your Text!");
document.write(user_text);

var user_input=prompt("You want to Find or Replace");
if(user_input=="find"){
    var find_word=prompt("Enter The word you want to find")
var wordindex=user_text.indexOf(find_word);
var extract_word=user_text.slice(wordindex,find_word.length);
document.write(`
    The Word you want to find is ${extract_word} at index no ${wordindex}
     `)
}
else if (user_input=="replace"){
    var replace_word=prompt("Enter The word you want to Replace");
    var replace_with =prompt("Enter The word you want to replace with ")
    var updated_text=user_text.replaceAll(replace_word,replace_with)
    document.write(updated_text);
}