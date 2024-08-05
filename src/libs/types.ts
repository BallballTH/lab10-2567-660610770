// add type for UserCard's Props

// add type for UserCardDetail's Props


interface UserCardDetailProps {
    email : string;
    address: string;
  }
  export type { UserCardDetailProps };
  
  interface UserCardProps {
    name: string;
    email: string;
    imgUrl: string;
    address: string;
  }
  export type { UserCardProps };
  