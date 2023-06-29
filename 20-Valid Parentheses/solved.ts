function isValid(s: string): boolean {
    if(s.length % 2 != 0) {
        return false;
    }
    let pilha:string[] = []
    let hashMap = {
        "(":")",
        "[": "]",
        "{": "}"
    };
    for(let carac of s) {
        if(hashMap[carac]) {
            //carac vai para a base da pilha se abrir a combinação;
            pilha.push(hashMap[carac])
        }
        else if (pilha.length > 0 && pilha[pilha.length - 1] === carac) {
            //se a pilha não estiver vazia e o final dela ser um caractere de fechar a combinação;
            //então retira o ultimo elemento da pilha.
            pilha.pop()
        }
        else {
            return false;
        }
    }
    return pilha.length > 0 ? false : true;
    
};
