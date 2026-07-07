/* Starbucks Japan Customizer - Interactive Logic Engine */

// --- Drink Translation Dictionary ---
const DRINK_DICTIONARY = {
    "拿鐵": { ja: "カフェ ラテ", en: "Cafe Latte" },
    "拿鐵咖啡": { ja: "カフェ ラテ", en: "Cafe Latte" },
    "星巴克拿鐵": { ja: "スターバックス ラテ", en: "Starbucks Latte" },
    "焦糖拿鐵": { ja: "キャラメル ラテ", en: "Caramel Latte" },
    "香草拿鐵": { ja: "バニラ ラテ", en: "Vanilla Latte" },
    "燕麥奶拿鐵": { ja: "オーツミルク ラテ", en: "Oat Milk Latte" },
    "美式": { ja: "アメリカーノ", en: "Americano" },
    "美式咖啡": { ja: "アメリカーノ", en: "Americano" },
    "焦糖瑪奇朵": { ja: "キャラメル マキアート", en: "Caramel Macchiato" },
    "摩卡": { ja: "カフェ モカ", en: "Cafe Mocha" },
    "摩卡咖啡": { ja: "カフェ モカ", en: "Cafe Mocha" },
    "白摩卡": { ja: "ホワイト モカ", en: "White Mocha" },
    "白摩卡咖啡": { ja: "ホワイト モカ", en: "White Mocha" },
    "卡布奇諾": { ja: "カプチーノ", en: "Cappuccino" },
    "每日精選": { ja: "ドリップ コーヒー", en: "Drip Coffee" },
    "每日精選咖啡": { ja: "ドリップ コーヒー", en: "Drip Coffee" },
    "冷萃咖啡": { ja: "コールドブリュー コーヒー", en: "Cold Brew Coffee" },
    "紅茶拿鐵": { ja: "イングリッシュ ブレックファスト ティー ラテ", en: "English Breakfast Tea Latte" },
    "英式早餐茶拿鐵": { ja: "イングリッシュ ブレックファスト ティー ラテ", en: "English Breakfast Tea Latte" },
    "抹茶拿鐵": { ja: "抹茶 ティー ラテ", en: "Matcha Tea Latte" },
    "焙茶拿鐵": { ja: "ほうじ茶 ティー ラテ", en: "Hojicha Tea Latte" },
    "香料茶拿鐵": { ja: "チャイ ティー ラテ", en: "Chai Tea Latte" },
    "洋甘菊茶拿鐵": { ja: "カモミール ティー ラテ", en: "Chamomile Tea Latte" },
    "伯爵茶拿鐵": { ja: "アール グレイ ティー ラテ", en: "Earl Grey Tea Latte" },
    "抹茶星冰樂": { ja: "抹茶 クリーム フラペチーノ", en: "Matcha Cream Frappuccino" },
    "抹茶奶油星冰樂": { ja: "抹茶 クリーム フラペチーノ", en: "Matcha Cream Frappuccino" },
    "焦糖星冰樂": { ja: "キャラメル フラペチーノ", en: "Caramel Frappuccino" },
    "黑摩卡可可碎片星冰樂": { ja: "ダーク モカ チップ フラペチーノ", en: "Dark Mocha Chip Frappuccino" },
    "可可碎片星冰樂": { ja: "ダーク モカ チップ フラペチーノ", en: "Dark Mocha Chip Frappuccino" },
    "巧克力星冰樂": { ja: "ダーク モカ チップ クリーム フラペチーノ", en: "Dark Mocha Chip Cream Frappuccino" },
    "香草星冰樂": { ja: "バニラ クリーム フラペチーノ", en: "Vanilla Cream Frappuccino" },
    "阿芙佳朵星冰樂": { ja: "エスプレッソ アフォガート フラペチーノ", en: "Espresso Affogato Frappuccino" },
    "芒果百香果星冰樂": { ja: "マンゴー パッション ティー フラペチーノ", en: "Mango Passion Tea Frappuccino" },
    "巧克力熱可可": { ja: "ココア", en: "Hot Chocolate (Cocoa)" },
    "可可": { ja: "ココア", en: "Hot Chocolate (Cocoa)" },
    "焦糖奶油乳": { ja: "キャラメル クリーム", en: "Caramel Cream" }
};

