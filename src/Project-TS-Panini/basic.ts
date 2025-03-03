// 定义收藏卡片的类型
type CollectibleCard = {
  name: string;
  age: number;
  imageUrl: string;
  profession: string;
  albumsSold: number;
  nationality: string;
  debutYear: number;
};

// 初始示例数据
let collectibleCards: CollectibleCard[] = [
  {
    name: "Kendrick Lamar",
    age: 37,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kendrick_Lamar_2018.jpg",
    profession: "Rapper",
    albumsSold: 10000000,
    nationality: "USA",
    debutYear: 2011,
  },
  {
    name: "Drake",
    age: 38,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Drake_in_2016.jpg",
    profession: "Rapper",
    albumsSold: 17000000,
    nationality: "Canada",
    debutYear: 2009,
  },
];

// 渲染卡片
function renderCards(cards: CollectibleCard[]) {
  const cardContainer = document.querySelector(".cards-container");
  if (cardContainer) {
    cardContainer.innerHTML = ""; // 清空容器

    cards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("collectible-card");

      const nameElement = document.createElement("h2");
      nameElement.textContent = card.name;

      const ageElement = document.createElement("p");
      ageElement.textContent = `年龄: ${card.age}`;

      const professionElement = document.createElement("p");
      professionElement.textContent = `职业: ${card.profession}`;

      const albumsSoldElement = document.createElement("p");
      albumsSoldElement.textContent = `已售专辑: ${card.albumsSold}`;

      const nationalityElement = document.createElement("p");
      nationalityElement.textContent = `国籍: ${card.nationality}`;

      const debutYearElement = document.createElement("p");
      debutYearElement.textContent = `出道年份: ${card.debutYear}`;

      const imageElement = document.createElement("img");
      imageElement.src = card.imageUrl;
      imageElement.alt = card.name;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "删除";
      deleteButton.addEventListener("click", () => deleteCard(index));

      const editButton = document.createElement("button");
      editButton.textContent = "编辑";
      editButton.addEventListener("click", () => editCard(index));

      cardElement.append(imageElement, nameElement, ageElement, professionElement, albumsSoldElement, nationalityElement, debutYearElement, deleteButton, editButton);

      cardContainer.appendChild(cardElement);
    });
  }
}

// 删除卡片
function deleteCard(index: number) {
  collectibleCards.splice(index, 1);
  renderCards(collectibleCards);
}

// 编辑卡片
function editCard(index: number) {
  const card = collectibleCards[index];

  // 填充表单数据
  (document.querySelector("#name") as HTMLInputElement).value = card.name;
  (document.querySelector("#age") as HTMLInputElement).value = card.age.toString();
  (document.querySelector("#imageUrl") as HTMLInputElement).value = card.imageUrl;
  (document.querySelector("#profession") as HTMLInputElement).value = card.profession;
  (document.querySelector("#albumsSold") as HTMLInputElement).value = card.albumsSold.toString();
  (document.querySelector("#nationality") as HTMLInputElement).value = card.nationality;
  (document.querySelector("#debutYear") as HTMLInputElement).value = card.debutYear.toString();

  // 更改按钮为保存
  const submitButton = document.querySelector("#submit") as HTMLButtonElement;
  submitButton.textContent = "保存";
  
  // 保存编辑后的卡片
  submitButton.removeEventListener("click", addCard);
  submitButton.addEventListener("click", () => saveCard(index));
}

// 保存修改后的卡片
function saveCard(index: number) {
  const updatedCard: CollectibleCard = {
    name: (document.querySelector("#name") as HTMLInputElement).value,
    age: parseInt((document.querySelector("#age") as HTMLInputElement).value),
    imageUrl: (document.querySelector("#imageUrl") as HTMLInputElement).value,
    profession: (document.querySelector("#profession") as HTMLInputElement).value,
    albumsSold: parseInt((document.querySelector("#albumsSold") as HTMLInputElement).value),
    nationality: (document.querySelector("#nationality") as HTMLInputElement).value,
    debutYear: parseInt((document.querySelector("#debutYear") as HTMLInputElement).value),
  };

  collectibleCards[index] = updatedCard;
  renderCards(collectibleCards);

  // 清空表单并更改按钮回添加
  const form = document.querySelector(".card-form") as HTMLFormElement;
  form.reset();
  const submitButton = document.querySelector("#submit") as HTMLButtonElement;
  submitButton.textContent = "添加";
  submitButton.removeEventListener("click", () => saveCard(index));
  submitButton.addEventListener("click", addCard);
}

// 添加新卡片
function addCard(e: Event) {
  e.preventDefault();

  const newCard: CollectibleCard = {
    name: (document.querySelector("#name") as HTMLInputElement).value,
    age: parseInt((document.querySelector("#age") as HTMLInputElement).value),
    imageUrl: (document.querySelector("#imageUrl") as HTMLInputElement).value,
    profession: (document.querySelector("#profession") as HTMLInputElement).value,
    albumsSold: parseInt((document.querySelector("#albumsSold") as HTMLInputElement).value),
    nationality: (document.querySelector("#nationality") as HTMLInputElement).value,
    debutYear: parseInt((document.querySelector("#debutYear") as HTMLInputElement).value),
  };

  collectibleCards.push(newCard);
  renderCards(collectibleCards);

  // 清空表单
  const form = document.querySelector(".card-form") as HTMLFormElement;
  form.reset();
}

// 保存所有卡片到 LocalStorage
function saveAllCards() {
  localStorage.setItem("collectibleCards", JSON.stringify(collectibleCards));
}

// 从 LocalStorage 加载所有卡片
function loadCards() {
  const savedCards = localStorage.getItem("collectibleCards");
  if (savedCards) {
    collectibleCards = JSON.parse(savedCards);
    renderCards(collectibleCards);
  }
}

// 页面加载时渲染卡片
renderCards(collectibleCards);

// 按钮事件监听器
document.querySelector("#submit")?.addEventListener("click", addCard);
document.querySelector("#saveAll")?.addEventListener("click", saveAllCards);
document.querySelector("#loadCards")?.addEventListener("click", loadCards);
