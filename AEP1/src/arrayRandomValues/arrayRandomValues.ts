import { ErrorMessages } from './errorMessage.enum'



class arrayRandomValues{
    
    produtos: any = [
        { nome: 'Caneta', qtde: 10, preco: 7.99 },
        { nome: 'Impressora', qtde: 0, preco: 649.50 },
        { nome: 'Caderno', qtde: 4, preco: 27.10 },
        { nome: 'Lapis', qtde: 3, preco: 5.82 },
        { nome: 'Tesoura', qtde: 1, preco: 19.99 },
        { nome: 'Mochila', qtde: 6, preco: 150.99 },
        { nome: 'Teclado', qtde: 4, preco: 500.99 },
        { nome: 'Mouse', qtde: 3, preco: 78.99 },
        { nome: 'Tenis', qtde: 2, preco: 350.99 },
        { nome: 'Meias', qtde: 10, preco: 19.99 },
    ]

    quantity: number


    private RandomValuesFromArray(array: any, randomQuantity: any) {
        if(randomQuantity > array.length) return ErrorMessages.INVALID_NUMBER_RANGE
        let randomProducts:any = []
    
        while(randomProducts.length < randomQuantity) {
            let randomNumber: any = Math.floor(Math.random() * array.length)
            if(!randomProducts.includes(array[randomNumber])) {
                randomProducts.push(array[randomNumber])
            }
        }
        return randomProducts
    }

    private addProduto(prod:any){
        this.produtos.push(prod)
    }

    public setProd(prod){
        this.addProduto(prod)
    }

    public getRandomValues(){
        this.RandomValuesFromArray(this.produtos, this.quantity)
    }

    public setQuantity(quantity){
        this.quantity = quantity
    }

    

}



