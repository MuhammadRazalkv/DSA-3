class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  isEmpty () {
    return this.root == null
  }

  insert (value) {
    const node = new Node(value)
    if (this.root == null) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode (root, node) {
    if (node.value < root.value) {
      if (root.left == null) {
        root.left = node
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      if (root.right == null) {
        root.right = node
      } else {
        this.insertNode(root.right, node)
      }
    }
  }

  //! Depth first search
  //* Time complexity of traversal is O(n) because it needs to travel all the element

  preOrder (root = this.root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder (root = this.root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  postOrder (root = this.root) {
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }

  //! Breadth first search

  levelOrder () {
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      let curr = queue.shift()
      console.log(curr.value)
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }
  }

  // findMin(){
  //     let curr = this.root
  //     while(curr.left){
  //         curr = curr.left
  //     }
  //     console.log(curr.value);

  // }

  // findMax(){
  //     let curr = this.root
  //     while(curr.right){
  //         curr = curr.right
  //     }
  //     console.log(curr.value);

  // }

  min (root = this.root) {
    if (!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }

  max (root = this.root) {
    if (!root.right) {
      return root.value
    } else {
      return this.max(root.right)
    }
  }

  search (root, value) {
    if (!root) {
      return false
    }
    if (root.value === value) {
      return true
    } else if (value < root.value) {
      return this.search(root.left, value)
    } else {
      return this.search(root.right, value)
    }
  }

  delete (value) {
    this.deleteNode(this.root, value)
    // return this.root
  }

  deleteNode (root, value) {
    if (root == null) {
      return null
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value)
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value)
    } else {
      //* We need to check three cases
      //* 1) When the node is the leaf / when the node don't have children
      if (root.left == null && root.right == null) {
        return null
      }

      //* 2) When the node has one child
      if (root.left == null) {
        return root.right
      } else if (root.right == null) {
        return root.left
      }

      //* 3) When the node has two child
      //* Find the in-order successor (smallest value in the right subtree)
      const minValue = this.min(root.right)
      root.value = minValue
      //* Delete the in-order successor
      root.right = this.deleteNode(root.right, minValue)
    }
   return root 
  }

  secondLargest(){
    let curr = this.root
    while(curr){
      
      if (curr.right && !curr.right.right && !curr.right.left) {
        return curr.value
      }
      if (curr.right == null && curr.left) {
        return this.max(curr.left)
      }
      curr = curr.right
    }

   
  }
  secondSmallest(){
    let curr = this.root 
    while(curr){
      if(curr.left && !curr.left.left && !curr.left.right){
            return curr.value
        }
        if(curr.left == null && curr.right){
            return this.min(curr.right)
        }
        curr = curr.left 
    }
}
}

const tree = new BinarySearchTree()
tree.insert(100)
tree.insert(15)
tree.insert(37)
tree.insert(48)
tree.insert(77)
tree.insert(1)
tree.insert(120)
tree.insert(2)
tree.insert(37)
tree.insert(49)


// console.log(tree.max());


// console.log(tree.secondLargest());

// tree.inOrder()
console.log(tree.secondSmallest());
