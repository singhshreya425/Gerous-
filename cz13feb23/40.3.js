// Delete last node of singly linked list
// Data StructuresLinked list

// Given a [info message="A singly linked list is a set of dynamically allocated nodes, arranged in such a way that each node contains one value and one pointer to another node. The pointer always points to a next member of the list in one direction. If the pointer is NULL, then it is the last node in the list."]Singly Linked List[/info], write a function to delete a last node of the linked list.

 

// Write a function:

//         struct node * solution(struct node *head)

 

// that accept a pointer to the head node of linked list. The function should delete the last node of linked list and return a pointer to the head node of the linked list. If a list becomes empty, return NULL pointer.

 

// Input

//     7
//     2 6 4 7 8 2 9

 

//     where

// First line represents a number of elements in the linked list.
// Second line represents elements in the linked list.
 

// Output

//     2 6 4 7 8 2

 

// The output display updated linked list after removal of the last node.

 

// Assume that,

// Structure “struct node” is already defined.
// Singly Linked List already created.
function solution(head) {
    //Write your solution here
      var curr=head;
      while(curr.next.next!=null){
          curr=curr.next
      }
      curr.next=null
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
      let curr=head
      for(let i=1;i<a;i++){
          curr.next=new ListNode(arr[i])
          curr=curr.next
      }
      var res = solution(head);
      let current=res
      let ans=[]
      while(current){
          ans.push(current.val)
          current=current.next
      }
      console.log(ans.join(" "));
  }
  
  