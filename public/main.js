const resdiv = document.querySelector(".result");
const wordele = document.querySelector(".word");
const phonetics = document.querySelector(".phonetics");
const audio = document.querySelector(".audio");
const wordMeaning = document.querySelector(".word-definition");
const synonyms = document.querySelector(".synonyms");
const wrongword = document.querySelector(".wrongword");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

// funtion to handle all the word
const handle = async (event) =>
{
    if (event.keyCode === 13)
{
        const word = event.target.value;
        //make a req to the api
        const result = await fetch (url + word);
        const data = await result.json();
        resdiv.style.display = "block";
        // audio.src = data[0].phonetics[0].audio;
        if (result.ok)
    {

        
        wordele.innerText = data[0].word;
        phonetics.innerText = data[0].phonetics[0].text;
        audio.src = data[0].phonetics[0].audio;
        wordMeaning.innerText = data[0].meanings[0].definitions[0].definition;
        const synonymsarray = data[0].meanings[0].definitions[0].synonyms;
        let synonymsdata= "";
        
            if (synonymsarray)

             {
            
                for (let i = 0; i < synonymsarray.length; i++)
                 {
                    synonymsdata += `<p class ="pills">${synonymsarray[i]}</p>`
                
                 }
                synonyms.innerHTML = synonymsdata;
                return;
            }
            else
            {
           synonyms.innerHTML = `<p class="pills">No synonyms available</p>`;
            }
    } 
    else 
    {
        audio.style.display = "none";
        document.querySelectorAll(".meaningheading")[0].style.display = "none";
        document.querySelectorAll(".meaningheading")[1].style.display = "none";
        phonetics.innerHTML = "";
        wordele.innerText = data.title ;
        wordMeaning.innerText = data.message;
        synonyms.innerHTML = `<p class="pills">No synonyms available</p>`;
    }
        
       
        
}


};
