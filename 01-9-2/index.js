const btn = document.getElementById("btn1");
btn.onclick = function click() {
  //九九表の作成
  for (let i = 1; i < 10; i++) {
    let arr = "";
    for (let j = 1; j < 10; j++) {
      arr += i * j;
      arr += " ";
    }
    console.log(arr);
  }
};

console.log("aa");
