export type HandPicked = {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  gender: string;
  brand: string;
  category: string;
  subCategory: string;
  actualPrice: number;
  discount: number;
  createdAt: Date;
  updatedAt: Date;
  likes: [
    {
      id: string;
      userEmail: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  comments: [
    {
      commentId: string;
      userName: string;
      rating: number;
      comment: string;
      isReply: boolean;
      replyTo: string;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
};

export type defaultState = {
  handPicked: HandPicked[];
};
