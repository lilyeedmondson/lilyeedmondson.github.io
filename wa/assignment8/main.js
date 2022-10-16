

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



const storyText = "It was 94 fahrenheit inside, so :insertx: went for a run. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


const insertX = ["Kim Kardahsian","Mickey Mouse","Your Mom"];

const insertY = ["C4C","The Apple Store","Red Rocks"];

const insertZ = ["turned into a frog","ate a marshmellow","morphed into a balloon"];



randomize.addEventListener('click', result);

function result() {
    var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

    var newStory = storyText;
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);

      }


  if(document.getElementById("uk").checked) {
    const weight = Math.round('300 x 0.0714286') + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
