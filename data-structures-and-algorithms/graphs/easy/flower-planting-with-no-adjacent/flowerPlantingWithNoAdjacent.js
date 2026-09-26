class Garden {
  constructor(n) {
    this.no = n
    this.neighbors = []
    this.flower = null // analogous to graph color
  }

  connectTo(garden) {
    if (this.neighbors.includes[ garden ]) {
      return
    }

    this.neighbors.push(garden)
  }

  canPlate(flower) {
    const isDuplicateFlower = (n) => n.flower != flower
    return this.flower == null && this.neighbors.every(isDuplicateFlower)
  }

  hasFlower() {
    return this.flower != null
  }

  plate(flower) {
    this.flower = flower
  }
}
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj(N, paths) {
  // since max input is 1000, we know that worst-case time complexity
  // will be O(n^2)
  const gardens = new Map();
  for (let i = 1; i <= N; i++) {
    gardens.set(i, new Garden(i));
  }
  for (const [ g1, g2 ] of paths) {
    gardens.get(g1).connectTo(gardens.get(g2));
    gardens.get(g2).connectTo(gardens.get(g1));
  }
  const flowers = [];
  for (let [ n, garden ] of gardens) {
    let flower = 1;
    while (!garden.hasFlower()) {
      if (garden.canPlate(flower)) {
        garden.plate(flower);
        flowers.push(flower);
      } else {
        flower++;
      }
    }
  }
  return flowers;
}

const gardenNoAdj = (n, paths) => {
  const graph = Array(n)
  paths.forEach(([u ,v]) => {
    u -= 1
    v -= 1
    graph[u] = graph[u] || []
    graph[v] = graph[v] || []
    graph[u].push(v)
    graph[v].push(u)
  })
}