# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        return solution(head)

def solution(head):
    specialHead = ListNode(-1, head)
    prev = specialHead # prev == predecessor
    cur = head
    while cur and cur.next: # cur and cur.next are NOT null
        succ = cur.next.next # cur.next.next can be null
        prev.next = cur.next
        cur.next.next = cur
        cur.next = succ
        if succ: 
            prev = cur # advancing, so we must update the old current
            cur = succ # advancing

    return specialHead.next