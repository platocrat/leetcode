# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        return solution(head, k)

def hasKNodes(head, k):
    for i in range(k):
        if not head: return False
        head = head.next
    return True

# Let L be the linked list starting at head
# Reverses the first k elements in head, and
# Returns the head of the reversed list, and the head of the rest of L
def reverseSection(head, k):
    newHead = None
    for i in range(k):
        tmp = head
        head = head.next
        tmp.next = newHead
        newHead = tmp
    return newHead, head

def solution(head, k):
    specialHead = ListNode(-1, head)
    prev = specialHead
    cur = head
    while hasKNodes(cur, k):
        # reverse next k elements
        reverseHead, restHead = reverseSection(cur, k)
        prev.next = reverseHead
        cur.next = restHead
        prev = cur
        cur = restHead

    return specialHead.next