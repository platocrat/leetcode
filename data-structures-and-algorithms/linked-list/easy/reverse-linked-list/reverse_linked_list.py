# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        return solution(head)

def solution(head):
    newHead = None
    while head:
        tmp = head
        head = head.next
        tmp.next = newHead
        newHead = tmp
        
    return newHead