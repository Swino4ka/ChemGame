const materials = { 
    "Алоксадон": { "Криоксадон": 0.25, "Алое": 0.5, "Сигинат": 0.5 },
    "Амбузол": { "Диловен": 0.25, "Аммиак": 0.25, "Кровь Зомби": 0.5 },
    "Амбузол Плюс": { "Амбузол": 0.5, "Омнизин": 0.5 },
    "Аммиак": { "Водород": 0.75, "Азот": 0.25 },
    "Аритразин": { "Хироналин": 0.5, "Водород": 0.5 },
    "Ацетон": { "Масло": 0.5, "Сварочное Топливо": 0.5, "Кислород": 0.5 },
    "Бензол": { "Водород": 1, "Углерод": 1 },
    "Бикаридин": { "Инапровалин": 0.5, "Углерод": 0.5 },
    "Бритвиум": { "Лацеринол": 1, "Бикаридин": 1 },
    "Бруизин": { "Бикаридин": 0.5, "Литий": 0.45, "Сахар": 0.5 },
    "Галоперидол": { "Алюминий": 0.2, "Хлор": 0.2, "Фтор": 0.2, "Сварочное топливо": 0.2, "Йодид Калия": 0.2 },
    "Гидроксид": { "Кислород": 0.5, "Водород": 0.5 },
    "Гидроксид Натрия": { "Гидроксид": 0.5, "Натрий": 0.5 },
    "Дезоксиэфедрин": { "Эфедрин": 0.25, "Углерод": 0.25, "Йод": 0.25, "Фосфор": 0.25 },
    "Дексалин": { "Кислород": 0.66667, "Плазма": 0.33333 },
    "Дексалин Плюс": { "Дексалин": 0.33333, "Углерод": 0.33333, "Железо": 0.33333 },
    "Дермалин": { "Келотан": 0.33333, "Кислород": 0.33333, "Фосфор": 0.33333 },
    "Диловен": { "Кремний": 0.33333, "Азот": 0.33333, "Калий": 0.33333 },
    "Дифенгидрамин": { "Диэтиламин": 0.33333, "Масло": 0.33333, "Соль": 0.33333, "Углерод": 0.33333, "Этанол": 0.33333 },
    "Дифенилметиламин": { "Этилоксиэфедрин": 0.33333, "Карбонат Натрия": 0.33333, "Кофе": 0.33333 },
    "Диэтиламин": { "Аммиак": 0.5, "Этанол": 0.5 },
    "Доксарубиксадон": { "Криоксадон": 0.5, "Нестабильный Мутаген": 0.5 },
    "Импедрезен": { "Ртуть": 1, "Кислород": 1, "Вода": 1 },
    "Инапровалин": { "Кислород": 0.33333, "Углерод": 0.33333, "Сахар": 0.33333 },
    "Инсузин": { "Лепоразин": 0.33333, "Келотан": 0.33333, "Кремний": 0.33333 },
    "Ипекак": { "Калий": 0.5, "Азот": 0.5, "Аммиак": 0.5 },
    "Карбонат Натрия": { "Аммиак": 0.25, "Соль": 0.25, "Углерод": 0.25, "Кислород": 0.25 },
    "Келотан": { "Кремний": 0.5, "Углерод": 0.5 },
    "Когнизин": { "КарпоТоксин": 1, "Сидерлак": 1, "Ацетон": 1 },
    "Космические Наркотики": { "Ртуть": 0.33333, "Сахар": 0.33333, "Литий": 0.33333 },
    "Криоксадон": { "Дексалин": 0.33333, "Вода": 0.33333, "Кислород": 0.33333 },
    "Криптобиолин": { "Калий": 0.33333, "Кислород": 0.33333, "Сахар": 0.33333 },
    "Лацеринол": { "Бикаридин": 0.5, "Бензол": 0.5 },
    "Лексорин": { "Токсин Хартбрейкер": 0.5, "Плазма": 0.5, "Вестин": 0.5 },
    "Лепозин": { "Соль": 0.33333, "Этанол": 0.33333, "Радиум": 0.33333 },
    "Лепоразин": { "Медь": 0.5, "Ферсилит": 0.5, "Плазма": 0.5 },
    "Липолицид": { "Эфедрин": 0.33333, "Диэтиламин": 0.33333, "Ртуть": 0.33333 },
    "Маннитол": { "Водород": 0.33333, "Вода": 0.33333, "Сахар": 0.33333 },
    "Некросол": { "Кровь": 1.5, "Омнизин": 0.5, "Криоксадон": 1 },
    "Нестабильный Мутаген": { "Радий": 0.33333, "Фосфор": 0.33333, "Хлор": 0.33333 },
    "Масло": { "Сварочное Топливо": 0.33333, "Водород": 0.33333, "Углерод": 0.33333 },
    "Ноктюрин": { "Импедрезен": 2, "Вестин": 1 },
    "Норэпинефриновая Кислота": { "Уран": 0.5, "Эпинефрин": 0.5 },
    "Окулин": { "Соль": 0.25, "Кровь": 0.25, "Гидроксид": 0.5 },
    "Оппорозидон": { "Когнизин": 0.33333, "Плазма": 0.66667, "Доксарубиксадон": 0.33333 },
    "Пакс": { "Токсин Майндбрейкер": 0.33333, "Синаптизин": 0.33333, "Вода": 0.33333 },
    "Пенообразователь": { "Литий": 0.5, "Водород": 0.5 },
    "Пиразин": { "Лепоразин": 0.33333, "Дермалин": 0.33333, "Углерод": 0.33333 },
    "Пунктураз": { "Бикаридин": 0.5, "Гидроксид": 0.5 },
    "Псикодин": { "Маннитол": 0.5, "Импедрезен": 0.25, "Вода": 0.5 },
    "Поликарбонат Натрия": { "Кислород": 0.5, "Натрий": 0.25, "Азот": 0.25 },
    "Политриниковая Кислота": { "Серная Кислота": 0.33333, "Плазма": 0.33333, "Калий": 0.33333 },
    "Серная Кислота": { "Водород": 0.33333, "Сера": 0.33333, "Кислород": 0.66667 },
    "Сидерлак": { "Алое": 0.5, "Стеллибинин": 0.5 },
    "Сигинат": { "Карбонат Натрия": 0.25, "Гидроксид Натрия": 0.25, "Келотан": 0.25, "Вода": 0.25, "Сахар": 0.25 },
    "Синаптизин": { "Литий": 0.33333, "Сахар": 0.33333, "Вода": 0.33333 },
    "Силицид железа": { "Железо": 0.5, "Кремний": 0.5 },
    "Физраствор": { "Вода": 0.8, "Соль": 0.2 },
    "Счастье": { "Смех": 0.5, "Эпинефрин": 0.25, "Этанол": 0.25, "Плазма": 1.25 },
    "Стимуляторы": { "Эфедрин": 0.5, "Вестин": 0.5, "Кислород": 1 },
    "Тазинид": { "Ликоксид": 1, "Вестин": 1 },
    "Термит": { "Железо": 0.33333, "Алюминий": 0.33333, "Кислород": 0.33333 },
    "Токсин Немоты": { "Уран": 0.5, "Вестин": 1, "Космический Клей": 1 },
    "Токсин Майндбрейкер": { "Кремний": 0.33333, "Водород": 0.33333, "Диловен": 0.33333 },
    "Токсин Хартбрейкер": { "Дексалин Плюс": 0.5, "Токсин Майндбрейкер": 0.5 },
    "Транексамовая Кислота": { "Инапровалин": 0.33333, "Серная Кислота": 0.33333, "Сахар": 0.33333 },
    "Трикордразин": { "Инапровалин": 0.5, "Диловен": 0.5 },
    "Уголь": { "Углерод": 1, "Зола": 1 },
    "Ультраваскулярин": { "Гистамин": 1, "Плазма": 0.5 },
    "Фенол": { "Гидроксид": 0.5, "Бензол": 0.5 },
    "Фторосерная Кислота": { "Фтор": 0.25, "Водород": 0.25, "Калий": 0.25, "Серная Кислота": 0.25 },
    "Фторсурфактант": { "Углерод": 0.4, "Фтор": 0.4, "Серная Кислота": 0.2 },
    "Хлоральгидрат": { "Хлор": 3, "Этанол": 1, "Вода": 1 },
    "Эпинефрин": { "Фенол": 0.25, "Ацетон": 0.25, "Хлор": 0.25, "Гидроксид": 0.25 },
    "Этилоксиэфедрин": { "Дезоксиэфедрин": 0.5, "Стеллибин": 0.5 },
    "Эфедрин": { "Масло": 0.25, "Водород": 0.25, "Сахар": 0.25, "Диэтиламин": 0.25 }
 };

