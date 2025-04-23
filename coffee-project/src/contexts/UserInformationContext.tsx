import { createContext, ReactNode, useState } from "react";

interface UserInformationInterface {
  address: {
    road: string;
    addressNumber: number;
    city: string;
    addressUF: string;
    neighborhood: string;
  };

  paymentType: "credit" | "debit" | "ticket";
}

interface UserInformationContextInterface extends UserInformationInterface {
  handleNewUserInformations: (
    newInformations: UserInformationInterface
  ) => void;
}

export const UserInformationContext = createContext(
  {} as UserInformationContextInterface
);

export function UserInformationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userAddress, setUserAddress] = useState<UserInformationInterface>({
    address: {
      road: "",
      addressNumber: 0,
      city: "",
      addressUF: "",
      neighborhood: "",
    },
    paymentType: "credit",
  });

  function handleNewUserInformations(
    newInformations: UserInformationInterface
  ) {
    setUserAddress({ ...newInformations });
  }

  return (
    <UserInformationContext.Provider
      value={{ ...userAddress, handleNewUserInformations }}
    >
      {children}
    </UserInformationContext.Provider>
  );
}
