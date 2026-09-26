# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
          return solution(head)

def repeatedValue(cur):
    return cur.next and cur.val == cur.next.val

def solution(head):
    if not head: return None
    # ListNode() value cannot be same as head, or else we have false repetition
    specialHead = ListNode(head.val - 1, head)
    # prev is part of the final list, cur may be removed
    prev, cur = specialHead, head

    while cur:
      # each iteration skips all nodes with repeated values
        while cur and repeatedValue(cur):
            repVal = cur.val
            # skip all nodes with value repVal
            while cur and cur.val == repVal:
                cur = cur.next

        prev.next = cur
        prev = cur
        if cur: cur = cur.next


    # head node not removed, still available at the end, here
    # we know this node is not repeated, that's why he add it.
    res = specialHead.next
    del specialHead
    
    return res