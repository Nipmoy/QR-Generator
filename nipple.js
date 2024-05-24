console.log("hellow");
const fs =require("fs");


const content = 'Some content!';

fs.writeFile("message.txt", content, (err) => {
  if (err) throw err;
    console.log("the file saved");
  }
);
