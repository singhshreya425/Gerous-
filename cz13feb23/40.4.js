/*Delete head node in singly linked list
Tags:	Linked listData Structures
Given a Singly Linked List, delete the head node of linked list.

 

Write a function:
        struct node * solution(struct node *head)

 

that accept a pointer to the head node of linked list. The function should delete the head node of linked list and return a pointer to the new head node of the linked list. If a list becomes empty, return NULL pointer.

 

Input
    7
    2 6 4 7 8 2 9

 

    where,

The first line represents a number of elements in the linked list.
The second line represents elements in the linked list.
 

Output
    6 4 7 8 2 9

 

The output display updated linked list after removal of the first node. 

 

Assume that,

Structure “struct node” is already defined.
Singly Linked List already created.*/

function solution(head) {
    //Write your solution here
      head=head.next
      return head
  }
  
  
  function main() {
      var a = parseInt(readLine());
      if(a==0){
          console.log("no element present")
          return
      }
      var arr=readLine().split(" ").map(Number)
      if(arr.length==1){
          console.log("no element present")
          return
      }
      function ListNode(val){
          this.val=val;
          this.next=null
      }
      var head=new ListNode(arr[0])
      var curr=head
      for(let i=1;i<a;i++){
          curr.next=new ListNode(arr[i])
          curr=curr.next
      }
  
      var res = solution(head);
      var current=res
      var ans=[];
      while(current){
          ans.push(current.val)
          current=current.next
      }
      console.log(ans.join(" "));
  }
  
  