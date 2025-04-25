import { createContext } from "react";

interface PostContextType {
  getPosts: () => Promise<void>;
}

export const PostContext = createContext({} as PostContextType);
