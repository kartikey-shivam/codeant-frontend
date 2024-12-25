import {
  SVGProps,
  ComponentType,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

// Update the Icon type to handle HeroIcons
type IconType = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
  } & RefAttributes<SVGSVGElement>
>;

export interface AuthProps {
  setIsAuthenticated: (value: boolean) => void;
}

export interface SidebarProps extends AuthProps {
  onClose: () => void;
}

export interface SidebarLinkProps {
  Icon: IconType;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

export interface NavLink {
  icon: IconType;
  text: string;
  active?: boolean;
}

export interface BottomLink extends NavLink {
  onClick?: () => void;
}

export interface SignInOption {
  icon: React.ReactNode;
  text: string;
  method: string;
}

export interface Repository {
  name: string;
  visibility: "Public" | "Private";
  language: string;
  size: string;
  updatedAt: string;
}

export interface RepositoryItemProps {
  repository: Repository;
}
