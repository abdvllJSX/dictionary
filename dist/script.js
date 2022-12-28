const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.getElementById('search-btn');
const word = document.querySelector(".word h3")
const pos = document.querySelector(".details p:first-child")
const transcribe = document.querySelector(".details p:last-child")
const wordMeaning = document.querySelector('.word-meaning')
const wordExample = document.querySelector('.word-example')
const result = document.querySelector('.result')



async function getWord() {
    let inpWord = document.getElementById("inp-word").value;
    const responce = await fetch(url + inpWord)
    const data = await responce.json()
    word.innerHTML = data[0].word
    pos.innerHTML = data[0].meanings[0].partOfSpeech
    transcribe.innerHTML = data[0].phonetics[1].text
    wordMeaning.innerHTML = data[0].meanings[0].definitions[0].definition
    wordExample.innerHTML = data[0].meanings[0].definitions[0].example || "";
    
    console.log(data)
};



btn.addEventListener("click", () =>{
    getWord
    getWord().catch(()=>{
        result.innerHTML = "<h3>could not find word</h3>"
    })
    getWord
})


