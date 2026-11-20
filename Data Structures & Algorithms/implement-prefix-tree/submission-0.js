class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

        for(const c of word){
            if (!curr.children.has(c)){
                curr.children.set(c, new TrieNode());
            };
            curr = curr.children.get(c);
            
        }
                curr.endOfWord = true;

    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root 
        for(const c of word){
            if(curr.children.has(c)){
                curr = curr.children.get(c)
                continue;
            }
            return false;
        }
        return curr.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
     startsWith(prefix) {
        let cur = this.root;
        for (let c of prefix) {
            if (!cur.children.has(c)) {
                return false;
            }
            cur = cur.children.get(c);
        }
        return true;
    }
}
