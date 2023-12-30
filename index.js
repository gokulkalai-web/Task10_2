const divContent = document.getElementsByClassName("Dictionary");
const divElement = document.getElementsByClassName("Dictionary-Contents");

//SearchDictionary function will fetch information about the word whatever you are given.
const searchDictionary = () => {
  console.log("working");
  const searchInput = document.getElementById("searchInput").value;
  const dictionaryContents = document.getElementById("dictionaryContents");
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`;
  console.log(searchInput);
  let Check = false;
  try {
    const getWordInfo = async () => {
      const response = await fetch(apiUrl);
      const results = await response.json();
      console.log(results);
      console.log(results[0].meanings[0].definitions[0].definition);
      const meaninglen = results[0].meanings.length;
      dictionaryContents.innerHTML = `  
            <p><strong>Name          :</strong> <i>${searchInput}</i></p>
            <p><strong>Part of Speech:</strong> <i>${results[0].meanings[0].partOfSpeech}</i></p>
            <p><strong>Description   :</strong> <i>${results[0].meanings[0].definitions[0].definition}</i></p>
            <p><strong>Wiktionary  :</strong> <a href="${results[0].sourceUrls}" target="_blank"><i>${searchInput}</i></a></p>
         `;
      Check = true;
    };
    getWordInfo();
  } catch (err) {
    console.log(err);
  }
  setTimeout(() => {
    if (!Check) {
      console.log("check failed");
      dictionaryContents.innerHTML = `<p style="color: red;">Something went wrong...</p>`;
    }
  }, 3000);
};
