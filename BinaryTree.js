//! Time complexity of insertion in a binary tree is O(log n) because :-
   //!  we only need to check the half part of the tree to find the position
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if (this.root == null) {
            this.root = newNode
        } else {
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(parent,newNode){
        if (newNode.value < parent.value) {
            if (parent.left == null) {
                parent.left = newNode
            }else{
                this.insertNode(parent.left,newNode)
            }
        } else {
            if (parent.right == null) {
                parent.right = newNode
            } else {
                this.insertNode(parent.right , newNode)
            }
        }
    }

    inOrder(node = this.root){
       if (node !== null) {
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right);
       }
    }
}

const tree = new Tree()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(40)
tree.insert(50)
tree.inOrder()
