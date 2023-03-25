const roads = [
	"Alice's House-Bob's House",
	"Alice's House-Cabin",
	"Alice's House-Post Office",
	"Bob's House-Town Hall",
	"Daria's House-Ernie's House",
	"Daris's House-Town Hall",
	"Ernie's House-Grete's House",
	"Grete's House-Farm",
	"Grete's House-Shop",
	'Marketplace-Farm',
	'Marketplace-Post Office',
	'Marketplace-Shop',
	'Marketplace-Town Hall',
	'Shop-Town Hall'
];

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}

	move(destination) {
		if (!roadGraph[this.place].includes(destination)) {
			return this;
		}
		let parcels = this.parcels
			.map((p) => {
				if (p.place != this.place) return p;
				return { place: destination, address: p.address };
			})
			.filter((p) => p.place != p.address);
		return new VillageState(destination, parcels);
	}
}

function buildGraph(edges) {
	let graph = Object.create(null);
	function addEdge(from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}
	for (let [from, to] of edges.map((e) => e.split('-'))) {
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}

const roadGraph = buildGraph(roads);

let first = new VillageState('Post Office', [{ place: 'Post Office', address: "Alice's House" }]);

let second = first.move("Alice's House");

console.log(first);
console.log(second);
