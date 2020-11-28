class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> List[str]:
        return solution(A, B)

def solution(A, B):
    wordsA = A.split(' ')
    wordsB = A.split(' ')
    allWords = wordsA + wordsB # Find all unique words in allWords
    word2count = dict()
    for word in allWords:
        if word not in word2count:
            word2count[word] = 1
        else:
            word2count[word] += 1

    return [word for word in word2count if word2count[word] == 1]