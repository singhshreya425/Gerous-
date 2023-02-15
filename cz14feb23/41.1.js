// Insert node in doubly linked list at end
// Tags:	Linked listData Structures
// Given a Doubly Linked List, insert a new node at the end.

 

// Write a function:
//         struct node * solution(struct node * H, int E)

 

// that accept a pointer to the first node in linked list H of type “struct node” and the value of the node to be inserted E of type integer. The function should create a new node and insert it at the end of the list.

 

// Input
//     7
//     2 6 4 7 8 2 9
//     10

 

//     where, 

// The first line represents a number of elements in the linked list.
// The second line represents elements in the linked list.
// The third line represents value to be inserted.
 

// Output
//     2 6 4 7 8 2 9 10
//     10 9 2 8 7 4 6 2

 

// The output displays all the elements in forward and reverse order both.

 

// Assume that,

// Structure “struct node” is already defined. 
// The linked list is already created based on input provided.
// Number of elements in the linked list is within the range [ 0 to 1000 ].
class Node {
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}
function solution(a,head,c) {
  //Write your solution here
    let res=""
    curr=head;
    while(curr!==null){
        res+=curr.val+" "
        curr=curr.next
    }
    while(head.next!==null)head=head.next
    let res1=""
    curr=head
    while(curr!==null){
        res1+=curr.val+" "
        curr=curr.prev
    }
    console.log(res)
    console.log(res1)
    return""
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().trim().split(" ")
    var c=parseInt(readLine())
    arr.push(c)
    let head=null,tail=null
    for(let i in arr){
        let curr=new Node(arr[i])
        if(!head){
            head=curr
            tail=curr
        }else{
            tail.next=curr
            curr.prev=tail
            tail=curr
        }
    }

    var res = solution(a,head,c);
    console.log(res);
}

