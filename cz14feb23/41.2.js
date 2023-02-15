// Insert node in doubly linked list at beginning
// Linked listDoubly Linked ListData Structures

// Given a [info message="A doubly linked list is a set of dynamically allocated nodes, arranged in such a way that each node contains one value and two pointers. The one pointer points to the next member of the list and another to the previous one. If the next pointer is NULL, then it is the last node in the list and the previous pointer is NULL, then it is the first node in the list."]Doubly Linked List[/info], insert a new node at the beginning.

 

// Write a function:
//         struct node * solution(struct node * H, int E)

 

// that accept a pointer to the first node in linked list H of type “struct node” and the value of the node to be inserted E of type integer. The function should create a new node with value E and insert it at the beginning of the list.

 

// Input
//    7
//    2 6 4 7 8 2 9
//    10

 

//     where, 

// The first line represents a number of elements in the linked list.
// The second line represents elements in the linked list.
// The third line represents value to be inserted.
 

// Output
//    10 2 6 4 7 8 2 9 
//     9 2 8 7 4 6 2 10 

 

// The output displays all the elements in forward and reverses order both.

 

// Assume that,

// Structure “struct node” is already defined. 
// The linked list is already created based on input provided.
// Number of elements in the linked list is within the range 0 to 1000.
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}
class linklist{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode=new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            this.tail.next=newNode
            newNode.prev=this.tail;
            this.tail=newNode
        }
        this.length++
    }
}

function solution(a,arr,b) {
  //Write your solution here
    let list =new linklist()
    list.push(b)
    for(let i=0;i<a;i++){
        list.push(arr[i])
    }
    let st=""
    let curr=list.head;
    while(curr){
        st+=curr.val+" "
        curr=curr.next
    }
    let s=""
    let cur=list.tail;
    while(cur){
        s+=cur.val+" "
        cur=cur.prev
    }
    return `${st}\n${s}`
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().split(" ").map(Number)
    var b=parseInt(readLine())

    var res = solution(a,arr,b);
    console.log(res);
}

