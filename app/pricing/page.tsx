"use client";
import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function PricingPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="Coolify logo"
            height={40}
            radius="sm"
            src="https://coolify.io/favicon.ico"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Coolify</p>
            <p className="text-small text-default-500">coolify.io</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            An open-source & self-hostable Heroku / Netlify / Vercel
            alternative.
            <br />
            鋒兄 GitHub Sponsors $5(美元).
          </p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://coolify.io/">
            Visit Coolify.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
