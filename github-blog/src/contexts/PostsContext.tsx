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

interface Post {
  url: string;
  id: number;
  title: string;
  created_at: string;
  comments: number;
  body: string;

  user: { login: string };
}

interface PostContextType {
  user: User;
  posts: Post[];
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
  const [posts, setPosts] = useState<Post[]>([]);

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
  }, [setUser]);

  const fetchPosts = useCallback(async () => {
    const response = await api.get("/repos/kaique790/react-projects/issues");
    const posts = response.data;
    posts.map((post: Post) => {
      const { id, title, body, url, created_at, comments } = post;
      const { login } = post.user;
      const newPost = {
        user: { login },
        id,
        title,
        body,
        url,
        created_at,
        comments,
        login,
      };
      setPosts((state) => [...state, newPost]);
    });
    return;
  }, []);

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, [fetchUser, fetchPosts]);

  return (
    <PostContext.Provider value={{ user, posts }}>
      {children}
    </PostContext.Provider>
  );
}
