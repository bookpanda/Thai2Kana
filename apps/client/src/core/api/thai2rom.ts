export async function fetchData(text: string) {
  text = text.replace(/[คฆฃฅ]/, "ก");
  text = text.replace(/[ผพภ]/, "ก");
  return await fetch(`https://Thai2Rom.idhibhat-pankam.repl.co/?input=${text}`)
    .then((response) => response.json())
    .then((data) => {
      let a = data.text;
      if (a.search(/[t|d]\b/) !== -1) {
        a += "o";
      } else if (a.search(/[f|g|k|l|m|p|s|ts|r|v|z]\b/) !== -1) {
        a += "u";
      }

      return a;
    });
}
