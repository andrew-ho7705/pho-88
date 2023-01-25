const appetizerContainer = document.getElementById('appetizers');
const sandwichContainer = document.getElementById('sandwiches');
const kidsMenuContainer = document.getElementById('kidsmenu');
const wontonSoupContainer = document.getElementById('wontonsoup');
const sideItemsContainer = document.getElementById('sideitems');
const phoContainer = document.getElementById('pho');
const miContainer = document.getElementById('mi');
const bunContainer = document.getElementById('bun');
const comContainer = document.getElementById('com');
const giaiKhatContainer = document.getElementById('giaikhat');
const tapiocaDrinksContainer = document.getElementById('tapiocadrinks');

function displayMenu() {
    menuItems.forEach(item => {
        switch(item.class) {
            case "appetizers": 
                appetizerContainer.innerHTML += "<h3>" + item.id + "." + " " + item.name + "</h3>";
                appetizerContainer.innerHTML += "<h3>" + item.price + "</h3>";
                appetizerContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                appetizerContainer.innerHTML += "<p></p>";
                break;

            case "sandwiches":
                sandwichContainer.innerHTML += "<h3>" + item.id + "." + " " + item.name + "</h3>";
                sandwichContainer.innerHTML += "<h3>" + item.price + "</h3>";
                sandwichContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                sandwichContainer.innerHTML += "<p></p>";
                break;

            case "kidsmenu":
                kidsMenuContainer.innerHTML += "<h3>" + item.id + "." + " " + item.name + "</h3>";
                kidsMenuContainer.innerHTML += "<h3>" + item.price + "</h3>";
                kidsMenuContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                kidsMenuContainer.innerHTML += "<p></p>";
                break;

            case "wontonsoup":
                wontonSoupContainer.innerHTML += "<h3>" + item.id + "." + " " + item.name + "</h3>";
                wontonSoupContainer.innerHTML += "<h3>" + item.price + "</h3>";
                wontonSoupContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                wontonSoupContainer.innerHTML += "<p></p>";
                break;
            
            case "sideitems":
                sideItemsContainer.innerHTML += "<h3>" + item.name + "</h3>";
                sideItemsContainer.innerHTML += "<h3>" + item.price + "</h3>";
                sideItemsContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                sideItemsContainer.innerHTML += "<p></p>";
                break;

            case "pho":
                phoContainer.innerHTML += "<h3>" + item.name + "</h3>";
                phoContainer.innerHTML += "<h3>" + item.price + "</h3>";
                phoContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                phoContainer.innerHTML += "<p></p>";
                break;

            case "mi":
                miContainer.innerHTML += "<h3>" + item.name + "</h3>";
                miContainer.innerHTML += "<h3>" + item.price + "</h3>";
                miContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                miContainer.innerHTML += "<p></p>";
                break;

            case "bun":
                bunContainer.innerHTML += "<h3>" + item.name + "</h3>";
                bunContainer.innerHTML += "<h3>" + item.price + "</h3>";
                bunContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                bunContainer.innerHTML += "<p></p>";
                break;

            case "com":
                comContainer.innerHTML += "<h3>" + item.name + "</h3>";
                comContainer.innerHTML += "<h3>" + item.price + "</h3>";
                comContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                comContainer.innerHTML += "<p></p>";
                break;

            case "giaikhat":
                giaiKhatContainer.innerHTML += "<h3>" + item.name + "</h3>";
                giaiKhatContainer.innerHTML += "<h3>" + item.price + "</h3>";
                giaiKhatContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                giaiKhatContainer.innerHTML += "<p></p>";
                break;

            case "tapiocadrinks":
                tapiocaDrinksContainer.innerHTML += "<h3>" + item.name + "</h3>";
                tapiocaDrinksContainer.innerHTML += "<h3>" + item.price + "</h3>";
                tapiocaDrinksContainer.innerHTML += "<h3>" + item.desc + "</h3>";
                tapiocaDrinksContainer.innerHTML += "<p></p>";
                break;
        }
    })
    
}

