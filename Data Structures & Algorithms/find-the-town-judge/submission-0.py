class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        # Array to track net trust scores for each person (1-indexed)
        trust_scores = [0] * (n + 1)
        
        # Process each trust relationship
        for person_a, person_b in trust:
            trust_scores[person_a] -= 1  # Outgoing trust reduces the score
            trust_scores[person_b] += 1  # Incoming trust increases the score
            
        # The judge must have exactly n - 1 net trust score
        for person in range(1, n + 1):
            if trust_scores[person] == n - 1:
                return person
                
        return -1
