import { ReactNode, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../../lib/axios";

interface Transaction {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
  id: number | string;
}

interface CreateTransactionInput {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}

interface TransactionsContextType {
  transactions: Transaction[];
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(data: CreateTransactionInput) {
    const { category, price, description, type } = data;

    const response = await api.post("/transactions", {
      category,
      price,
      description,
      type,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ createTransaction, transactions, fetchTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
