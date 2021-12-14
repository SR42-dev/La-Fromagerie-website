const products = [
  {
    name: "Emmental",
    imageUrl:
     "https://www.seriouseats.com/thmb/dFH78DVE36UZUZDprpmUniVnlwk=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20110812-murrays-cheese-emmenthaler-01-b627688feeae4197802c4916a3154091.jpg",
    description: "Switzerland ",
    milk:"Cow",
    longdescription:
    "Emmental is what many people think of when they hear \"Swiss cheese\" (yes, holes and all). It's is considered an \"Alpine-Style\" or \"Mountain\" cheese, meaning it originated from the milk of cows that are led up the Alps to graze over multiple seasons, and its curds are cooked and pressed together firmly. The holes you find are bubbles of carbon dioxide gas created as the bacterium Propionibacterium freudenreichii consumes lactic acid. This cheese has a certain sweetness with a piquancy that hits the back of the tongue on the finish. What is more, like all Alpine cheeses, it is a great melter. ",
    price: 499,
    countInStock: 10,
  },
  {
    name: "Parmigiano-Reggiano",
    imageUrl:"https://www.seriouseats.com/thmb/Nm_TZ8JBbvLVJYaKWSpDa4y48WI=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20110812-murrays-cheese-parm-regg-01-f1293909ad1c4a8396e27bf11352a1ef.jpg",
    description:"Italy ",
    longdescription:"There are a number of hard cheeses on the market that are sold under the name \"parmesan.\" These are not to be confused with true Parmigiano-Reggiano, a protected cheese that can only be produced in Emilia-Romagna and Lombardia in Italy. Aged for a minimum of 12 months and a maximum of 36, it's a hard, dry, crumbly cheese that has great crunch and deep caramel-y, nutty flavors. ",
    milk:"Sheep",
    price: 700,
    countInStock: 25,
  },
  {
    name: "Edam",
    imageUrl:
      "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:
      "Switzerland",
    milk:"Cow",
    longdescription:
    "very mild flavour, slightly salty or nutty, and almost no smell when compared to other cheeses.As the cheese ages, its flavour sharpens, and it becomes firmer.Edam may have as little as 28% fat in dry matter. Modern Edam is softer than other cheeses, such as Cheddar cheese, due to its low fat content.Mild Edam goes well with fruit such as peaches, melons, apricots, and cherries. Aged Edam is often eaten with traditional \"cheese fruits\" like pears and apples. Like most cheeses, it is commonly eaten on crackers and bread, and may be eaten with crackers following the main course of a meal as a dessert of \"cheese and biscuits\". Pinot gris, dry Riesling, semidry Riesling, sparkling wine, Chardonnay, and Shiraz/Syrah are some recommended wines to accompany this cheese.[6]",
    price: 199,
    countInStock: 10,
  },
  
  {
    name: "Gouda",
    imageUrl:"https://www.seriouseats.com/thmb/fGivL4LlQrwgCHxxyNTujTqpx8k=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20110812-murrays-cheese-gouda-01-03d16f2b638b43a4b792080866f601ee.jpg",
    description:"Netherlands",
    longdescription:"Gouda is a semi-hard to hard cow's milk cheese from Holland. Like Cheddar, its quality and flavor can vary wildly from the mild, creamy wax-coated lunchbox versions of our youth to those specimens that are hard, crumbly, and deeply flavorful. Long-aged goudas will have a crunchy texture due to crystals of concentrated calcium lactate or and the amino acid tyrosine that form as the cheese loses moisture, just like a good parmesan.",
    milk:"Cow",
    price: 300,
    countInStock: 5,
  },
  {
    name: "Edam",
    imageUrl:
      "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:
      "Switzerland",
    milk:"Cow",
    longdescription:
    "very mild flavour, slightly salty or nutty, and almost no smell when compared to other cheeses.As the cheese ages, its flavour sharpens, and it becomes firmer.Edam may have as little as 28% fat in dry matter. Modern Edam is softer than other cheeses, such as Cheddar cheese, due to its low fat content.Mild Edam goes well with fruit such as peaches, melons, apricots, and cherries. Aged Edam is often eaten with traditional \"cheese fruits\" like pears and apples. Like most cheeses, it is commonly eaten on crackers and bread, and may be eaten with crackers following the main course of a meal as a dessert of \"cheese and biscuits\". Pinot gris, dry Riesling, semidry Riesling, sparkling wine, Chardonnay, and Shiraz/Syrah are some recommended wines to accompany this cheese.[6]",
    price: 199,
    countInStock: 10,
  },
  {
    name: "Edam",
    imageUrl:
      "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description:
      "Switzerland",
    milk:"Cow",
    longdescription:
    "very mild flavour, slightly salty or nutty, and almost no smell when compared to other cheeses.As the cheese ages, its flavour sharpens, and it becomes firmer.Edam may have as little as 28% fat in dry matter. Modern Edam is softer than other cheeses, such as Cheddar cheese, due to its low fat content.Mild Edam goes well with fruit such as peaches, melons, apricots, and cherries. Aged Edam is often eaten with traditional \"cheese fruits\" like pears and apples. Like most cheeses, it is commonly eaten on crackers and bread, and may be eaten with crackers following the main course of a meal as a dessert of \"cheese and biscuits\". Pinot gris, dry Riesling, semidry Riesling, sparkling wine, Chardonnay, and Shiraz/Syrah are some recommended wines to accompany this cheese.[6]",
    price: 199,
    countInStock: 10,
  },
  {
    name: "Gouda",
    imageUrl:"https://www.seriouseats.com/thmb/fGivL4LlQrwgCHxxyNTujTqpx8k=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20110812-murrays-cheese-gouda-01-03d16f2b638b43a4b792080866f601ee.jpg",
    description:"Netherlands",
    longdescription:"Gouda is a semi-hard to hard cow's milk cheese from Holland. Like Cheddar, its quality and flavor can vary wildly from the mild, creamy wax-coated lunchbox versions of our youth to those specimens that are hard, crumbly, and deeply flavorful. Long-aged goudas will have a crunchy texture due to crystals of concentrated calcium lactate or and the amino acid tyrosine that form as the cheese loses moisture, just like a good parmesan.",
    milk:"Cow",
    price: 300,
    countInStock: 5,
  },
  {
    name: "Gouda",
    imageUrl:"https://www.seriouseats.com/thmb/fGivL4LlQrwgCHxxyNTujTqpx8k=/1088x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20110812-murrays-cheese-gouda-01-03d16f2b638b43a4b792080866f601ee.jpg",
    description:"Netherlands",
    longdescription:"Gouda is a semi-hard to hard cow's milk cheese from Holland. Like Cheddar, its quality and flavor can vary wildly from the mild, creamy wax-coated lunchbox versions of our youth to those specimens that are hard, crumbly, and deeply flavorful. Long-aged goudas will have a crunchy texture due to crystals of concentrated calcium lactate or and the amino acid tyrosine that form as the cheese loses moisture, just like a good parmesan.",
    milk:"Cow",
    price: 300,
    countInStock: 5,
  },
  
  /*
  {
    name: "",
    imageUrl:"",
    description:"",
    price: 749,
    countInStock: 8,
  },
  */
];

module.exports = products;
