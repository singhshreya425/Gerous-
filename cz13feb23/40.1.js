/*Reverse a linked list
Tags:	Data StructuresLinked list
Given a Singly Linked List, reverse the linked list. 
 

Write a function: 
        struct node* solution(struct node * H) 

 

that accept a pointer to the first node in linked list H of type “struct node”. The function should reverse the given linked list and return a pointer to the first element in linked list. 

 

Input 
    5 
    10 20 30 40 50 

 

    where, 

First line represents a number of elements in the linked list. 
Second line represents elements in the linked list. 
 

Output 
    50 40 30 20 10 

 

Assume that, 

Structure “struct node” is already defined.
Size of the linked list is between 0 and 32,767.*/

class Node{
    constructor(val){
        this.val=val
        this.next=null
    }
}

function solution(a,head) {
  //Write your solution here
  if(a==0)return "no element present"
    let pev=null,nex=null,curr=head
    while(curr){
        nex=curr.next
        curr.next=pev
        pev=curr
        curr=nex
    }
    let res=""
    while(pev){
        res+=pev.val+" "
        pev=pev.next
    }
    return res
}


function main() {
    var a = parseInt(readLine());
    var arr=readLine().trim().split(" ")
    let head=null
    let tail=null
    for(let i=0;i<a;i++){
        let curr=new Node(arr[i])
        if(!head){
            head=curr
            tail=curr
        }else{
            tail.next=curr
            tail=tail.next
        }
    }

    var res = solution(a,head);
    console.log(res);
}

