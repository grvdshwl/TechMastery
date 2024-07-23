//* Minimum Fuel Cost to Report to the Capital
function minimumFuelCost(roads, seats) {
  const adjacenyList = {};

  for (let [source, destination] of roads) {
    adjacenyList[source] = adjacenyList[source] || [];
    adjacenyList[destination] = adjacenyList[destination] || [];
    adjacenyList[source].push(destination);
    adjacenyList[destination].push(source);
  }

  let fuel = 0;

  function dfs(node, parent) {
    let passengers = 0;
    let children = adjacenyList[node];
    if (children) {
      for (let child of children) {
        if (child !== parent) {
          const passengesCount = dfs(child, node);
          passengers += passengesCount;
          fuel += Math.ceil(passengesCount / seats);
        }
      }
    }

    return passengers + 1;
  }

  dfs(0, -1);

  return fuel;
}