// --- Cheat Sheets Database ---
const CHEAT_SHEETS = {
    milk: [
        { zh: "標準牛奶", ja: "通常ミルク", ro: "Tsūjō miruku", price: "免費", desc: "正常配方的全脂牛乳，口感平衡。" },
        { zh: "低脂乳 (低脂2%)", ja: "低脂肪タイプ", ro: "Teishibō taipu", price: "免費", desc: "普通牛奶與無脂乳各半混合，清爽順口。" },
        { zh: "無脂乳 (脫脂)", ja: "無脂肪乳", ro: "Mushibōnyū", price: "免費", desc: "零脂肪，完全沒有負擔的輕盈選擇。" },
        { zh: "豆漿 (豆奶)", ja: "豆乳に変更", ro: "Tōnyū ni henkō", price: "+55円", desc: "改用豆漿。點餐後會拿到一張綠色的豆乳專用卡片以防搞混。" },
        { zh: "杏仁奶 (杏仁核桃)", ja: "アーモンドミルクに変更", ro: "Āmondo miruku ni henkō", price: "+55円", desc: "低糖且帶有溫和的堅果烘焙香氣。" },
        { zh: "燕麥奶", ja: "オーツミルクに変更", ro: "Ōtsu miruku ni henkō", price: "+55円", desc: "穀物的微甜口感，質地溫潤滑順，非常適合搭配咖啡。" },
        { zh: "布雷貝特濃奶 (鮮奶油比例高)", ja: "ブレベミルクに変更", ro: "Burebe miruku ni henkō", price: "+55円", desc: "牛奶與重鮮奶油（Heavy Cream）以 1:1 調配，極度濃郁奢華。" }
    ],
    ice: [
        { zh: "正常冰", ja: "通常の氷", ro: "Tsūjō no kōri", price: "免費", desc: "星巴克配方的標準冰塊量。" },
        { zh: "少冰", ja: "氷少なめ", ro: "Kōri sukuname", price: "免費", desc: "減少冰塊量，通常會搭配「液體量/牛奶多一點」。" },
        { zh: "去冰", ja: "氷なし", ro: "Kōri nashi", price: "免費", desc: "不放任何冰塊，溫涼口感，建議選擇牛奶加多。" },
        { zh: "多冰 (冰塊增量)", ja: "氷多め", ro: "Kōri ōme", price: "免費", desc: "增加冰塊量，適合炎熱夏日或希望飲品維持超冰冷狀態。" },
        { zh: "加多牛奶 (去/少冰時補滿)", ja: "ミルク多め", ro: "Miruku ōme", price: "免費", desc: "冰塊量減少時，免費將牛奶或基底補滿，避免飲料變少。" },
        { zh: "熱飲溫度加高 (特熱)", ja: "エクストラホット", ro: "Ekusutora hotto", price: "免費", desc: "提高熱飲的溫度（適合外帶需要走一段路的人）。" },
        { zh: "熱飲溫度降低 (溫熱)", ja: "ライトホット", ro: "Raito hotto", price: "免費", desc: "調低熱飲的溫度，適合怕燙的貓舌頭或兒童飲用。" }
    ],
    syrup: [
        { zh: "焦糖糖漿", ja: "キャラメルシロップ", ro: "Kyarameru shiroppu", price: "+55円 (更換免費)", desc: "甜美的焦糖香氣，最經典的增風味糖漿。" },
        { zh: "香草糖漿", ja: "バニラシロップ", ro: "Banira shiroppu", price: "+55円 (更換免費)", desc: "高雅清香的香草風味，適合多種茶與咖啡。" },
        { zh: "巧克力摩卡糖漿", ja: "モカシロップ", ro: "Moka shiroppu", price: "+55円 (更換免費)", desc: "濃郁苦甜的巧克力糖漿，摩卡的主要原料。" },
        { zh: "白摩卡糖漿 (白巧克力)", ja: "ホワイトモカシロップ", ro: "Howaito moka shiroppu", price: "+55円 (更換免費)", desc: "濃郁香甜的白巧克力風味，奶香十足。" },
        { zh: "印度香料茶糖漿", ja: "チャイシロップ", ro: "Chai shiroppu", price: "+55円 (更換免費)", desc: "富含肉桂與香辛料風味的茶糖漿，帶有異國情調。" },
        { zh: "經典糖漿 (糖水)", ja: "クラシックシロップ", ro: "Kurashikku shiroppu", price: "+55円 (更換免費)", desc: "單純的甜味糖漿，不影響飲品原來的風味特徵。" },
        { zh: "糖漿增量 (雙倍糖)", ja: "シロップ多め", ro: "Shiroppu ōme", price: "免費", desc: "若原本飲品有糖漿，可免費增量一倍。" },
        { zh: "糖漿減量 (半糖)", ja: "シロップ少なめ", ro: "Shiroppu sukuname", price: "免費", desc: "將原有糖漿的用量減半，減輕甜度負擔。" },
        { zh: "無糖 (去糖漿)", ja: "シロップなし", ro: "Shiroppu nashi", price: "免費", desc: "完全不加原有的糖漿（例如點紅茶拿鐵想喝無糖時）。" }
    ],
    whip: [
        { zh: "追加鮮奶油", ja: "ホイップクリーム追加", ro: "Hoippukurīmu tsuika", price: "+55円", desc: "在原本沒有附鮮奶油的飲品（如拿鐵）上加鮮奶油。" },
        { zh: "鮮奶油增量 (兩倍)", ja: "ホイップ多め", ro: "Hoippu ōme", price: "免費", desc: "原飲品內含鮮奶油時，可免費增加一倍分量。" },
        { zh: "鮮奶油減半", ja: "ホイップ少なめ", ro: "Hoippu sukuname", price: "免費", desc: "鮮奶油減量，降低熱量。" },
        { zh: "去鮮奶油 (無奶油)", ja: "ホイップなし", ro: "Hoippu nashi", price: "免費", desc: "去除原有飲品上的鮮奶油。" },
        { zh: "追加焦糖醬 (焦糖淋醬)", ja: "キャラメルソース追加", ro: "Kyarameru sōsu tsuika", price: "免費", desc: "在奶泡或鮮奶油頂部免費淋上香濃的焦糖淋醬。" },
        { zh: "追加巧克力醬", ja: "チョコレートソース追加", ro: "Chokorēto sōsu tsuika", price: "免費", desc: "在頂部免費淋上濃郁的巧克力醬。" },
        { zh: "淋醬多一點 (增量)", ja: "ソース多め", ro: "Sōsu ōme", price: "免費", desc: "焦糖醬或巧克力醬分量免費加倍。" }
    ],
    powder: [
        { zh: "追加巧克力碎粒", ja: "チョコチップ追加", ro: "Chokochippu tsuika", price: "+55円", desc: "添加巧克力碎，增加咀嚼感與巧克力濃郁度，通常加入星冰樂。" },
        { zh: "巧克力碎加倍", ja: "チョコチップ多め", ro: "Chokochippu ōme", price: "免費", desc: "原飲品包含巧克力碎時，可免費加倍（如巧克力碎片星冰樂）。" },
        { zh: "抹茶粉多一點 (抹茶雙倍)", ja: "抹茶パウダー多め", ro: "Matcha paudā ōme", price: "免費", desc: "抹茶類飲品限定，可免費追加抹茶粉，茶味更濃郁苦甜。" },
        { zh: "追加蜂蜜", ja: "ハチミツ追加", ro: "Hachimitsu tsuika", price: "免費", desc: "可在調味吧自行添加，或請店員在製作時直接加入。" },
        { zh: "追加肉桂粉", ja: "シナモンパウダー追加", ro: "Shinamon paudā tsuika", price: "免費", desc: "為拿鐵或摩卡增添微辛香的獨特風味。" },
        { zh: "追加可可粉", ja: "ココアパウダー追加", ro: "Kokoa paudā tsuika", price: "免費", desc: "在表面灑上微苦的可可粉，增添風味層次。" },
        { zh: "追加一份濃縮咖啡", ja: "ワンショット追加", ro: "Wan shotto tsuika", price: "+55円", desc: "額外加一份 Espresso，咖啡味更香濃且苦度增加。" },
        { zh: "改用低咖啡因豆", ja: "デカフェ変更", ro: "Dikafe henkō", price: "+55円", desc: "將濃縮咖啡豆更換為去除 99% 咖啡因的低因咖啡豆。" }
    ],
    sizes: [
        { zh: "Short (小杯)", ja: "ショートサイズ", ro: "Shōto saizu", price: "240 ml", desc: "日星最小容量，部分熱飲或特調的預設尺寸。" },
        { zh: "Tall (中杯)", ja: "トールサイズ", ro: "Tōru saizu", price: "350 ml", desc: "標準中杯，等同於日星的主流大眾容量。" },
        { zh: "Grande (大杯)", ja: "グランデサイズ", ro: "Gurande saizu", price: "470 ml", desc: "大杯容量，適合需要適度補充水分與咖啡因的旅客。" },
        { zh: "Venti (特大杯)", ja: "ベンティサイズ", ro: "Benti saizu", price: "590 ml", desc: "最大容量，適合重度星巴克愛好者或長途旅行慢慢喝。" }
    ]
};

// --- App State ---
let builderState = {
    drinkName: "拿鐵",
    size: "Tall",
    temp: "Iced",
    milk: "Standard",
    ice: "Regular",
    iceMilk: "None",
    shot: "None",
    decaf: false,
    ristretto: false,
    blonde: false,
    syrupType: "None",
    syrupAction: "Change",
    syrupAmount: "Regular",
    whip: "None",
    drizzleCaramel: false,
    drizCaramelAmt: "Regular",
    drizzleChocolate: false,
    drizChocAmt: "Regular",
    honey: false,
    cinnamon: false,
    cocoa: false,
    matchaPowder: "Regular",
    chocChips: "None",
    allMilk: false,
    teaBag: false,
    noteNolid: false,
    noteSleeve: false,
    noteTogo: true
};

