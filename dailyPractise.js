class Node {
  constructor (value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BST {
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

  //! DFS
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

  //   search (root = this.root, value) {
  //     if (!root) {
  //       return false
  //     }
  //     if (root.value === value) {
  //       return true
  //     } else if (value < root.value) {
  //       return this.search(root.left, value)
  //     } else {
  //       return this.search(root.right, value)
  //     }
  //   }
  search (root, value) {
    if (!root) {
      console.log(`Value ${value} not found`)
      return false
    }
    console.log(`Checking node with value ${root.value}`)
    if (root.value === value) {
      console.log(`Value ${value} found`)
      return true
    } else if (value < root.value) {
      return this.search(root.left, value)
    } else {
      return this.search(root.right, value)
    }
  }

  min(root = this.root){
    let curr =  root
    while(curr.left){
      curr = curr.left
    }
    return curr.value
  }

  max(){
    let curr = this.root
    while(curr.right){
      curr = curr.right
    }
    return curr.value
  }

  delete(value){
    this.deleteNode(this.root,value)
  }
  deleteNode(root,value){
    if (root == null) {
      return null
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left,value)
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right,value)
    }else{
      if (root.left == null && root.right == null ) {
        return null
      }

      if (root.left == null) {
        return root.right
      } else if (root.right == null){
        return root.left
      }


      const minValue = this.min(root.right)
      root.value = minValue
      root.right = this.deleteNode(root.right,minValue)
    }
    return root
  }
}

const bst = new BST()
bst.insert(10)
bst.insert(33)
bst.insert(100)
bst.insert(5)
bst.insert(4)
bst.insert(3)
bst.insert(1)

bst.inOrder()
// console.log(bst.search(bst.root, 999))
bst.delete(1)
console.log('   ');
// bst.inOrder()
bst.inOrder()


// bst.preOrder()
// bst.postOrder()

