type CollectionType = {
  _id: string;
  title: string;
  products: number;
  image: string;
};

type ProductType = {
  _id: string;
  title: string;
  description: string;
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