// --- DOM Elements ---
const drinkInput = document.getElementById("drinkInput");
const resetBuilderBtn = document.getElementById("reset-builder-btn");
const iceMilkCompensateWrapper = document.getElementById("ice-milk-compensate-wrapper");
const syrupActionSelect = document.getElementById("syrupAction");
const syrupAmountWrapper = document.getElementById("syrupAmountWrapper");
const drizCaramelAmtWrapper = document.getElementById("driz-caramel-amt-wrapper");
const drizChocolateAmtWrapper = document.getElementById("driz-chocolate-amt-wrapper");

// Sticker elements
const stickerZhName = document.getElementById("stickerZhName");
const stickerJaName = document.getElementById("stickerJaName");
const stickerCustomizationList = document.getElementById("stickerCustomizationList");
const stickerJapaneseSentence = document.getElementById("stickerJapaneseSentence");
const stickerRomajiSentence = document.getElementById("stickerRomajiSentence");
const stickerEstimatedPrice = document.getElementById("stickerEstimatedPrice");

// Action buttons
const showToBaristaBtn = document.getElementById("show-to-barista-btn");
const copyJapaneseBtn = document.getElementById("copy-japanese-btn");
const saveDrinkBtn = document.getElementById("save-drink-btn");
const favCountBadge = document.getElementById("favCount");
const favoritesGrid = document.getElementById("favoritesGrid");
const favoritesEmptyState = document.getElementById("favoritesEmptyState");

// Modal Elements
const baristaModal = document.getElementById("baristaModal");
const baristaStickerElement = document.getElementById("baristaStickerElement");
const closeBaristaModalBtn = document.getElementById("closeBaristaModalBtn");

// Mobile menu toggle
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileNavDrawer = document.querySelector(".mobile-nav-drawer");

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initSuggestions();
    initEventListeners();
    renderCheatSheets();
    renderFavorites();
    updateSticker();
});

// --- Suggestion Tags ---
function initSuggestions() {
    const tags = document.querySelectorAll(".suggestion-tag");
    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            const zhName = tag.getAttribute("data-zh");
            const jaName = tag.getAttribute("data-ja");
            drinkInput.value = zhName;
            builderState.drinkName = zhName;
            
            // Auto-detect defaults for special drinks
            const isFrappuccino = zhName.includes("星冰樂") || jaName.includes("フラペチーノ");
            if (isFrappuccino) {
                // 星冰樂必須是冰的
                builderState.temp = "Iced";
                document.getElementById("temp-iced").checked = true;
                
                // 星冰樂預設會有鮮奶油，若原本無則更換為通常量
                if (builderState.whip === "None") {
                    builderState.whip = "Extra";
                    document.getElementById("whip-extra").checked = true;
                }
            } else if (zhName.includes("咖啡") || zhName.includes("拿鐵") || zhName.includes("美式")) {
                // 常規咖啡/拿鐵預設去奶油
                if (builderState.whip === "Add" || builderState.whip === "Extra") {
                    builderState.whip = "None";
                    document.getElementById("whip-none").checked = true;
                }
            }
            
            updateSticker();
            showToast(`已選擇：${tag.textContent}`, "☕");
        });
    });

    drinkInput.addEventListener("input", (e) => {
        builderState.drinkName = e.target.value || "飲料";
        updateSticker();
    });
}

// --- Event Listeners Mapping ---
function initEventListeners() {
    // Mobile Drawer Toggle
    mobileNavToggle.addEventListener("click", () => {
        mobileNavDrawer.classList.toggle("open");
        mobileNavToggle.classList.toggle("active");
    });

    // Close mobile drawer on link click
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileNavDrawer.classList.remove("open");
            mobileNavToggle.classList.remove("active");
        });
    });

    // Reset button
    resetBuilderBtn.addEventListener("click", resetBuilder);

    // Radio inputs
    setupRadioListener("size");
    setupRadioListener("temp");
    setupRadioListener("milk");
    setupRadioListener("ice", (val) => {
        if (val === "Less" || val === "None") {
            iceMilkCompensateWrapper.style.display = "block";
        } else {
            iceMilkCompensateWrapper.style.display = "none";
            // Reset sub-option
            document.getElementById("ice-milk-no").checked = true;
            builderState.iceMilk = "None";
        }
    });
    setupRadioListener("iceMilk");
    setupRadioListener("shot");

    // Checkboxes
    setupCheckboxListener("esp-decaf", "decaf");
    setupCheckboxListener("esp-ristretto", "ristretto");
    setupCheckboxListener("esp-blonde", "blonde");
    setupCheckboxListener("note-nolid", "noteNolid");
    setupCheckboxListener("note-sleeve", "noteSleeve");
    setupCheckboxListener("note-togo", "noteTogo");

    // Syrups
    const syrupTypeSelect = document.getElementById("syrupType");
    syrupTypeSelect.addEventListener("change", (e) => {
        const val = e.target.value;
        builderState.syrupType = val;
        if (val === "None") {
            syrupActionSelect.disabled = true;
            syrupAmountWrapper.style.display = "none";
        } else {
            syrupActionSelect.disabled = false;
            syrupAmountWrapper.style.display = "block";
        }
        updateSticker();
    });

    syrupActionSelect.addEventListener("change", (e) => {
        builderState.syrupAction = e.target.value;
        updateSticker();
    });

    setupRadioListener("syrupAmount");

    // Whip cream
    setupRadioListener("whip");

    // Drizzles
    setupCheckboxListener("driz-caramel", "drizzleCaramel", (checked) => {
        drizCaramelAmtWrapper.style.display = checked ? "flex" : "none";
    });
    document.getElementsByName("drizCaramelAmt").forEach(radio => {
        radio.addEventListener("change", (e) => {
            builderState.drizCaramelAmt = e.target.value;
            updateSticker();
        });
    });

    setupCheckboxListener("driz-chocolate", "drizzleChocolate", (checked) => {
        drizChocolateAmtWrapper.style.display = checked ? "flex" : "none";
    });
    document.getElementsByName("drizChocAmt").forEach(radio => {
        radio.addEventListener("change", (e) => {
            builderState.drizChocAmt = e.target.value;
            updateSticker();
        });
    });

    // Toppings
    setupCheckboxListener("add-honey", "honey");
    setupCheckboxListener("add-cinnamon", "cinnamon");
    setupCheckboxListener("add-cocoa", "cocoa");
    setupRadioListener("matchaPowder");
    setupRadioListener("chocChips");
    setupCheckboxListener("tl-allmilk", "allMilk");
    setupCheckboxListener("tl-teabag", "teaBag");

    // Cheat Sheet Tabs
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            const targetId = btn.getAttribute("data-tab");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Modal Events
    showToBaristaBtn.addEventListener("click", openBaristaModal);
    closeBaristaModalBtn.addEventListener("click", closeBaristaModal);
    baristaModal.addEventListener("click", (e) => {
        if (e.target === baristaModal) closeBaristaModal();
    });

    // Copy Button
    copyJapaneseBtn.addEventListener("click", () => {
        const sentence = stickerJapaneseSentence.textContent;
        copyToClipboard(sentence);
        showToast("已成功複製點餐日文句子！", "📋");
    });

    // Save Button
    saveDrinkBtn.addEventListener("click", saveCurrentDrink);
}

