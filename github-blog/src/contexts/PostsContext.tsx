import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../lib/axios";

interface User {
  id: number;
  bio: string;
  name: string;
  avatar_url: "";
  html_url: string;
  login: string;
  followers: number;
  company: string;
}

export interface PostInterface {
  html_url: string;
  number: number;
  title: string;
  created_at: string;
  comments: number;
  body: string;

  user: { login: string };
}

interface PostContextType {
  user: User;
  posts: PostInterface[];
  fetchPosts: (query?: string) => Promise<void>;
}

interface PostContextProviderProps {
  children: ReactNode;
}

export const PostContext = createContext({} as PostContextType);

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [user, setUser] = useState<User>({
    company: "",
    followers: 0,
    name: "",
    avatar_url: "",
    html_url: "",
    bio: "",
    id: 0,
    login: "",
  });
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const fetchUser = useCallback(async () => {
    const response = await api.get("/users/kaique790");
    const { id, name, html_url, bio, login, avatar_url, followers, company } =
      response.data;

    setUser({
      id,
      name,
      html_url,
      bio,
      login,
      avatar_url,
      followers,
      company,
    });
    return;
  }, [setUser]);

  const fetchPosts = useCallback(
    async (query?: string) => {
      const response = await api.get("/search/issues", {
        params: {
          q: query
            ? `${query} repo:kaique790/react-projects`
            : "repo:kaique790/react-projects",
        },
      });
      const posts = response.data.items;
      const newPosts = posts.map((post: PostInterface) => {
        const { number, title, body, html_url, created_at, comments } = post;
        const { login } = post.user;
        const newPost = {
          user: { login },
          number,
          title,
          body,
          html_url,
          created_at,
          comments,
          login,
        };
        return newPost;
      });
      setPosts(newPosts);
      return;
    },
    [setPosts]
  );

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, [fetchUser, fetchPosts]);

  return (
    <PostContext.Provider value={{ user, posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
}
