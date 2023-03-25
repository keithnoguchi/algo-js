// Graph
//
// # Run
//
// ```
// $ node main.js
// [Object: null prototype] {
//   "Alice's House": [ "Bob's House", 'Cabin', 'Post Office' ],
//   "Bob's House": [ "Alice's House", 'Town Hall' ],
//   Cabin: [ "Alice's House" ],
//   'Post Office': [ "Alice's House", 'Marketplace' ],
//   'Town Hall': [ "Bob's House", "Daris's House", 'Marketplace', 'Shop' ],
//   "Daria's House": [ "Ernie's House" ],
//   "Ernie's House": [ "Daria's House", "Grete's House" ],
//   "Daris's House": [ 'Town Hall' ],
//   "Grete's House": [ "Ernie's House", 'Farm', 'Shop' ],
//   Farm: [ "Grete's House", 'Marketplace' ],
//   Shop: [ "Grete's House", 'Marketplace', 'Town Hall' ],
//   Marketplace: [ 'Farm', 'Post Office', 'Shop', 'Town Hall' ]
// }
// ```

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
	"Marketplace-Farm",
	"Marketplace-Post Office",
	"Marketplace-Shop",
	"Marketplace-Town Hall",
	"Shop-Town Hall"
];

function buildGraph(edges) {
	// null object, no prototypes.
	let graph = Object.create(null);
	function addEdge(from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}
	for (let [from, to] of edges.map(e => e.split("-"))) {
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);
