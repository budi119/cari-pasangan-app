import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";
  import React from "react";
  
  interface CardUserProps {
    nama?: string;
    username?: string;
    foto: string; // Tambahkan properti untuk sumber gambar
  }
  
  const CardUser = ({ nama, username, foto }: CardUserProps) => {
    return (
      <Card className="bg-[#FFF4EA] w-[200px]">
        <CardContent className="w-[200px] p-0">
          <Card className="w-[200px] h-[200px] object-cover">
            <Image
              src={foto}
              width={200}
              height={200}
              alt={`${nama || "User"}'s profile`}
              className="rounded-lg"
            />
          </Card>
        </CardContent>
        <CardHeader>
          <CardTitle>{nama}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardFooter>
          <p>sosmed</p>
        </CardFooter>
      </Card>
    );
  };
  
  export default CardUser;
  