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
  foto: string; // Properti untuk gambar profil
  ig?: string; // Properti untuk URL Instagram
  tt?: string; // Properti untuk URL TikTok
}

const CardUser = ({
  nama,
  username,
  foto,
  ig,
  tt,
}: CardUserProps) => {
  return (
    <Card className="bg-white w-[152px] border-gray-200 ">
      <CardContent className="w-[150px] p-0">
        <Card className="w-[150px] h-[150px] object-cover">
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
      <CardFooter className="grid sm:grid-cols-2">
        <div className="flex justify-center">
          {/* Instagram link */}
          {ig && (
            <a href={ig} target="_blank" rel="noopener noreferrer">
              <Image src="/ig.ico" className="w-5 h-5" alt="Instagram" width={20} height={20} />
            </a>
          )}
        </div>
        <div className="flex justify-center">
          {/* TikTok link */}
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
