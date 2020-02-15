$(document).ready(function() {
const charForm = $("#charForm");
const newName = $("#dungeoneer-name");
const newCharClass = $("#classSelect");
const newRace = $("#raceSelect");
const newAlignment = $("#alignment");
const newstr = $("#str");
const newDex = $("#dex");
const newCon = $("#con");
const newInt = $("#int");
const newWis = $("#wis");
const newCha = $("#char");



$(charForm).on("submit", event => {
    event.preventDefault();
    let invalid= 0;
    $('.form-group').each(() => {
        if ($(this).val() == '') {
            invalid++;
        }
    });
   if(invalid>0){
    alert("Make sure all Fields are filled before submitting")
    return; 
   }
    var newChar = {
        name: newName.val().trim(),
        class: newCharClass.val().trim(),
        race: newRace.val().trim(),
        STRENGTH: newstr.val().trim(),
        DEXTERITY: newDex.val().trim(),
        CONSTITUTION: newCon.val().trim(),
        INTELLIGENCE: newInt.val().trim(),
        WISDOM: newWis.val().trim(),
        CHARISMA: newCha.val().trim(),
        alignment:newAlignment.val().trim()
    };
    console.log(newChar);
    submitChar(newChar);
});

function submitChar(Char) {
 $.post("/api/characters/", Char, () => {
     window.location.href = "/characters"
 });
}

});