import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import Skills from "./Skills";

export default function AboutTabs() {
  return (
    <Tabs defaultValue="about" className="w-[350px] lg:w-[600px] ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Card>
          <CardHeader>
            <CardTitle className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {" "}
              A Little About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 ">
              Call me Tobi, I am a web developer currently based in Cameroon. I
              am passionate about building for the web and providing solutions
              to users by building accessible products.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              I am a self thaught developer even though I did study computer
              science at Xihua university in china for 3 years before returning
              home due to covid. So since 2023 i hsve been learning and
              pepertually getting better at my craft while running my own local{" "}
              <Link className="text-primary-100" href={"#"}>
                web agency
              </Link>
              , helping bussinesses grow and archive.
            </p>
          </CardContent>
          <CardFooter>
            <Button size={"lg"}>
              Download My Cv <DownloadIcon className="ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent className="">
            <Skills />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
