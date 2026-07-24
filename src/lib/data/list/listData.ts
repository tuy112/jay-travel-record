import { DayShoppingList } from '@/lib/types/list';

export const listData: DayShoppingList[] = [
      {
            date: '2026-07-25',
            items: [
                  { id: '1', name: '장사의신 오뎅탕', quantity: '1봉지', checked: true, memo: '인터넷쇼핑' },
                  { id: '2', name: '간식', quantity: '1봉지', checked: false, memo: '단양하나로마트' },
                  { id: '3', name: '간식', quantity: '1봉지', checked: false, memo: '단양하나로마트' },
                  { id: '4', name: '간식', quantity: '1봉지', checked: false, memo: '단양하나로마트' },
                  { id: '5', name: '간식', quantity: '1봉지', checked: false, memo: '단양하나로마트' },
                  { id: '6', name: '간식', quantity: '1봉지', checked: false, memo: '단양하나로마트' },
                  { id: '7', name: '간식', quantity: '1봉지', checked: false, memo: '단양하나로마트' },
            ],
            settlements: [
                  { id: 's1', name: '장사의신 오뎅탕', quantity: '1봉지', price: 15450, location: '인터넷주문', memo: '' },
                  { id: 's2', name: '캠핑장 사이트비', quantity: '4인', price: 0, location: '단양캠핑장', memo: '' },
                  { id: 's3', name: '캠핑장 백숙', quantity: '1', price: 0, location: '단양캠핑장', memo: '' },
                  { id: 's4', name: '', quantity: '', price: 0, location: '단양하나로마트', memo: '' },
                  { id: 's5', name: '', quantity: '', price: 0, location: '단양하나로마트', memo: '' },
                  { id: 's6', name: '', quantity: '', price: 0, location: '단양하나로마트', memo: '' },
                  { id: 's7', name: '', quantity: '', price: 0, location: '단양하나로마트', memo: '' },
                  { id: 's8', name: '', quantity: '', price: 0, location: '단양하나로마트', memo: '' },
                  { id: 's9', name: '', quantity: '', price: 0, location: '단양하나로마트', memo: '' },
                  { id: 's10', name: '', quantity: '', price: 0, location: '단양하나로마트', memo: '' },
            ]
      },
];