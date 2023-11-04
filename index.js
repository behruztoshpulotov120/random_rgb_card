document.addEventListener("click", function () {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);

  let e = Math.floor(Math.random() * 2);
  let f = Math.floor(Math.random() * 2);
  document.body.style.backgroundColor = `rgb(${a},${b},${c})`;

  let div = document.getElementById("div");
  div.innerHTML = `<h1 id="one">rgb(${a},${b},${c})</h1> <button style="background-color: rgb(${a},${b},${c});" id="btn" >Copy</button>`;

  div.style.backgroundColor = `rgb(${a},${b},${c})`;
  div.style.boxShadow = `0 -1px ${a + f}px #fff, 0 -2px 10px #ff0, 0 -10px ${a + b}px #ff${a, b, c, e}, 0 -18px ${a + b}px rgb(${a / 10},${b / 10},${c / 10}), 0 8px ${a + b}px ${a + b}px rgba(${a},${b},${c},0)`;
  console.log(div);


  document.body.appendChild(div);
  let copyButton = div.querySelector("#btn");
  let h1Text = div.querySelector("#one").textContent;

  copyButton.addEventListener("click", function () {
    const tempInput = document.createElement("input");
    tempInput.value = h1Text;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    

    document.body.removeChild(tempInput);
    copyButton.innerText = "Copied!";
    
    setTimeout(function () {
      copyButton.innerText = "Copy";
    }, 1000);
  });
});
