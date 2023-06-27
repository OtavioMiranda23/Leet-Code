function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length!) {
        return false
    }
    
    let arrS = s.split("").sort()
    let arrT = t.split("").sort()

    for(let i = 0; i < s.length; i++) {
       if(arrS[i] != arrT[i]) {
        return false
       }
    }
    return true
};