class ShoppingCart{
    constructor (loggedIn) {
      this.cart = {}
      this.loggedIn = loggedIn
    }
  
    addToCart(item) {
      const name = item.name
      name in this.cart ? this.cart[item].quantity++ : this.cart[item].quantity = 1
    }
  
    removeFromCart(item) {
      const name = item.name
      if (name in this.cart) {
        if (this.cart[item].quantity > 1) {
          this.cart[item].quantity--
        } else {
          delete this.cart[item]
        }
      }
    }
  
    checkout() {
      const total = 0
      if (Object.keys(this.cart).length) {
        for (let item in this.cart) {
          total += (this.cart[item].price * this.cart[item].quantity)
        }
    
        if (!this.loggedIn) {
          return 'Do you want to log in or create account?'
        } else {
          return total
        }  
      } else {
        return 'You need to add items to checkout'
      }
    }
  }
  

  module.exports = {ShoppingCart}