const menuItems = [
    {
        "id": "101",
        "name": "Goi Cuon Ga Nuong",
        "price": "$5.50",
        "desc": "Fresh spring rolls with grilled chicken",
        "class": "appetizers"
    },
    {
        "id": "102",
        "name": "Goi Cuon Thit Nuong",
        "price": "$5.50",
        "desc": "Fresh spring rolls with grilled pork",
        "class": "appetizers"
    },
    {
        "id": "103",
        "name": "Goi Cuon Bo Nuong",
        "price": "$5.99",
        "desc": "Fresh spring rolls with grilled beef",
        "class": "appetizers"
    },
    {
        "id": "104",
        "name": "Goi Cuon",
        "price": "$3.99",
        "desc": "Fresh spring rolls with shrimp",
        "class": "appetizers"
    },
    {
        "id": "105",
        "name": "Cha Gio",
        "price": "$3.99",
        "desc": "Fried eggrolls",
        "class": "appetizers"
    },
    {
        "id": "106",
        "name": "Goi Cuon Chay",
        "price": "$3.99",
        "desc": "Fresh spring rolls with fried tofu",
        "class": "appetizers"
    },
    {
        "id": "201",
        "name": "Banh Mi Thit Nuong",
        "price": "$5.75",
        "desc": "Grilled pork sandwich",
        "class": "sandwiches"
    },
    {
        "id": "202",
        "name": "Banh Mi Ga Nuong",
        "price": "$5.75",
        "desc": "Grilled chicken sandwich",
        "class": "sandwiches"
    },
    {
        "id": "203",
        "name": "Banh Mi Bo Nuong",
        "price": "$6.75",
        "desc": "Grilled beef sandwich",
        "class": "sandwiches"
    },
    {
        "id": "204",
        "name": "Banh Mi Chay",
        "price": "$5.50",
        "desc": "Vegetarian sandwich with fried tofu",
        "class": "sandwiches"
    },
    {
        "id": "205",
        "name": "Banh Mi Bo Kho",
        "price": "$7.99",
        "desc": "Beef stew with french bread",
        "class": "sandwiches"
    },
    {
        "id": "206",
        "name": "Banh Mi Tom Nuong",
        "price": "$6.75",
        "desc": "Grilled shrimp sandwich",
        "class": "sandwiches"
    },
    {
        "id": "301",
        "name": "Pho Bo Vien",
        "price": "$6.75",
        "desc": "Beef noodle soup with beef balls",
        "class": "kidsmenu"
    },
    {
        "id": "302",
        "name": "Pho Tai",
        "price": "$6.75",
        "desc": "Beef noodle soup with eye-round steak",
        "class": "kidsmenu"
    },
    {
        "id": "303",
        "name": "Pho Ga",
        "price": "$6.75",
        "desc": "Chicken noodle soup with white or dark meat",
        "class": "kidsmenu"
    },
    {
        "id": "304",
        "name": "Pho Ca Vien",
        "price": "$6.75",
        "desc": "Rice noodle soup with fish balls",
        "class": "kidsmenu"
    },
    {
        "id": "305",
        "name": "Com Thit/Ga/Bo Nuong",
        "price": "$7.99 / 7.99 / 8.50",
        "desc": "Choice of grilled pork/chicken/beef over rice",
        "class": "kidsmenu"
    },
    {
        "id": "306",
        "name": "Wonton Soup",
        "price": "$8.99",
        "desc": "Homemade wontons with soup (served with french onions and cilantro)",
        "class": "wontonsoup"
    },
    {
        "id": "307",
        "name": "Egg Noodles with Wonton Soup",
        "price": "$10.99",
        "desc": "",
        "class": "wontonsoup"
    },
    {
        "id": "",
        "name": "Chen Com Chien - Bowl of Egg Fried Rice",
        "price": "$4.75",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Banh Mi - French Bread",
        "price": "$1.50",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Trung Chien - Fried Egg",
        "price": "$1.50",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Chen Com - Bowl of Steamed Rice",
        "price": "$2.99",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Dia Tai - Plate of Eye-Round Steak",
        "price": "$4.50",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Chen Bo Vien - Bowl of Beef Balls",
        "price": "$4.50",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Them Bo Vien - Add Beef Balls",
        "price": "$2.50",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Them Cha Gio - Add Egg-Roll",
        "price": "$1.99",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "",
        "name": "Them Banh Pho - Add Rice Noodles",
        "price": "$2.50",
        "desc": "",
        "class": "sideitems"
    },
    {
        "id": "401",
        "name": "Pho Dac Biet",
        "price": "$10.99",
        "desc": "House special noodle soup with assorted beef",
        "class": "pho"
    },
    {
        "id": "402",
        "name": "Pho Chin",
        "price": "$9.75",
        "desc": "Beef noodle soup with well-done beef",
        "class": "pho"
    },
    {
        "id": "403",
        "name": "Pho Tai",
        "price": "$9.75",
        "desc": "Beef noodle soup with eye-round steak",
        "class": "pho"
    },
    {
        "id": "404",
        "name": "Pho Bo Vien",
        "price": "$9.75",
        "desc": "Beef noodle soup with beef balls",
        "class": "pho"
    },
    {
        "id": "405",
        "name": "Pho Nam",
        "price": "$9.75",
        "desc": "Beef noodle soup with well-done flank",
        "class": "pho"
    },
    {
        "id": "406",
        "name": "Pho Tai Bo Vien",
        "price": "$10.25",
        "desc": "Beef noodle soup with eye-round steak & beef balls",
        "class": "pho"
    },
    {
        "id": "407",
        "name": "Pho Tai Nam",
        "price": "$10.25",
        "desc": "Beef noodle soup with eye-round steak & well-done flank",
        "class": "pho"
    },
    {
        "id": "408",
        "name": "Pho Tai Sach",
        "price": "$10.25",
        "desc": "Beef noodle soup with eye-round steak & beef tripe",
        "class": "pho"
    },
    {
        "id": "409",
        "name": "Pho Tai Gan",
        "price": "$10.25",
        "desc": "Beef noodle soup with eye-round steak & soft tendon",
        "class": "pho"
    },
    {
        "id": "410",
        "name": "Pho Tai Nam Ga",
        "price": "$10.75",
        "desc": "Beef noodle soup with eye-round steak, well-done flank, & chicken",
        "class": "pho"
    },
    {
        "id": "411",
        "name": "Pho Ga (Thit Trang/Den)",
        "price": "$9.75",
        "desc": "Chicken noodle soup with white or dark meat",
        "class": "pho"
    },
    {
        "id": "412",
        "name": "Mien Ga",
        "price": "$9.99",
        "desc": "Clear vermicelli noodle soup with chicken",
        "class": "pho"
    },
    {
        "id": "413",
        "name": "Pho Bo Kho",
        "price": "$9.99",
        "desc": "Beef stew soup with rice noodles",
        "class": "pho"
    },
    {
        "id": "414",
        "name": "Pho Do Bien",
        "price": "$10.99",
        "desc": "Rice noodle soup with seafood",
        "class": "pho"
    },
    {
        "id": "415",
        "name": "Pho Khong Thit (Bo/Ga)",
        "price": "$8.50",
        "desc": "Meatless noodle soup with beef or chicken broth",
        "class": "pho"
    },
    {
        "id": "416",
        "name": "Pho Tom",
        "price": "$10.99",
        "desc": "Rice noodle soup with shrimp",
        "class": "pho"
    },
    {
        "id": "501",
        "name": "Mi Ga",
        "price": "$10.50",
        "desc": "Egg noodle soup with white or dark chicken",
        "class": "mi"
    },
    {
        "id": "502",
        "name": "Mi Bo Vien",
        "price": "$10.50",
        "desc": "Egg noodle soup with beef balls",
        "class": "mi"
    },
    {
        "id": "503",
        "name": "Mi Bo Kho",
        "price": "$10.75",
        "desc": "Egg noodle soup with beef stew",
        "class": "mi"
    },
    {
        "id": "504",
        "name": "Mi Ca Vien",
        "price": "$10.50",
        "desc": "Egg noodle soup with fish balls",
        "class": "mi"
    },
    {
        "id": "505",
        "name": "Mi Do Bien",
        "price": "$11.75",
        "desc": "Egg noodle soup with seafood",
        "class": "mi"
    },
    {
        "id": "601",
        "name": "Bun Thit Nuong",
        "price": "$10.50",
        "desc": "Grilled pork with vermicelli",
        "class": "bun"
    },
    {
        "id": "602",
        "name": "Bun Ga Nuong",
        "price": "$10.50",
        "desc": "Grilled chicken with vermicelli",
        "class": "bun"
    },
    {
        "id": "603",
        "name": "Bun Bo Nuong",
        "price": "$11.50",
        "desc": "Grilled beef with vermicelli",
        "class": "bun"
    },
    {
        "id": "604",
        "name": "Bun Cha Gio",
        "price": "$10.50",
        "desc": "Fried egg-rolls with vermicelli",
        "class": "bun"
    },
    {
        "id": "605",
        "name": "Bun Thit Nuong Cha Gio",
        "price": "$11.50",
        "desc": "Grilled pork & egg-roll with vermicelli",
        "class": "bun"
    },
    {
        "id": "606",
        "name": "Bun Tom Thit Nuong",
        "price": "$11.50",
        "desc": "Grilled shrimp & pork with vermicelli",
        "class": "bun"
    },
    {
        "id": "607",
        "name": "Bun Tom Nuong",
        "price": "$11.50",
        "desc": "Grilled shrimp with vermicelli",
        "class": "bun"
    },
    {
        "id": "608",
        "name": "Bun Dau Hu Chay",
        "price": "$10.50",
        "desc": "Vegetarian fried tofu with vermicelli",
        "class": "bun"
    },
    {
        "id": "701",
        "name": "Com Thit Nuong",
        "price": "$9.99",
        "desc": "Grilled pork with steamed rice",
        "class": "com"
    },
    {
        "id": "702",
        "name": "Com Ga Nuong",
        "price": "$9.99",
        "desc": "Grilled chicken with steamed rice",
        "class": "com"
    },
    {
        "id": "703",
        "name": "Com Bo Nuong",
        "price": "$10.50",
        "desc": "Grilled beef with steamed rice",
        "class": "com"
    },
    {
        "id": "704",
        "name": "Com Suon Nuong",
        "price": "$11.99",
        "desc": "Grilled pork chop with steamed rice",
        "class": "com"
    },
    {
        "id": "705",
        "name": "Com Tom Kho Tau",
        "price": "$10.99",
        "desc": "Marinated shrimp with tomato sauce & steamed rice",
        "class": "com"
    },
    {
        "id": "706",
        "name": "Com Thit Nuong Cha Gio",
        "price": "$11.25",
        "desc": "Grilled pork and egg-roll with steamed rice",
        "class": "com"
    },
    {
        "id": "707",
        "name": "Com Ga Roti (Com Trang/Chien)",
        "price": "$10.50",
        "desc": "Roasted chicken with steamed or fried rice",
        "class": "com"
    },
    {
        "id": "708",
        "name": "Com Bo Luc Lac (Com Trang/Chien)",
        "price": "$12.25",
        "desc": "Beef chuck steak with steamed or fried rice",
        "class": "com"
    },
    {
        "id": "709",
        "name": "Com Ga Luc Lac (Com Trang/Chien)",
        "price": "$12.25",
        "desc": "Chicken chuck steak with steamed or fried rice",
        "class": "com"
    },
    {
        "id": "710",
        "name": "Com Chien Dac Biet",
        "price": "$13.50",
        "desc": "House special fried rice with beef, shrimp, & chicken",
        "class": "com"
    },
    {
        "id": "711",
        "name": "Com Chien Chay",
        "price": "$13.50",
        "desc": "Vegetarian fried rice with tofu & broccoli",
        "class": "com"
    },
    {
        "id": "712",
        "name": "Com Chien Tom",
        "price": "$13.50",
        "desc": "Shrimp fried rice",
        "class": "com"
    },
    {
        "id": "B1",
        "name": "Cafe Den Da (Nong)",
        "price": "$4.75",
        "desc": "Vietnamese black coffee (served hot or cold)",
        "class": "giaikhat"
    },
    {
        "id": "B2",
        "name": "Cafe Sua Da (Nong)",
        "price": "$4.75",
        "desc": "Vietnamese coffee with condensed milk (served cold or hot)",
        "class": "giaikhat"
    },
    {
        "id": "B3",
        "name": "Da Chanh",
        "price": "$3.99",
        "desc": "Freshly squeezed lemonade with ice",
        "class": "giaikhat"
    },
    {
        "id": "B4",
        "name": "Nuoc Dua",
        "price": "$3.99",
        "desc": "Young coconut juice",
        "class": "giaikhat"
    },
    {
        "id": "B5",
        "name": "Nuoc Ngot",
        "price": "$2.25",
        "desc": "Canned soft drink",
        "class": "giaikhat"
    },
    {
        "id": "B6",
        "name": "Tra Da",
        "price": "$2.25",
        "desc": "Freshly brewed iced tea",
        "class": "giaikhat"
    },
    {
        "id": "B7",
        "name": "Tra Nong",
        "price": "$2.25",
        "desc": "Hot tea",
        "class": "giaikhat"
    },
    {
        "id": "",
        "name": "Milk Tea - Tra Sua",
        "price": "$4.75",
        "desc": "Milk Tea, Thai Milk Tea, Jasmine Milk Tea, Coffee Milk Tea, Vanilla Milk Tea, Taro Milk Tea, Strawberry Milk Tea, Mango Milk Tea, Honeydew Milk Tea",
        "class": "tapiocadrinks"
    },
    {
        "id": "",
        "name": "Jasmine Green Tea - Tra Xanh",
        "price": "$4.25",
        "desc": "Jasmine Green Tea, Green Apple Jasmine Green Tea, Mango Jasmine Green Tea, Strawberry Jasmine Green Tea, Peach Jasmine Green Tea, Passion Fruit Jasmine Green Tea",
        "class": "tapiocadrinks"
    },
    {
        "id": "",
        "name": "Smoothies - Sinh To",
        "price": "$4.75",
        "desc": "Avocado, Banana, Honeydew, Cantaloupe, Lychee, Mango, Papaya, Peach, Pineapple, Green Apple, Kiwi, Passion Fruit, Blueberry, Strawberry, Strawberry Banana, Strawberry Mango, Strawberry Kiwi, Strawberry Cantaloupe, Taro, Coconut, Mocha, Cappuccino",
        "class": "tapiocadrinks"
    },
    {
        "id": "",
        "name": "Slushies - Da Xay",
        "price": "$4.25",
        "desc": "Honeydew, Cantaloupe, Lychee, Mango, Peach, Pineapple, Green Apple, Kiwi, Passion Fruit, Blueberry, Strawberry, Strawberry Mango, Strawberry Kiwi, Strawberry Cantaloupe",
        "class": "tapiocadrinks"
    }
]