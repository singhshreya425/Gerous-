// Delete first node of doubly linked list
// Linked listDoubly Linked ListData Structures

// Given a [info message="A doubly linked list is a set of dynamically allocated nodes, arranged in such a way that each node contains one value and two pointers. The one pointer points to the next member of the list and another to the previous one. If the next pointer is NULL, then it is the last node in the list and the previous pointer is NULL, then it is the first node in the list."]Doubly Linked List[/info], delete the first node.

 

// Write a function:
//         struct node * solution(struct node * H)

 

// that accept a pointer to the first node in linked list H of type “struct node”. The function should delete the first node of linked list and returns a new pointer to the HEAD node. If a list is empty return NULL pointer.

 

// Input
//     7
//     2 6 4 7 8 2 9

 

//     where, 

// The first line represents a number of elements in the linked list.
// The second line represents elements in the linked list.
 

// Output
//     6 4 7 8 2 9
//     9 2 8 7 4 6

 

// The output displays all the elements in forward and reverse order both.

 

// Assume that,

// Structure “struct node” is already defined. 
// The linked list is already created based on input provided.
// Number of elements in the linked list is within the range 0 to 1000.
class Node{
    constructor(val){
        this.val=val;
        this.prev=null;
        this.next=null;
    }
}

function solution(a,head) {
  //Write your solution here
    if(a<=1)return "No element present"
    head=head.next
    head.prev=null
    let res=""
    let curr=head
    while(curr!==null){
        res+=curr.val+" "
        curr=curr.next
    }
    while(head.next!==null)
        head=head.next
    let res1=""
    curr=head
    while(curr!==null){
        res1+=curr.val+" "
        curr=curr.prev
    }
    console.log(res)
    console.log(res1)
    return ""
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().trim().split(" ")
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

    var res = solution(a,head);
    console.log(res);
}

