async function getData(url:string) {
  // API luar
  const res = await fetch(url, {
    cache: "no-store",
  });

  // API Sendiri
  // const res = await fetch("http://localhost:3000/api/market", {
  //   cache: "no-store",
  //   next: {
  //     // revalidate: 10, //revalidate auto

  //     //revalidate manual
  //     tags:["market"]
  //   },
  // });

  if (!res.ok) {
    throw new Error("Failed data fetching!");
  }

  return res.json();
}

export default getData;
