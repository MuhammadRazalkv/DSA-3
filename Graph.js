//! This implementation use the Adjacency List

class Graph {
  constructor () {
    this.adjacencyList = {}
  }
  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge (v1, v2) {
    if (!this.adjacencyList[v1]) {
      this.addVertex(v1)
    }
    if (!this.adjacencyList[v2]) {
      this.addVertex(v2)
    }
    this.adjacencyList[v1].add(v2)
    this.adjacencyList[v2].add(v1)
  }

  hadEdge (v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1)
  }

  deleteEdge (v1, v2) {
    this.adjacencyList[v1].delete(v2)
    this.adjacencyList[v2].delete(v1)
  }

  removeVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      return
    }
    for (const adjacencyList of this.adjacencyList[vertex]) {
      this.deleteEdge(vertex, adjacencyList)
    }
    delete this.adjacencyList[vertex]
  }

  display () {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]])
    }
  }

  // bfs(start){
  //     let queue = [start]
  //     let result = []
  //     let visited = new Set()
  //     visited.add(start)
  //     while(queue.length){
  //         let vertex = queue.shift()
  //         result.push(vertex)

  //         this.adjacencyList[vertex].forEach(val => {
  //             if (!visited.has(val)) {
  //                 visited.add(val)
  //                 result.push(val)
  //             }
  //         });
  //     }
  //     return result
  // }
  bfs (start) {
    const queue = [start]
    const result = []
    const visited = new Set()
    visited.add(start)

    while (queue.length) {
      const vertex = queue.shift()
      result.push(vertex)

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      })
    }

    return result
  }

  dfsIterative (start) {
    const stack = [start]
    const result = []
    const visited = new Set()
    visited.add(start)

    while (stack.length) {
      const vertex = stack.pop()
      result.push(vertex)

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          stack.push(neighbor)
        }
      })
    }

    return result
  }

  //! To find the  shortest path between to vertices 
  shortestPath (start, target) {
    const queue = [[start]]
    const visited = new Set()
    visited.add(start)

    while (queue.length > 0) {
      const path = queue.shift() // Get the first path from the queue
    
      const vertex = path[path.length - 1] // Get the last vertex from the path

      if (vertex === target) {
        return path // Return the path if it reaches the target
      }

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
            const newPath = [...path, neighbor] // Create a new path including the neighbor
            queue.push(newPath) // Add the new path to the queue
        } 
      })
    }

    return null // Return null if no path is found
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('D', 'E')
graph.addEdge('C', 'E')

graph.display()
// graph.removeVertex('B')
// graph.display()
// console.log(graph.bfs('A'));
// console.log(graph.dfsIterative('A'));
console.log(graph.shortestPath('A', 'E'))
