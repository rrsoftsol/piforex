import commentAuthor from "@/public/images/comment_author.png";
import commentAuthor2 from "@/public/images/comment_author2.png";
import { v4 as uuidv4 } from "uuid";

export const commentList = [
  {
    id: uuidv4(),
    img: commentAuthor,
    name: "Marvin McKinney",
    comment:
      "Trading is not just about making money; it's about personal growth. It challenges you to become a better decision-maker, strategist, and disciplined individual.",
    date: "October 07",
  },
  {
    id: uuidv4(),
    img: commentAuthor2,
    name: "Robert Fox",
    date: "October 12",
    comment:
      "Trading is not just about making money; it's about personal growth. It challenges you to become a better decision-maker, strategist, and disciplined individual.",
  },
];
