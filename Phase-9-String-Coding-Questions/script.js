//Reverse a string
/*function reverse(str){
    let reversed=""

    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i]
    }
    return reversed
}
console.log(reverse("Hello"))*/

//palindrome
/*function palindrome(str){
    let left=0
    let right=str.length-1

    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left++
        right--
        return true
    }
}
console.log(palindrome("hello"));*/

//count vowels

/*function vowel(str){
    let vowles="aeiou"
    let count=0
    for(let ch of str.toLowerCase()){
        if(vowles.includes(ch)){
            count++
        }
        
    }
    return count
}
console.log(vowel("hello"));*/

//count words
/*function words(str){
    if(str.trim()===""){
        return 0
    }
    return str.trim().split(/\s+/).length
}
console.log(words("I love js and django"))*/

//Remove Duplicate characters
/*function removeDuplicate(str){
    let unique=""
    for(let ch of str){
        if(!unique.includes(ch)){
            unique+=ch
        }
    }
    return unique
}
console.log(removeDuplicate("Helloo"));*/

//capitalize first letter of every word
/*function capitalize(str){
    return str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
}
console.log(capitalize("i love js"));*/

//longest word
function longest(str){
    return str.split(" ").reduce((longest,current)=>current.length>longest.length?current:longest)
}
console.log(longest("i love javascript"));



