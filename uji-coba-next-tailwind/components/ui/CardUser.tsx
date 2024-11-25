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
  foto: string;
  ig?: string;
  tt?: string;
}

const CardUser = ({
  nama,
  username,
  foto,
  ig,
  tt,
}: CardUserProps) => {
  return (
    <Card className="bg-white border-gray-200">
      <CardContent className="w-full p-0">
        <div className="w-full h-[150px] sm:h-[180px] md:h-[200px]">
          <Image
            src={foto}
            width={200}
            height={200}
            alt={`${nama || "User"}'s profile`}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{nama}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardFooter className="grid sm:grid-cols-2 gap-2">
        <div className="flex justify-center">
          {ig && (
            <a href={ig} target="_blank" rel="noopener noreferrer">
              <Image src="/ig.ico" className="w-5 h-5" alt="Instagram" width={20} height={20} />
            </a>
          )}
        </div>
        <div className="flex justify-center">
          {tt && (
            <a href={tt} target="_blank" rel="noopener noreferrer">
              <Image src="/tt.ico" className="w-5 h-5" alt="TikTok" width={20} height={20} />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardUser;