const currentMixtureElem = document.getElementById('currentMixture');
const targetMaterialElem = document.getElementById('targetMaterial');
const buttonsContainer = document.getElementById('baseMaterialsButtons');
const sandboxCheckbox = document.getElementById('sandboxMode');

let targetMaterialName;
let currentMixture = {};

function chooseTargetMaterial() {
  if (sandboxCheckbox.checked) {
    targetMaterialElem.textContent = "🧪 Песочница";
    return;
  }
  const complexMaterials = Object.keys(materials);
  targetMaterialName = complexMaterials[Math.floor(Math.random() * complexMaterials.length)];
  targetMaterialElem.textContent = targetMaterialName;
}

function getBaseReagents(materialName, amount = 1, total = {}) {
  if (!materials[materialName]) {
    total[materialName] = (total[materialName] || 0) + amount;
    return total;
  }
  const comp = materials[materialName];
  for (let reagent in comp) {
    getBaseReagents(reagent, comp[reagent] * amount, total);
  }
  return total;
}

function possibleReagents(materialName, set = new Set()) {
  if (!materials[materialName]) {
    set.add(materialName);
    return set;
  }
  Object.keys(materials[materialName]).forEach(reagent => {
    possibleReagents(reagent, set);
  });
  return set;
}

function updateMixtureDisplay() {
    currentMixtureElem.innerHTML = '';
    for (let reagent in currentMixture) {
      if (currentMixture[reagent] < 0.001) continue;
      const li = document.createElement('li');
      li.textContent = `${reagent}: ${currentMixture[reagent].toFixed(2)} u`;
      currentMixtureElem.appendChild(li);
    }
  }
  
