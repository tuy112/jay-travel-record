export type ShoppingItem = {
      id: string;
      name: string;
      quantity: string;
      checked: boolean;
      memo?: string;
};

export type SettlementItem = {
      id: string;
      name: string;
      quantity: string;
      price: number;
      location: string;
      memo?: string;
}

export type DayShoppingList = {
      date: string;
      items: ShoppingItem[];
      settlements: SettlementItem[];
};