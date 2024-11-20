type CollectionType = {
  _id: string;
  title: string;
<<<<<<< HEAD
  products: number;
  image: string;
};
=======
  description: string;
  image: string;
  products: ProductType[];
}
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a

type ProductType = {
  _id: string;
  title: string;
  description: string;
<<<<<<< HEAD
  media: Array<string>;
  category: string;
  collections: Array<string>;
  tags: Array<string>;
  price: number;
  cost: number;
  sizes: Array<string>;
  colors: Array<string>;
  createdAt: string;
  updatedAt: string;
};

type UserType = {
  clerkId: string;
  wishlist: Array<string>;
  createdAt: string;
  updatedAt: string;
};

type OrderType = {
  shippingAddress: Record<string, any>;
  _id: string;
  customerClerkId: string;
  products: Array<OrderItemType>;
  shippingRate: string;
  totalAmount: number;
};

type OrderItemType = {
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
  _id: string;
};
=======
  media: [string];
  category: string;
  collections: [CollectionType];
  tags: [string];
  sizes: [string];
  colors: [string];
  price: number;
  expense: number;
  createdAt: Date;
  updatedAt: Date;
}

type OrderColumnType = {
  _id: string;
  customer: string;
  products: number;
  totalAmount: number;
  createdAt: string;
}

type OrderItemType = {
  product: ProductType
  color: string;
  size: string;
  quantity: number;
}

type CustomerType = {
  clerkId: string;
  name: string;
  email: string;
}
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