function tryCraft(materialName) {
  const requiredBases = getBaseReagents(materialName);
  return Object.entries(requiredBases).every(([reagent, qty]) => currentMixture[reagent] >= qty);
}

function checkReactions() {
  let reactionOccurred = false;

  for (let material in materials) {
    const recipe = materials[material];
    const canCraft = Object.keys(recipe).every(reagent => currentMixture[reagent] >= recipeUnitToInteger(recipe[reagent]));

    if (canCraft) {
      Object.keys(materials[material]).forEach(reagent => {
        currentMixture[reagent] -= materials[material][reagent];
        if (currentMixture[reagent] <= 0) delete currentMixture[reagent];
      });

      currentMixture[material] = (currentMixture[material] || 0) + 1;
      // reactionNotification(material);
      return true;
    }
  }
  return false;
}

function checkMixture() {
  if (sandboxCheckbox.checked) return;

  if (currentMixture[targetMaterialName] && currentMixture[targetMaterialName] >= 1) {
    showModal(true);
  } else {
    const allowedReagents = possibleReagents(targetMaterialName);
    const invalid = Object.keys(currentMixture).some(reagent => !allowedReagents.has(reagent) && reagent !== targetMaterialName);

    if (invalid) {
      showModal(false);
    }
  }
}


function addMaterial(material) {
  currentMixture[material] = (currentMixture[material] || 0) + 1;
  checkReactions();
  updateMixtureDisplay();
  checkMixture();
}

/*
function reactionNotification(product) {
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>✨ Произошла реакция: ${product}</h2>
      <button id="continueBtn">Продолжить</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('continueBtn').onclick = () => {
    modal.remove();
  };
}
  */

function showModal(win) {
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>${win ? "🎉 Вы создали препарат!" : "❌ Неправильный препарат!"}</h2>
      <button id="continueBtn">Продолжить</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('continueBtn').onclick = () => {
    modal.remove();
    resetGame();
  };
}

function resetGame() {
  currentMixture = {};
  updateMixtureDisplay();
  chooseTargetMaterial();
}

function populateBaseButtons() {
  const baseMaterials = Object.keys(materials).reduce((bases, mat) => {
    Object.keys(materials[mat]).forEach(reagent => {
      if (!materials[reagent]) bases.add(reagent);
    });
    return bases;
  }, new Set());

  buttonsContainer.innerHTML = '';

  baseMaterials.forEach(material => {
    const btn = document.createElement('button');
    btn.classList.add('base-btn');
    btn.textContent = material;
    btn.onclick = () => {
      currentMixture[material] = (currentMixture[material] || 0) + 1;
      checkAllReactions();  // новая функция
      updateMixtureDisplay();
      checkMixture();
    };
    buttonsContainer.appendChild(btn);
  });
}

function showReactionModal(materialName) {
  const modal = document.createElement('div');
  modal.className = 'modal active';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>✨ Вы получили ${materialName}!</h2>
      <button id="continueBtn">Продолжить</button>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('continueBtn').onclick = () => modal.remove();
}

document.addEventListener('DOMContentLoaded', () => {
  populateBaseButtons();
  chooseTargetMaterial();
});

sandboxCheckbox.addEventListener('change', () => {
  resetGame();
  if (sandboxCheckbox.checked) {
    targetMaterialElem.textContent = "🧪 Песочница";
  }
});

function checkAllReactions() {
  let reactionOccurred;
  do {
    reactionOccurred = false;
    for (let material in materials) {
      const requiredReagents = materials[material];
      const canCraft = Object.entries(requiredReagents).every(
        ([reagent, qty]) => currentMixture[reagent] >= qty
      );

      if (canCraft) {
        // Убираем реагенты
        Object.keys(requiredReagents).forEach(reagent => {
          currentMixture[reagent] -= requiredReagents[reagent];
          if (currentMixture[reagent] <= 0) delete currentMixture[reagent];
        });

        currentMixture[material] = (currentMixture[material] || 0) + 1;
        // reactionNotification(material);
        reactionOccurred = true;
        break;
      }
    }
  }
    while (reactionOccurred);
}


document.addEventListener('DOMContentLoaded', () => {
  chooseTargetMaterial();
  populateBaseButtons();
  updateMixtureDisplay();
});
