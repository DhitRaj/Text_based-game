const storyText = document.getElementById('storyText');
const sceneImage = document.getElementById('sceneImage');

const sounds = {
  door: new Audio('assets/door.mp3'),
  ghost: new Audio('assets/ghost.mp3'),
  chest: new Audio('assets/chest.mp3')
};

function playSound(name) {
  sounds[name].currentTime = 0;
  sounds[name].play();
}

function enterLibrary() {
  playSound('door');
  sceneImage.src = 'assets/images/library.png';
  storyText.innerText = "The library is dusty and quiet. A ghost appears!";
  setTimeout(() => {
    sceneImage.src = 'assets/images/ghost.png';
    playSound('ghost');
    storyText.innerText = "BOO! The ghost scares you! Do you run or stay?";
    showButtons([
      { label: "🏃‍♂️ Run!", action: endGame },
      { label: "🧍 Stay", action: findTreasure }
    ]);
  }, 2000);
}

function enterBasement() {
  playSound('door');
  sceneImage.src = 'assets/images/basement.png';
  storyText.innerText = "You enter the cold basement. You see a chest!";
  showButtons([{ label: "💰 Open Chest", action: openChest }]);
}

function openChest() {
  playSound('chest');
  sceneImage.src = 'assets/images/treasure.png';
  storyText.innerText = "You found ancient treasure! You win!";
  showButtons([{ label: "🔁 Play Again", action: () => location.reload() }]);
}

function findTreasure() {
  sceneImage.src = 'assets/images/treasure.png';
  playSound('chest');
  storyText.innerText = "Turns out the ghost was guarding treasure! You're rich!";
  showButtons([{ label: "🔁 Play Again", action: () => location.reload() }]);
}

function endGame() {
  sceneImage.src = 'assets/images/house.png';
  storyText.innerText = "You fled the haunted house. Maybe next time!";
  showButtons([{ label: "🔁 Play Again", action: () => location.reload() }]);
}

function showButtons(options) {
  const buttonsDiv = document.getElementById('buttons');
  buttonsDiv.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt.label;
    btn.onclick = opt.action;
    buttonsDiv.appendChild(btn);
  });
}
