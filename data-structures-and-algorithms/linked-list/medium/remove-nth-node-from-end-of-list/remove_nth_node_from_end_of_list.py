# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        return solution(head, n)

# edge case: single node needs to be removed

def solution(head, n):
    specialHead = ListNode(-1, head)
    l, r = specialHead, specialHead
    for i in range(n+1):
        r = r.next
    while r: # while r is not null
        l = l.next
        r = r.next
    l.next = l.next.next

    return specialHead.next