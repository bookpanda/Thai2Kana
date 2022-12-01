export async function fetchData(text: string) {
  return await fetch(
    `https://Thai2Rom.idhibhat-pankam.repl.co/?input=${text}`
  ).then((response) => response.json());
}
