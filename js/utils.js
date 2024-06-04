export function saveToLocalStorage(cart) {
    //* localStorage a veri ekleme
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  export function getCartFromLocalStorage() {
    //* localStorage da cart adında bir key varsa onları json formatında getir.
    //* Yoksa da boş bir dizi dönder.
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  //* Sepetteki ürün miktarını hesaplar
  export function updateCartIcon(cart) {
    
    const cartIcon = document.getElementById("cart-icon");
    const i = document.querySelector(".bx-shopping-bag");
    //**reduce bizden 2 değer alır v sıfırda başlatacağız */
    //**toplam miktarı hesaplauacağız */
    //**burada ki sıfır sum değerine miktarı aktaracak ve her bir item'ın miktarını yani quantity al tabi bunları bir değişkende yap*/
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
   
    //*data özelliklerine ekleme olacaksa setAttribute ile yapıyoruz */
    //** buraya toplam miktarı yani totalQuantity veriyorz */
    i.setAttribute("data-quantity", totalQuantity);
    cartIcon.setAttribute("data-quantity", totalQuantity);
  }
  
  export function calculateCartTotal(cart) {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }