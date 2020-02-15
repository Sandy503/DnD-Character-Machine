console.log("connected");

function getCharacters() {
  const charBlock = $('.char-block');
  $.get("/api/characters", function(data) {

    let newChar = `<div class="row">
    <h2>${data[0].name}</h2>
    </div>  
    <div class="row">
    <p class="">${data[0].race}</p> ${data[0].class}</p> <p>${data[0].Alignment}</p>
    </div>
    <p class="ab-score">STR: ${data[0].STRENGTH}</p>
    <p class="ab-score">DEX: ${data[0].DEXTERITY}</p>
    <p class="ab-score">CON: ${data[0].CONSTITUTION}</p>
    <p class="ab-score">INT: ${data[0].INTELLIGENCE}</p>
    <p class="ab-score">WIS: ${data[0].WISDOM}</p>
    <p class="ab-score">CHA: ${data[0].CHARISMA}</p>`;
    charBlock.append(newChar);
    console.log(newChar);
    console.log(data);

    document.body.innerHTML = newChar;
  })
}
getCharacters();


const allCharacters = `
<ul class="character">
  ${cha.map(dog => `<li>${dog.name} is ${dog.age * 7}</li>`)}
</ul>
`;
