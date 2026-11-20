class TrieNode:
    def __init__(self):
        self.end = False
        self.children = {}
class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        cur = self.root
        for w in word:
            if w not in cur.children:
                cur.children[w] = TrieNode()
            
            cur = cur.children[w]
        cur.end = True

    def search(self, word: str) -> bool:
        def dfs(cur, i):
            for j in range(i, len(word)):
                c = word[j]
                # 2 cases:
                # . 
                if c == '.':
                    for child in cur.children.values():
                        if dfs(child, j+1):
                            return True
                    return False
                else:
                    if c not in cur.children:
                        return False
                    cur = cur.children[c]
            return cur.end
                # not .

        return dfs(self.root, 0)
            