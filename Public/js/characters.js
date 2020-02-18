console.log("connected");

function getCharacters() {
  $.get("/api/characters", function(data) {
    const charBlock = $('#charContainer');

    for(var i =0; i< data.length; i++){
    let newChar=`<div class="row">
    <h2>${data[i].name}</h2></div><div class="row">
    <p class="">${data[i].race}</p>
    <p>${data[i].class}  </p> 
    <p>${data[i].Alignment}</p></div>
    <p class="ab-score">STR: ${data[i].STRENGTH}</p>
    <p class="ab-score">DEX: ${data[i].DEXTERITY}</p>
    <p class="ab-score">CON: ${data[i].CONSTITUTION}</p>
    <p class="ab-score">INT: ${data[i].INTELLIGENCE}</p>
    <p class="ab-score">WIS: ${data[i].WISDOM}</p>
    <p class="ab-score">CHA: ${data[i].CHARISMA}</p>`;

    charBlock.append(newChar);
    }
  });
}
getCharacters();

