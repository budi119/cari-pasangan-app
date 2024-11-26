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
  deskSingkat?: string;
  foto: string;
  ig?: string;
  tt?: string;
  line?: string;
}

const CardUser = ({
  nama,
  username,
  deskSingkat,
  foto,
  ig,
  tt,
  line,
}: CardUserProps) => {
  return (
    <Card className="bg-white border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105">
      <CardContent className="w-full p-0">
        <div className="w-full h-[150px] sm:h-[180px] md:h-[200px]">
          <Image
            src={foto}
            width={200}
            height={200}
            alt={`${nama || "User"}'s profile`}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>{nama}</CardTitle>
        <CardDescription>
          <p>{username}</p>
          <p className="mt-1">{deskSingkat}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="grid sm:grid-cols-2 gap-2">
        <div className="flex justify-start">
          {ig && (
            <a href={ig} target="_blank" rel="noopener noreferrer" className="group">
              <Image
                src="/ig.ico"
                className="w-5 h-5 mr-3 transition-transform duration-300 ease-in-out hover:scale-110"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>

          )}
          {tt && (
            <a href={tt} target="_blank" rel="noopener noreferrer">
              <Image
                src="/tt.ico"
                className="w-5 h-5 mr-3 transition-transform duration-300 ease-in-out hover:scale-110" // Menambahkan kelas hover untuk efek zoom
                alt="TikTok"
                width={20}
                height={20}
              />
            </a>
          )}
          {line && (
            <a href={line} target="_blank" rel="noopener noreferrer">
              <Image
                src="/line.ico"
                className="w-5 h-5 transition-transform duration-300 ease-in-out hover:scale-110" // Menambahkan kelas hover untuk efek zoom
                alt="TikTok"
                width={20}
                height={20}
              />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardUser;
