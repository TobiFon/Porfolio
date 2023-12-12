import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
            <CardTitle className="text-2xl"> A Little About Me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base lg:text-lg">
            <p className="">
              Call me Tobi, I am a web developer currently based in Cameroon. I
              am passionate about building for the web and providing solutions
              to users by building accessible products.
            </p>
            <p className="">
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
            <Button className="lg:px-8 lg:py-6 lg:text-base rounded-md">
              Download my CV
              <DownloadIcon className="ml-3" />
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Skills />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