// --- Helper binders ---
function setupRadioListener(name, callback) {
    document.getElementsByName(name).forEach(radio => {
        radio.addEventListener("change", (e) => {
            builderState[name] = e.target.value;
            if (callback) callback(e.target.value);
            updateSticker();
        });
    });
}

function setupCheckboxListener(id, stateKey, callback) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("change", (e) => {
        builderState[stateKey] = e.target.checked;
        if (callback) callback(e.target.checked);
        updateSticker();
    });
}

// --- Reset Builder State ---
function resetBuilder() {
    drinkInput.value = "拿鐵";
    builderState = {
        drinkName: "拿鐵",
        size: "Tall",
        temp: "Iced",
        milk: "Standard",
        ice: "Regular",
        iceMilk: "None",
        shot: "None",
        decaf: false,
        ristretto: false,
        blonde: false,
        syrupType: "None",
        syrupAction: "Change",
        syrupAmount: "Regular",
        whip: "None",
        drizzleCaramel: false,
        drizCaramelAmt: "Regular",
        drizzleChocolate: false,
        drizChocAmt: "Regular",
        honey: false,
        cinnamon: false,
        cocoa: false,
        matchaPowder: "Regular",
        chocChips: "None",
        allMilk: false,
        teaBag: false,
        noteNolid: false,
        noteSleeve: false,
        noteTogo: true
    };

    // Restore UI elements to default
    document.getElementById("size-tall").checked = true;
    document.getElementById("temp-iced").checked = true;
    document.getElementById("milk-standard").checked = true;
    document.getElementById("ice-regular").checked = true;
    document.getElementById("ice-milk-no").checked = true;
    document.getElementById("shot-none").checked = true;
    document.getElementById("esp-decaf").checked = false;
    document.getElementById("esp-ristretto").checked = false;
    document.getElementById("esp-blonde").checked = false;
    document.getElementById("syrupType").value = "None";
    document.getElementById("syrupAction").value = "Change";
    document.getElementById("syrupAction").disabled = true;
    document.getElementById("syrup-amt-regular").checked = true;
    document.getElementById("whip-none").checked = true;
    document.getElementById("driz-caramel").checked = false;
    document.getElementById("driz-chocolate").checked = false;
    document.getElementById("add-honey").checked = false;
    document.getElementById("add-cinnamon").checked = false;
    document.getElementById("add-cocoa").checked = false;
    document.getElementById("mp-regular").checked = true;
    document.getElementById("cc-none").checked = true;
    document.getElementById("tl-allmilk").checked = false;
    document.getElementById("tl-teabag").checked = false;
    document.getElementById("note-nolid").checked = false;
    document.getElementById("note-sleeve").checked = false;
    document.getElementById("note-togo").checked = true;

    iceMilkCompensateWrapper.style.display = "none";
    syrupAmountWrapper.style.display = "none";
    drizCaramelAmtWrapper.style.display = "none";
    drizChocolateAmtWrapper.style.display = "none";

    updateSticker();
    showToast("客製化項目已重設！", "🔄");
}

