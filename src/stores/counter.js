import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const cafe_menu = ref([
    { name: 'บิสกิตเนย ', img: 'https://files.vogue.co.th/uploads/Vogue_Cafe_E-Menu_2160_x_16205.jpg', price: 120 },
    { name: ' ครัวซองต์แฮมโฮมเมด ', img: 'https://files.vogue.co.th/uploads/Vogue_Cafe_E-Menu_2160_x_16204.jpg', price: 95 },
    { name: ' แซนวิชกริลชีส ', img: 'https://files.vogue.co.th/uploads/Vogue_Cafe_E-Menu_2160_x_162016.jpg', price: 110 },
    { name: 'ข้าวยำบีบิมบับ ', img: 'https://files.vogue.co.th/uploads/Vogue_Cafe_E-Menu_2160_x_162014.jpg', price: 123 },
    { name: ' สลัดคินัวกับผักสด ', img: 'https://files.vogue.co.th/uploads/Vogue_Cafe_E-Menu_2160_x_162011.jpg', price: 145 },
    { name: ' โรลไส้กรอกอิตาเลียน ', img: 'https://files.vogue.co.th/uploads/2564_09_03_VOGUE_Cafe_74356.jpg', price: 134 },
    { name: ' คุกกี้ ', img: 'https://files.vogue.co.th/uploads/2564_09_03_VOGUE_Cafe_74391.jpg', price: 56 },
    { name: ' เซ็ตชา ', img: 'https://files.vogue.co.th/uploads/Vogue_Cafe_E-Menu_2160_x_162023.jpg', price: 121 },
    { name: 'Sparkling Wine Jelly with Mixed Berries ', img: 'https://files.vogue.co.th/uploads/Sparkling_Wine_Jelly_with_Mixed_Berries_01.jpg', price: 110 },
    { name: 'Choux Cream Set  ', img: 'https://files.vogue.co.th/uploads/CHOUX_Cream_Set.jpg', price: 130 },
    { name: 'Salmon Confit with Herbal Cream', img: 'https://files.vogue.co.th/uploads/Salmon_Confit_with_Herbal_Cream_Sauce_01.jpg', price: 145 },
    { name: 'Tahitian Vanilla Choux Cream', img: 'https://files.vogue.co.th/uploads/Tahitian_Vanilla_Choux_Cream.jpg', price: 135 },
  ])
    
  
  
  return { cafe_menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