// --- Dynamic Sticker Generator ---
function updateSticker() {
    // 1. Gather drink info
    const drinkObj = DRINK_DICTIONARY[builderState.drinkName.trim()] || {
        ja: builderState.drinkName.trim(),
        en: builderState.drinkName.trim()
    };

    // Size Info
    const sizesJa = { Short: "ショート", Tall: "トール", Grande: "グランデ", Venti: "ベンティ" };
    const sizesRo = { Short: "Shōto", Tall: "Tōru", Grande: "Gurande", Venti: "Benti" };
    const sizesZh = { Short: "小杯", Tall: "中杯", Grande: "大杯", Venti: "特大杯" };

    // Temp Info
    const tempJa = { Hot: "ホット", Iced: "アイス" };
    const tempRo = { Hot: "Hotto", Iced: "Aisu" };
    const tempZh = { Hot: "熱", Iced: "冰" };

    // Update main names
    stickerZhName.textContent = `${sizesZh[builderState.size]} ${builderState.drinkName} (${tempZh[builderState.temp]})`;
    stickerJaName.textContent = `${sizesJa[builderState.size]} ${drinkObj.ja} (${tempJa[builderState.temp]})`;

    // 2. Generate customized bullet list and compile price
    const customBulletItems = [];
    const customSentencePhrases = [];
    const customRomajiPhrases = [];
    let extraFee = 0;

    // A. Milk
    if (builderState.milk !== "Standard") {
        const milks = {
            LowFat: { ja: "低脂肪乳に変更", ro: "Teishibō taipu ni henkō", zh: "換低脂乳", fee: 0 },
            NonFat: { ja: "無脂肪乳に変更", ro: "Mushibōnyū ni henkō", zh: "換無脂乳", fee: 0 },
            Soy: { ja: "豆乳に変更", ro: "Tōnyū ni henkō", zh: "更換豆乳", fee: 55 },
            Almond: { ja: "アーモンドミルクに変更", ro: "Āmondo miruku ni henkō", zh: "更換杏仁奶", fee: 55 },
            Oat: { ja: "オーツミルクに変更", ro: "Ōtsu miruku ni henkō", zh: "更換燕麥奶", fee: 55 },
            Breve: { ja: "ブレベミルクに変更", ro: "Burebe miruku ni henkō", zh: "更換布雷貝特濃奶", fee: 55 }
        };
        const m = milks[builderState.milk];
        customBulletItems.push(`${m.ja} (${m.zh})`);
        customSentencePhrases.push(m.ja);
        customRomajiPhrases.push(m.ro);
        extraFee += m.fee;
    }

    // B. Ice
    if (builderState.ice !== "Regular") {
        const ices = {
            Less: { ja: "氷少なめ", ro: "Kōri sukuname", zh: "少冰" },
            None: { ja: "氷なし", ro: "Kōri nashi", zh: "去冰" },
            Extra: { ja: "氷多め", ro: "Kōri ōme", zh: "多冰" }
        };
        const i = ices[builderState.ice];
        customBulletItems.push(`${i.ja} (${i.zh})`);
        customSentencePhrases.push(i.ja);
        customRomajiPhrases.push(i.ro);

        // Compensation Milk
        if ((builderState.ice === "Less" || builderState.ice === "None") && builderState.iceMilk === "ExtraMilk") {
            customBulletItems.push("ミルク多め (牛奶補滿)");
            customSentencePhrases.push("ミルク多め");
            customRomajiPhrases.push("miruku ōme");
        }
    }

    // C. Espresso Shots
    if (builderState.shot !== "None") {
        if (builderState.shot === "Add1") {
            customBulletItems.push("エスプレッソショット追加 (加一份濃縮)");
            customSentencePhrases.push("ワンショット追加");
            customRomajiPhrases.push("wan shotto tsuika");
            extraFee += 55;
        } else if (builderState.shot === "Add2") {
            customBulletItems.push("エスプレッソショット2倍追加 (加兩份濃縮)");
            customSentencePhrases.push("ツーショット追加");
            customRomajiPhrases.push("tsū shotto tsuika");
            extraFee += 110;
        }
    }

    // Espresso Bean adjustments
    if (builderState.decaf) {
        customBulletItems.push("デカフェに変更 (低咖啡因)");
        customSentencePhrases.push("デカフェ変更");
        customRomajiPhrases.push("dikafe henkō");
        extraFee += 55;
    }
    if (builderState.ristretto) {
        customBulletItems.push("リストレット抽出 (限制萃取)");
        customSentencePhrases.push("リストレットに変更");
        customRomajiPhrases.push("risutoretto ni henkō");
    }
    if (builderState.blonde) {
        customBulletItems.push("ブロンドエスプレッソ (黃金烘焙)");
        customSentencePhrases.push("ブロンドに変更");
        customRomajiPhrases.push("burondo ni henkō");
    }

    // D. Syrups
    if (builderState.syrupType !== "None") {
        const syrups = {
            Caramel: { ja: "キャラメルシロップ", ro: "kyarameru shiroppu", zh: "焦糖糖漿" },
            Vanilla: { ja: "バニラシロップ", ro: "banira shiroppu", zh: "香草糖漿" },
            Mocha: { ja: "モカシロップ", ro: "moka shiroppu", zh: "摩卡巧克力糖漿" },
            WhiteMocha: { ja: "ホワイトモカシロップ", ro: "howaito moka shiroppu", zh: "白摩卡糖漿" },
            Chai: { ja: "チャイシロップ", ro: "chai shiroppu", zh: "香料茶糖漿" },
            Classic: { ja: "クラシックシロップ", ro: "kurashikku shiroppu", zh: "經典糖漿" }
        };
        const s = syrups[builderState.syrupType];
        
        let actionJa = "";
        let actionRo = "";
        let actionZh = "";
        
        if (builderState.syrupAction === "Add") {
            actionJa = "追加";
            actionRo = "tsuika";
            actionZh = "追加";
            extraFee += 55;
        } else {
            actionJa = "に変更";
            actionRo = "ni henkō";
            actionZh = "更換為";
        }

        let amtJa = "";
        let amtRo = "";
        let amtZh = "";
        if (builderState.syrupAmount === "Less") {
            amtJa = "少なめ";
            amtRo = "sukuname";
            amtZh = "(少)";
        } else if (builderState.syrupAmount === "Extra") {
            amtJa = "多め";
            amtRo = "ōme";
            amtZh = "(多)";
        }

        // Output phrasing format e.g. "バニラシロップ追加、多め"
        let dispText = `${s.ja}${actionJa}`;
        let romajiText = `${s.ro} ${actionRo}`;
        if (amtJa) {
            dispText += ` (${amtJa})`;
            romajiText += ` ${amtRo}`;
        }
        
        customBulletItems.push(`${s.ja}${actionJa} ${amtZh}`);
        customSentencePhrases.push(dispText);
        customRomajiPhrases.push(romajiText);
    }

    // E. Whipped Cream
    if (builderState.whip !== "None") {
        if (builderState.whip === "Less") {
            customBulletItems.push("ホイップクリーム少なめ (鮮奶油少)");
            customSentencePhrases.push("ホイップ少なめ");
            customRomajiPhrases.push("hoippu sukuname");
        } else if (builderState.whip === "Extra") {
            customBulletItems.push("ホイップクリーム多め (鮮奶油增量)");
            customSentencePhrases.push("ホイップ多め");
            customRomajiPhrases.push("hoippu ōme");
        } else if (builderState.whip === "Add") {
            customBulletItems.push("ホイップクリーム追加 (加鮮奶油)");
            customSentencePhrases.push("ホイップ追加");
            customRomajiPhrases.push("hoippu tsuika");
            extraFee += 55;
        }
    }

    // F. Drizzles
    if (builderState.drizzleCaramel) {
        let amtZh = "正常量";
        let amtJa = "追加";
        let amtRo = "tsuika";
        if (builderState.drizCaramelAmt === "Less") {
            amtZh = "少なめ";
            amtJa = "追加 (少なめ)";
            amtRo = "tsuika sukuname";
        } else if (builderState.drizCaramelAmt === "Extra") {
            amtZh = "多め";
            amtJa = "追加 (多め)";
            amtRo = "tsuika ōme";
        }
        customBulletItems.push(`焦糖淋醬追加 ${amtZh}`);
        customSentencePhrases.push(`キャラメルソース${amtJa}`);
        customRomajiPhrases.push(`kyarameru sōsu ${amtRo}`);
    }

    if (builderState.drizzleChocolate) {
        let amtZh = "正常量";
        let amtJa = "追加";
        let amtRo = "tsuika";
        if (builderState.drizChocAmt === "Less") {
            amtZh = "少なめ";
            amtJa = "追加 (少なめ)";
            amtRo = "tsuika sukuname";
        } else if (builderState.drizChocAmt === "Extra") {
            amtZh = "多め";
            amtJa = "追加 (多め)";
            amtRo = "tsuika ōme";
        }
        customBulletItems.push(`巧克力淋醬追加 ${amtZh}`);
        customSentencePhrases.push(`チョコレートソース${amtJa}`);
        customRomajiPhrases.push(`chokorēto sōsu ${amtRo}`);
    }

    // G. Toppings
    if (builderState.honey) {
        customBulletItems.push("蜂蜜追加 (蜂蜜淋面)");
        customSentencePhrases.push("ハチミツ追加");
        customRomajiPhrases.push("hachimitsu tsuika");
    }
    if (builderState.cinnamon) {
        customBulletItems.push("肉桂粉追加");
        customSentencePhrases.push("シナモンパウダー追加");
        customRomajiPhrases.push("shinamon paudā tsuika");
    }
    if (builderState.cocoa) {
        customBulletItems.push("可可粉追加");
        customSentencePhrases.push("ココアパウダー追加");
        customRomajiPhrases.push("kokoa paudā tsuika");
    }
    // Matcha Powder Multipliers
    if (builderState.matchaPowder !== "Regular") {
        const mp = builderState.matchaPowder;
        if (mp === "Extra") {
            customBulletItems.push("抹茶粉多め (2倍 - 免費)");
            customSentencePhrases.push("抹茶パウダー多め");
            customRomajiPhrases.push("matcha paudā ōme");
        } else if (mp === "3x") {
            customBulletItems.push("抹茶粉3倍 (免費)");
            customSentencePhrases.push("抹茶パウダー3倍");
            customRomajiPhrases.push("matcha paudā san-bai");
        } else if (mp === "4x") {
            customBulletItems.push("抹茶粉4倍 (免費)");
            customSentencePhrases.push("抹茶パウダー4倍");
            customRomajiPhrases.push("matcha paudā yon-bai");
        }
    }

    // Chocolate Chips Multipliers
    if (builderState.chocChips !== "None") {
        const cc = builderState.chocChips;
        const hasChips = drinkObj.ja.includes("チップ") || 
                         builderState.drinkName.includes("碎片") || 
                         builderState.drinkName.includes("巧克力星冰樂");

        if (hasChips) {
            // Free customization on drinks that already have chips
            if (cc === "Extra") {
                customBulletItems.push("巧克力碎片多め (2倍 - 免費)");
                customSentencePhrases.push("チョコチップ多め");
                customRomajiPhrases.push("chokochippu ōme");
            } else if (cc === "3x") {
                customBulletItems.push("巧克力碎片3倍 (免費)");
                customSentencePhrases.push("チョコチップ3倍");
                customRomajiPhrases.push("chokochippu san-bai");
            } else if (cc === "Add") {
                customBulletItems.push("巧克力碎片 (通常量)");
                customSentencePhrases.push("チョコチップ通常");
                customRomajiPhrases.push("chokochippu tsūjō");
            }
        } else {
            // Paid addition (+55 yen)
            if (cc === "Add") {
                customBulletItems.push("巧克力碎片追加 (+55円)");
                customSentencePhrases.push("チョコチップ追加");
                customRomajiPhrases.push("chokochippu tsuika");
                extraFee += 55;
            } else if (cc === "Extra") {
                customBulletItems.push("巧克力碎片追加、多め (2倍 - +55円)");
                customSentencePhrases.push("チョコチップ追加、チョコチップ多め");
                customRomajiPhrases.push("chokochippu tsuika, chokochippu ōme");
                extraFee += 55;
            } else if (cc === "3x") {
                customBulletItems.push("巧克力碎片追加、3倍 (+55円)");
                customSentencePhrases.push("チョコチップ追加、チョコチップ3倍");
                customRomajiPhrases.push("chokochippu tsuika, chokochippu san-bai");
                extraFee += 55;
            }
    }

    // Tea Latte Specials Customization
    if (builderState.allMilk) {
        customBulletItems.push("オールミルクに変更 (全鮮奶 - 免費)");
        customSentencePhrases.push("オールミルクに変更");
        customRomajiPhrases.push("ōrumiruku ni henkō");
    }
    if (builderState.teaBag) {
        customBulletItems.push("ティーバッグ追加 (追加茶包 - +55円)");
        customSentencePhrases.push("ティーバッグ追加");
        customRomajiPhrases.push("tībaggu tsuika");
        extraFee += 55;
    }

    // H. Notes / Comments
    let noteJaSuffix = "";
    let noteRoSuffix = "";
    if (builderState.noteNolid) {
        customBulletItems.push("蓋なし (不要杯蓋，通常用於有鮮奶油時)");
        customSentencePhrases.push("蓋なしで");
        customRomajiPhrases.push("futa nashi de");
    }
    if (builderState.noteSleeve) {
        customBulletItems.push("スリーブ追加 (需要杯套)");
        noteJaSuffix += "、スリーブもいただけますか？";
        noteRoSuffix += ", surību mo itadakemasu ka?";
    }

    // Render list elements on sticker
    stickerCustomizationList.innerHTML = "";
    if (customBulletItems.length === 0) {
        const li = document.createElement("li");
        li.textContent = "通常のレシピ (標準無客製更動)";
        stickerCustomizationList.appendChild(li);
    } else {
        customBulletItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            stickerCustomizationList.appendChild(li);
        });
    }

    // 3. Compile Sentence
    // Format: "持ち帰りで、トールサイズのカフェラテをアイスで、ソイミルクに変更、氷少なめでお願いします。"
    const prefixJa = builderState.noteTogo ? "持ち帰りで、" : "店内で、";
    const prefixRo = builderState.noteTogo ? "Mochikaeri de, " : "Tennai de, ";

    const coreDrinkJa = `${sizesJa[builderState.size]}サイズの${drinkObj.ja}を${tempJa[builderState.temp]}で`;
    const coreDrinkRo = `${sizesRo[builderState.size]} saizu no ${drinkObj.ja.replace(" ", "")} o ${tempRo[builderState.temp]} de`;

    let finalSentenceJa = "";
    let finalSentenceRo = "";

    if (customSentencePhrases.length > 0) {
        finalSentenceJa = `${prefixJa}${coreDrinkJa}、${customSentencePhrases.join("、")}でお願いします${noteJaSuffix}`;
        finalSentenceRo = `${prefixRo}${coreDrinkRo}, ${customRomajiPhrases.join(", ")} de onegaishimasu${noteRoSuffix}`;
    } else {
        finalSentenceJa = `${prefixJa}${coreDrinkJa}でお願いします${noteJaSuffix}`;
        finalSentenceRo = `${prefixRo}${coreDrinkRo} de onegaishimasu${noteRoSuffix}`;
    }

    // Display sentences
    stickerJapaneseSentence.textContent = finalSentenceJa;
    stickerRomajiSentence.textContent = finalSentenceRo;

    // Display estimated fee
    stickerEstimatedPrice.textContent = `估計追加費用: +${extraFee}円`;
}

// --- Custom Clipboard Utility ---
function copyToClipboard(text) {
    // Create a temporary textarea to hold the text
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";  // Avoid scrolling to bottom
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
        document.execCommand("copy");
    } catch (err) {
        console.error("無法複製文字", err);
    }
    
    document.body.removeChild(textarea);
}

// --- Toast Notifications ---
function showToast(message, icon = "✨") {
    const container = document.getElementById("toastContainer");
    
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${message}</span>`;
    
    container.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.add("toast-out");
        toast.addEventListener("animationend", () => {
            toast.remove();
        });
    }, 2500);
}

// --- Barista Modal ---
function openBaristaModal() {
    // Clone the generated sticker into the modal container
    const originalSticker = document.getElementById("starbucksStickerElement");
    baristaStickerElement.innerHTML = "";
    
    const clonedSticker = originalSticker.cloneNode(true);
    // Remove the real-time preview button or anything extra if present
    clonedSticker.id = "baristaClonedSticker";
    
    baristaStickerElement.appendChild(clonedSticker);
    baristaModal.classList.add("open");
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

function closeBaristaModal() {
    baristaModal.classList.remove("open");
    document.body.style.overflow = ""; // Re-enable scrolling
}

// --- Apply Customization Directly From Card Click ---
function applyCustomizationFromCard(category, item) {
    let applied = false;
    let labelText = item.zh;
    
    if (category === "milk") {
        const mapping = {
            "通常ミルク": "Standard",
            "低脂肪タイプ": "LowFat",
            "無脂肪乳": "NonFat",
            "豆乳に変更": "Soy",
            "アーモンドミルクに変更": "Almond",
            "オーツミルクに変更": "Oat",
            "ブレベミルクに変更": "Breve"
        };
        const val = mapping[item.ja];
        if (val) {
            builderState.milk = val;
            document.getElementById(`milk-${val.toLowerCase()}`).checked = true;
            applied = true;
        }
    } else if (category === "ice") {
        if (item.ja === "ホット") {
            builderState.temp = "Hot";
            document.getElementById("temp-hot").checked = true;
            applied = true;
        } else if (item.ja === "アイス") {
            builderState.temp = "Iced";
            document.getElementById("temp-iced").checked = true;
            applied = true;
        } else if (item.ja === "通常の氷") {
            builderState.ice = "Regular";
            document.getElementById("ice-regular").checked = true;
            applied = true;
        } else if (item.ja === "氷少なめ") {
            builderState.ice = "Less";
            document.getElementById("ice-less").checked = true;
            iceMilkCompensateWrapper.style.display = "block";
            applied = true;
        } else if (item.ja === "氷なし") {
            builderState.ice = "None";
            document.getElementById("ice-none").checked = true;
            iceMilkCompensateWrapper.style.display = "block";
            applied = true;
        } else if (item.ja === "氷多め") {
            builderState.ice = "Extra";
            document.getElementById("ice-extra").checked = true;
            applied = true;
        } else if (item.ja === "ミルク多め") {
            builderState.iceMilk = "ExtraMilk";
            document.getElementById("ice-milk-yes").checked = true;
            // 如果冰塊量為正常，為了讓加奶合理，強制改為少冰
            if (builderState.ice === "Regular" || builderState.ice === "Extra") {
                builderState.ice = "Less";
                document.getElementById("ice-less").checked = true;
                iceMilkCompensateWrapper.style.display = "block";
            }
            applied = true;
        }
    } else if (category === "syrup") {
        const typeMapping = {
            "キャラメルシロップ": "Caramel",
            "バニラシロップ": "Vanilla",
            "モカシロップ": "Mocha",
            "ホワイトモカシロップ": "WhiteMocha",
            "チャイシロップ": "Chai",
            "クラシックシロップ": "Classic"
        };
        const val = typeMapping[item.ja];
        if (val) {
            builderState.syrupType = val;
            document.getElementById("syrupType").value = val;
            syrupActionSelect.disabled = false;
            syrupAmountWrapper.style.display = "block";
            applied = true;
        } else if (item.ja === "シロップなし") {
            builderState.syrupType = "None";
            document.getElementById("syrupType").value = "None";
            syrupActionSelect.disabled = true;
            syrupAmountWrapper.style.display = "none";
            applied = true;
        } else if (item.ja === "シロップ多め") {
            builderState.syrupAmount = "Extra";
            document.getElementById("syrup-amt-extra").checked = true;
            applied = true;
        } else if (item.ja === "シロップ少なめ") {
            builderState.syrupAmount = "Less";
            document.getElementById("syrup-amt-less").checked = true;
            applied = true;
        }
    } else if (category === "whip") {
        if (item.ja === "ホイップクリーム追加") {
            builderState.whip = "Add";
            document.getElementById("whip-add").checked = true;
            applied = true;
        } else if (item.ja === "ホイップ多め") {
            builderState.whip = "Extra";
            document.getElementById("whip-extra").checked = true;
            applied = true;
        } else if (item.ja === "ホイップ少なめ") {
            builderState.whip = "Less";
            document.getElementById("whip-less").checked = true;
            applied = true;
        } else if (item.ja === "ホイップなし") {
            builderState.whip = "None";
            document.getElementById("whip-none").checked = true;
            applied = true;
        } else if (item.ja === "キャラメルソース追加") {
            builderState.drizzleCaramel = true;
            document.getElementById("driz-caramel").checked = true;
            drizCaramelAmtWrapper.style.display = "flex";
            applied = true;
        } else if (item.ja === "チョコレートソース追加") {
            builderState.drizzleChocolate = true;
            document.getElementById("driz-chocolate").checked = true;
            drizChocolateAmtWrapper.style.display = "flex";
            applied = true;
        } else if (item.ja === "ソース多め") {
            let activeDrizzle = false;
            if (builderState.drizzleCaramel) {
                builderState.drizCaramelAmt = "Extra";
                document.getElementById("dc-extra").checked = true;
                activeDrizzle = true;
            }
            if (builderState.drizzleChocolate) {
                builderState.drizChocAmt = "Extra";
                document.getElementById("dh-extra").checked = true;
                activeDrizzle = true;
            }
            if (!activeDrizzle) {
                // 若原本無淋醬，預設追加焦糖醬多
                builderState.drizzleCaramel = true;
                document.getElementById("driz-caramel").checked = true;
                drizCaramelAmtWrapper.style.display = "flex";
                builderState.drizCaramelAmt = "Extra";
                document.getElementById("dc-extra").checked = true;
            }
            applied = true;
        }
    } else if (category === "powder") {
        if (item.ja === "チョコチップ追加") {
            builderState.chocChips = "Add";
            document.getElementById("cc-add").checked = true;
            applied = true;
        } else if (item.ja === "チョコチップ多め") {
            builderState.chocChips = "Extra";
            document.getElementById("cc-extra").checked = true;
            applied = true;
        } else if (item.ja === "抹茶パウダー多め") {
            builderState.matchaPowder = "Extra";
            document.getElementById("mp-extra").checked = true;
            applied = true;
        } else if (item.ja === "ハチミツ追加") {
            builderState.honey = true;
            document.getElementById("add-honey").checked = true;
            applied = true;
        } else if (item.ja === "シナモンパウダー追加") {
            builderState.cinnamon = true;
            document.getElementById("add-cinnamon").checked = true;
            applied = true;
        } else if (item.ja === "ココアパウダー追加") {
            builderState.cocoa = true;
            document.getElementById("add-cocoa").checked = true;
            applied = true;
        } else if (item.ja === "デカフェ変更") {
            builderState.decaf = true;
            document.getElementById("esp-decaf").checked = true;
            applied = true;
        } else if (item.ja === "リストレット") {
            builderState.ristretto = true;
            document.getElementById("esp-ristretto").checked = true;
            applied = true;
        } else if (item.ja === "ワンショット追加") {
            builderState.shot = "Add1";
            document.getElementById("shot-add1").checked = true;
            applied = true;
        } else if (item.ja === "ツーショット追加") {
            builderState.shot = "Add2";
            document.getElementById("shot-add2").checked = true;
            applied = true;
        }
    } else if (category === "sizes") {
        const mapping = { "ショートサイズ": "Short", "トールサイズ": "Tall", "グランデサイズ": "Grande", "ベンティサイズ": "Venti" };
        const val = mapping[item.ja];
        if (val) {
            builderState.size = val;
            document.getElementById(`size-${val.toLowerCase()}`).checked = true;
            applied = true;
        }
    }
    
    if (applied) {
        updateSticker();
        showToast(`已套用：${labelText}`, "✅");
    }
}

// --- Render Category Cheat Sheets ---
function renderCheatSheets() {
    const categories = ["milk", "ice", "syrup", "whip", "powder", "sizes"];
    
    categories.forEach(cat => {
        const grid = document.getElementById(`grid-${cat}-cards`);
        if (!grid) return;
        
        grid.innerHTML = "";
        
        CHEAT_SHEETS[cat].forEach(item => {
            const card = document.createElement("div");
            card.className = "cheat-card card-glass";
            
            const isFree = item.price === "免費";
            const priceClass = isFree ? "cc-price free" : "cc-price";
            
            card.innerHTML = `
                <div class="cheat-card-top">
                    <div class="cc-title-row">
                        <span class="cc-zh">${item.zh}</span>
                        <span class="${priceClass}">${item.price}</span>
                    </div>
                    <span class="cc-ja">${item.ja}</span>
                    <span class="cc-ro">${item.ro}</span>
                </div>
                <div class="cheat-card-bottom">
                    <p class="cc-desc">${item.desc}</p>
                    <span class="cc-copy-indicator" title="點擊套用客製且複製日文">📋</span>
                </div>
            `;
            
            // Add copy & apply functionality
            card.addEventListener("click", () => {
                // Get copyable text (just the Japanese term)
                const copyText = item.ja.replace("に変更", "").replace("追加", "").trim();
                copyToClipboard(copyText);
                
                // Directly apply to the builder
                applyCustomizationFromCard(cat, item);
                
                // Micro feedback animation
                card.style.transform = "scale(0.97)";
                setTimeout(() => {
                    card.style.transform = "";
                }, 100);
            });
            
            grid.appendChild(card);
        });
    });
}

// --- Render Favorites ---
function renderFavorites() {
    const favs = getFavorites();
    favCountBadge.textContent = favs.length;
    
    if (favs.length === 0) {
        favoritesGrid.style.display = "none";
        favoritesEmptyState.style.display = "block";
        return;
    }
    
    favoritesEmptyState.style.display = "none";
    favoritesGrid.style.display = "grid";
    favoritesGrid.innerHTML = "";
    
    favs.forEach(fav => {
        const card = document.createElement("div");
        card.className = "favorite-card card-glass";
        
        // Compile items badges
        let itemsBadgesHtml = "";
        if (fav.customs && fav.customs.length > 0) {
            fav.customs.forEach(c => {
                itemsBadgesHtml += `<span class="fav-item-badge">${c}</span>`;
            });
        } else {
            itemsBadgesHtml = `<span class="fav-item-badge">無客製項目</span>`;
        }
        
        card.innerHTML = `
            <div>
                <div class="fav-card-header">
                    <div class="fav-card-title-group">
                        <span class="fav-drink-title">${fav.name}</span>
                        <span class="fav-drink-meta">${fav.drinkZh} (${fav.price})</span>
                    </div>
                    <button class="btn-fav-delete" data-id="${fav.id}" title="刪除常用">🗑️</button>
                </div>
                <div class="fav-card-items">
                    ${itemsBadgesHtml}
                </div>
                <div class="fav-card-sentence">
                    <p class="ja">${fav.sentence}</p>
                    <p class="ro">${fav.romaji}</p>
                </div>
            </div>
            <div class="fav-card-actions">
                <button class="btn-primary btn-sm-action show-barista-fav-btn" data-id="${fav.id}">
                    <span>👀 秀給店員</span>
                </button>
                <button class="btn-outline btn-sm-action copy-fav-btn" data-id="${fav.id}">
                    <span>📋 複製</span>
                </button>
            </div>
        `;
        
        // Bind events
        card.querySelector(".btn-fav-delete").addEventListener("click", (e) => {
            e.stopPropagation();
            deleteFavorite(fav.id);
        });
        
        card.querySelector(".copy-fav-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            copyToClipboard(fav.sentence);
            showToast("日文句子已複製！", "📋");
        });
        
        card.querySelector(".show-barista-fav-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            openBaristaFavModal(fav);
        });
        
        favoritesGrid.appendChild(card);
    });
}

function getFavorites() {
    const raw = localStorage.getItem("sb_jp_customizer_favs");
    return raw ? JSON.parse(raw) : [];
}

function saveCurrentDrink() {
    const drinkObj = DRINK_DICTIONARY[builderState.drinkName.trim()] || {
        ja: builderState.drinkName.trim(),
        en: builderState.drinkName.trim()
    };
    
    const sizesZh = { Short: "小杯", Tall: "中杯", Grande: "大杯", Venti: "特大杯" };
    const tempZh = { Hot: "熱", Iced: "冰" };
    
    // Get currently generated details
    const bulletElements = document.querySelectorAll("#stickerCustomizationList li");
    const customs = [];
    bulletElements.forEach(li => {
        if (li.textContent !== "通常のレシピ (標準無客製更動)") {
            customs.push(li.textContent);
        }
    });
    
    const sentence = stickerJapaneseSentence.textContent;
    const romaji = stickerRomajiSentence.textContent;
    const priceText = stickerEstimatedPrice.textContent;
    
    // Prompt name
    const defaultName = `${sizesZh[builderState.size]}${tempZh[builderState.temp]}${builderState.drinkName}`;
    const name = prompt("請幫您的客製飲料起個名字（例如：無糖燕麥奶拿鐵、多奶油抹茶星冰樂）：", defaultName);
    
    if (name === null) return; // Cancelled
    
    const cleanName = name.trim() || defaultName;
    
    const newFav = {
        id: Date.now().toString(),
        name: cleanName,
        drinkZh: `${sizesZh[builderState.size]} ${builderState.drinkName} (${tempZh[builderState.temp]})`,
        drinkJa: stickerJaName.textContent,
        customs: customs,
        sentence: sentence,
        romaji: romaji,
        price: priceText
    };
    
    const currentFavs = getFavorites();
    currentFavs.push(newFav);
    localStorage.setItem("sb_jp_customizer_favs", JSON.stringify(currentFavs));
    
    renderFavorites();
    showToast(`成功儲存常用飲品「${cleanName}」！`, "💖");
}

function deleteFavorite(id) {
    const currentFavs = getFavorites();
    const filtered = currentFavs.filter(f => f.id !== id);
    localStorage.setItem("sb_jp_customizer_favs", JSON.stringify(filtered));
    renderFavorites();
    showToast("已從常用清單刪除", "🗑️");
}

// --- Open Barista View from Favorites ---
function openBaristaFavModal(fav) {
    // Generate a static sticker for the modal based on this saved item
    baristaStickerElement.innerHTML = "";
    
    const stickerDiv = document.createElement("div");
    stickerDiv.className = "starbucks-sticker barista-cloned";
    
    let customsHtml = "";
    if (fav.customs && fav.customs.length > 0) {
        fav.customs.forEach(c => {
            customsHtml += `<li>${c}</li>`;
        });
    } else {
        customsHtml = `<li>通常のレシピ (標準無客製更動)</li>`;
    }
    
    stickerDiv.innerHTML = `
        <div class="sticker-top-decoration">
            <div class="thermal-dots"></div>
            <span class="sticker-order-num">FAVORITE</span>
        </div>
        <div class="sticker-content">
            <div class="sticker-drink-header">
                <span class="sticker-drink-name-zh">${fav.name}</span>
                <span class="sticker-drink-name-ja">${fav.drinkJa}</span>
            </div>
            <div class="sticker-divider"></div>
            <ul class="sticker-items-list">
                ${customsHtml}
            </ul>
            <div class="sticker-divider"></div>
            <div class="sticker-sentence-block">
                <span class="sentence-title">🇯🇵 點餐完整日文：</span>
                <p class="sentence-text">${fav.sentence}</p>
                <p class="sentence-romaji">${fav.romaji}</p>
            </div>
        </div>
        <div class="sticker-footer">
            <div class="barcode">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="price-indicator">${fav.price}</div>
        </div>
    `;
    
    baristaStickerElement.appendChild(stickerDiv);
    baristaModal.classList.add("open");
    document.body.style.overflow = "hidden";
}
